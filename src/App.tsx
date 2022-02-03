import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { createAppViewModel } from './AppViewModel';

import { MainGallery } from './features/gallery/ui/MainGallery/MainGallery';

function App() {
	const viewModel = createAppViewModel();

	return (
		<>
			<BrowserRouter>
				<Routes>
					{viewModel.navigationItems.map((item) => (
						<Route path={item.link} element={<item.element />}></Route>
					))}
					<Route path="*" element={<MainGallery />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
