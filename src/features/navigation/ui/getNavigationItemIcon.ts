import { NavigationScheme } from '../domain/models/NavigationScheme';

import { navigationItems } from './navigationItems';

export const getNavigationItemIcon = (key: NavigationScheme): string =>
	navigationItems[key].icon;
