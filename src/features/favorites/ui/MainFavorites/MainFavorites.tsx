import React from 'react';
import { MainLayout } from '../../../app-container/ui/MainLayout/MainLayout';
import { Gallery } from '../../../gallery/ui/Gallery/Gallery';
import { createGalleryViewModel } from '../../../gallery/ui/Gallery/GalleryViewModel';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { useAppSelector } from '../../../shared/store/hooks';
import {
	getFavoritePhotos,
	getFavoritePhotosSplitted,
} from '../../domain/stores/favoritesReducer/favoritesReducer';

export const MainFavorites = () => {
	const photos = useAppSelector(getFavoritePhotosSplitted);
	const favoritesFlat = useAppSelector(getFavoritePhotos);
	const { navigate } = useNavigation();

	const onGalleryItemClick = (photoId: string) => {
		navigate(undefined, { photoId });
	};

	const galleryViewModel = createGalleryViewModel(photos, favoritesFlat);

	return (
		<MainLayout>
			<Gallery
				viewModel={galleryViewModel}
				onGalleryItemClick={onGalleryItemClick}
			/>
		</MainLayout>
	);
};
