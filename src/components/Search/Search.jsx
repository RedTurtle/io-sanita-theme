import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { useLocation, useHistory } from 'react-router-dom';
import { isEmpty, omit } from 'lodash';
import { Container, Row, Col, Skiplink, SkiplinkItem } from 'design-react-kit';

import { Helmet, flattenToAppURL } from '@plone/volto/helpers';
import { getSearchFilters, getSearchResults } from 'io-sanita-theme/actions';
import { SearchBar, SortByWidget } from 'io-sanita-theme/components';
import { SearchUtils, useDebouncedEffect } from 'io-sanita-theme/helpers';

const {
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedPortalTypes,
  getSearchParamsURL,
} = SearchUtils;

const messages = defineMessages({
  searchResults: {
    id: 'Search results',
    defaultMessage: 'Risultati ricerca “{searchableText}“',
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
});

const Search = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [customPath] = useState(qs.parse(location.search)?.custom_path ?? '');

  const subsite = useSelector((state) => state.subsite?.data);
  const searchFilters = useSelector((state) => state.searchFilters.result);
  const searchResults = useSelector((state) => state.searchResults);

  const [filters, setFilters] = useState({
    searchableText: qs.parse(location.search)?.SearchableText ?? '',
    topics: [],
    users: [],
    sections: [],
    portal_types: [],
    order: { sort_on: 'relevance', sort_order: 'ascending' },
  });

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
      if (Object.keys(searchFilters.sections ?? {}).length > 0) {
        new_filters.sections = parseFetchedSections(
          searchFilters.sections,
          location,
          subsite,
        );
      }

      if (searchFilters.topics?.length > 0) {
        new_filters.topics = parseFetchedTopics(searchFilters.topics, location);
      }

      if (searchFilters.portal_types?.length > 0) {
        new_filters.portal_types = parseFetchedPortalTypes(
          searchFilters.portal_types,
          config.settings.defaultExcludedFromSearch?.portalTypes,
          location,
        );
      }

      setFilters(new_filters);
    }
  }, [searchFilters, subsite]);

  useDebouncedEffect(
    () => {
      doSearch();
    },
    600,
    [dispatch, filters, currentPage],
  );

  /*Do real site search and updated current location params*/
  const doSearch = () => {
    const q = {
      ...filters,
      searchableText:
        filters.searchableText?.length > 0 ? `${filters.searchableText}*` : '',
      currentPage,
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

    dispatch(getSearchResults(queryString));
  };

  return (
    <>
      <Helmet
        title={intl.formatMessage(messages.searchResults, {
          searchableText: filters.searchableText,
        })}
      />
      <div className="public-ui search-view" id="view">
        <Container className="px-4 my-4">
          <h1>
            {intl.formatMessage(messages.searchResults, {
              searchableText: filters.searchableText,
            })}
          </h1>

          <Skiplink tag="div">
            <SkiplinkItem href="#search-results-region" tag="a">
              {intl.formatMessage(messages.skipToSearchResults)}
            </SkiplinkItem>
          </Skiplink>
          <Row>
            {/* Colonna filtri */}
            <Col tag="aside" lg={3} className="py-lg-5"></Col>
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
                  aria-controls="search-results-region"
                />

                <Row className="pb-3">
                  <Col xs={6} className="align-self-center">
                    <p aria-live="polite">
                      {intl.formatMessage(messages.foundNResults, {
                        total: searchResults?.result?.items_total || 0,
                      })}
                    </p>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* ORDER BY */}
                    <SortByWidget
                      order={filters.order}
                      action={(sortby) => {
                        setFilters({
                          ...filters,
                          order: omit(sortby, ['title']),
                        });
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Search;
