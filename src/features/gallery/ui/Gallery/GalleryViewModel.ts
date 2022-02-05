import { splitArrayIntoMultipleArrays } from '../../../shared/helpers/splitArrayIntoMultipleArrays';
import { IPhoto } from '../../domain/models/IPhoto';
import { createGalleryItemViewModel } from './GalleryItem/GalleryItemViewModel';

export type IGalleryViewModel = ReturnType<typeof createGalleryViewModel>;

export const createGalleryViewModel = (
	photos: IPhoto[],
	isFavorite: (photo: IPhoto) => boolean,
	columns: number,
) => {
	return {
		photos: splitArrayIntoMultipleArrays(photos, columns).map((column) => {
			return column.map((item) =>
				createGalleryItemViewModel(item, isFavorite(item)),
			);
		}),
	};
};
