import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
const xml = readFileSync('build/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
	match => new URL(match[1]),
);
assert.ok(urls.length >= 8, 'Two portfolios and six album pages must exist');
assert.equal(
	new Set(urls.map(String)).size,
	urls.length,
	'Unique sitemap entries',
);
const entities = new Map();
const titles = new Set();
for (const url of urls) {
	const html = readFileSync(`build${url.pathname}index.html`, 'utf8');
	const lang = url.pathname.split('/')[1];
	assert.ok(html.includes(`<html lang="${lang}">`));
	assert.ok(html.includes(`<link rel="canonical" href="${url.href}"`));
	assert.ok(/<h1[\s>]/.test(html), 'Meaningful prerendered HTML');
	assert.ok(html.includes('name="description"'));
	assert.ok(html.includes('property="og:image"'));
	assert.ok(html.includes('index, follow'));
	const head = html.split('</head>')[0];
	assert.equal(
		[...head.matchAll(/hreflang="(?:nl|en|x-default)"/g)].length,
		3,
	);
	const title = html.match(/<title>(.*?)<\/title>/)[1];
	assert.ok(!titles.has(title), 'Each route has a unique title');
	titles.add(title);
	const json = [
		...html.matchAll(
			/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
		),
	];
	assert.equal(json.length, 1, 'Exactly one graph per page');
	const data = JSON.parse(json[0][1]);
	assert.equal(data['@context'], 'https://schema.org');
	const ids = data['@graph'].map(entity => entity['@id']);
	assert.equal(
		new Set(ids).size,
		ids.length,
		'No duplicate entities on a page',
	);
	const person = data['@graph'].find(entity => entity['@type'] === 'Person');
	assert.equal(person.name, 'Aidan Wyber');
	for (const entity of data['@graph']) {
		assert.ok(entity['@id'].startsWith(url.origin));
		assert.ok(!entity.aggregateRating && !entity.review && !entity.award);
		const old = entities.get(entity['@id']);
		if (old)
			assert.equal(
				old['@type'],
				entity['@type'],
				'Stable entity types across languages',
			);
		entities.set(entity['@id'], entity);
		if (entity['@type'] === 'MusicAlbum') {
			assert.match(
				entity.datePublished,
				/^\d{4}$/,
				'Preserve the supplied year precision',
			);
			assert.ok(entity.creator['@id'] === person['@id']);
			assert.ok(existsSync(`build${new URL(entity.image).pathname}`));
			assert.ok(
				html.includes(entity.name),
				'Schema reflects visible content',
			);
			if (entity.track)
				assert.equal(
					entity.numTracks,
					entity.track.itemListElement.length,
				);
			if (entity.identifier) {
				assert.equal(entity.identifier.propertyID, 'UPC');
				assert.match(entity.identifier.value, /^\d+$/);
			}
		}
	}
	for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g))
		assert.ok(existsSync(`build${match[1]}`), match[1]);
	assert.ok(!html.includes('react-dom'));
}
assert.ok(
	readFileSync('build/robots.txt', 'utf8').includes(
		`Sitemap: ${urls[0].origin}/sitemap.xml`,
	),
);
assert.ok(readFileSync('build/404.html', 'utf8').includes('noindex'));
assert.ok(existsSync('build/assets/social/portfolio.png'));
console.log(
	`Verified ${urls.length} prerendered routes, metadata, canonical/hreflang links, sitemap, assets and JSON-LD entity consistency.`,
);
