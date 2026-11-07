import type { AlbumId } from './albumLinks';

export interface Album {
	id: AlbumId;
	title: string;
	year: number;
	UPC?: string;
	artwork: string;
	tracks?: string[];
	audio?: string;
	video?: string;
}

// Descriptions and additional project information live in src/locales/{nl,en}.ts.
export const albums: Album[] = [
	{
		id: 'as-the-sun-rises',
		title: 'As The Sun Rises',
		year: 2023,
		UPC: '7333466697440',
		artwork: 'albums/as-the-sun-rises.jpg',
		tracks: [
			'From Silent Chaos',
			'Ode To The Better Dissipator',
			'The Purpose Of Our Star',
			"Earth's Teeming Crust",
			'Sight',
			"The Gibbon's Waking Dream",
			'Sleep',
			"Finnegan's Bardo",
			'Decay',
			'What Stays Divine To Us',
			'Reverence Of All Eyes Open',
			"The Hero's Game",
			'Eternal Return (Mantra)',
		],
	},
	{
		id: 'substructures',
		title: 'Substructures',
		year: 2022,
		UPC: '7316213887868',
		artwork: 'albums/substructures.jpg',
		tracks: [
			'Illusions',
			'Ego',
			'Substance',
			'Self',
			'Here',
			'Now',
			'Emptiness',
			'Being',
		],
	},
	{
		id: 'generative-variations',
		title: 'generative_variations.py',
		year: 2025,
		UPC: '7300343663249',
		artwork: 'albums/generative-variations.jpg',
		tracks: [
			'etude no. 1 for organ patch (irritation)',
			'etude no. 2 for organ patch (domination)',
			'etude no. 3 for organ patch (indecision)',
			'etude no. 4 for organ patch (adventure)',
			'etude no. 5 for organ patch (justification)',
			'etude no. 6 for vox patch (craving)',
			'quartet no. 1 for synths (faith)',
			'quartet no. 2 for synths (orientation)',
			'quartet no. 3 for synths (gravitation)',
			'quartet no. 4 for synths (manic spree)',
			'deoptimized quartet no. 1 for synths (stubbed toe)',
			'deoptimized quartet no. 2 for synths (flowing over obstacles)',
			'optimized quartet no. 1 for synths (hangover)',
			'optimized quartet no. 2 for synths (expansive blossoming)',
			'optimized quartet no. 3 for synths (judgement by appearances)',
			'optimized quartet no. 4 for synths (awaiting the four horsemen)',
		],
	},
];
