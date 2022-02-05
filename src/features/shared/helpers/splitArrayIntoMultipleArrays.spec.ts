import { splitArrayIntoMultipleArrays } from './splitArrayIntoMultipleArrays';

describe('splitArrayIntoMultipleArrays', () => {
	it('will return n arrays from one array', () => {
		const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		const result = splitArrayIntoMultipleArrays(data, 5);

		expect(result).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
			[7, 8],
			[9, 10],
		]);
	});
});
