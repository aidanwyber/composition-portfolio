import type { Handle } from '@sveltejs/kit/hooks';
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(
				'<html lang="nl">',
				`<html lang="${event.params.lang === 'en' ? 'en' : 'nl'}">`,
			),
	});
