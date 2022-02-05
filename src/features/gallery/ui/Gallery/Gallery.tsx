import { IGalleryViewModel } from './GalleryViewModel';
import './Gallery.scss';
import { GalleryItem } from './GalleryItem/GalleryItem';

interface IGalleryProps {
	viewModel: IGalleryViewModel;
	onGalleryItemClick: (id: string) => void;
}

export const Gallery = ({ viewModel, onGalleryItemClick }: IGalleryProps) => {
	return (
		<div className="gallery">
			{viewModel.photos.map((column, index) => (
				<div key={index}>
					{column.map((photo) => (
						<GalleryItem
							viewModel={photo}
							key={photo.photo.id}
							onGalleryItemClick={onGalleryItemClick}
						/>
					))}
				</div>
			))}
		</div>
	);
};
