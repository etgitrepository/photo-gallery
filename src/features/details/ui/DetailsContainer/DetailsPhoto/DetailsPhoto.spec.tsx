import { render, screen } from '@testing-library/react';
import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { DetailsPhoto } from './DetailsPhoto';
import { createDetailsPhotoViewModel } from './DetailsPhotoViewModel';

describe('DetailsPhoto', () => {
	const renderComponent = () => {
		const photo: IPhoto = {
			id: 'some-photo-id',
			uniqueId: 'some-random-id',
			description: 'some-description',
			urls: {
				raw: '',
				full: '',
				small: '',
				thumb: 'some-thumb-url',
				regular: '',
			},
		};

		const viewModel = createDetailsPhotoViewModel(photo);

		return render(<DetailsPhoto viewModel={viewModel} />);
	};

	it('will render photo', () => {
		renderComponent();

		expect(screen.getByRole('img')).toHaveAttribute('src', 'some-thumb-url');
	});
});
