import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { IGetPhotoById } from '../../use-cases/get-photo-by-id/getPhotoById';

export const createDetailsStore = (getPhotoById: IGetPhotoById) => {
	let photo: IPhoto | undefined = undefined;

	const load = async (id: string) => {
		const result = await getPhotoById(id);

		photo = result;

		return photo;
	};

	const getPhoto = () => {
		return photo;
	};

	return { getPhoto, load };
};
