import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { createDetailsStore } from './detailsStore';

describe('detailsStore', () => {
	const createStore = (getPhotoById = jest.fn()) => {
		const photosStore = createDetailsStore(getPhotoById);

		return photosStore;
	};

	const photoMock: IPhoto = {
		id: 'some-id',
		uniqueId: 'some-random-id',
		urls: {
			small: 'some-url-small',
			full: 'some-url-full',
			raw: 'some-url-raw',
			regular: 'some-url-regular',
			thumb: 'some-url-thumb',
		},
		description: null,
	};

	it('will load data', async () => {
		const getPhotoById = jest.fn().mockResolvedValue(photoMock);
		const photoId = 'some-id';
		const store = createStore(getPhotoById);

		const result = await store.load(photoId);

		expect(result).toEqual({
			id: 'some-id',
			uniqueId: 'some-random-id',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			description: null,
		});
	});

	it('will return photo', async () => {
		const getPhotoById = jest.fn().mockResolvedValue(photoMock);
		const photoId = 'some-id';
		const store = createStore(getPhotoById);

		await store.load(photoId);

		const photo = store.getPhoto();

		expect(photo).toEqual({
			id: 'some-id',
			uniqueId: 'some-random-id',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			description: null,
		});
	});
});
