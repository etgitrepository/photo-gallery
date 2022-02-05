import { favoritesLocalStorage } from '../../data/localStorage/favoritesLocalStorage';
import { createGetSavedFavorites } from './get-saved-favorites/getSavedFavorites';
import { createSetSavedFavorites } from './set-saved-favorites/setSavedFavorites';

export const getSavedFavorites = createGetSavedFavorites(favoritesLocalStorage);
export const setSavedFavorites = createSetSavedFavorites(favoritesLocalStorage);
