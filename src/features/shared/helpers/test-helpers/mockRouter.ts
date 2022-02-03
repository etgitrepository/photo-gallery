export const mockedUsedNavigate = jest.fn();
export const mockedLocation = {
	pathname: 'some-pathname',
};

jest.mock('react-router-dom', () => ({
	useNavigate: () => mockedUsedNavigate,
	useLocation: () => mockedLocation,
}));
