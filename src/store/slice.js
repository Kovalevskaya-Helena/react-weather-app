import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOAD_STATUSES } from './constants';
import { getCurrentWeather } from '../api';

export const fetchWeather = createAsyncThunk(
  'weather/getWeather',
  async (city) => {
    const weather = await getCurrentWeather(city);
    return weather;
  }
);

const INITIAL_STATE = { data: {}, loadStatus: LOAD_STATUSES.UNKNOWN };

export const { actions, reducer } = createSlice({
  name: 'weather',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
