import { photosService } from '../../../shared/api';
import { createGetPhotos } from './get-photos/getPhotos';

export const getPhotos = createGetPhotos(photosService);
