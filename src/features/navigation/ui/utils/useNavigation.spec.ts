import { mockedUsedNavigate } from '../../../shared/helpers/test-helpers/mockRouter';
import { NavigationScheme } from '../../domain/models/NavigationScheme';
import { getNavigationItemLink } from '../getNavigationItemLink';
import { useNavigation } from './useNavigation';

describe('useNavigation', () => {
	it('will call navigate from useNavigate', () => {
		const { navigate } = useNavigation();

		navigate(NavigationScheme.Gallery);

		expect(mockedUsedNavigate).toBeCalledWith(
			getNavigationItemLink(NavigationScheme.Gallery),
		);
	});
});
