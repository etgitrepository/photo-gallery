// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MockedFunction = (...args: any) => any;

export type FunctionMock<T extends MockedFunction> = jest.Mock<ReturnType<T>>;

/**
 * Validate that the provided function is mocked, and cast it to the relevant Jest mock type
 */
export function validateFunctionMock<T extends MockedFunction>(
	fn: T,
	functionName?: string,
): FunctionMock<T> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const maybeMockedFunction: any = fn;

	if (typeof maybeMockedFunction.mockImplementation === 'undefined') {
		throw new Error(
			`The function '${
				functionName ?? fn.name
			}' should be mocked. Use \`jest.mock('path/to/module')\` to mock the module containing the function.`,
		);
	}

	return maybeMockedFunction;
}
