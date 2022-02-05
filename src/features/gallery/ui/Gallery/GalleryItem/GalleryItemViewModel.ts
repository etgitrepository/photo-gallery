import { IPhoto } from '../../../domain/models/IPhoto';
import FavoriteIcon from '../../../../../assets/icons/favorite.svg';

export type IGalleryItemViewModel = ReturnType<
	typeof createGalleryItemViewModel
>;

export const createGalleryItemViewModel = (
	photo: IPhoto,
	isFavorite: boolean,
) => ({
	photo: { ...photo, isFavorite },
	favoriteIcon: FavoriteIcon,
});
