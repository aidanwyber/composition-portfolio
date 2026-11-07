import { albums } from '#data/albums';
import { albumLinks, platformNames, platformOrder } from '#data/albumLinks';
import { projects } from '#data/projects';
import { locales, type Language } from '#locales';
import { externalLink } from './media';

export const workPath = (lang: Language, slug: string) =>
	`/${lang}/${lang === 'nl' ? 'werk' : 'work'}/${slug}/`;
export function workList(lang: Language) {
	const copy = locales[lang];
	return [
		...albums.map(album => ({
			slug: album.id,
			kind: 'album' as const,
			practice: 'independent' as const,
			title: album.title,
			year: album.year,
			image: album.artwork,
			tracks: album.tracks,
			audio: album.audio,
			video: album.video,
			UPC: album.UPC,
			score: undefined as string | undefined,
			scoreVersion: undefined as string | undefined,
			scorePages: undefined as number | undefined,
			...copy.albums[album.id],
			links: platformOrder.flatMap(key => {
				const url = externalLink(albumLinks[album.id][key]);
				return url ?
						[{ name: platformNames[key], url, platform: key }]
					:	[];
			}),
		})),
		...projects
			.filter(project => !project.sample && project.slug)
			.map(project => ({
				slug: project.slug!,
				kind: 'composition' as const,
				practice: project.kind,
				title: copy.projects[project.id].title,
				year: project.year,
				image: project.image,
				tracks: undefined,
				audio: project.audio,
				video: project.video,
				UPC: undefined,
				score: project.score,
				scoreVersion: project.scoreVersion,
				scorePages: project.scorePages,
				genres:
					copy.projects[project.id].instrumentation ||
					copy.projects[project.id].category,
				description: copy.projects[project.id].description,
				details: [] as string[],
				links:
					externalLink(project.externalUrl) ?
						[
							{
								name: copy.work.project,
								url: externalLink(project.externalUrl)!,
								platform: undefined,
							},
						]
					:	[],
			})),
	];
}
export type Work = ReturnType<typeof workList>[number];
export const indexablePaths = () =>
	(['nl', 'en'] as const).flatMap(lang => [
		`/${lang}/`,
		...workList(lang).map(work => workPath(lang, work.slug)),
	]);
