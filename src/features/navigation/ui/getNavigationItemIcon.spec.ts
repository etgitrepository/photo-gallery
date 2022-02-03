import { NavigationScheme } from '../domain/models/NavigationScheme';
import { getNavigationItemIcon } from './getNavigationItemIcon';

describe('getNavigationItemIcon', () => {
	it('will return icon for gallery', () => {
		const result = getNavigationItemIcon(NavigationScheme.Gallery);

		expect(result).toBe('gallery.svg');
	});

	it('will return icon for favorites', () => {
		const result = getNavigationItemIcon(NavigationScheme.Favorites);

		expect(result).toBe('favorites.svg');
	});
});
