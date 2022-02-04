import React from 'react';
import { RoundedButton } from '../../../../shared/ui/Button/RoundedButton';

import './Details.scss';
import { IDetailsViewModel } from './DetailsViewModel';

interface IDetailsProps {
	viewModel: IDetailsViewModel;
	onCloseButtonClick: () => void;
}

export const Details = ({ viewModel, onCloseButtonClick }: IDetailsProps) => {
	return (
		<div className="details">
			<div className="details__actions-container">
				<RoundedButton
					className="details__close-button"
					onClick={onCloseButtonClick}
				>
					<img src={viewModel.closeButtonIcon} alt="details-close-button" />
				</RoundedButton>
			</div>
			<h1 className="details__description">{viewModel.description}</h1>
			{viewModel.user && (
				<div className="details__user">
					<img src={viewModel.user.image} alt="user"></img>
					<p>{viewModel.user.name}</p>
				</div>
			)}
			{viewModel.machine && (
				<div className="details__machine">
					{viewModel.machine.details.map((detail) => (
						<div className="details__machine-detail" key={detail.title}>
							<p className="details__machine-detail-title">{detail.title}</p>
							<p className="details__machine-detail-value">{detail.value}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};