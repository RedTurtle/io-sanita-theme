/**
 * Search filters reducer
 * @module src/reducers/tassonomieSearchReducer
 */

import { GET_TASSONOMIE_SEARCH } from 'io-sanita-theme/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
  loaded: false,
};

export const tassonomieSearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_TASSONOMIE_SEARCH}_PENDING`:
      return {
        ...state,
        loadingResults: true,
        loaded: false,
      };

    case `${GET_TASSONOMIE_SEARCH}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
        loaded: true,
      };

    case `${GET_TASSONOMIE_SEARCH}_FAIL`:
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
