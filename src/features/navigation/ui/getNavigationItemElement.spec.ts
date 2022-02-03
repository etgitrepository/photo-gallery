import { MainFavorites } from '../../favorites/ui/MainFavorites/MainFavorites';
import { MainGallery } from '../../gallery/ui/MainGallery/MainGallery';
import { NavigationScheme } from '../domain/models/NavigationScheme';
import { getNavigationItemElement } from './getNavigationItemElement';

jest.mock('../../gallery/ui/MainGallery/MainGallery');
jest.mock('../../favorites/ui/MainFavorites/MainFavorites');

describe('getNavigationItemElement', () => {
	it('will return gallery element', () => {
		const result = getNavigationItemElement(NavigationScheme.Gallery);

		expect(result).toEqual(MainGallery);
	});

	it('will return favorites element', () => {
		const result = getNavigationItemElement(NavigationScheme.Favorites);

		expect(result).toEqual(MainFavorites);
	});
});
