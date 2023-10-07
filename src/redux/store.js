import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
