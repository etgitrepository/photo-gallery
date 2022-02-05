import { render, screen } from '@testing-library/react';
import { IPhoto } from '../../domain/models/IPhoto';
import { Gallery } from './Gallery';
import { createGalleryViewModel } from './GalleryViewModel';

jest.mock('../Gallery/GalleryItem/GalleryItem.tsx', () => ({
	GalleryItem: () => <div>Mocked Gallery Item</div>,
}));

describe('Gallery', () => {
	const renderComponent = (photos: IPhoto[]) => {
		const isFavorite = jest.fn();
		const columnNumber = 5;
		const viewModel = createGalleryViewModel(photos, isFavorite, columnNumber);
		const onGalleryItemClick = jest.fn();

		return render(
			<Gallery viewModel={viewModel} onGalleryItemClick={onGalleryItemClick} />,
		);
	};

	it('will render every photo', () => {
		const photosMock: IPhoto[] = [
			{
				id: 'some-id',
				uniqueId: 'some-random-id',
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
				description: null,
			},
			{
				id: 'some-id-2',
				uniqueId: 'some-random-id',
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
				description: null,
			},

			{
				id: 'some-id-3',
				uniqueId: 'some-random-id',
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
				description: null,
			},
			{
				id: 'some-id-4',
				uniqueId: 'some-random-id',
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
				description: null,
			},
		];
		renderComponent(photosMock);

		expect(screen.getAllByText('Mocked Gallery Item')).toHaveLength(4);
	});
});
