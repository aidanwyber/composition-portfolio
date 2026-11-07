import { error } from '@sveltejs/kit';
import { workList } from '#lib/catalog';
import type { Language } from '#locales';
export const entries = () =>
	(['nl', 'en'] as const).flatMap(lang =>
		workList(lang).map(work => ({
			lang,
			section: lang === 'nl' ? ('werk' as const) : ('work' as const),
			slug: work.slug,
		})),
	);
export const load = ({
	params,
}: {
	params: { lang: string; section: string; slug: string };
}) => {
	const lang = params.lang as Language;
	if (params.section !== (lang === 'nl' ? 'werk' : 'work'))
		error(404, 'Not found');
	const work = workList(lang).find(item => item.slug === params.slug);
	if (!work) error(404, 'Not found');
	return { work };
};
