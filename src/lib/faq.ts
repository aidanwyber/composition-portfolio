import { locales, type Language } from '#locales';
import { workPath } from './catalog';

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
	target: 'about' | 'contact' | 'releases' | 'scores' | 'generative';
	link: string;
}

export function faqItems(lang: Language) {
	const targets = {
		about: `/${lang}/#about`,
		contact: '#contact',
		releases: `/${lang}/#releases`,
		scores: `/${lang}/#scores`,
		generative: workPath(lang, 'generative-variations'),
	};
	return locales[lang].faq.items.map(item => ({ ...item, href: targets[item.target] }));
}
