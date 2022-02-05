import { IFavoritesLocalStorage } from '../../../data/localStorage/favoritesLocalStorage';
import { IFavoritesState } from '../../model/IFavoritesState';

export type ISetSavedFavorites = (state: IFavoritesState) => void;

export const createSetSavedFavorites = (
	storage: IFavoritesLocalStorage,
): ISetSavedFavorites => {
	return (state: IFavoritesState) => {
		storage.set(JSON.stringify(state));
	};
};
