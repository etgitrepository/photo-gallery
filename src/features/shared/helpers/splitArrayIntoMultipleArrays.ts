export const splitArrayIntoMultipleArrays = <T>(
	data: T[],
	numberOfChunks: number,
): T[][] => {
	const perChunk = data.length / numberOfChunks;

	const result = data.reduce((resultArray: T[][], item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	return result;
};
