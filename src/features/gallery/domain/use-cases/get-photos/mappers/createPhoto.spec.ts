import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { createPhoto } from './createPhoto';

jest.mock('../../../../../shared/helpers/randomIdentifier');

describe('createPhoto', () => {
	it('will map get photos response to domain photos', () => {
		const response = {
			id: 'some-id',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			user: {
				name: 'some-name',
				profile_image: {
					small: 'some-profile-image',
				},
			},
		} as Basic;

		const result = createPhoto(response);

		expect(result).toEqual({
			id: 'some-id',
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
			user: {
				name: 'some-name',
				profileImage: 'some-profile-image',
			},
		});
	});
});
