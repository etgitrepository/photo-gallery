import { IPhoto } from '../../../../gallery/domain/models/IPhoto';

export type IDetailsPhotoViewModel = ReturnType<
	typeof createDetailsPhotoViewModel
>;

export const createDetailsPhotoViewModel = (photo: IPhoto) => ({
	image: photo.urls.thumb,
});
