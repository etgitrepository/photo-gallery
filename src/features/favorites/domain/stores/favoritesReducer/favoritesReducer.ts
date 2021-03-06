import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { RootState } from '../../../../shared/store/store';

import { IFavoritesState } from '../../model/IFavoritesState';
import { getSavedFavorites } from '../../use-cases';

const getInitialState = () => {
	const initialState: IFavoritesState = {
		photos: [],
	};

	return getSavedFavorites() || initialState;
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: getInitialState,
	reducers: {
		toggle: (state, action: PayloadAction<IPhoto>) => {
			const index = state.photos.findIndex(
				(item) => item.id === action.payload.id,
			);

			index !== -1
				? state.photos.splice(index, 1)
				: state.photos.push(action.payload);
		},
	},
});

export const { toggle } = favoritesSlice.actions;

export const getFavoritePhotos = (state: RootState) => state.favorites.photos;
export const isPhotoFavorite = (state: RootState) => (photo: IPhoto) =>
	state.favorites.photos.some((favorite) => favorite.id === photo.id);

export default favoritesSlice.reducer;
