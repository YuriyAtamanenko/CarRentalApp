import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './Catalog/slice';
import { favoritesReducer } from './Favorites/slice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
  },
});
