import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import qs from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { useLocation, useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import {
  Container,
  Row,
  Col,
  Skiplink,
  SkiplinkItem,
  Collapse,
  Button,
  Spinner,
  Alert,
} from 'design-react-kit';

import Helmet from '@plone/volto/helpers/Helmet/Helmet';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { resetSubsite } from 'volto-subsites';
import { getSearchFilters, getSearchResults } from 'io-sanita-theme/actions';
import {
  SearchBar,
  SortByWidget,
  SearchCheckbox,
  SearchSections,
  Icon,
  Pagination,
} from 'io-sanita-theme/components';
import { SearchUtils, useDebouncedEffect } from 'io-sanita-theme/helpers';
import SearchResultItem from 'io-sanita-theme/components/Search/ResultItem';
import config from '@plone/volto/registry';
import './search.scss';

const { parseFetchedSections, parseFilters, getSearchParamsURL, getSections } =
  SearchUtils;

const messages = defineMessages({
  searchResults: {
    id: 'search_Search results',
    defaultMessage: 'Risultati ricerca {searchableText}',
  },
  skipToSearchResults: {
    id: 'search_skip_to_search_results',
    defaultMessage: 'Vai ai risultati di ricerca',
  },
  searchLabel: {
    id: 'search_input_title',
    defaultMessage: 'Cerca nel sito',
  },
  foundNResults: {
    id: 'found_n_results',
    defaultMessage: '{total} risultati.',
  },
  orderBy: {
    id: 'order_by',
    defaultMessage: 'Ordina per',
  },
  filtersCollapse: {
    id: 'filtersCollapse',
    defaultMessage: 'Filtri',
  },
  label_utenti: {
    id: 'search_label_utenti',
    defaultMessage: 'Utenti',
  },
  label_parliamo_di: {
    id: 'search_label_parliamo_di',
    defaultMessage: 'Argomenti',
  },
  label_portal_types: {
    id: 'search_label_portal_types',
    defaultMessage: 'Tipologia',
  },
  advFilters: {
    id: 'search_adv_filters',
    defaultMessage: 'Filtri avanzati',
  },
  select_all_cts: {
    id: 'Select all content types or none',
    defaultMessage: 'Seleziona tutti i tipi di contenuti o nessuno',
  },
  closeFilters: {
    id: 'search_close_filters',
    defaultMessage: 'Chiudi',
  },
  removeAllFilters: {
    id: 'search_remove_all_filters',
    defaultMessage: 'Rimuovi tutti i filtri',
  },
  show_results_close_filters: {
    id: 'search_show_results_close_filters',
    defaultMessage: 'Mostra i risultati',
  },
  attenzione: { id: 'Attenzione!', defaultMessage: 'Attenzione!' },
  errors_occured: {
    id: 'Sono occorsi degli errori',
    defaultMessage: 'Sono occorsi degli errori',
  },
  categories: {
    id: 'search_sections',
    defaultMessage: 'Categorie',
  },
});

const Search = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [customPath] = useState(qs.parse(location.search)?.custom_path ?? '');
  const [collapseFilters, _setCollapseFilters] = useState(true);

  const subsite = useSelector((state) => state.subsite?.data);
  const searchFilters = useSelector((state) => state.searchFilters.result);
  const searchResults = useSelector((state) => state.searchResults);
  const [sections, setSections] = useState([]);

  const [filters, setFilters] = useState({
    searchableText: qs.parse(location.search)?.SearchableText ?? '',
    parliamo_di: [],
    a_chi_si_rivolge_tassonomia: [],
    sections: [],
    portal_types: [],
    order: { sort_on: 'relevance', sort_order: 'ascending' },
  });
  const [advFiltersOpen, setAdvFiltersOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(
    qs.parse(location.search)?.b_start
      ? qs.parse(location.search).b_start / config.settings.defaultPageSize + 1
      : 1,
  );

  useEffect(() => {
    if (!searchFilters.loaded && !searchFilters?.loading) {
      dispatch(getSearchFilters());
    }
  }, []);

  useEffect(() => {
    if (
      subsite &&
      !location.pathname.startsWith(flattenToAppURL(subsite['@id']))
    ) {
      /*la ricerca è stata fatta dal sito padre,
      poi dai risultati si è passato a un subsite,
      poi è stato fatto back dal browser per tornare ai risultati di ricerca del sito padre*/
      dispatch(resetSubsite());
    }
  }, [subsite, dispatch, location.pathname]);

  useEffect(() => {
    if (searchFilters) {
      let new_filters = { ...filters };
      if (searchFilters.sections?.length > 0) {
        const _sections = getSections(
          searchFilters.sections,
          location,
          subsite,
        );
        setSections(_sections);
        new_filters.sections = parseFetchedSections(_sections, location);
      }

      if (searchFilters.parliamo_di?.length > 0) {
        new_filters.parliamo_di = parseFilters(
          'parliamo_di',
          searchFilters.parliamo_di,
          location,
        );
      }
      if (searchFilters.a_chi_si_rivolge_tassonomia?.length > 0) {
        new_filters.a_chi_si_rivolge_tassonomia = parseFilters(
          'a_chi_si_rivolge_tassonomia',
          searchFilters.a_chi_si_rivolge_tassonomia,
          location,
        );
      }

      if (searchFilters.portal_types?.length > 0) {
        new_filters.portal_types = parseFilters(
          'portal_type',
          searchFilters.portal_types,
          location,
        );
      }

      setFilters(new_filters);
    }
  }, [searchFilters, subsite]);

  useDebouncedEffect(
    () => {
      setCurrentPage(1);
      doSearch(1);
    },
    600,
    [dispatch, filters],
  );

  /*Do real site search and updated current location params*/
  const doSearch = (page = currentPage) => {
    const q = {
      ...filters,
      currentPage: page, //currentPage,
      customPath,
      subsite,
      currentLang: intl.locale,
    };

    const queryString = getSearchParamsURL({
      ...q,
      getObject: true,
    });

    !isEmpty(searchResults.result) &&
      history.push(
        getSearchParamsURL({
          ...q,
          getObject: false,
        }),
      );

    dispatch(
      getSearchResults({
        ...queryString,
        searchableText:
          filters.searchableText?.length > 0
            ? `${filters.searchableText}*`
            : '',
      }),
    );
  };

  const setCollapseFilters = (collapse) => {
    _setCollapseFilters(collapse);
    if (window?.innerWidth <= 991 && collapse)
      setTimeout(
        () =>
          document
            .querySelector('main')
            ?.scrollIntoView?.({ behavior: 'smooth' }),
        100,
      );
  };

  const clearFilters = () => {
    setFilters({
      ...filters,
      parliamo_di: [],
      a_chi_si_rivolge_tassonomia: [],
      sections: [],
      portal_types: [],
    });
  };

  const handleQueryPaginationChange = (_e, { activePage }) => {
    window.scrollTo(0, 0);
    const page = activePage ?? 1;
    setCurrentPage(page);
    doSearch(page);
  };

  const titleSearchableText =
    filters.searchableText?.trim()?.length > 0
      ? '“' + filters.searchableText?.trim() + '“'
      : '';
  return (
    <>
      <Helmet
        title={intl.formatMessage(messages.searchResults, {
          searchableText: titleSearchableText,
        })}
      />
      <div className="public-ui search-view" id="view">
        <Container className="px-4 mb-4">
          <h1>
            {intl.formatMessage(messages.searchResults, {
              searchableText: titleSearchableText,
            })}
          </h1>

          <Skiplink tag="div">
            <SkiplinkItem href="#search-results-region" tag="a">
              {intl.formatMessage(messages.skipToSearchResults)}
            </SkiplinkItem>
          </Skiplink>

          <Row>
            {/* Colonna filtri */}
            <Col tag="aside" lg={3} className="py-lg-5">
              <Collapse
                isOpen={!collapseFilters}
                className="d-lg-block d-xl-block"
                id="filtersCollapse"
              >
                {/* chiudi e rimuovi tutti i filtri (solo per mobile) */}
                <div className="mobile-filters-header d-flex d-lg-none d-xl-none justify-content-between py-2">
                  <Button
                    color="link"
                    className="px-0"
                    onClick={() => clearFilters()}
                    aria-controls="search-results-region"
                  >
                    {intl.formatMessage(messages.removeAllFilters)}
                  </Button>

                  <Button
                    color="link"
                    className="px-0"
                    onClick={() => setCollapseFilters((prev) => !prev)}
                    data-toggle="collapse"
                    aria-expanded={!collapseFilters}
                    aria-controls="filtersCollapse"
                  >
                    {intl.formatMessage(messages.closeFilters)}
                    <Icon
                      icon="it-close"
                      color="primary"
                      padding={false}
                      size=""
                      aria-hidden={true}
                    />
                  </Button>
                </div>

                {/* Filtri */}
                {searchFilters?.a_chi_si_rivolge_tassonomia?.length > 0 && (
                  <div className="column-filters mt-2 mb-5">
                    <SearchCheckbox
                      options={searchFilters.a_chi_si_rivolge_tassonomia}
                      setFilters={setFilters}
                      filters={filters}
                      filterKey="a_chi_si_rivolge_tassonomia"
                      sectionTitle={intl.formatMessage(messages.label_utenti)}
                      collapsable={true}
                      collapsableAfter={8}
                      ariaControls="search-results-region"
                    />
                  </div>
                )}
                <div className="column-filters mt-2 mb-5">
                  <SearchSections
                    title={intl.formatMessage(messages.categories)}
                    sections={sections}
                    toggleGroups={true}
                    value={filters.sections}
                    setValue={(v) => {
                      setFilters({ ...filters, sections: v });
                    }}
                  />
                </div>
                {searchFilters?.parliamo_di?.length > 0 && (
                  <div className="column-filters mt-2 mb-5">
                    <SearchCheckbox
                      options={searchFilters.parliamo_di}
                      setFilters={setFilters}
                      filters={filters}
                      filterKey="parliamo_di"
                      sectionTitle={intl.formatMessage(
                        messages.label_parliamo_di,
                      )}
                      collapsable={true}
                      collapsableAfter={8}
                      ariaControls="search-results-region"
                    />
                  </div>
                )}
                {searchFilters?.portal_types?.length > 0 && (
                  <div className="column-filters mt-2 mb-5">
                    <Button
                      color="primary"
                      outline
                      icon
                      size="small"
                      onClick={() => setAdvFiltersOpen(!advFiltersOpen)}
                      className="justify-content-start w-100 ps-2"
                      aria-expanded={advFiltersOpen}
                    >
                      <Icon
                        icon={advFiltersOpen ? 'it-minus' : 'it-plus'}
                        padding
                        aria-hidden={true}
                      />
                      {intl.formatMessage(messages.advFilters)}
                    </Button>
                    <Collapse isOpen={advFiltersOpen} id="advFilters">
                      <div className="p-3 shadow-sm bg-white">
                        <SearchCheckbox
                          options={searchFilters.portal_types}
                          setFilters={setFilters}
                          filters={filters}
                          filterKey="portal_types"
                          sectionTitle={intl.formatMessage(
                            messages.label_portal_types,
                          )}
                          collapsable={true}
                          collapsableAfter={8}
                          toggleAll={true}
                          toggleAll_aria={intl.formatMessage(
                            messages.select_all_cts,
                          )}
                          ariaControls="search-results-region"
                        />
                      </div>
                    </Collapse>
                  </div>
                )}

                {/* chiudi popup filtri su mobile*/}
                <div className="mobile-filters-header d-flex d-lg-none d-xl-none justify-content-center py-2">
                  <Button
                    color="primary"
                    onClick={() => setCollapseFilters((prev) => !prev)}
                    data-toggle="collapse"
                    aria-expanded={!collapseFilters}
                    aria-controls="filtersCollapse"
                  >
                    {intl.formatMessage(messages.show_results_close_filters)}{' '}
                    {searchResults?.result?.items_total > 0 && (
                      <>({searchResults?.result?.items_total})</>
                    )}
                  </Button>
                </div>
              </Collapse>
            </Col>
            {/* Colonna risultati */}
            <Col lg={9} tag="section" className="py-lg-5">
              <div
                className="search-results-wrapper"
                id="search-results-region"
                aria-live="polite"
              >
                <SearchBar
                  id="search-page"
                  title={intl.formatMessage(messages.searchLabel)}
                  value={filters.searchableText}
                  onChange={(v) => {
                    setFilters({ ...filters, searchableText: v });
                  }}
                  showSubmit={true}
                  ariaControls="search-results-region"
                />

                {/* Filtri e Ordinamento */}
                <Row className="pb-3">
                  <Col xs={4} className="align-self-center">
                    <p aria-live="polite">
                      {intl.formatMessage(messages.foundNResults, {
                        total: searchResults?.result?.items_total || 0,
                      })}
                    </p>
                  </Col>
                  <Col
                    xs={8}
                    className="d-flex justify-content-end align-items-center"
                  >
                    {/* Bottone per collassare i filtri visibile solo su mobile*/}
                    <a
                      onClick={() => setCollapseFilters((prev) => !prev)}
                      href="#filtersCollapse"
                      role="button"
                      className={cx('d-lg-none d-xl-none btn btn-sm me-2', {
                        'btn-outline-primary': collapseFilters,
                        'btn-primary': !collapseFilters,
                      })}
                      data-toggle="collapse"
                      aria-expanded={!collapseFilters}
                      aria-controls="filtersCollapse"
                    >
                      {intl.formatMessage(messages.filtersCollapse)}
                    </a>
                    {/* ORDER BY */}
                    <SortByWidget
                      order={filters.order}
                      action={(sortby) => {
                        setFilters({
                          ...filters,
                          order: omit(sortby, ['title']),
                        });
                      }}
                      ariaControls="search-results-region"
                    />
                  </Col>
                </Row>

                {/* Risultati */}
                {searchResults.loadingResults ||
                (!searchResults.hasError && isEmpty(searchResults.result)) ? (
                  <div className="d-flex justify-content-center p-4">
                    <Spinner active />
                  </div>
                ) : searchResults?.result?.items_total > 0 ? (
                  <>
                    <Row>
                      {searchResults?.result?.items?.map((item, index) => (
                        <Col lg={6} key={item['@id']} className="py-2">
                          <SearchResultItem
                            item={item}
                            index={index}
                            searchableText={filters.searchableText}
                          />
                        </Col>
                      ))}
                    </Row>
                    {searchResults?.result?.batching && (
                      <Pagination
                        activePage={currentPage}
                        totalPages={Math.ceil(
                          (searchResults?.result?.items_total ?? 0) /
                            config.settings.defaultPageSize,
                        )}
                        onPageChange={handleQueryPaginationChange}
                      />
                    )}
                  </>
                ) : searchResults.error ? (
                  <Alert color="danger">
                    <strong>{intl.formatMessage(messages.attenzione)}</strong>{' '}
                    {intl.formatMessage(messages.errors_occured)}
                  </Alert>
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Search;
