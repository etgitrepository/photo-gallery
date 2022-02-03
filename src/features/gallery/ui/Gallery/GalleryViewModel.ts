import { IPhoto } from '../../domain/models/IPhoto';
import { createGalleryItemViewModel } from '../GalleryItem/GalleryItemViewModel';

export type IGalleryViewModel = ReturnType<typeof createGalleryViewModel>;

export const createGalleryViewModel = (photos: IPhoto[][]) => {
	return {
		photos: photos.map((column) => column.map(createGalleryItemViewModel)),
	};
};
