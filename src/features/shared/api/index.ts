import { createApi } from 'unsplash-js';
import { createPhotosService } from './photosService/photosService';

//TODO - move accessKey to environment config
const api = createApi({
	accessKey: 'Y_sHjNftqn_3Q7IG2ZwdNiyj1fiLPmk8YZyynoo0EO4',
});

export const photosService = createPhotosService(api.photos);
