/* RICERCA SERVIZI, PRESTAZIONI E PROCEDURE */
import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner, Button } from 'design-react-kit';
import { getVocabulary } from '@plone/volto/actions';
import { getQueryStringResults } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  SearchBar,
  SearchCheckbox,
  SearchResultItem,
  Pagination,
  SortByWidget,
} from 'io-sanita-theme/components';

const messages = defineMessages({
  results: {
    id: 'search_sp_results',
    defaultMessage: 'Risultati',
  },
  no_results: {
    id: 'search_sp_no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
  label_utenti: {
    id: 'search_sp_label_utenti',
    defaultMessage: 'utenti',
  },
  searchable_text_default_label_servizi: {
    id: 'search_sp_searchable_text_default_label_servizi',
    defaultMessage: 'Cerca un servizio o una prestazione',
  },
  searchable_text_default_label_procedura: {
    id: 'search_sp_searchable_text_default_label_procedura',
    defaultMessage: 'Cerca una procedura',
  },
  searchable_description_servizi: {
    id: 'search_sp_searchable_description_servizi',
    defaultMessage:
      '*Inserisci parole chiave, ad esempio “Risonanza magnetica”',
  },
  searchable_description_procedura: {
    id: 'search_sp_searchable_description_procedura',
    defaultMessage:
      '*Inserisci parole chiave, ad esempio “Richiedere esenzioni”',
  },
  btn_filters_label: {
    id: 'search_sp_btn_filters_label',
    defaultMessage: 'Filtri',
  },
  show_filters: {
    id: 'search_sp_show_filters',
    defaultMessage: 'Seleziona filtri',
  },
});

const Body = ({ data, id, path, properties, block }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const subsite = useSelector((state) => state.subsite?.data);

  const block_id = id + 'search_servizi_procedura_block';
  const results_region_id = block_id + 'results-region';

  // SUBREQUEST
  const querystringResults = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id] ?? {};
  });
  const resultItems = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id]?.items ?? [];
  });
  const totalItems = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[block_id]?.total ?? 0;
  });

  // PAGINATION
  const resultsRef = createRef();
  const b_size = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // VOCABULARIES
  const vocUsers = 'collective.taxonomy.a_chi_si_rivolge_tassonomia';
  const vocTopics = 'collective.taxonomy.parliamo_di';

  const taxonomyUsers = useSelector(
    (state) => state?.vocabularies?.[vocUsers]?.items ?? [],
  );
  const taxonomyTopics = useSelector(
    (state) => state?.vocabularies?.[vocTopics]?.items ?? [],
  );

  // FILTERS
  const [filters, setFilters] = useState({
    searchableText: '',
    topics: [],
    users: [],
    order: { sort_on: 'relevance', sort_order: 'ascending' },
  });

  // mostra/nascondi filtri su mobile
  const [activeMobileFilters, setActiveMobileFilters] = useState(false);

  // QUERY di ricerca
  const doSearch = (page = currentPage) => {
    let query = [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: [data.portal_type],
      },
    ];

    // user filters
    if (filters.searchableText?.length > 0) {
      query.push({
        i: 'SearchableText',
        o: 'plone.app.querystring.operation.string.contains',
        v: filters.searchableText + '*',
      });
    }

    if (filters.topics?.length > 0) {
      query.push({
        i: 'parliamo_di',
        o: 'plone.app.querystring.operation.selection.is',
        v: filters.topics, // qui vuole un array di token ["donna", "uomini"]
      });
    }

    if (filters.users?.length > 0) {
      query.push({
        i: 'a_chi_si_rivolge_tassonomia',
        o: 'plone.app.querystring.operation.selection.is',
        v: filters.users, // qui vuole un array di token ["donna", "uomini"]
      });
    }

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '',
        {
          metadata_fields: '_all',
          query: query,
          b_size: b_size,
          sort_on: filters.order.sort_on,
          sort_order: filters.order.sort_order,
        },
        block_id,
        page,
      ),
    );
  };

  // Chiamate alle tassonomie utenti e argomenti
  useEffect(() => {
    if (taxonomyTopics?.length === 0) {
      dispatch(
        getVocabulary({
          vocabNameOrURL: vocTopics,
        }),
      );
    }

    if (taxonomyUsers?.length === 0) {
      dispatch(
        getVocabulary({
          vocabNameOrURL: vocUsers,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Initialize currentPage and doSearch
    handleQueryPaginationChange(null, { activePage: { children: 1 } }, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, data.path, data.portal_type]);

  const handleQueryPaginationChange = (
    e,
    { activePage },
    activeScroll = true,
  ) => {
    if (resultsRef.current && activeScroll) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const current = (activePage && activePage?.children) ?? 1;
    setCurrentPage(current);
    doSearch(current);
  };

  // Colonna filtri
  const filtersColumn = (cls) => {
    return (
      <Col lg={4} className={`search-wrapper-filters mb-md-4 ${cls}`}>
        {/* TASSONOMIA UTENTI */}
        {taxonomyUsers?.length > 0 && (
          <div className="column-filters mt-2">
            <SearchCheckbox
              options={taxonomyUsers}
              setFilters={setFilters}
              filters={filters}
              filterKey="users"
              sectionTitle={intl.formatMessage(messages.label_utenti)}
              collapsable={true}
            />
          </div>
        )}

        {/* TASSONOMIA ARGOMENTI */}
        {taxonomyTopics?.length > 0 && (
          <div className="column-filters mt-5">
            <SearchCheckbox
              options={taxonomyTopics}
              setFilters={setFilters}
              filters={filters}
              filterKey="topics"
              collapsable={true}
            />
          </div>
        )}
      </Col>
    );
  };

  return (
    <div className="iosanita-block-search servizi-procedure">
      <div className="full-width bg-primary-lightest py-4">
        <Container className="px-4">
          {/* TITOLO DEL BLOCCO */}
          {data.title && (
            <h2 className="search-section-title mb-4">{data.title}</h2>
          )}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              doSearch(1);
            }}
          >
            <Row className="search-wrapper-row">
              {/* COLONNA SINISTRA - FILTRI SU DESKTOP */}
              {filtersColumn('d-none d-lg-block')}

              {/* COLONNA DESTRA */}
              <Col lg={8}>
                {/* SEARCH BAR */}
                <SearchBar
                  id={block_id}
                  className="w-100"
                  title={data.title}
                  defaultTitle={
                    data.portal_type === 'Servizio'
                      ? intl.formatMessage(
                          messages.searchable_text_default_label_servizi,
                        )
                      : intl.formatMessage(
                          messages.searchable_text_default_label_procedura,
                        )
                  }
                  textDescription={
                    data.portal_type === 'Servizio'
                      ? intl.formatMessage(
                          messages.searchable_description_servizi,
                        )
                      : intl.formatMessage(
                          messages.searchable_description_procedura,
                        )
                  }
                  value={filters.searchableText}
                  onChange={(v) => {
                    setFilters({ ...filters, searchableText: v });
                  }}
                  controls={results_region_id}
                />

                <Row className="my-4">
                  {/* NUMBER OF ITEMS */}
                  <Col xs={3} lg={6} className="align-self-center">
                    <div className="total-result small" aria-live="polite">
                      {totalItems && (
                        <span className="fw-bold">{totalItems}</span>
                      )}{' '}
                      {intl.formatMessage(messages.results)}
                    </div>
                  </Col>

                  <Col xs={9} lg={6} className="d-flex justify-content-end">
                    {/* BUTTON FILTERS MOBILE DISPLAY */}
                    <Button
                      color="primary"
                      outline={activeMobileFilters ? false : true}
                      size="sm"
                      className="d-lg-none mb-2 me-3"
                      onClick={() => {
                        setActiveMobileFilters(!activeMobileFilters);
                      }}
                      aria-label={intl.formatMessage(messages.show_filters)}
                    >
                      {intl.formatMessage(messages.btn_filters_label)}
                    </Button>

                    {/* ORDER BY */}
                    <SortByWidget
                      order={filters.order}
                      action={(sortby) => {
                        setFilters({ ...filters, order: sortby });
                      }}
                    />
                  </Col>

                  {/* FILTRI SU MOBILE */}
                  {activeMobileFilters && filtersColumn('d-lg-none')}

                  <Col lg={12} className="mt-3">
                    {/* RESULTS */}
                    <div id={results_region_id} aria-live="polite">
                      {querystringResults && (
                        <>
                          {resultItems?.length > 0 ? (
                            <div
                              className="results-items"
                              ref={resultsRef}
                              aria-live="polite"
                            >
                              <Row>
                                {resultItems.map((item, i) => (
                                  <Col
                                    xs={12}
                                    sm={6}
                                    key={block_id + i}
                                    className="mb-lg-3"
                                  >
                                    <SearchResultItem item={item} />
                                  </Col>
                                ))}
                              </Row>

                              {/* PAGINATION */}
                              {querystringResults.total > b_size && (
                                <Pagination
                                  activePage={currentPage}
                                  totalPages={Math.ceil(
                                    querystringResults.total / b_size,
                                  )}
                                  onPageChange={handleQueryPaginationChange}
                                />
                              )}
                            </div>
                          ) : querystringResults?.loading ? (
                            <div className="d-flex justify-content-center">
                              <Spinner active />
                            </div>
                          ) : querystringResults?.loaded ? (
                            <>{intl.formatMessage(messages.no_results)}</>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  block: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Body;
