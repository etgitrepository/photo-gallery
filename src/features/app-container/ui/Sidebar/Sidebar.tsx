import React from 'react';
import './Sidebar.scss';
import LogoIcon from '../../../../assets/icons/logo.svg';
import { createSidebarViewModel } from './SidebarViewModel';

import { Link } from 'react-router-dom';
import { useNavigation } from '../../../navigation/ui/utils/useNavigation';

export const Sidebar = () => {
	const { location } = useNavigation();
	const viewModel = createSidebarViewModel();

	return (
		<aside className="sidebar">
			<img className="sidebar__icon" src={LogoIcon} alt="logo" />
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
						<img src={item.icon} alt="navigation-icon" />
					</Link>
				))}
			</div>
		</aside>
	);
};
