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

import { getFarmacia, GET_FARMACIA } from './getFarmacia';
import {
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
} from './modulistica';

import { getIoSanitaSettings, GET_IO_SANITA_SETTINGS } from './settings';
import {
  resetQuerystringResults,
  RESET_QUERYSTRING_RESULTS,
} from './resetQuerystringResults';
import {
  getSearchBandiFilters,
  GET_SEARCH_BANDI_FILTERS,
} from './getSearchBandiFilters';

export {
  getSearchFilters,
  GET_SEARCH_FILTERS,
  getSearchResults,
  GET_SEARCH_RESULTS,
  getTassonomieSearch,
  GET_TASSONOMIE_SEARCH,
  getFarmacia,
  GET_FARMACIA,
  getModulisticaItems,
  GET_MODULISTICA_ITEMS,
  resetModulisticaItems,
  RESET_MODULISTICA_ITEMS,
  getIoSanitaSettings,
  GET_IO_SANITA_SETTINGS,
  resetQuerystringResults,
  RESET_QUERYSTRING_RESULTS,
  getSearchBandiFilters,
  GET_SEARCH_BANDI_FILTERS,
};
