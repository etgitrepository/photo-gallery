import React from 'react';
import './Sidebar.scss';

import { createSidebarViewModel } from './SidebarViewModel';

import { Link } from 'react-router-dom';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';

export const Sidebar = () => {
	const { location } = useNavigation();
	const viewModel = createSidebarViewModel();

	return (
		<aside className="sidebar">
			<div className="sidebar__navigation-container">
				{viewModel.navigationItems.map((item) => (
					<Link
						key={item.key}
						to={item.link}
						className={`sidebar__navigation-link ${
							item.link === location.pathname
								? 'sidebar__navigation-link--selected'
								: ''
						}`}
					>
						<img
							src={item.icon}
							className="sidebar__navigation-link-icon"
							alt="navigation-icon"
						/>
					</Link>
				))}
			</div>
		</aside>
	);
};
