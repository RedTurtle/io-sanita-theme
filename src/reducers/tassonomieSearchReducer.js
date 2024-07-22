/**
 * Search filters reducer
 * @module src/reducers/tassonomieSearchReducer
 */

import { GET_TASSONOMIE_SEARCH } from 'io-sanita-theme/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loading: false,
  loaded: false,
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
