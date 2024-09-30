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
  getSearchResults,
  GET_SEARCH_RESULTS,
  getTassonomieSearch,
  GET_TASSONOMIE_SEARCH,
} from './search';

import {
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
} from './modulistica';

import { getIoSanitaSettings, GET_IO_SANITA_SETTINGS } from './settings';

export {
  getSearchFilters,
  GET_SEARCH_FILTERS,
  getSearchResults,
  GET_SEARCH_RESULTS,
  getTassonomieSearch,
  GET_TASSONOMIE_SEARCH,
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
  getIoSanitaSettings,
  GET_IO_SANITA_SETTINGS,
};
