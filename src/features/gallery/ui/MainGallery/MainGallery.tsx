import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MainLayout } from '../../../app-container/ui/MainLayout/MainLayout';
import { isPhotoFavorite } from '../../../favorites/domain/stores/favoritesReducer/favoritesReducer';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { useAppSelector } from '../../../shared/store/hooks';
import { useColumnNumberForWidth } from '../../../shared/ui/hooks/useColumnNumberForWidth';
import { useIntersectionObserverLoader } from '../../../shared/ui/hooks/useIntersectionObserverLoader';
import { IPhoto } from '../../domain/models/IPhoto';
import { photosStore } from '../../domain/store';
import { Gallery } from '../Gallery/Gallery';
import { createGalleryViewModel } from '../Gallery/GalleryViewModel';
import './MainGallery.scss';

export const MainGallery = () => {
	const [photos, setPhotos] = useState<IPhoto[]>([]);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const { navigate } = useNavigation();
	const isFavorite = useAppSelector(isPhotoFavorite);
	const columns = useColumnNumberForWidth();

	const load = useCallback(() => {
		photosStore.loadMore().then((data) => setPhotos([...data]));
	}, []);

	const reset = useCallback(() => {
		photosStore.reset();
	}, []);

	useEffect(() => {
		load();
	}, [load]);

	useIntersectionObserverLoader({ load, reset, target: loaderRef });

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
			<div className="main-gallery__loader" ref={loaderRef}></div>
		</MainLayout>
	);
};
