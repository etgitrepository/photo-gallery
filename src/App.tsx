import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { createAppViewModel } from './AppViewModel';

function App() {
	const viewModel = createAppViewModel();

	return (
		<>
			<BrowserRouter>
				<Routes>
					{viewModel.navigationItems.map((item) => (
						<Route
							key={item.link}
							path={item.link}
							element={<item.element />}
						></Route>
					))}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
			<div id="portal" />
		</>
	);
}

export default App;
