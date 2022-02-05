import { fireEvent, render, screen } from '@testing-library/react';
import { IPhoto } from '../../../domain/models/IPhoto';
import { GalleryItem } from './GalleryItem';
import { createGalleryItemViewModel } from './GalleryItemViewModel';

describe('GalleryItem', () => {
	const renderComponent = (
		photo: IPhoto,
		isFavorite = false,
		onGalleryItemClick = jest.fn(),
	) => {
		const viewModel = createGalleryItemViewModel(photo, isFavorite);

		return render(
			<GalleryItem
				viewModel={viewModel}
				onGalleryItemClick={onGalleryItemClick}
			/>,
		);
	};

	const photo: IPhoto = {
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
	};

	it('will render img', () => {
		renderComponent(photo);

		expect(screen.getByAltText('gallery-img')).toHaveAttribute(
			'src',
			'some-url-small',
		);
	});

	it('will render favorite icon', () => {
		const isFavorite = true;
		renderComponent(photo, isFavorite);

		expect(screen.getByAltText('gallery-favorite-icon')).toHaveAttribute(
			'src',
			'favorite.svg',
		);
	});

	it('will call onClick function', () => {
		const onGalleryItemClick = jest.fn();
		renderComponent(photo, undefined, onGalleryItemClick);

		const img = screen.getByAltText('gallery-img');

		fireEvent.click(img);

		expect(onGalleryItemClick).toBeCalledTimes(1);
		expect(onGalleryItemClick).toBeCalledWith('some-id');
	});
});
