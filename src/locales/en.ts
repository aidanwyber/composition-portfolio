export const en = {
	seo: {
		title: 'Aidan Wyber — Composer for Film & Moving Images',
		description:
			'Aidan Wyber is an independent composer and music producer in the Netherlands, creating original music for film, animation and moving images.',
	},
	navigation: {
		work: 'Work',
		about: 'About',
		contact: 'Contact',
		label: 'Main navigation',
		language: 'Language',
		skip: 'Skip to content',
		home: 'Aidan Wyber, back to top',
	},
	descriptor: 'Composer',
	spotify: {
		player: 'Spotify player',
		external: 'Open in Spotify',
		unavailable: 'If the player does not load, open the album in Spotify.',
	},
	detail: {
		back: 'Back to the portfolio',
		read: 'About this project',
		year: 'Year',
		notFound: 'Page not found',
		missing: 'This page does not exist.',
		location: 'The Hague, Netherlands',
		albumBy: 'Album by',
		compositionBy: 'Composition by',
	},
	hero: {
		profession: 'Independent composer & music producer',
		headline: ['Original music', 'for moving images.'],
		supporting: ['Instrumental. Electronic.', 'Made for the picture.'],
		availability:
			'Available for commissions in film, animation and visual storytelling.',
		explore: 'Explore the work',
	},
	reel: {
		title: 'Showreel',
		metadata: 'Composition & production',
		forthcoming: 'Showreel forthcoming',
		corner: 'Aidan Wyber / Sound',
		caption: 'Original music showreel / Aidan Wyber',
		tagline: 'Music for moving images.',
	},
	work: {
		title: 'Selected work',
		samples: 'Editable samples',
		independent: 'Independent composition',
		commissioned: 'Commissioned work',
		sample: 'Editable sample',
		details: 'Project details',
		role: 'Role',
		instrumentation: 'Instrumentation',
		score: 'View score (PDF)',
		project: 'View project',
	},
	media: {
		recording: 'Recording forthcoming',
		video: 'Video forthcoming',
		unsupported: 'Your browser does not support video playback.',
		listen: 'Listen to',
		still: 'Project still',
		videoLabel: 'Video',
	},
	projects: {
		'01': {
			title: 'Instrumental study',
			description:
				'Sample entry for a contemporary instrumental composition.',
			category: 'Contemporary instrumental',
			instrumentation: 'Add instrumentation',
			role: 'Add composer / production role',
		},
		'02': {
			title: 'Electronic study',
			description:
				'Sample entry for an electronic or ambient composition.',
			category: 'Electronic / ambient',
			role: 'Add composer / production role',
		},
		'03': {
			title: 'Music for a picture',
			description:
				'Sample entry for original music written to moving images.',
			category: 'Music for moving images',
			role: 'Add composer / production role',
		},
		'04': {
			title: 'Generative study',
			description:
				'Sample entry for an experimental or generative composition.',
			category: 'Experimental / generative',
			role: 'Add composer / production role',
		},
	} as Record<
		string,
		{
			title: string;
			description: string;
			category: string;
			role: string;
			instrumentation?: string;
			imageAlt?: string;
		}
	>,
	releases: {
		title: 'Independent releases',
		metadata: 'Albums / Aidan Wyber',
		tracks: 'Tracklist',
		details: 'About the composition',
		listen: 'Listen on',
		artwork: 'Album artwork',
		artworkMissing: 'Artwork forthcoming',
	},
	albums: {
		'as-the-sun-rises': {
			genres: 'Ambient / Experimental electronic',
			description:
				'A musical exploration of the origins, development and eventual decay of the universe. From the earliest cosmic structures to the emergence and extraordinary diversity of life on Earth. Slowly evolving textures, drones, repetition and sudden harmonic contrasts create a world in constant motion.',
			details: [] as string[],
		},
		'substructures': {
			genres: 'Ambient / Experimental',
			description:
				'Music as an underlying structure of experience. Substructures emerged from a period of paying attention to attention itself: how different forms of awareness, perception and emotion alternate and sometimes fragment. The music is intended to colour and frame an experience without necessarily becoming its focal point.',
			details: [] as string[],
		},
		'generative-variations': {
			genres: 'Generative / Classical / Experimental',
			description:
				'An experimental composition project in which a Python algorithm generates and develops musical structures. Starting from a small, randomly generated musical seed, notes, harmonies, rhythms and instrumental lines are extrapolated through a system of rules into complete compositions. An exploration of the relationship between musical systems, chance and authorship.',
			details: [
				'The Python script contains a collection of musical structures describing different aspects of my compositional thinking: notes, scales, modes, chords and timing patterns.',
				'A pseudo-random process first generates a relatively small seed matrix. A custom complexification algorithm then extrapolates this initial information into a two-to-three-minute composition for one or more instruments.',
				'The complexification process is somewhat like decompression, except that nothing was compressed in the first place.',
			],
		},
	},
	about: {
		title: 'About',
		heading: "I'm Aidan. I write music.",
		biography:
			"I'm an independent composer and music producer based in The Hague, Netherlands. Working between instrumental composition, electronic production and sound design, I create original music shaped around the atmosphere, rhythm and emotional character of moving images. My independent work also explores experimental composition and generative musical systems.",
		portrait: 'Aidan Wyber',
	},
	contact: {
		title: 'Contact',
		headline: ["Let's make", 'something move.'],
		supporting:
			'Available for film scores, original music and collaborations.',
		socials: 'Social profiles',
	},
	footer: { country: 'Netherlands', top: 'Back to top' },
};

export type Copy = typeof en;
