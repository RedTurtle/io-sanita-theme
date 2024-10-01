/**
 * Search filters reducer
 * @module src/reducers/getdettagliProcedimento
 */

import { GET_IO_SANITA_SETTINGS } from 'io-sanita-theme/actions';

const initialState = {
  error: null,
  data: {},
  loading: false,
  loaded: false,
};

export const iosanita_settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_IO_SANITA_SETTINGS}_PENDING`:
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false,
      };

    case `${GET_IO_SANITA_SETTINGS}_SUCCESS`:
      return {
        ...state,
        error: null,
        data: action.result,
        loading: false,
        loaded: true,
      };

    case `${GET_IO_SANITA_SETTINGS}_FAIL`:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: false,
      };
    case GET_IO_SANITA_SETTINGS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
