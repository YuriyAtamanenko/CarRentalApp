import { RootState } from 'redux/store';

export const selectFavorites = (state: RootState) => state.favorites.adverts;
