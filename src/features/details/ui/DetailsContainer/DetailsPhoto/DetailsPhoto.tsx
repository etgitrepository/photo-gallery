import React from 'react';
import './DetailsPhoto.scss';
import { IDetailsPhotoViewModel } from './DetailsPhotoViewModel';

interface IDetailsPhotoProps {
	viewModel: IDetailsPhotoViewModel;
}

export const DetailsPhoto = ({ viewModel }: IDetailsPhotoProps) => {
	return (
		<div className="details-photo">
			<img src={viewModel.image} alt="details" />
		</div>
	);
};
