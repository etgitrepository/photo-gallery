import { photosService } from '../../../shared/api';
import { createGetPhotoById } from './get-photo-by-id/getPhotoById';

export const getPhotoById = createGetPhotoById(photosService);
