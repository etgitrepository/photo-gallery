import React, { useEffect, useState } from 'react';
import {
	getFavoritePhotos,
	toggle,
} from '../../../favorites/domain/stores/favoritesReducer/favoritesReducer';
import { IPhoto } from '../../../gallery/domain/models/IPhoto';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { Portal } from '../../../shared/ui/portal/Portal';
import { detailStore } from '../../domain/store';
import { Details } from './Details/Details';
import { createDetailsViewModel } from './Details/DetailsViewModel';
import './DetailsContainer.scss';
import { DetailsPhoto } from './DetailsPhoto/DetailsPhoto';
import { createDetailsPhotoViewModel } from './DetailsPhoto/DetailsPhotoViewModel';

interface IDetailsContainerProps {
	photoId: string;
}

export const DetailsContainer = ({ photoId }: IDetailsContainerProps) => {
	const [photo, setPhoto] = useState<IPhoto | undefined>();
	const favorites = useAppSelector(getFavoritePhotos);
	const { navigate } = useNavigation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		detailStore.load(photoId).then((data) => setPhoto(data));
	}, [photoId]);

	if (!photo) return null;

	const onCloseButtonClick = () => {
		navigate();
	};

	const onToggleFavoriteClick = () => {
		dispatch(toggle(photo));
	};

	const detailsPhotoViewModel = createDetailsPhotoViewModel(photo);
	const detailsViewModel = createDetailsViewModel(
		photo,
		favorites.some((favorite) => favorite.id === photo.id),
	);

	return (
		<Portal>
			<div className="details-container">
				<div className="details-wrapper">
					<DetailsPhoto viewModel={detailsPhotoViewModel} />
					<Details
						viewModel={detailsViewModel}
						onCloseButtonClick={onCloseButtonClick}
						onToggleFavoriteClick={onToggleFavoriteClick}
					/>
				</div>
			</div>
		</Portal>
	);
};
