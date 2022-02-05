import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../../favorites/domain/stores/favoritesReducer/favoritesReducer';
import { setSavedFavorites } from '../../favorites/domain/use-cases';

export const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
});

store.subscribe(() => {
	setSavedFavorites(store.getState().favorites);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
