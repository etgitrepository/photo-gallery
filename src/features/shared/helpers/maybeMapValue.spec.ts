import { maybeMapValue } from './maybeMapValue';

describe('maybeMapValue', () => {
	it('will return undefined when input is undefined', () => {
		const result = maybeMapValue(undefined, (input: string) => input);

		expect(result).toBe(undefined);
	});

	it('will return undefined when input is null', () => {
		const result = maybeMapValue(null, (input: string) => input);

		expect(result).toBe(undefined);
	});

	it('it will use mapper to return mapped value of same type', () => {
		const toUpperCaseMapper = (input: string) => {
			return input.toUpperCase();
		};

		const result = maybeMapValue('hello', toUpperCaseMapper);

		expect(result).toEqual('HELLO');
	});

	it('it will use mapper to return mapped value of different type', () => {
		const toDisplayValue = (input: number) => {
			return `Count ${input}`;
		};

		const result = maybeMapValue(5, toDisplayValue);

		expect(result).toEqual('Count 5');
	});
});
