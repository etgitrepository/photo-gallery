import { NavigationScheme } from '../domain/models/NavigationScheme';
import GalleryIcon from '../../../assets/icons/gallery.svg';
import FavoritesIcon from '../../../assets/icons/favorites.svg';
import { MainGallery } from '../../gallery/ui/MainGallery/MainGallery';
import { MainFavorites } from '../../favorites/ui/MainFavorites/MainFavorites';

export interface INavigationItem {
	link: string;
	icon: string;
	component: () => JSX.Element;
}

export const navigationItems: Record<NavigationScheme, INavigationItem> = {
	[NavigationScheme.Gallery]: {
		link: '/',
		icon: GalleryIcon,
		component: MainGallery,
	},
	[NavigationScheme.Favorites]: {
		link: '/favorites',
		icon: FavoritesIcon,
		component: MainFavorites,
	},
};
