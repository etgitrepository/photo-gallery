import { getNavigationItems } from '../../../navigation/domain/use-cases/get-navigation-items/getNavigationItems';
import { getNavigationItemIcon } from '../../../navigation/ui/getNavigationItemIcon';
import { getNavigationItemLink } from '../../../navigation/ui/getNavigationItemLink';

export type ISidebarViewModel = ReturnType<typeof createSidebarViewModel>;

export const createSidebarViewModel = () => {
	const navigationItems = getNavigationItems();

	return {
		navigationItems: navigationItems.map((item) => ({
			key: item,
			link: getNavigationItemLink(item),
			icon: getNavigationItemIcon(item),
		})),
	};
};
