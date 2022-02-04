export const maybeMapValue = <T, U>(
	value: T | undefined | null,
	map: (value: T) => U,
): U | undefined => {
	if (value === undefined || value === null) return undefined;

	return map(value);
};
