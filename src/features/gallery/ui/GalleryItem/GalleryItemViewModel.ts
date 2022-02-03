import { IPhoto } from '../../domain/models/IPhoto';

export type IGalleryItemViewModel = ReturnType<
	typeof createGalleryItemViewModel
>;

export const createGalleryItemViewModel = (photo: IPhoto) => ({
	photo,
});
