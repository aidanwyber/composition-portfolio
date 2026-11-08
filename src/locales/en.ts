import type { FAQItem } from '#lib/faq';

export const en = {
	seo: {
		title: 'Aidan Wyber — Compositions, Recordings & Scores',
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
		headline: ['Instrumental, electronic', 'and generative music.'],
		supporting: ['Independent compositions,', 'recordings and scores.'],
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
		audioUnavailable: 'Audio could not be loaded. Please try again later.',
		recording: 'Recording forthcoming',
		video: 'Video forthcoming',
		unsupported: 'Your browser does not support video playback.',
		listen: 'Listen to',
		still: 'Project still',
		videoLabel: 'Video',
	},
	scores: {
		demo: 'Listen to demo',
		title: 'Scores',
		preview: 'First page of the score',
		pages: 'pages',
		newTab: 'Opens in a new tab',
	},
	projects: {
		'etudes-voor-cello': {
			title: 'Études voor cello',
			description:
				'These études began when I started learning to play the cello. From the outset, I wrote exercises for my own practice, bringing playing and composing together. The collection explores different positions, articulations, harmonics, bowing techniques and dynamics.',
			category: 'Score',
			instrumentation: 'Cello',
			role: 'Composer',
		},
		'de-toekomst-in': {
			title: 'Into the future',
			description:
				'A composition for two cellos, expressing a sense of moving forward through time.',
			category: 'Score',
			instrumentation: 'Two cellos',
			role: 'Composer',
		},

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
	catalogue: { independent: 'Independent work', commissioned: 'Commissioned work', layout: 'View', list: 'List', grid: 'Grid' },
	releases: {
		title: 'Albums',
		tracks: 'Tracklist',
		details: 'More about this composition',
		listen: 'Listen on',
		artwork: 'Album artwork',
		artworkMissing: 'Artwork forthcoming',
	},
	albums: {
		'as-the-sun-rises': {
			genres: 'Ambient / Experimental',
			description:
				'A musical exploration of the origins, development and eventual decay of the universe. From the earliest cosmic structures to the emergence and extraordinary diversity of life on Earth. Slowly evolving textures, drones, repetition and sudden harmonic contrasts create a world in constant motion.',
			details: [] as string[],
		},
		'substructures': {
			genres: 'Ambient',
			description:
				'Music as an underlying structure of experience. Substructures emerged from a period of paying attention to attention itself: how different forms of awareness, perception and emotion alternate and sometimes fragment. The music is intended to colour and frame an experience without necessarily becoming its focal point.',
			details: [] as string[],
		},
		'generative-variations': {
			genres: 'Generative classical',
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
		headline: ['What story needs', 'music?'],
		supporting:
			'Tell me about your project. An early idea or a rough cut is enough.',
		action: 'Discuss your project',
		socials: 'Social profiles',
	},
	faq: {
		title: 'Questions & answers',
		items: [
			{
				id: 'practice',
				question: 'Who is Aidan Wyber?',
				answer: 'Aidan Wyber is an independent composer and music producer based in The Hague, Netherlands. His practice combines instrumental composition, electronic production and sound design, alongside experimental work with generative musical systems.',
				target: 'about',
				link: 'About Aidan',
			},
			{
				id: 'commissions',
				question: 'Can I commission music for a film or animation?',
				answer: 'Aidan Wyber is available to compose original music for film, animation and other visual projects. Get in touch to discuss your idea, the atmosphere you are looking for and your timeline. An early idea or a rough cut is enough to start a conversation.',
				target: 'contact',
				link: 'Discuss your project',
			},
			{
				id: 'listening',
				question: 'Where can I listen to the music?',
				answer: 'You can find Aidan Wyber’s music on major streaming platforms, including Spotify, Apple Music and YouTube Music. The album section provides direct links to the available services and an optional Spotify player.',
				target: 'releases',
				link: 'Explore the albums',
			},
			{
				id: 'scores',
				question: 'Can I view scores?',
				answer: 'Yes. A selection of Aidan Wyber’s scores is available to view for free on this website, including Études voor cello and Into the future. Each entry lists the instrumentation and page count. The View score button opens the PDF in a new tab.',
				target: 'scores',
				link: 'View the scores',
			},
			{
				id: 'generative',
				question: 'What does generative music mean in this work?',
				answer: 'Generative music uses rules or algorithms to develop musical structures. In generative_variations.py, a Python algorithm develops a small musical seed into compositions through rules for notes, harmony, rhythm and instrumental lines. The project explores the relationship between musical systems, chance and authorship.',
				target: 'generative',
				link: 'About generative_variations.py',
			},
		] as FAQItem[],
	},
	footer: { top: 'Back to top' },
};

export type Copy = typeof en;
