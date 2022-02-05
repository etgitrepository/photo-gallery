import { createPhotosServiceMock } from '../../../../shared/api/photosService/_mocks_/photosServiceMock';
import { createGetPhotos } from './getPhotos';

jest.mock('../../../../shared/helpers/randomIdentifier.ts');

describe('getPhotos', () => {
	const createUseCase = (
		serviceGetPhotos = jest.fn().mockResolvedValue({}),
	) => {
		const service = createPhotosServiceMock({ getPhotos: serviceGetPhotos });

		const getPhotos = createGetPhotos(service);

		return { getPhotos, service };
	};

	it('will call getPhotos from service with provided params', async () => {
		const { getPhotos, service } = createUseCase();

		await getPhotos(1, 10);

		expect(service.getPhotos).toBeCalledTimes(1);
	});

	it('will return mapped response', async () => {
		const serviceGetPhotos = jest.fn().mockResolvedValue({
			response: {
				results: [
					{
						urls: {
							small: 'some-url-small',
							full: 'some-url-full',
							raw: 'some-url-raw',
							regular: 'some-url-regular',
							thumb: 'some-url-thumb',
						},
					},
				],
			},
		});

		const { getPhotos } = createUseCase(serviceGetPhotos);

		const result = await getPhotos(1, 10);

		expect(result).toEqual([
			{
				urls: {
					small: 'some-url-small',
					full: 'some-url-full',
					raw: 'some-url-raw',
					regular: 'some-url-regular',
					thumb: 'some-url-thumb',
				},
			},
		]);
	});
});
