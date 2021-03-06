import { IGalleryItemViewModel } from './GalleryItemViewModel';
import './GalleryItem.scss';

interface IGalleryItemProps {
	viewModel: IGalleryItemViewModel;
	onGalleryItemClick: (id: string) => void;
}

export const GalleryItem = ({
	viewModel,
	onGalleryItemClick,
}: IGalleryItemProps) => {
	return (
		<div
			className="gallery-item"
			onClick={() => onGalleryItemClick(viewModel.photo.id)}
		>
			<img
				className="gallery-item__img"
				alt="gallery-img"
				src={viewModel.photo.urls.small}
			/>
			{viewModel.photo.isFavorite && (
				<img
					className="gallery-item__favorite-img"
					src={viewModel.favoriteIcon}
					alt="gallery-favorite-icon"
				/>
			)}
		</div>
	);
};
