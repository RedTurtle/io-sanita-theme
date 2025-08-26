/**
 * Search actions
 * @module src/actions/search
 */
import config from '@plone/volto/registry';

export const GET_TASSONOMIE_SEARCH = 'GET_TASSONOMIE_SEARCH';
export const GET_SEARCH_FILTERS = 'GET_SEARCH_FILTERS';
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

/**
 * Get search filters.
 * @function getSearchFilters
 * @returns {Object} Get search filters action.
 */
export function getSearchFilters() {
  return {
    type: GET_SEARCH_FILTERS,
    request: {
      op: 'get',
      path: '/@search-filters',
    },
  };
}

/**
 * Get search results.
 * @function searchResults
 * @returns {Object} Get search results action.
 */
export function getSearchResults(params) {
  return {
    type: GET_SEARCH_RESULTS,
    request: {
      op: 'get',
      path: `/@search`,
      params: params,
    },
  };
}

/**
 * Get tassonomie search.
 * @function getTassonomieSearch
 * @returns {Object} Get search filters action.
 */
export function getTassonomieSearch({
  type,
  id,
  portalType,
  order,
  currentPage,
  b_size,
}) {
  /*
  valori possibili.
  - type: ['a_chi_si_rivolge_tassonomia','parliamo_di']
  - value: il nome della tassonomia
  - portal_type: se si vogliono i contenuti di quel portal_type per la tassonomia type/value
  */

  const _b_size = b_size ?? config.settings.defaultPageSize;

  return {
    type: GET_TASSONOMIE_SEARCH,
    request: {
      op: 'get',
      path: '/@search-tassonomie',
      params: {
        type,
        value: id,
        ...(portalType && { portal_type: portalType }),
        ...(order?.sort_on && { sort_on: order.sort_on }),
        ...(order?.sort_order & { sort_order: order.sort_order }),
        ...(currentPage && {
          b_start: _b_size * (currentPage - 1),
        }),
        b_size: _b_size,
      },
    },
  };
}
