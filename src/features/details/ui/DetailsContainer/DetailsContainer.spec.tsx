import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { validateFunctionMock } from '../../../shared/test-helpers/validateFunctionMock';
import { detailStore } from '../../domain/store';

import { DetailsContainer } from './DetailsContainer';

jest.mock('../../domain/store');

jest.mock('./DetailsPhoto/DetailsPhoto.tsx', () => ({
	DetailsPhoto: () => <div>Mocked Details Photo</div>,
}));

const mockedLoad = validateFunctionMock(detailStore.load);

describe('DetailsContainer', () => {
	const renderComponent = () => {
		const photoId = 'some-photo-id';

		return render(
			<MemoryRouter>
				<DetailsContainer photoId={photoId} />
			</MemoryRouter>,
		);
	};

	it('will not render', () => {
		mockedLoad.mockResolvedValue(undefined);

		const { container } = renderComponent();

		expect(container).toBeEmptyDOMElement();
	});
});
