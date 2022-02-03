import { IGalleryItemViewModel } from './GalleryItemViewModel';
import './GalleryItem.scss';

interface IGalleryItemProps {
	viewModel: IGalleryItemViewModel;
}

export const GalleryItem = ({ viewModel }: IGalleryItemProps) => {
	return (
		<img
			className="gallery-item"
			alt="gallery-img"
			src={viewModel.photo.urls.small}
		/>
	);
};
