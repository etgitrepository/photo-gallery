import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import './MainLayout.scss';

interface IMainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
	return (
		<div className="mainlayout">
			<Sidebar />
			<main className="mainlayout__content">{children}</main>
		</div>
	);
};
