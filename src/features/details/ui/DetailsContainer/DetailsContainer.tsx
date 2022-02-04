import React, { useEffect, useState } from 'react';
import { IPhoto } from '../../../gallery/domain/models/IPhoto';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
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
	const { navigate } = useNavigation();

	useEffect(() => {
		detailStore.load(photoId).then((data) => setPhoto(data));
	}, [photoId]);

	if (!photo) return null;

	const onCloseButtonClick = () => {
		navigate();
	};

	const detailsPhotoViewModel = createDetailsPhotoViewModel(photo);
	const detailsViewModel = createDetailsViewModel(photo);

	return (
		<Portal>
			<div className="details-container">
				<div className="details-wrapper">
					<DetailsPhoto viewModel={detailsPhotoViewModel} />
					<Details
						viewModel={detailsViewModel}
						onCloseButtonClick={onCloseButtonClick}
					/>
				</div>
			</div>
		</Portal>
	);
};
