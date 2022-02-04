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
			const splittedResult = splitData(result);

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

const splitData = (photos: IPhoto[]): IPhoto[][] => {
	const perChunk = photos.length / 5;

	const result = photos.reduce((resultArray: IPhoto[][], item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	return result;
};
