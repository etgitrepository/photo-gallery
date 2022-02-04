import { createPhotosService } from './photosService';

describe('photosService', () => {
	it('will call list from api with data provided', () => {
		const client = { list: jest.fn() };

		const service = createPhotosService(client);

		service.getPhotos({ page: 1, perPage: 10 });

		expect(client.list).toBeCalledWith({ page: 1, perPage: 10 });
	});

	it('will call get with id provided', () => {
		const client = { get: jest.fn() };

		const service = createPhotosService(client);

		service.getPhotoById('some-id');

		expect(client.get).toBeCalledWith({ photoId: 'some-id' });
	});
});
