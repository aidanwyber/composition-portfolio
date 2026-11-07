import { site } from '#data/site';
import { profiles } from '#data/profiles';
import { locales, type Language } from '#locales';
import { externalLink, media } from './media';
import { workList, workPath, type Work } from './catalog';

export const absolute = (path: string) => new URL(path, site.url).href;
const personId = absolute('/#aidan-wyber');
const websiteId = absolute('/#website');
const workId = (slug: string) => absolute(`/#work-${slug}`);

function workEntity(work: Work, lang: Language) {
	return {
		'@type': work.kind === 'album' ? 'MusicAlbum' : 'MusicComposition',
		'@id': workId(work.slug),
		'name': work.title,
		'description': work.description,
		...(work.UPC ?
			{
				identifier: {
					'@type': 'PropertyValue',
					'propertyID': 'UPC',
					'value': work.UPC,
				},
			}
		:	{}),
		'url': absolute(workPath(lang, work.slug)),
		...(media(work.image) ? { image: absolute(media(work.image)!) } : {}),
		// Only a year was supplied. ISO 8601 reduced precision; never invent Jan 1.
		...(work.year ?
			{
				[work.kind === 'album' ? 'datePublished' : 'dateCreated']:
					String(work.year),
			}
		:	{}),
		'genre': work.genres.split(' / '),
		'creator': { '@id': personId },
		...(work.kind === 'album' ?
			{
				byArtist: { '@id': personId },
				albumReleaseType: 'https://schema.org/AlbumRelease',
			}
		:	{}),
		...(work.tracks ?
			{
				numTracks: work.tracks.length,
				track: {
					'@type': 'ItemList',
					'itemListElement': work.tracks.map((name, index) => ({
						'@type': 'ListItem',
						'position': index + 1,
						'item': {
							'@type': 'MusicRecording',
							'@id': `${workId(work.slug)}-track-${index + 1}`,
							name,
							'byArtist': { '@id': personId },
						},
					})),
				},
			}
		:	{}),
		...(work.links.length ?
			{
				sameAs: work.links.map(link => link.url),
				potentialAction: work.links.map(link => ({
					'@type': 'ListenAction',
					'target': link.url,
				})),
			}
		:	{}),
		...(work.slug === 'generative-variations' ?
			{
				isBasedOn: {
					'@id': absolute('/#generative-composition-system'),
				},
			}
		:	{}),
	};
}

export function metadata(lang: Language, work?: Work) {
	const copy = locales[lang];
	const path = work ? workPath(lang, work.slug) : `/${lang}/`;
	const canonical = absolute(path);
	const title =
		work ?
			`${work.title} — ${work.kind === 'album' ? copy.detail.albumBy : copy.detail.compositionBy} Aidan Wyber`
		:	copy.seo.title;
	const description = work ? work.description : copy.seo.description;
	const sameAs = Object.values(profiles).flatMap(value =>
		externalLink(value) ? [externalLink(value)!] : [],
	);
	const works = work ? [work] : workList(lang);
	const graph: Record<string, unknown>[] = [
		{
			'@type': 'Person',
			'@id': personId,
			'name': site.personName,
			'jobTitle': site.jobTitle,
			'description': site.description,
			'url': site.url,
			...(media(site.portrait) ?
				{ image: absolute(media(site.portrait)!) }
			:	{}),
			...(sameAs.length ? { sameAs } : {}),
		},
		{
			'@type': 'WebSite',
			'@id': websiteId,
			'name': site.name,
			'url': site.url,
			'publisher': { '@id': personId },
			'inLanguage': ['nl', 'en'],
		},
		{
			'@type': work ? 'WebPage' : 'ProfilePage',
			'@id': `${canonical}#page`,
			'url': canonical,
			'name': title,
			description,
			'inLanguage': lang,
			'isPartOf': { '@id': websiteId },
			'mainEntity': { '@id': work ? workId(work.slug) : personId },
			...(work ?
				{}
			:	{ about: works.map(item => ({ '@id': workId(item.slug) })) }),
		},
		...works.map(item => workEntity(item, lang)),
	];
	if (works.some(item => item.slug === 'generative-variations'))
		graph.push({
			'@type': 'CreativeWork',
			'@id': absolute('/#generative-composition-system'),
			'name': 'generative_variations.py',
			'description':
				copy.albums['generative-variations'].details.join(' '),
			'creator': { '@id': personId },
		});
	return {
		title,
		description,
		canonical,
		image:
			work && media(work.image) ?
				absolute(media(work.image)!)
			:	absolute(site.sharingImage),
		imageAlt:
			work ?
				`${work.kind === 'album' ? copy.releases.artwork : copy.media.still}: ${work.title}`
			:	`${site.personName} — ${copy.hero.headline.join(' ')}`,
		alternates: (['nl', 'en'] as const).map(language => ({
			lang: language,
			url: absolute(
				work ? workPath(language, work.slug) : `/${language}/`,
			),
		})),
		jsonLd: JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': graph,
		}).replaceAll('<', '\\u003c'),
	};
}
