import { NavigationScheme } from '../../models/NavigationScheme';
import { getNavigationItems } from './getNavigationItems';

describe('getNavigationItems', () => {
	it('will return navigation items', () => {
		const result = getNavigationItems();

		expect(result).toEqual([
			NavigationScheme.Gallery,
			NavigationScheme.Favorites,
		]);
	});
});
