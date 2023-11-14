import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAll } from './operations';
import { ICar } from 'components/Catalog/CatalogItem/CatalogItem.types';

interface ICatalogState {
  adverts: ICar[];
  isLoading: boolean;
  error: any;
}
const initialState: ICatalogState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: ICatalogState) => {
  state.isLoading = true;
};

// const handleRejected = (state: ICatalogState, action: PayloadAction) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder
      .addCase(getAll.pending, handlePending)
      .addCase(
        getAll.fulfilled,
        (state: ICatalogState, action: PayloadAction<ICar[]>) => {
          state.isLoading = false;
          state.error = null;
          state.adverts = action.payload;
        }
      );
  },
});

export const catalogReducer = catalogSlice.reducer;
