import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { createPhoto } from './createPhoto';

describe('createPhoto', () => {
	it('will map get photos response to domain photos', () => {
		const response = {
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
		} as Basic;

		const result = createPhoto(response);

		expect(result).toEqual({
			urls: {
				small: 'some-url-small',
				full: 'some-url-full',
				raw: 'some-url-raw',
				regular: 'some-url-regular',
				thumb: 'some-url-thumb',
			},
		});
	});
});
