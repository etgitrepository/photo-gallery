import { IPhoto } from '../../domain/models/IPhoto';
import { createGalleryItemViewModel } from './GalleryItem/GalleryItemViewModel';

export type IGalleryViewModel = ReturnType<typeof createGalleryViewModel>;

export const createGalleryViewModel = (
	photos: IPhoto[][],
	favorites: IPhoto[],
) => {
	return {
		photos: photos.map((column) => {
			return column.map((item) =>
				createGalleryItemViewModel(
					item,
					favorites.some((favorite) => item.id === favorite.id),
				),
			);
		}),
	};
};
