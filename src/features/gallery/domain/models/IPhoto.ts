export interface IPhoto {
	id: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		thumb: string;
		small: string;
	};
	description: string | null;
	user?: {
		name: string;
		profileImage: string | null;
	};
	machine?: {
		make: string | null;
		model: string | null;
		exposureTime: string | null;
		aperture: string | null;
		focalLength: string | null;
		iso: number | null;
	};
}
