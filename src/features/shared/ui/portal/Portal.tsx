import { useEffect } from 'react';

import { createPortal } from 'react-dom';

interface IPortalProps {
	children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps) => {
	const container = document.createElement('div');
	const root = document.getElementById('portal');

	useEffect(() => {
		if (root) {
			root.appendChild(container);
		}

		return () => {
			if (root) {
				root.removeChild(container);
			}
		};
	}, [root, container]);

	return createPortal(children, container);
};
