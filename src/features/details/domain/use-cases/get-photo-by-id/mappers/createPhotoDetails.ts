import { Full } from 'unsplash-js/dist/methods/photos/types';
import { IPhoto } from '../../../../../gallery/domain/models/IPhoto';
import { randomIdentifier } from '../../../../../shared/helpers/randomIdentifier';

export const createPhotoDetails = (photo: Full): IPhoto => {
	return {
		id: photo.id,
		uniqueId: randomIdentifier(),
		urls: photo.urls,
		description: photo.description,
		user: photo.user
			? {
					name: photo.user.name,
					profileImage: photo.user.profile_image.small,
			  }
			: undefined,
		machine: {
			make: photo.exif.make,
			model: photo.exif.model,
			exposureTime: photo.exif.exposure_time,
			aperture: photo.exif.aperture,
			focalLength: photo.exif.focal_length,
			iso: photo.exif.iso,
		},
	};
};
