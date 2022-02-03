import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { IPhoto } from '../../../models/IPhoto';

export const createPhoto = (photo: Basic): IPhoto => ({
	id: photo.id,
	urls: photo.urls,
});
