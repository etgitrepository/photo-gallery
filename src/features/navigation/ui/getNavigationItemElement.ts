import { NavigationScheme } from '../domain/models/NavigationScheme';
import { navigationItems } from './navigationItems';

export const getNavigationItemElement = (
	key: NavigationScheme,
): (() => JSX.Element) => navigationItems[key].component;
