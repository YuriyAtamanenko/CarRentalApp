import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    adverts: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.adverts.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.adverts = state.adverts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
