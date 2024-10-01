import { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import config from '@plone/volto/registry';
import { getFarmacia } from 'io-sanita-theme/actions';
import { Pagination, SortByWidget } from 'io-sanita-theme/components';
import { Container, Col, Row, Spinner } from 'design-react-kit';
import Results from './Results';
import SearchFilters from './SearchFilters';

/* Style */
import './search-farmacia.scss';

const messages = defineMessages({
  results: {
    id: 'search_farmacia_results',
    defaultMessage: 'Risultati',
  },
  no_results: {
    id: 'search_farmacia_no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
  nome: {
    id: 'search_farmacia_sort_nome',
    defaultMessage: 'Denominazione Farmacia',
  },
  comune: {
    id: 'search_farmacia_sort_comune',
    defaultMessage: 'Comune',
  },
  localita: {
    id: 'search_farmacia_sort_localita',
    defaultMessage: 'Località',
  },
});

const Body = ({ isEditMode, data, id }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const resultsRef = createRef();
  const searchType = data?.search_type; // type of search, Ferie o Turni ('shifts' or 'vacations')
  const b_size = 10; // number of page results to show
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    searchableText: null,
    date: new Date().toISOString(),
    area_territoriale: null,
    comune: null,
    order: { sort_on: 'title', sort_order: 'ascending' },
  });
  const [filtersOptions, setFiltersOptions] = useState({
    aree_territoriali: [],
    comuni: [],
    localita: [],
  });

  const [results, setResults] = useState([]);
  const [resultsPage, setResultsPage] = useState([]);

  // TODO: spostare sul backend
  const listAreeTerritoriali =
    config.settings.siteProperties.listAreeTerritoriali;

  const loading = useSelector((state) => {
    return state.farmacia?.loading || false;
  });
  const searchFarmacia = useSelector((state) => {
    return state.farmacia?.result;
  });

  // XXX: nell'implementazione attuale vengono caricate tutte le farmacie e filtrate sul client
  useEffect(() => {
    dispatch(getFarmacia());
  }, [dispatch]);

  // initialize results & filters options
  useEffect(() => {
    if (searchFarmacia?.items) {
      setFiltersOptions({
        comuni: [
          ...new Set(searchFarmacia.items.map((item) => item.comune).sort()),
        ].map((item) => {
          return { value: item, label: item };
        }),
        localita: [
          ...new Set(
            searchFarmacia.items
              .filter(
                (item) => !filters.comune || item.comune === filters.comune,
              )
              .map((item) => item.localita)
              .sort(),
          ),
        ].map((item) => {
          return { value: item, label: item };
        }),
        aree_territoriali: listAreeTerritoriali,
      });
    }
  }, [filters.comune, listAreeTerritoriali, searchFarmacia]);

  useEffect(() => {
    setResults(searchFarmacia.items ?? []);
    setCurrentPage(1);
  }, [searchFarmacia]);

  const doFilter = (filters, items, searchType) => {
    let newResults = items ?? [];

    // Filtro testo libero
    if (filters.searchableText?.length > 0) {
      newResults = newResults.filter((item) =>
        item.title.toLowerCase().includes(filters.searchableText.toLowerCase()),
      );
    }

    // Turni - filtro Data
    if (searchType === 'shifts' && filters.date && items?.length > 0) {
      const inputDate = new Date(filters.date).getTime();

      newResults = newResults.filter((item) => {
        const checkTurno = item?.turni?.map((turno) => {
          const dalSplit = turno?.dal.split('/');
          const alSplit = turno?.al.split('/');
          const turnoDal = new Date(
            +dalSplit[2],
            dalSplit[1] - 1,
            +dalSplit[0],
          ).getTime();
          const turnoAl = new Date(
            +alSplit[2],
            alSplit[1] - 1,
            +alSplit[0],
          ).getTime();

          return turnoDal <= inputDate && turnoAl >= inputDate ? true : false;
        });
        return checkTurno && checkTurno.includes(true);
      });
    }

    // Turni - filtro Area Territoriale
    if (filters.area_territoriale && filters.area_territoriale !== null) {
      newResults = newResults.filter(
        (item) => item.area_territoriale === filters.area_territoriale.value,
      );
    }

    // Ferie - filtro Comune
    if (filters.comune && filters.comune !== null) {
      newResults = newResults.filter(
        (item) =>
          item.comune &&
          item.comune.toLowerCase() === filters.comune.toLowerCase(),
      );
    }

    // Ferie - filtro Località
    if (filters.localita && filters.localita !== null) {
      newResults = newResults.filter(
        (item) =>
          item.localita.toLowerCase() === filters.localita.toLowerCase(),
      );
    }

    // sorting
    const asc = filters.order.sort_order === 'ascending' ? 1 : -1;
    newResults = newResults.sort((a, b) =>
      a[filters.order.sort_on] >= b[filters.order.sort_on] ? asc : -asc,
    );

    // set results
    setResults([...newResults]);
    // setResults(newResults);
    setCurrentPage(1);
  };

  const doSearch = () => {
    doFilter(filters, searchFarmacia.items, searchType);
  };
  useEffect(() => {
    searchFarmacia.items && doFilter(filters, searchFarmacia.items, searchType);
  }, [filters, searchFarmacia.items, searchType]);

  // useDebouncedEffect(
  //   () => {
  //     searchFarmacia.items &&
  //       doFilter(filters, searchFarmacia.items, searchType);
  //   },
  //   400,
  //   [filters, searchFarmacia.items],
  // );

  const handleQueryPaginationChange = (
    e,
    { activePage },
    activeScroll = true,
  ) => {
    if (resultsRef.current && activeScroll) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage(activePage || 1);
  };

  // trigger for current page and results
  useEffect(() => {
    if (currentPage < 1) {
      setResultsPage(results.slice(0, b_size));
    } else if (results?.length === 0) {
      setResultsPage([]);
    } else {
      const start = currentPage > 1 ? b_size * (currentPage - 1) : 0;
      const end = b_size * currentPage;
      setResultsPage(results.slice(start, end));
    }
  }, [currentPage, results]);

  return (
    <div className="iosanita-block-search farmacia">
      <div className="full-width bg-primary-lightest">
        {!loading ? (
          <Container className="py-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                doSearch();
              }}
            >
              {data?.title && <h2 className="h5">{data.title}</h2>}
              <Row className="search-wrapper-row">
                <Col lg={12}>
                  {/* Search filters */}
                  <SearchFilters
                    block_id={id}
                    setFilters={setFilters}
                    searchType={searchType}
                    filters={filters}
                    options={filtersOptions}
                    // isEditMode={isEditMode}
                    // doSearch={doSearch}
                    // checkClearComune={checkClearComune}
                  />
                </Col>

                {/* Total number of results */}
                <Col xs={3} lg={6} className="align-self-center">
                  {results && results?.length > 0 && (
                    <div className="total-result small" aria-live="polite">
                      <span className="fw-bold">{results.length}</span>{' '}
                      {intl.formatMessage(messages.results)}
                    </div>
                  )}
                </Col>

                {/* Sort by */}
                <Col xs={9} lg={6} className="d-flex justify-content-end">
                  <SortByWidget
                    order={filters.order}
                    action={(sortby) => {
                      setFilters({ ...filters, order: sortby });
                    }}
                    options={[
                      {
                        sort_on: 'title',
                        sort_order: 'ascending',
                        title: intl.formatMessage(messages.nome),
                      },
                      {
                        sort_on: 'comune',
                        sort_order: 'ascending',
                        title: intl.formatMessage(messages.comune),
                      },
                      {
                        sort_on: 'localita',
                        sort_order: 'ascending',
                        title: intl.formatMessage(messages.localita),
                      },
                    ]}
                  />
                </Col>
              </Row>
            </form>

            <Results
              items={resultsPage}
              isEditMode={isEditMode}
              searchType={searchType}
              resRef={resultsRef}
            />
            {results && results.length > b_size && (
              <Pagination
                activePage={currentPage}
                totalPages={Math.ceil(results.length / b_size)}
                onPageChange={handleQueryPaginationChange}
              />
            )}
          </Container>
        ) : (
          <Container className="d-flex justify-content-center mt-3">
            <Spinner active />
          </Container>
        )}
      </div>
    </div>
  );
};

export default Body;
