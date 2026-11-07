export interface AlbumLinks {
	spotify?: string;
	appleMusic?: string;
	youtubeMusic?: string;
	deezer?: string;
}

export type AlbumId =
	| 'as-the-sun-rises'
	| 'substructures'
	| 'generative-variations';

export const albumLinks: Record<AlbumId, AlbumLinks> = {
	'as-the-sun-rises': {
		spotify:
			'https://open.spotify.com/album/35QyUVyVrGmRtUApTz0eyd?si=-Zg621w8RB6SjxgRIJXNVA',
		appleMusic:
			'https://music.apple.com/us/album/as-the-sun-rises/1713124640',
		deezer: 'https://www.deezer.com/en/album/503687081',
		youtubeMusic:
			'https://music.youtube.com/playlist?list=OLAK5uy_mFjI6UkYNjTsv8EW1cK-zSbpa8OHJNrZA',
	},
	'substructures': {
		spotify:
			'https://open.spotify.com/album/5tERyAHfWnwoQJ14kTBRnK?si=Z6RBBsJWSJmRQxpzIVJgtw',
		appleMusic: 'https://music.apple.com/us/album/substructures/1602229409',
		deezer: '',
		youtubeMusic:
			'https://music.youtube.com/playlist?list=OLAK5uy_kFm7YrJ9kWjRyK-IVulJX-ohTzTKGeQqw',
	},
	'generative-variations': {
		spotify:
			'https://open.spotify.com/album/0sKRHm7g1xh4A1fvVNUM2H?si=vufnE5-yRD-u6hK80rkiPw',
		appleMusic:
			'https://music.apple.com/us/album/generative-variations-py/1795225627',
		deezer: 'https://www.deezer.com/en/album/710034691',
		youtubeMusic:
			'https://music.youtube.com/playlist?list=OLAK5uy_mztxZt2G2sFE11l_gAw8OoM3k2bqzIUEA',
	},
};

export const platformNames: Record<keyof AlbumLinks, string> = {
	spotify: 'Spotify',
	appleMusic: 'Apple Music',
	youtubeMusic: 'YouTube Music',
	deezer: 'Deezer',
};

export const platformOrder: (keyof AlbumLinks)[] = [
	'spotify',
	'appleMusic',
	'youtubeMusic',
	'deezer',
];
