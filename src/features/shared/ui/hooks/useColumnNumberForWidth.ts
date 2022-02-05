import { useEffect, useState } from 'react';
import { BREAKPOINT_MOBILE } from '../../../../styles/theme/responsive/settings';

const MOBILE_COLUMNS = 2;
const DESKTOP_COLUMNS = 5;

export const useColumnNumberForWidth = () => {
	const windowWidth = window.innerWidth;
	const [columns, setColumns] = useState<number>(
		windowWidth < BREAKPOINT_MOBILE ? MOBILE_COLUMNS : DESKTOP_COLUMNS,
	);

	useEffect(() => {
		const listener = () => {
			windowWidth < BREAKPOINT_MOBILE
				? setColumns(MOBILE_COLUMNS)
				: setColumns(DESKTOP_COLUMNS);
		};

		window.addEventListener('resize', listener);

		listener();

		return () => {
			window.removeEventListener('resize', listener);
		};
	}, [windowWidth]);

	return columns;
};
