import { defineParams } from '@sveltejs/kit/params';
export const params = defineParams({
	language: (value: string) =>
		value === 'nl' || value === 'en' ? value : undefined,
	work: (value: string) =>
		value === 'werk' || value === 'work' ? value : undefined,
});
