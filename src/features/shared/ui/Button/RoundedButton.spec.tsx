import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RoundedButton } from './RoundedButton';

describe('RoundedButton', () => {
	const renderComponent = (children: string, onClick = jest.fn()) => {
		return render(<RoundedButton onClick={onClick}>{children}</RoundedButton>);
	};

	it('will render children provided', () => {
		const label = 'some-label';

		renderComponent(label);

		expect(screen.getByText('some-label')).toBeInTheDocument();
	});

	it('will call provided onClick function', () => {
		const onClick = jest.fn();
		const label = 'some-label';

		renderComponent(label, onClick);

		const button = screen.getByRole('button', { name: 'some-label' });

		fireEvent.click(button);

		expect(onClick).toBeCalledTimes(1);
	});
});
