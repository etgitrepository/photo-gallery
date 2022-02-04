import { mockedUsedNavigate } from '../../../shared/test-helpers/mockRouter';
import { NavigationScheme } from '../../domain/models/NavigationScheme';
import { getNavigationItemLink } from '../getNavigationItemLink';
import { useNavigation } from './useNavigation';

describe('useNavigation', () => {
	it('will call navigate from useNavigate', () => {
		const { navigate } = useNavigation();

		navigate(NavigationScheme.Gallery);

		expect(mockedUsedNavigate).toBeCalledWith({
			pathname: getNavigationItemLink(NavigationScheme.Gallery),
			search: '',
		});
	});
});
