import { Location, useLocation, useNavigate } from 'react-router-dom';
import { NavigationScheme } from '../../domain/models/NavigationScheme';
import { getNavigationItemLink } from '../getNavigationItemLink';

export interface INavigation {
	navigate: (navigationItem: NavigationScheme) => void;
	location: Location;
}

export const useNavigation = (): INavigation => {
	const routerNavigate = useNavigate();
	const location = useLocation();

	const navigate = (navigationItem: NavigationScheme) => {
		const link = getNavigationItemLink(navigationItem);

		routerNavigate(link);
	};

	return { navigate, location };
};
