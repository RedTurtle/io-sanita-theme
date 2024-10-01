/**
 * Root reducer.
 * @module reducers/root
 */

import {
  searchFiltersReducer,
  tassonomieSearchReducer,
} from './searchReducers';
// import { searchResultsReducer } from './searchResultsReducer';
// import { calendarSearchReducer } from './calendarSearchReducer';
// import { calendarDaySearchReducer } from './calendarDaySearchReducer';
// import { amministrazioneTrasparenteTree } from './amministrazioneTrasparenteTree';
// import { dettagliProcedimento } from './dettagliProcedimento';
import { modulisticaItems } from './modulistica';
// import { originalQueryReducer } from './originalQueryReducer';
// import { searchBandiFiltersReducer } from './searchBandiFiltersReducer';
// import { breadcrumbs } from './breadcrumbs';
import { farmaciaReducer } from './farmaciaReducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  searchFilters: searchFiltersReducer,
  tassonomieSearch: tassonomieSearchReducer,
  // searchResults: searchResultsReducer,
  // calendarSearch: calendarSearchReducer,
  // calendarDaySearch: calendarDaySearchReducer,
  // amministrazioneTrasparenteTree: amministrazioneTrasparenteTree,
  // dettagliProcedimento: dettagliProcedimento,
  modulisticaItems,
  // originalQuery: originalQueryReducer,
  // searchBandiFilters: searchBandiFiltersReducer,
  // breadcrumbs: breadcrumbs,
  farmacia: farmaciaReducer,
};

export default reducers;
