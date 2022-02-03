import { NavigationScheme } from '../domain/models/NavigationScheme';
import { getNavigationItemLink } from './getNavigationItemLink';

export const getNavigationItemForPathname = (pathname: string) =>
	Object.values(NavigationScheme).find(
		(scheme) => getNavigationItemLink(scheme) === pathname,
	);
