/**
 * Search filters reducer
 * @module src/reducers/getSearchFiltersReducer
 */

import {
  GET_SEARCH_FILTERS,
  GET_TASSONOMIE_SEARCH,
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
        result: action.result,
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