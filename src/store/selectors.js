import { LOAD_STATUSES } from './constants';

export const getWeather = (state) => state.data;

export const getLoadStatus = (state) => state.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;

export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;

export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
