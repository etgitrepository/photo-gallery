import { getPhotos } from '../use-cases';
import { createPhotosStore } from './photosStore/photosStore';

export const photosStore = createPhotosStore(getPhotos);
