import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Basic, Full } from 'unsplash-js/dist/methods/photos/types';
import { PaginationParams } from 'unsplash-js/dist/types/request';

export type IPhotosService = ReturnType<typeof createPhotosService>;

export const createPhotosService = (client: any) => {
	const getPhotos = async ({ page, perPage }: PaginationParams) => {
		return client.list({ page, perPage }) as ApiResponse<{
			results: Basic[];
			total: number;
		}>;
	};

	const getPhotoById = async (photoId: string) => {
		return client.get({ photoId }) as ApiResponse<Full>;
	};

	return { getPhotos, getPhotoById };
};
