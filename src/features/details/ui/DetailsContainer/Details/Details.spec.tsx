import { fireEvent, render, screen } from '@testing-library/react';
import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { Details } from './Details';
import { createDetailsViewModel } from './DetailsViewModel';

describe('Details', () => {
	const renderComponent = (
		onCloseButtonClick = jest.fn(),
		onToggleFavoriteClick = jest.fn(),
		isFavorite = false,
	) => {
		const photo: IPhoto = {
			id: 'some-photo-id',
			uniqueId: 'some-random-id',
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

		const viewModel = createDetailsViewModel(photo, isFavorite);

		return render(
			<Details
				viewModel={viewModel}
				onCloseButtonClick={onCloseButtonClick}
				onToggleFavoriteClick={onToggleFavoriteClick}
			/>,
		);
	};

	it('will render details', () => {
		renderComponent();

		expect(screen.getByText('some-name')).toBeInTheDocument();

		expect(screen.getByText('Camera make')).toBeInTheDocument();
		expect(screen.getByText('some-make')).toBeInTheDocument();

		expect(screen.getByText('Camera model')).toBeInTheDocument();
		expect(screen.getByText('some-model')).toBeInTheDocument();

		expect(screen.getByText('Focal length')).toBeInTheDocument();
		expect(screen.getByText('some-expure-time')).toBeInTheDocument();

		expect(screen.getByText('Aperture')).toBeInTheDocument();
		expect(screen.getByText('some-aperture')).toBeInTheDocument();

		expect(screen.getByText('Shutter speed')).toBeInTheDocument();
		expect(screen.getByText('some-focal-length')).toBeInTheDocument();

		expect(screen.getByText('ISO')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('will call close on click', () => {
		const onCloseButtonClick = jest.fn();
		renderComponent(onCloseButtonClick);

		const buttons = screen.getAllByRole('button');

		fireEvent.click(buttons[1]);

		expect(onCloseButtonClick).toBeCalled();
	});
});
