import { render, screen } from '@testing-library/react';
import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { DetailsPhoto } from './DetailsPhoto';
import { createDetailsPhotoViewModel } from './DetailsPhotoViewModel';

describe('DetailsPhoto', () => {
	const renderComponent = () => {
		const photo: IPhoto = {
			id: 'ome-photo-id',
			description: 'some-description',
			urls: {
				raw: 'some-raw-url',
				full: '',
				small: '',
				thumb: '',
				regular: '',
			},
		};

		const viewModel = createDetailsPhotoViewModel(photo);

		return render(<DetailsPhoto viewModel={viewModel} />);
	};

	it('will render photo', () => {
		renderComponent();

		expect(screen.getByRole('img')).toHaveAttribute(
			'src',
			'some-raw-url&h=325',
		);
	});
});
