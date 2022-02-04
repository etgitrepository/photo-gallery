import { Full } from 'unsplash-js/dist/methods/photos/types';
import { createPhotoDetails } from './createPhotoDetails';

describe('createPhotoDetails', () => {
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
			exif: {
				make: 'some-make',
				model: 'some-model',
				exposure_time: 'some-expure-time',
				aperture: 'some-aperture',
				focal_length: 'some-focal-length',
				iso: 1,
			},
		} as Full;

		const result = createPhotoDetails(response);

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
			machine: {
				aperture: 'some-aperture',
				exposureTime: 'some-expure-time',
				focalLength: 'some-focal-length',
				iso: 1,
				make: 'some-make',
				model: 'some-model',
			},
		});
	});
});
