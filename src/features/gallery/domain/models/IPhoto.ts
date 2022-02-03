export interface IPhoto {
	id: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		thumb: string;
		small: string;
	};
}
