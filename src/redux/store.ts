import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './Catalog/slice';
import { favoritesReducer } from './Favorites/slice';

const FavoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['adverts'],
};

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: persistReducer<TFavoritesReducer>(
      FavoritesPersistConfig,
      favoritesReducer
    ),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
type TFavoritesReducer = ReturnType<typeof favoritesReducer>;
export const persistor = persistStore(store);
