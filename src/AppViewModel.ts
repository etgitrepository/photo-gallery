import { getNavigationItems } from './features/navigation/domain/use-cases/get-navigation-items/getNavigationItems';
import { getNavigationItemElement } from './features/navigation/ui/getNavigationItemElement';
import { getNavigationItemLink } from './features/navigation/ui/getNavigationItemLink';

export const createAppViewModel = () => {
	const navigationItems = getNavigationItems();

	return {
		navigationItems: navigationItems.map((item) => ({
			link: getNavigationItemLink(item),
			element: getNavigationItemElement(item),
		})),
	};
};
