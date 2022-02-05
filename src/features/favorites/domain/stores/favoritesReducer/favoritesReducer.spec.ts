import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { validateFunctionMock } from '../../../../shared/test-helpers/validateFunctionMock';
import { getSavedFavorites } from '../../use-cases';
import favoritesReducer, { toggle } from './favoritesReducer';

jest.mock('../../use-cases');

const mockedGetSavedFavorites = validateFunctionMock(getSavedFavorites);

describe('favoritesReducer', () => {
	const photo: IPhoto = {
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

	it('will set initial state', () => {
		mockedGetSavedFavorites.mockReturnValue({
			photos: [
				{
					urls: { raw: '', full: '', regular: '', thumb: '', small: '' },
					id: 'some-id',
					uniqueId: 'some-unique-id',
					description: 'some-description',
				},
			],
		});

		expect(favoritesReducer(undefined, { type: '' })).toEqual({
			photos: [
				{
					urls: { raw: '', full: '', regular: '', thumb: '', small: '' },
					id: 'some-id',
					uniqueId: 'some-unique-id',
					description: 'some-description',
				},
			],
		});
	});

	it('will add favorite photo', () => {
		mockedGetSavedFavorites.mockReturnValue({ photos: [] });

		expect(favoritesReducer(undefined, toggle(photo))).toEqual({
			photos: [
				{
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
				},
			],
		});
	});

	it('will remove favorite photo', () => {
		mockedGetSavedFavorites.mockReturnValue({
			photos: [
				{
					urls: { raw: '', full: '', regular: '', thumb: '', small: '' },
					id: 'some-id',
					uniqueId: 'some-unique-id',
					description: 'some-description',
				},
			],
		});

		expect(favoritesReducer(undefined, toggle(photo))).toEqual({
			photos: [],
		});
	});
});
