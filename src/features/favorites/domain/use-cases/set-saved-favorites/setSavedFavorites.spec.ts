import { createSetSavedFavorites } from './setSavedFavorites';

describe('setSavedFavorites', () => {
	const createUseCase = () => {
		const mockedSet = jest.fn();
		const mockedGet = jest.fn();
		const mockedStorage = {
			set: mockedSet,
			get: mockedGet,
		};

		const setSavedFavorites = createSetSavedFavorites(mockedStorage);

		return { mockedSet, setSavedFavorites };
	};

	it('will call set with stringified values', () => {
		const { mockedSet, setSavedFavorites } = createUseCase();
		const data = {
			photos: [
				{
					urls: { raw: '', full: '', regular: '', thumb: '', small: '' },
					id: 'some-id',
					uniqueId: 'some-random-id',
					description: 'some-description',
				},
			],
		};

		setSavedFavorites(data);

		expect(mockedSet).toBeCalledWith(
			'{"photos":[{"urls":{"raw":"","full":"","regular":"","thumb":"","small":""},"id":"some-id","uniqueId":"some-random-id","description":"some-description"}]}',
		);
	});
});
