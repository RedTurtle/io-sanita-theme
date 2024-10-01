/**
 * Add your actions here.
 * @module actions
 * @example
 * import {
 *   searchContent,
 * } from './search/search';
 *
 * export {
 *   searchContent,
 * };
 */

import {
  getSearchFilters,
  GET_SEARCH_FILTERS,
  getTassonomieSearch,
  GET_TASSONOMIE_SEARCH,
} from './search';

import { getFarmacia, GET_FARMACIA } from './getFarmacia';
import {
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
} from './modulistica';

export {
  getSearchFilters,
  GET_SEARCH_FILTERS,
  getTassonomieSearch,
  GET_TASSONOMIE_SEARCH,
  getFarmacia,
  GET_FARMACIA,
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
};
