import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';
// import { ICar } from 'components/Catalog/CatalogItem/CatalogItem.types';

// interface ICatalogState {
//   adverts: ICar[];
//   isLoading: boolean;
//   error: null;
// }
const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: {
    [getAll.pending]: handlePending,
    [getAll.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.adverts = action.payload;
    },
    [getAll.rejected]: handleRejected,
  },
});

export const catalogReducer = catalogSlice.reducer;
