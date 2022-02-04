import React, { useEffect, useState } from 'react';
import { DetailsContainer } from '../../../details/ui/DetailsContainer/DetailsContainer';

import { useNavigation } from '../../../navigation/ui/utils/useNavigation';
import { Sidebar } from '../Sidebar/Sidebar';
import './MainLayout.scss';

interface IMainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
	const { location, getUrlParams } = useNavigation();
	const [detailPhotoId, setDetailPhotoId] = useState<string | null>(null);

	useEffect(() => {
		const paramValue = getUrlParams('photoId');

		if (paramValue) {
			setDetailPhotoId(paramValue);
		} else {
			setDetailPhotoId(paramValue);
		}
	}, [location.search, getUrlParams]);

	return (
		<div className="mainlayout">
			<Sidebar />
			<main className="mainlayout__content">{children}</main>
			{detailPhotoId && <DetailsContainer photoId={detailPhotoId} />}
		</div>
	);
};
