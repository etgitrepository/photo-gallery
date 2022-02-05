import { IFavoritesLocalStorage } from '../../../data/localStorage/favoritesLocalStorage';
import { IFavoritesState } from '../../model/IFavoritesState';

export type IGetSavedFavorites = () => IFavoritesState | undefined;

export const createGetSavedFavorites = (
	storage: IFavoritesLocalStorage,
): IGetSavedFavorites => {
	return () => {
		const stored = storage.get();

		if (!stored) return undefined;

		return JSON.parse(stored);
	};
};
