import { useEffect } from 'react';

interface IIntersectionObserverLoader {
	load: () => void;
	reset: () => void;
	target: React.MutableRefObject<HTMLDivElement | null>;
}

export const useIntersectionObserverLoader = ({
	load,
	reset,
	target,
}: IIntersectionObserverLoader) => {
	useEffect(() => {
		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			const target = entries[0];
			if (target.isIntersecting) {
				load();
			}
		};

		const observer = new IntersectionObserver(handleObserver);

		if (target.current) observer.observe(target.current);

		return () => {
			reset();
			observer.disconnect();
		};
	}, [target, load, reset]);
};
