/**
 * Search tassonomie action
 * @module src/actions/getTassonomieSearch
 */
import config from '@plone/volto/registry';

export const GET_TASSONOMIE_SEARCH = 'GET_TASSONOMIE_SEARCH';

/**
 * Get search filters.
 * @function getTassonomieSearch
 * @returns {Object} Get search filters action.
 */
export function getTassonomieSearch({ type, id, portalType, order, page }) {
  /*
  valori possibili.
  - type: ['a_chi_si_rivolge_tassonomia','parliamo_di']
  - value: il nome della tassonomia
  - portal_type: se si vogliono i contenuti di quel portal_type per la tassonomia type/value
  */

  const b_size = config.settings.defaultPageSize;
  return {
    type: GET_TASSONOMIE_SEARCH,
    request: {
      op: 'get',
      path: '/@search-tassonomie',
      params: {
        type,
        value: id,
        portal_type: portalType,
        sort_on: order?.sort_on,
        sort_order: order?.sort_order,
        b_size: b_size,
        ...(page && {
          b_start: b_size * (page - 1),
        }),
      },
    },
  };
}
