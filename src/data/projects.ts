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
	externalUrl?: string;
	sample?: boolean;
}

// Editable samples, not released works or claimed credits. Add/remove/reorder freely.
// Copy is keyed by id in src/locales/{nl,en}.ts. Years are omitted until known.
// Local file paths are relative to public/assets/.
export const projects: Project[] = [
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
