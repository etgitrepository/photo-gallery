import { createLocalStorage } from '../../../shared/local-storage/createLocalStorage';

export const LOCAL_STORAGE_KEY = 'savedFavorites';

export type IFavoritesLocalStorage = typeof favoritesLocalStorage;

export const favoritesLocalStorage = createLocalStorage(LOCAL_STORAGE_KEY);
