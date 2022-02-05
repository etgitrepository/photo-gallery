import { IPhoto } from '../../models/IPhoto';
import { IGetPhotos } from '../../use-cases/get-photos/getPhotos';

const PHOTOS_PER_PAGE = 15;

export type IPhotosStore = ReturnType<typeof createPhotosStore>;

export const createPhotosStore = (getPhotos: IGetPhotos) => {
	let photos: IPhoto[] = [];
	let page = 0;

	const loadMore = async () => {
		page = page + 1;

		const result = await getPhotos(page, PHOTOS_PER_PAGE);

		if (result) {
			photos = [...photos, ...result];

			return photos;
		}

		return photos;
	};

	const reset = () => {
		photos = [];
		page = 0;
	};

	const findPhotos = () => {
		return photos;
	};

	const findPage = () => {
		return page;
	};

	return { loadMore, reset, findPhotos, findPage };
};
