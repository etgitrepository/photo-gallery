import React from 'react';
import { MainLayout } from '../../../app-container/ui/MainLayout/MainLayout';
import { Gallery } from '../../../gallery/ui/Gallery/Gallery';
import { createGalleryViewModel } from '../../../gallery/ui/Gallery/GalleryViewModel';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { useAppSelector } from '../../../shared/store/hooks';
import { useColumnNumberForWidth } from '../../../shared/ui/hooks/useColumnNumberForWidth';
import {
	getFavoritePhotos,
	isPhotoFavorite,
} from '../../domain/stores/favoritesReducer/favoritesReducer';

export const MainFavorites = () => {
	const photos = useAppSelector(getFavoritePhotos);
	const isFavorite = useAppSelector(isPhotoFavorite);
	const { navigate } = useNavigation();
	const columns = useColumnNumberForWidth();

	const onGalleryItemClick = (photoId: string) => {
		navigate(undefined, { photoId });
	};

	const galleryViewModel = createGalleryViewModel(photos, isFavorite, columns);

	return (
		<MainLayout>
			<Gallery
				viewModel={galleryViewModel}
				onGalleryItemClick={onGalleryItemClick}
			/>
		</MainLayout>
	);
};
