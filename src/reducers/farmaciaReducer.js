import { GET_FARMACIA } from 'io-sanita-theme/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loading: false,
  loaded: false,
};

export const farmaciaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_FARMACIA}_PENDING`:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case `${GET_FARMACIA}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loading: false,
        loaded: true,
      };

    case `${GET_FARMACIA}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loading: false,
        loaded: true,
      };

    default:
      return state;
  }
};
