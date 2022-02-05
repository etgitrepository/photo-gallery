import { randomIdentifier } from './randomIdentifier';

describe('Random identifier should generate a unique identifier', () => {
	it('should not generate the same identifier twice', () => {
		const identifiers = Array(100).fill(undefined).map(randomIdentifier).sort();

		const result = identifiers.every((identifier, index, array) => {
			if (index === 0) {
				return true;
			}

			return identifier !== array[index - 1];
		});

		expect(result).toBe(true);
	});
});
