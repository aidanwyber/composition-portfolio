import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { site } from './src/data/site.ts';

const assets = fileURLToPath(new URL('./public/assets/', import.meta.url));
const media =
	existsSync(assets) ?
		readdirSync(assets, { recursive: true })
			.filter(file => statSync(join(assets, file)).isFile())
			.map(file => file.replaceAll('\\', '/'))
	:	[];

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({ pages: 'docs', assets: 'docs', strict: true }),
			preprocess: vitePreprocess(),
			files: { assets: 'public' },
			paths: { origin: site.url },
			prerender: { entries: ['*'] },
		}),
	],
	define: { __MEDIA_FILES__: JSON.stringify(media) },
});
