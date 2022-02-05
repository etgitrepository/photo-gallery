import { splitArrayIntoMultipleArrays } from '../../../../shared/helpers/splitArrayIntoMultipleArrays';
import { IPhoto } from '../../models/IPhoto';
import { IGetPhotos } from '../../use-cases/get-photos/getPhotos';

const PHOTOS_PER_PAGE = 30;

export type IPhotosStore = ReturnType<typeof createPhotosStore>;

export const createPhotosStore = (getPhotos: IGetPhotos) => {
	let photos: IPhoto[][] = [];
	let page = 0;

	const loadMore = async () => {
		page = page + 1;

		const result = await getPhotos(page, PHOTOS_PER_PAGE);

		if (result) {
			const splittedResult = splitArrayIntoMultipleArrays(result, 5);

			splittedResult.forEach((column, index) => {
				if (photos[index]) photos[index] = [...photos[index], ...column];
				else photos[index] = [...column];
			});
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
