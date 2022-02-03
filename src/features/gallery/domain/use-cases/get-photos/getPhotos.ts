import { IPhotosService } from '../../../../shared/api/photosService/photosService';
import { IPhoto } from '../../models/IPhoto';
import { createPhoto } from './mappers/createPhoto';

export type IGetPhotos = (
	page: number,
	perPage: number,
) => Promise<IPhoto[] | undefined>;

export const createGetPhotos =
	(service: IPhotosService): IGetPhotos =>
	async (page, perPage) => {
		const photos = await service
			.getPhotos({ page, perPage })
			.then((res) => res.response?.results);

		return photos?.map(createPhoto);
	};
