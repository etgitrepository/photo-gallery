import { NavigationScheme } from '../domain/models/NavigationScheme';
import { getNavigationItemLink } from './getNavigationItemLink';

describe('getNavigationItemLink', () => {
	it('will return path for gallery', () => {
		const result = getNavigationItemLink(NavigationScheme.Gallery);

		expect(result).toBe('/');
	});

	it('will return path for favorites', () => {
		const result = getNavigationItemLink(NavigationScheme.Favorites);

		expect(result).toBe('/favorites');
	});
});
