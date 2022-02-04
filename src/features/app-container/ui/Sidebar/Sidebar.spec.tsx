import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavigationScheme } from '../../../navigation/domain/models/NavigationScheme';
import { getNavigationItems } from '../../../navigation/domain/use-cases/get-navigation-items/getNavigationItems';
import { getNavigationItemLink } from '../../../navigation/ui/getNavigationItemLink';

import { validateFunctionMock } from '../../../shared/test-helpers/validateFunctionMock';
import { Sidebar } from './Sidebar';

jest.mock(
	'../../../navigation/domain/use-cases/get-navigation-items/getNavigationItems',
);

const mockedGetNavigationItems = validateFunctionMock(getNavigationItems);

describe('Sidebar', () => {
	const renderComponent = () => {
		return render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>,
		);
	};

	beforeEach(() => {
		mockedGetNavigationItems.mockReturnValue([]);
	});

	it('will render logo', () => {
		renderComponent();

		const imgs = screen.getAllByRole('img');

		expect(imgs[0]).toHaveAttribute('src', 'logo.svg');
	});

	it('will render both navigation items', () => {
		mockedGetNavigationItems.mockReturnValue([
			NavigationScheme.Gallery,
			NavigationScheme.Favorites,
		]);

		renderComponent();

		const links = screen.getAllByRole('link');

		expect(links[0]).toHaveAttribute(
			'href',
			getNavigationItemLink(NavigationScheme.Gallery),
		);
		expect(links[1]).toHaveAttribute(
			'href',
			getNavigationItemLink(NavigationScheme.Favorites),
		);
	});
});
