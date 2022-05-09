import { configureStore } from '@reduxjs/toolkit';
import { reducer as weatherReducer } from './slice';

export const store = configureStore({
  reducer: weatherReducer,
  devTools: true,
});
