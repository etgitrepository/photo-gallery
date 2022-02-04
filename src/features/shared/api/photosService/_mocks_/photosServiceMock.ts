import { IPhotosService } from '../photosService';

export const createPhotosServiceMock = (
	overrides?: Partial<IPhotosService>,
): IPhotosService => ({
	getPhotos: jest.fn(),
	getPhotoById: jest.fn(),
	...overrides,
});
