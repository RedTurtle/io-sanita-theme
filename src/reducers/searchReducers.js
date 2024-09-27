/**
 * Search filters reducer
 * @module src/reducers/getSearchFiltersReducer
 */
import { parliamo_di, a_chi_si_rivolge_tassonomia } from './_mock_search';
import {
  GET_SEARCH_FILTERS,
  GET_TASSONOMIE_SEARCH,
  GET_SEARCH_RESULTS,
} from 'io-sanita-theme/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
  loaded: false,
};

export const searchFiltersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SEARCH_FILTERS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
        loaded: false,
      };

    case `${GET_SEARCH_FILTERS}_SUCCESS`:
      return {
        ...state,
        //todo: rimuovere il mock dei dati
        result: {
          parliamo_di: parliamo_di.map((i) => {
            return { label: i.title, value: i.token };
          }),
          a_chi_si_rivolge_tassonomia: a_chi_si_rivolge_tassonomia.map((i) => {
            return { label: i.title, value: i.token };
          }),
          ...action.result,
        },
        loadingResults: false,
        loaded: true,
      };

    case `${GET_SEARCH_FILTERS}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
        loaded: false,
      };

    default:
      return state;
  }
};

export const searchResultsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SEARCH_RESULTS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };

    case `${GET_SEARCH_RESULTS}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      };

    case `${GET_SEARCH_RESULTS}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };

    default:
      return state;
  }
};

export const tassonomieSearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_TASSONOMIE_SEARCH}_PENDING`:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case `${GET_TASSONOMIE_SEARCH}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loading: false,
        loaded: true,
      };

    case `${GET_TASSONOMIE_SEARCH}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loading: false,
        loaded: false,
      };

    default:
      return state;
  }
};
