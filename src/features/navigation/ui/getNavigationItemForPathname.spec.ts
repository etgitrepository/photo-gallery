import { NavigationScheme } from '../domain/models/NavigationScheme';
import { getNavigationItemForPathname } from './getNavigationItemForPathname';

describe('getNavigationItemForPathname', () => {
	it('will return gallery navigation scheme', () => {
		const result = getNavigationItemForPathname('/');

		expect(result).toBe(NavigationScheme.Gallery);
	});

	it('will return favorites navigation scheme', () => {
		const result = getNavigationItemForPathname('/favorites');

		expect(result).toBe(NavigationScheme.Favorites);
	});
});
