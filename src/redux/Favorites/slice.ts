import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICar } from 'components/Catalog/CatalogItem/CatalogItem.types';

interface IFavoritesState {
  adverts: ICar[];
}
const initialState: IFavoritesState = {
  adverts: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }: PayloadAction<ICar>) => {
      state.adverts.push(payload);
    },
    removeFromFavorites: (state, { payload }: PayloadAction<number>) => {
      state.adverts = state.adverts.filter(advert => advert.id !== payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
