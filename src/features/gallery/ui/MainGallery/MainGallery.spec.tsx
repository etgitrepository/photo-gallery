import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../shared/store/store';
import { MainGallery } from './MainGallery';

jest.mock('../Gallery/Gallery.tsx', () => ({
	Gallery: () => <>Mocked Gallery</>,
}));

beforeEach(() => {
	// IntersectionObserver isn't available in test environment
	const mockIntersectionObserver = jest.fn();
	mockIntersectionObserver.mockReturnValue({
		observe: () => null,
		unobserve: () => null,
		disconnect: () => null,
	});
	window.IntersectionObserver = mockIntersectionObserver;
});

describe('MainGallery', () => {
	const renderComponent = () => {
		return render(
			<Provider store={store}>
				<MemoryRouter>
					<MainGallery />
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
