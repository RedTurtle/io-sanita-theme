import React, { useState, useReducer, useEffect, createRef } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Spinner } from 'design-react-kit';
import moment from 'moment';
import cx from 'classnames';

import { getQueryStringResults } from '@plone/volto/actions/querystringsearch/querystringsearch';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { BandiTemplate } from 'io-sanita-theme/components/Blocks';
import { Pagination } from 'io-sanita-theme/components';
import { resetQuerystringResults } from 'io-sanita-theme/actions';

const messages = defineMessages({
  find: {
    id: 'find',
    defaultMessage: 'Cerca',
  },
  noResult: {
    id: 'noResult',
    defaultMessage: 'Nessun risultato trovato',
  },
  search_bandi_results: {
    id: 'search_bandi_results',
    defaultMessage: 'Risultato della ricerca dei bandi',
  },
});

const Body = ({ data, id, inEditMode, path, onChangeBlock, blocksConfig }) => {
  const intl = useIntl();
  const b_size = 6;

  moment.locale(intl.locale);

  const [currentPage, setCurrentPage] = useState(1);
  const subsite = useSelector((state) => state.subsite?.data);

  const dispatch = useDispatch();

  const querystringResults = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[id + '_bandi_search'];
  });
  const items = useSelector((state) => {
    return (
      state.querystringsearch?.subrequests?.[id + '_bandi_search']?.items ?? []
    );
  });

  const loading = useSelector((state) => {
    return (
      state.querystringsearch?.subrequests?.[id + '_bandi_search']?.loading ||
      false
    );
  });

  const resultsRef = createRef();

  const doRequest = (page = currentPage) => {
    let query = [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: ['Bando'],
      },
    ];

    [filterOne, filterTwo, filterThree].forEach((f) => {
      if (f?.widget) {
        const value = f.widget.props.value;
        if (f.query) {
          f.query(value, query);
        }
      }
    });

    if (data.defaultQuerystring) {
      query.push(
        ...data.defaultQuerystring.filter((el) => el.i !== 'portal_type'),
      );
    }

    if (data.location && data.location[0]) {
      query.push({
        i: 'path',
        o: 'plone.app.querystring.operation.string.absolutePath',
        v: flattenToAppURL(data.location[0]['@id']),
      });
    }

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '',
        {
          fullobjects: 1,
          query: query,
          b_size: b_size,
          sort_on: data.sort_on,
          sort_order: data.sort_order ? 'descending' : 'ascending',
        },
        id + '_bandi_search',
        page,
      ),
    );
  };

  // Se cambia uno dei tre filtri resetto lo stato dei filtri
  useEffect(() => {
    dispatchFilter({ type: 'reset' });
  }, [data]);

  const filtersReducer = (state = getInitialState(), action) => {
    let newState = {
      ...state,
    };

    if (action.type === 'reset') {
      newState = {
        ...getInitialState(),
      };
      dispatch(resetQuerystringResults(id + '_bandi_search'));
    } else {
      const f = newState[action.filter];
      const defaultReducer = (value, state) => value;
      const reducer = f.reducer || defaultReducer;
      f.widget.props.value = reducer(action.value, state[action.filter]);
    }
    return newState;
  };

  const pathSearch = data?.location?.length > 0 ? data.location[0]['@id'] : '/';
  const FiltersConfigFN = blocksConfig['searchBandi'].filtersConfig;
  const filtersConfig = FiltersConfigFN
    ? FiltersConfigFN(null, pathSearch)
    : {};
  const getInitialState = () => {
    return {
      filterOne: filtersConfig[data?.filter_one],
      filterTwo: filtersConfig[data?.filter_two],
      filterThree: filtersConfig[data?.filter_three],
    };
  };

  const [{ filterOne, filterTwo, filterThree }, dispatchFilter] = useReducer(
    filtersReducer,
    getInitialState(),
  );

  function handleQueryPaginationChange(e, { activePage }) {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    const current = activePage?.children ?? 1;
    setCurrentPage(current);
    doRequest(current);
  }

  const has_results = !loading && items?.length > 0;

  const resultsWrapperId = `bandi-search-results-${id}`;
  return filterOne || filterTwo || filterThree ? (
    <div
      className={cx('full-width py-4', {
        'bg-primary-lightest': has_results,
      })}
    >
      <Container className="px-4">
        <div className="rounded bg-primary search-block-filters">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              doRequest(1);
            }}
          >
            <div className="d-flex justify-content-center">
              <div className="d-flex search-container align-items-center justify-content-center flex-wrap">
                {filterOne && (
                  <>
                    {React.createElement(filterOne.widget.component, {
                      ...filterOne.widget?.props,
                      id: 'filterOne',
                      onChange: (filter, value) => {
                        dispatchFilter({
                          filter: filter,
                          value: value,
                        });
                      },
                    })}
                  </>
                )}
                {filterTwo &&
                  React.createElement(filterTwo.widget?.component, {
                    ...filterTwo.widget?.props,
                    id: 'filterTwo',
                    onChange: (filter, value) =>
                      dispatchFilter({
                        filter: filter,
                        value: value,
                      }),
                  })}
                {filterThree &&
                  React.createElement(filterThree.widget?.component, {
                    ...filterThree.widget?.props,
                    id: 'filterThree',
                    onChange: (filter, value) =>
                      dispatchFilter({
                        filter: filter,
                        value: value,
                      }),
                  })}

                <Button
                  color="accent"
                  icon={false}
                  className="my-0 my-lg-1"
                  aria-controls={resultsWrapperId}
                >
                  {intl.formatMessage(messages.find)}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div
          className="mt-4"
          ref={resultsRef}
          aria-live="polite"
          aria-label={intl.formatMessage(messages.search_bandi_results)}
          role="region"
          id={resultsWrapperId}
        >
          {!loading ? (
            items?.length > 0 ? (
              <>
                <div className="block listing">
                  <BandiTemplate items={items} full_width={false} />
                </div>
                {querystringResults.total > b_size && (
                  <Pagination
                    activePage={currentPage}
                    totalPages={Math.ceil(querystringResults.total / b_size)}
                    onPageChange={handleQueryPaginationChange}
                    ariaControls={resultsWrapperId}
                  />
                )}
              </>
            ) : querystringResults ? (
              <p className="text-center">
                {intl.formatMessage(messages.noResult)}
              </p>
            ) : (
              <></>
            )
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner active />
            </div>
          )}
        </div>
      </Container>
    </div>
  ) : null;
};
export default Body;
