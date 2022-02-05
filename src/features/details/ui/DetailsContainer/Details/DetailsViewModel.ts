import { IPhoto } from '../../../../gallery/domain/models/IPhoto';
import { maybeMapValue } from '../../../../shared/helpers/maybeMapValue';
import CrossIcon from '../../../../../assets/icons/cross.svg';
import FavoriteIcon from '../../../../../assets/icons/favorite.svg';
import DefaultUserIcon from '../../../../../assets/icons/default_user.svg';

export type IDetailsViewModel = ReturnType<typeof createDetailsViewModel>;

export const createDetailsViewModel = (photo: IPhoto, isFavorite: boolean) => ({
	favoriteButton: {
		icon: FavoriteIcon,
		label: isFavorite ? 'Unlike' : 'Like',
	},
	isFavorite,
	closeButtonIcon: CrossIcon,
	description: maybeMapValue(photo.description, (value) => value),
	user: maybeMapValue(photo.user, (value) => ({
		name: value.name,
		image: value.profileImage || DefaultUserIcon,
	})),
	machine: maybeMapValue(photo.machine, (value) => {
		const details = [
			{
				title: 'Camera make',
				value: maybeMapValue(value.make, (value) => value) || '-',
			},
			{
				title: 'Camera model',
				value: maybeMapValue(value.model, (value) => value) || '-',
			},
			{
				title: 'Focal length',
				value: maybeMapValue(value.focalLength, (value) => value) || '-',
			},
			{
				title: 'Aperture',
				value: maybeMapValue(value.exposureTime, (value) => value) || '-',
			},
			{
				title: 'Shutter speed',
				value: maybeMapValue(value.aperture, (value) => value) || '-',
			},

			{
				title: 'ISO',
				value: maybeMapValue(value.iso, (value) => value) || '-',
			},
		];

		return { details };
	}),
});
