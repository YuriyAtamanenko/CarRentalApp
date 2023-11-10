import { RootState } from 'redux/store';

export const selectCatalog = (state: RootState) => state.catalog.adverts;
