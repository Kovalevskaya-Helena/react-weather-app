import { LOAD_STATUSES, WeatherActions } from './constants';
const INITIAL_STATE = {
  data: {},
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActions.fetchStart: {
      return {
        ...state,
        loadStatus: LOAD_STATUSES.LOADING,
      };
    }
    case WeatherActions.fetchError: {
      return {
        data: {},
        loadStatus: LOAD_STATUSES.ERROR,
      };
    }
    case WeatherActions.fetchSuccess: {
      return {
        data: action.payload,
        loadStatus: LOAD_STATUSES.LOADED,
      };
    }
    default:
      return state;
  }
};
