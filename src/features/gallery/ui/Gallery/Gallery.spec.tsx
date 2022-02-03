import { render, screen } from '@testing-library/react';
import { IPhoto } from '../../domain/models/IPhoto';
import { Gallery } from './Gallery';
import { createGalleryViewModel } from './GalleryViewModel';

jest.mock('../GalleryItem/GalleryItem.tsx', () => ({
	GalleryItem: () => <div>Mocked Gallery Item</div>,
}));

describe('Gallery', () => {
	const renderComponent = (photos: IPhoto[][]) => {
		const viewModel = createGalleryViewModel(photos);

		return render(<Gallery viewModel={viewModel} />);
	};

	it('will render every photo', () => {
		const photosMock: IPhoto[][] = [
			[
				{
					id: 'some-id',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
				},
				{
					id: 'some-id-2',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
				},
			],
			[
				{
					id: 'some-id-3',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
				},
				{
					id: 'some-id-4',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
				},
			],
		];
		renderComponent(photosMock);

		expect(screen.getAllByText('Mocked Gallery Item')).toHaveLength(4);
	});
});
