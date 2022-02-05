import { ILocalStorage } from './ILocalStorage';

export const createLocalStorage = (key: string): Readonly<ILocalStorage> => {
	return Object.freeze({
		get() {
			return localStorage.getItem(key) ?? undefined;
		},
		set(value: string) {
			localStorage.setItem(key, value);
		},
	});
};
