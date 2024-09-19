import cx from 'classnames';
import { debounce, set } from 'lodash';
import React, { createRef, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Spinner } from 'design-react-kit/dist/design-react-kit';
// import { Pagination } from '@italia/components/ItaliaTheme';
import { getFarmacia } from 'io-sanita-theme/actions';

// import SearchBar from './SearchBar';
import {
  Pagination,
  // SearchBar,
  SearchCheckbox,
  SearchResultItem,
  SortByWidget,
  SelectInput,
} from 'io-sanita-theme/components';
// import SearchSorting from './SearchSorting';
import config from '@plone/volto/registry';
import {
  Col,
  Container,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  Row,
  Spinner,
  Button,
  Select,
} from 'design-react-kit';
import { useDebouncedEffect } from 'io-sanita-theme/helpers';
import { title } from 'process';
import { defineMessages, useIntl } from 'react-intl';
import Results from './Results';
import { Link } from 'react-router-dom';
import SearchFilters from './SearchFilters';

const messages = defineMessages({
  results: {
    id: 'search_results',
    defaultMessage: 'Risultati',
  },
  no_results: {
    id: 'search_no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
});

const Body = ({ isEditMode, data }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const resultsRef = createRef();
  const searchType = data?.search_type; // type of search, Ferie o Turni ('shifts' or 'vacations')
  const b_size = 10; // number of page results to show
  const [currentPage, setCurrentPage] = useState(0);

  // const [sorting, setSorting] = useState();
  // const [filters, setFilters] = useState({});
  const [filters, setFilters] = useState({
    searchableText: null,
    date: new Date().toISOString(),
    area_territoriale: null,
    comune: null,
    // lista_localita: [],
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

    // set sorting
    const asc = filters.order.sort_order === 'ascending' ? 1 : -1;
    newResults = newResults.sort((a, b) =>
      a[filters.order.sort_on] >= b[filters.order.sort_on] ? asc : -asc,
    );
    // set results
    setResults([...newResults]);
    // setResults(newResults);
    setCurrentPage(1);
  };

  // const doDebouncedFilter = useCallback(
  //   () => debounce(doFilter, 400),
  //   [doFilter],
  // );

  // check if select Comune is empty or not
  // const checkClearComune = (inputComune) => {
  //   if (searchFarmacia.items?.length > 0) {
  //     let resultsByComune = searchFarmacia.items;
  //     let options = { comuni: [], lista_localita: [] };
  //     let localitaOptions = [];

  //     if (inputComune === null) {
  //       localitaOptions = [
  //         ...new Set(searchFarmacia.items.map((item) => item.localita).sort()),
  //       ];
  //       createSelectOptions(localitaOptions, options.lista_localita);
  //       setFiltersOptions({
  //         ...filtersOptions,
  //         lista_localita: options.lista_localita,
  //       });
  //     } else {
  //       resultsByComune = resultsByComune.filter(
  //         (item) =>
  //           item.comune.toLowerCase() === inputComune.value.toLowerCase(),
  //       );
  //       localitaOptions = [
  //         ...new Set(resultsByComune.map((item) => item.localita).sort()),
  //       ];
  //       createSelectOptions(localitaOptions, options.lista_localita);
  //       setFiltersOptions({
  //         ...filtersOptions,
  //         lista_localita: options.lista_localita,
  //       });
  //     }
  //   }
  // };

  // function to create object select options
  // function createSelectOptions(arrayOptions, selectOptions) {
  //   // eslint-disable-next-line no-unused-expressions
  //   arrayOptions?.forEach((option) => {
  //     selectOptions.push({
  //       value: option.toLowerCase(),
  //       label: option,
  //     });
  //   });
  // }

  // trigger for filters
  // useEffect(() => {
  //   console.log('filters', filters);
  //   console.log('searchFarmacia', searchFarmacia);
  //   if (searchFarmacia?.items) {
  //     doDebouncedFilter(filters, searchFarmacia.items, searchType);
  //   }
  // }, [filters]);
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
    <div
      className={cx('', {
        'public-ui': isEditMode,
      })}
    >
      {!loading ? (
        <>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              doSearch();
            }}
          >
            <Row className="search-wrapper-row">
              <Col lg={12}>
                <Row lg={8}>
                  <SearchFilters
                    isEditMode={isEditMode}
                    setFilters={setFilters}
                    searchType={searchType}
                    filters={filters}
                    options={filtersOptions}
                    doSearch={doSearch}
                    // checkClearComune={checkClearComune}
                  />
                </Row>

                <Row lg={4}>
                  <Col xs={3} lg={6} className="align-self-center">
                    {results?.length && (
                      <div className="total-result small" aria-live="polite">
                        <span className="fw-bold">{results?.length}</span>{' '}
                        {intl.formatMessage(messages.results)}
                      </div>
                    )}
                  </Col>
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
                          title: 'Denominazione',
                        },
                        {
                          sort_on: 'comune',
                          sort_order: 'ascending',
                          title: 'Comune',
                        },
                        {
                          sort_on: 'localita',
                          sort_order: 'ascending',
                          title: 'Località',
                        },
                      ]}
                    />
                  </Col>
                </Row>
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
        </>
      ) : (
        <div className="d-flex justify-content-center mt-3">
          <Spinner active />
        </div>
      )}
    </div>
  );
};

export default Body;
