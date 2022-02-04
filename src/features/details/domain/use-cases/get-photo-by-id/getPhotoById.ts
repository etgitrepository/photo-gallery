import { IPhotosService } from '../../../../shared/api/photosService/photosService';
import { IPhoto } from '../../../../gallery/domain/models/IPhoto';

import { createPhotoDetails } from './mappers/createPhotoDetails';

export type IGetPhotoById = (id: string) => Promise<IPhoto | undefined>;

export const createGetPhotoById =
	(service: IPhotosService): IGetPhotoById =>
	async (id: string) => {
		const photo = await service.getPhotoById(id).then((res) => res.response);

		if (!photo) return undefined;

		return createPhotoDetails(photo);
	};
