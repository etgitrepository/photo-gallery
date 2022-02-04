import { IPhoto } from '../../models/IPhoto';
import { createPhotosStore } from './photosStore';

describe('photosStore', () => {
	const createStore = (getPhotos = jest.fn()) => {
		const photosStore = createPhotosStore(getPhotos);

		return photosStore;
	};

	const photosMock: IPhoto[] = [
		{
			id: 'some-id',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			description: null,
		},
		{
			id: 'some-id-2',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			description: null,
		},
	];

	it('will load data', async () => {
		const getPhotos = jest.fn().mockResolvedValue(photosMock);
		const store = createStore(getPhotos);

		const result = await store.loadMore();

		expect(result).toEqual([
			[
				{
					id: 'some-id',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
					description: null,
				},
			],
			undefined,
			[
				{
					id: 'some-id-2',
					urls: {
						small: 'some-url-small',
						full: 'some-url-full',
						raw: 'some-url-raw',
						regular: 'some-url-regular',
						thumb: 'some-url-thumb',
					},
					description: null,
				},
			],
		]);
	});

	it('will reset data', async () => {
		const getPhotos = jest.fn().mockResolvedValue(photosMock);
		const store = createStore(getPhotos);

		await store.loadMore();

		store.reset();

		expect(store.findPhotos()).toEqual([]);
		expect(store.findPage()).toBe(0);
	});
});
