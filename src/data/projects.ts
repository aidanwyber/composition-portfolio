export interface Project {
	id: string;
	slug?: string; // Set a descriptive slug and sample: false to publish a detail page.
	year?: number;
	kind: 'independent' | 'commissioned';
	audio?: string;
	image?: string;
	video?: string;
	videoPoster?: string;
	score?: string;
	scoreVersion?: string;
	scorePages?: number;
	externalUrl?: string;
	sample?: boolean;
}

// Published score works first; editable samples below are withheld from the catalogue.
// Copy is keyed by id in src/locales/{nl,en}.ts. Years are omitted until known.
// Local file paths are relative to public/assets/.
export const projects: Project[] = [
	{
		id: 'etudes-voor-cello',
		slug: 'etudes-voor-cello',
		kind: 'independent',
		image: 'scores/Études voor cello v2.webp',
		score: 'scores/Études voor cello v2.pdf',
		scoreVersion: 'v2',
		scorePages: 10,
	},
	{
		id: 'de-toekomst-in',
		slug: 'de-toekomst-in',
		kind: 'independent',
		image: 'scores/De Toekomst In v1.webp',
		score: 'scores/De Toekomst In v1.pdf',
		scoreVersion: 'v1',
		scorePages: 2,
	},
	{
		id: '01',
		kind: 'independent',
		audio: 'audio/composition-01.mp3',
		image: 'project-01.jpg',
		sample: true,
	},
	{
		id: '02',
		kind: 'independent',
		audio: 'audio/composition-02.mp3',
		image: 'project-02.jpg',
		sample: true,
	},
	{
		id: '03',
		kind: 'independent',
		audio: 'audio/composition-03.mp3',
		image: 'project-03.jpg',
		sample: true,
	},
	{
		id: '04',
		kind: 'independent',
		audio: 'audio/composition-04.mp3',
		image: 'project-04.jpg',
		sample: true,
	},
];
