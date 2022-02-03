import { NavigationScheme } from '../domain/models/NavigationScheme';

import { navigationItems } from './navigationItems';

export const getNavigationItemLink = (key: NavigationScheme): string =>
	navigationItems[key].link;
