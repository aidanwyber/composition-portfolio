export const site = {
	// Production origin for canonical and hreflang URLs. No trailing slash.
	url: 'https://music.aidanwyber.xyz',
	name: 'Aidan Wyber — Music',
	personName: 'Aidan Wyber',
	jobTitle: 'Composer and Music Producer',
	description:
		'Aidan Wyber is an independent composer and music producer based in the Netherlands, creating original music for film, animation and moving images. His work combines instrumental composition, electronic music, sound design and generative musical systems.',
	portrait: '', // e.g. 'portrait.jpg', only included when the file exists
	sharingImage: '/assets/social/portfolio.png',
	verification: { google: '', bing: '' },
	// Nothing loads until explicitly enabled. Analytics must be a privacy-friendly,
	// cookieless endpoint, or require explicit consent from your own consent UI.
	analytics: {
		scriptUrl: '',
		domain: '',
		consentRequired: true,
		enabled: false,
	},
	email: 'your-email@example.com',
};
