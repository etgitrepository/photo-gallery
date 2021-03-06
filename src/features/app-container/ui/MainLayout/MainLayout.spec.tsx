import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../Sidebar/Sidebar', () => ({
	Sidebar: () => <>Mocked Sidebar</>,
}));

describe('MainLayout', () => {
	const renderComponent = (children: string) => {
		return render(
			<MemoryRouter>
				<MainLayout>{children}</MainLayout>
			</MemoryRouter>,
		);
	};

	it('will render provided children', () => {
		const label = 'some-label';
		renderComponent(label);

		expect(screen.getByText('some-label')).toBeInTheDocument();
	});

	it('will render sidebar', () => {
		const label = 'some-label';
		renderComponent(label);

		expect(screen.getByText('Mocked Sidebar')).toBeInTheDocument();
	});
});
