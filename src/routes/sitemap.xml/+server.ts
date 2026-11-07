import { site } from '#data/site';
export const prerender = true;
import { indexablePaths } from '#lib/catalog';
const escape = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('"', '&quot;');
export const GET = () => {
	const urls = indexablePaths()
		.map(path => {
			const other =
				path.startsWith('/nl/') ?
					path.replace('/nl/', '/en/').replace('/werk/', '/work/')
				:	path.replace('/en/', '/nl/').replace('/work/', '/werk/');
			const dutch = path.startsWith('/nl/') ? path : other;
			return `<url><loc>${escape(site.url + path)}</loc><xhtml:link rel="alternate" hreflang="nl" href="${escape(site.url + dutch)}"/><xhtml:link rel="alternate" hreflang="en" href="${escape(site.url + (path.startsWith('/en/') ? path : other))}"/><xhtml:link rel="alternate" hreflang="x-default" href="${escape(site.url + dutch)}"/></url>`;
		})
		.join('\n');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
		{ headers: { 'content-type': 'application/xml; charset=utf-8' } },
	);
};
