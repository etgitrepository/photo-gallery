import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../shared/store/store';
import { MainFavorites } from './MainFavorites';

jest.mock('../../../gallery/ui/Gallery/Gallery.tsx', () => ({
	Gallery: () => <>Mocked Gallery</>,
}));

describe('MainFavorites', () => {
	const renderComponent = () => {
		return render(
			<Provider store={store}>
				<MemoryRouter>
					<MainFavorites />
				</MemoryRouter>
				,
			</Provider>,
		);
	};

	it('will render gallery', () => {
		renderComponent();

		expect(screen.getByText('Mocked Gallery')).toBeInTheDocument();
	});
});
