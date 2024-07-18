/**
 * Search filters action
 * @module src/actions/getTassonomieSearch
 */
export const GET_TASSONOMIE_SEARCH = 'GET_TASSONOMIE_SEARCH';

/**
 * Get search filters.
 * @function getTassonomieSearch
 * @returns {Object} Get search filters action.
 */
export function getTassonomieSearch(type, value, portal_type) {
  /*
  valori possibili.
  - type: ['a_chi_si_rivolge_tassonomia','parliamo_di']
  - value: il nome della tassonomia
  - portal-type: se si vogliono i contenuti di quel tipo per la tassonomia type/value
  */
  return {
    type: GET_TASSONOMIE_SEARCH,
    request: {
      op: 'get',
      path: '/@tassonomie-search',
      params: {
        type,
        value,
        portal_type,
      },
    },
  };
}
