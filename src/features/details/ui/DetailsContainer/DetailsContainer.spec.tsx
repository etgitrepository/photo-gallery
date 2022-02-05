import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IPhoto } from '../../../gallery/domain/models/IPhoto';
import { store } from '../../../shared/store/store';
import { mockedUsedNavigate } from '../../../shared/test-helpers/mockRouter';
import { validateFunctionMock } from '../../../shared/test-helpers/validateFunctionMock';
import { detailStore } from '../../domain/store';

import { DetailsContainer } from './DetailsContainer';

jest.mock('../../domain/store');

const mockedLoad = validateFunctionMock(detailStore.load);

describe('DetailsContainer', () => {
	const renderComponent = () => {
		const photoId = 'some-photo-id';

		return render(
			<Provider store={store}>
				<MemoryRouter>
					<DetailsContainer photoId={photoId} />
				</MemoryRouter>
			</Provider>,
		);
	};

	const photoMock: IPhoto = {
		id: 'ome-photo-id',
		description: 'some-description',
		urls: {
			raw: '',
			full: '',
			small: '',
			thumb: '',
			regular: '',
		},
		user: {
			name: 'some-name',
			profileImage: 'some-profile-image',
		},
		machine: {
			make: 'some-make',
			model: 'some-model',
			exposureTime: 'some-expure-time',
			aperture: 'some-aperture',
			focalLength: 'some-focal-length',
			iso: 1,
		},
	};

	beforeEach(() => {
		mockedUsedNavigate.mockReset();
	});

	it('will not render', () => {
		mockedLoad.mockResolvedValue(undefined);

		const { container } = renderComponent();

		expect(container).toBeEmptyDOMElement();
	});

	it('will call navigate to close modal', async () => {
		mockedLoad.mockResolvedValue(photoMock);

		renderComponent();

		const buttons = await screen.findAllByRole('button');

		fireEvent.click(buttons[1]);

		expect(mockedLoad).toBeCalled();
		expect(mockedUsedNavigate).toBeCalled();
	});

	it('will toggle favorite status', async () => {
		mockedLoad.mockResolvedValue(photoMock);

		renderComponent();

		const button = await screen.findByRole('button', { name: /Like/ });

		fireEvent.click(button);

		expect(screen.getByText('Unlike')).toBeInTheDocument();
	});
});
