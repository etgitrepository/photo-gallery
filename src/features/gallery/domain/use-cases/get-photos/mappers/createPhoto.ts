import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { IPhoto } from '../../../models/IPhoto';

export const createPhoto = (photo: Basic): IPhoto => {
	return {
		id: photo.id,
		urls: photo.urls,
		description: photo.description,
		user: photo.user
			? {
					name: photo.user.name,
					profileImage: photo.user.profile_image.small,
			  }
			: undefined,
	};
};
