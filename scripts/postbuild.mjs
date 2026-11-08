import { readFileSync, writeFileSync } from 'node:fs';
const sitemap = readFileSync('docs/sitemap.xml', 'utf8');
const origin = new URL(sitemap.match(/<loc>(.*?)<\/loc>/)[1]).origin;
writeFileSync('docs/_redirects', '/ /nl/ 308!\n');
writeFileSync('docs/.nojekyll', '');
// Pages cannot issue a configured HTTP redirect at the root. Keep a complete
// landing document with a no-JavaScript link and the canonical destination.
writeFileSync(
	'docs/index.html',
	`<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${origin}/nl/"><meta http-equiv="refresh" content="0;url=/nl/"><title>Aidan Wyber</title><script>location.replace('/nl/'+location.search+location.hash);</script></head><body><a href="/nl/">Naar de portfolio / Open portfolio</a></body></html>`,
);
writeFileSync(
	'docs/404.html',
	`<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>404 — Aidan Wyber</title><style>@font-face{font-family:'Space Grotesk';src:url('/fonts/space-grotesk-latin.woff2') format('woff2');font-weight:400 700;font-display:swap}body{margin:0;padding:48px;color:#252622;background:#eeece4;font:18px/1.5 'Space Grotesk',Arial,sans-serif}h1{font-weight:500}a{color:inherit}</style></head><body><main><p>404</p><h1>Pagina niet gevonden / Page not found</h1><p><a href="/nl/">Naar de portfolio</a> / <a href="/en/">Back to the portfolio</a></p></main></body></html>`,
);
if (!origin.startsWith('https://'))
	throw new Error('Production URLs must use HTTPS');
