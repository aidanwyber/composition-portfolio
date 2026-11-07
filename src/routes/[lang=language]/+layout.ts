import { locales, type Language } from '#locales';
export const load = ({ params }: { params: { lang: string } }) => {
	const lang = params.lang as Language;
	return { lang, copy: locales[lang] };
};
