import React, { useCallback, useRef, useState } from 'react';
import { MainLayout } from '../../../app-container/ui/MainLayout/MainLayout';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { useIntersectionObserverLoader } from '../../../shared/ui/hooks/useIntersectionObserverLoader';
import { IPhoto } from '../../domain/models/IPhoto';
import { photosStore } from '../../domain/store';
import { Gallery } from '../Gallery/Gallery';
import { createGalleryViewModel } from '../Gallery/GalleryViewModel';
import './MainGallery.scss';

export const MainGallery = () => {
	const [photos, setPhotos] = useState<IPhoto[][]>([]);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const { navigate } = useNavigation();

	const load = useCallback(() => {
		photosStore.loadMore().then((data) => setPhotos([...data]));
	}, []);

	const reset = useCallback(() => {
		photosStore.reset();
	}, []);

	const onGalleryItemClick = (photoId: string) => {
		navigate(undefined, { photoId });
	};

	useIntersectionObserverLoader({ load, reset, target: loaderRef });

	const galleryViewModel = createGalleryViewModel(photos);

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
