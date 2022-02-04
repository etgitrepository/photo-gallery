import { createPhotosServiceMock } from '../../../../shared/api/photosService/_mocks_/photosServiceMock';
import { createGetPhotoById } from './getPhotoById';

describe('getPhotoById', () => {
	const createUseCase = (
		serviceGetPhotoById = jest.fn().mockResolvedValue({}),
	) => {
		const service = createPhotosServiceMock({
			getPhotoById: serviceGetPhotoById,
		});

		const getPhotoById = createGetPhotoById(service);

		return { getPhotoById, service };
	};

	it('will call getPhotos from service with provided params', async () => {
		const { getPhotoById, service } = createUseCase();

		await getPhotoById('some-id');

		expect(service.getPhotoById).toBeCalledTimes(1);
		expect(service.getPhotoById).toBeCalledWith('some-id');
	});

	it('will return mapped response', async () => {
		const serviceGetPhotoById = jest.fn().mockResolvedValue({
			response: {
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
				exif: {},
			},
		});
		const { getPhotoById } = createUseCase(serviceGetPhotoById);

		const result = await getPhotoById('some-id');

		expect(result).toEqual({
			description: undefined,
			id: undefined,
			machine: {},
			urls: {
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				small: 'some-url-small',
				thumb: 'some-url-thumb',
			},
			user: undefined,
		});
	});
});
