// Only add verified profiles belonging to Aidan. Blank values are never published.
export const profiles = {
	spotify: '',
	appleMusic: '',
	youtube: '',
	deezer: '',
	instagram: '',
	linkedin: '',
	soundcloud: '',
	bandcamp: '',
};
export const profileNames: Record<keyof typeof profiles, string> = {
	spotify: 'Spotify',
	appleMusic: 'Apple Music',
	youtube: 'YouTube',
	deezer: 'Deezer',
	instagram: 'Instagram',
	linkedin: 'LinkedIn',
	soundcloud: 'SoundCloud',
	bandcamp: 'Bandcamp',
};
