import { configureStore } from '@reduxjs/toolkit';
import readingsReducer from './features/readingsSlice';

export const store = configureStore({
  reducer: {
    readings: readingsReducer,
  },
});
