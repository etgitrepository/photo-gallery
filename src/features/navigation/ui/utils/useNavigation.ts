import {
	createSearchParams,
	Location,
	URLSearchParamsInit,
	useLocation,
	useNavigate,
	useSearchParams,
} from 'react-router-dom';

import { NavigationScheme } from '../../domain/models/NavigationScheme';
import { getNavigationItemLink } from '../getNavigationItemLink';

export interface INavigation {
	navigate: (
		navigationItem?: NavigationScheme,
		params?: URLSearchParamsInit,
	) => void;
	getUrlParams: (key: string) => string | null;
	location: Location;
}

export const useNavigation = (): INavigation => {
	const routerNavigate = useNavigate();
	const location = useLocation();
	const [params] = useSearchParams();

	const navigate = (
		navigationItem?: NavigationScheme,
		params?: URLSearchParamsInit,
	) => {
		const link = navigationItem
			? getNavigationItemLink(navigationItem)
			: location.pathname;

		const urlSearchParams = createSearchParams(params)
			? `?${createSearchParams(params)}`
			: '';

		routerNavigate({
			pathname: link,
			search: urlSearchParams,
		});
	};

	const getUrlParams = (key: string) => {
		return params.get(key);
	};

	return { navigate, getUrlParams, location };
};
