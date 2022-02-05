import { createGetSavedFavorites } from './getSavedFavorites';

describe('getSavedFavorites', () => {
	const createUseCase = () => {
		const mockedSet = jest.fn();
		const mockedGet = jest.fn();
		const mockedStorage = {
			set: mockedSet,
			get: mockedGet,
		};

		const getSavedFavorites = createGetSavedFavorites(mockedStorage);

		return { mockedGet, getSavedFavorites };
	};

	it('will call get stored values', () => {
		const { mockedGet, getSavedFavorites } = createUseCase();

		mockedGet.mockReturnValue(
			'{"photos":[{"urls":{"raw":"","full":"","regular":"","thumb":"","small":""},"id":"some-id","description":"some-description"}]}',
		);

		const result = getSavedFavorites();

		expect(result).toEqual({
			photos: [
				{
					urls: { raw: '', full: '', regular: '', thumb: '', small: '' },
					id: 'some-id',
					description: 'some-description',
				},
			],
		});
	});
});
