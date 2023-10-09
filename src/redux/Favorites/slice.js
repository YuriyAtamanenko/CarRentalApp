import { createSlice } from '@reduxjs/toolkit';

const getFavorites = () => {
  const parsedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return parsedFavorites;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getFavorites(),
  reducers: {
    addToFavorites: (state, { payload }) => {
      const ChangedListFavorites = [...state, payload];
      localStorage.setItem('favorites', JSON.stringify(ChangedListFavorites));
      return (state = ChangedListFavorites);
    },
    removeFromFavorites: (state, { payload }) => {
      const ChangedListFavorites = state.filter(
        advert => advert.id !== payload
      );
      localStorage.setItem('favorites', JSON.stringify(ChangedListFavorites));
      return (state = ChangedListFavorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
