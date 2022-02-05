export const splitArrayIntoMultipleArrays = <T>(
	data: T[],
	numberOfChunks: number,
): T[][] => {
	const result = data.reduce((resultArray: T[][], item, index) => {
		const chunkIndex = index % numberOfChunks;

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	return result;
};
