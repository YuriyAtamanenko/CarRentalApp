import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
  },
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
