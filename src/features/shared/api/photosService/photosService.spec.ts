import { createPhotosService } from './photosService';

describe('photosService', () => {
	it('will call list from api provided', () => {
		const client = { list: jest.fn() };

		const service = createPhotosService(client);

		service.getPhotos({ page: 1, perPage: 10 });

		expect(client.list).toBeCalledWith({ page: 1, perPage: 10 });
	});
});
