# Aidan Wyber — Music

Svelte 5 + SvelteKit 3 + `adapter-static`. Prerendered Dutch and English pages with native media controls and plain CSS. The layout uses the browser width with left-aligned content and responsive edge padding.

Typography uses Google Fonts: Cormorant Garamond Medium for display headings, and Space Grotesk for reading and functional text. WOFF2 files and licenses are served locally from `public/fonts/`, with no Google font requests needed at runtime.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Upload **`build/`**, not the old Vite `dist/`. All public content, metadata and JSON-LD are present in HTML before JavaScript runs. `/` redirects to `/nl/`; indexable pages are `/nl/`, `/en/`, `/nl/werk/[slug]/` and `/en/work/[slug]/`.

## Metadata and configuration

- `src/data/site.ts`: production origin (`https://aidanwyber.xyz`), identity, email, portrait path, sharing image, webmaster verification and optional analytics settings.
- `src/locales/nl.ts` and `en.ts`: route titles, descriptions, biography, album descriptions, project copy and accessibility labels.
- `src/lib/seo.ts`: a single graph per page using stable Person, WebSite, MusicAlbum and CreativeWork IDs. Sample projects are excluded. Albums with only a release year use ISO 8601 year precision; no month or day is invented.
- `src/data/profiles.ts`: verified Spotify, Apple Music, YouTube, Deezer, Instagram, LinkedIn, SoundCloud and Bandcamp profiles. Only configured HTTP(S) URLs appear in the footer/contact area and Person `sameAs`. These must identify Aidan, not a distributor or someone else's profile.

Blank profiles, portrait and verification codes are omitted. Add `portrait.jpg` to `public/assets/`, set `site.portrait`, then rebuild. The confirmed public contact is configured in `site.email`.

Published scores are configured in `src/data/projects.ts`, with bilingual copy in `src/locales/`. Keep the original PDFs in `public/assets/scores/`; generate uncropped first-page WebP previews with `python scripts/generate-score-previews.py` (requires PyMuPDF and Pillow). Preview geometry is A4 portrait, separate from square release covers. Sample projects remain editable in the data but are withheld from the public catalogue.

Set a score project's `audio` path to its MP3 demo to show a native HTML player on the homepage and detail page. Players use localized labels, defer loading until interaction, and pause other local media when played. `ScoreDemo.svelte` provides the shared understated layout. The local preview server supports byte ranges for audio/video duration and seeking.

Albums and scores use `WorkCollection.svelte`, with grid as the default. The list/grid switch is retained but hidden with CSS for now. Published projects with `kind: 'commissioned'` appear under “Werk in opdracht” / “Commissioned work” above the independent catalogue; the section is omitted when empty. The opening links point to commissions and independent work when commissions exist, otherwise to albums and scores. Score PDF links open in a new tab without download controls. `ContactFooter.svelte` is the single shared footer on home and detail pages. Display typography uses Cormorant Garamond Medium (500); hover transitions use 180ms ease and respect reduced motion.

The current brand-guide application uses locally hosted Cormorant Garamond Medium and Space Grotesk with paper/carbon interface colours. Regenerate the score-based sharing graphic and matching favicons with `python scripts/generate-social.py` (Pillow). Review the alternative type specimen and experimental line studies in `design/studies/index.html`; regenerate with `python scripts/generate-design-studies.py`. These experiments are outside `public/` and are not release artwork.

The top-right navigation stays fixed while scrolling. The opaque `page-surface` layer scrolls over a bottom-pinned footer to reveal it. `ContactFooter.svelte` observes its natural height: a footer taller than the viewport returns to normal flow, including when Q&A expands. Reduced-motion and no-JavaScript views use normal footer scrolling. A separate contact anchor stays in document flow, and footer focus reveals covered controls for keyboard users.

The shared footer contains a small, initially collapsed bilingual Q&A. Edit questions and answers in `src/locales/{nl,en}.ts`; `src/lib/faq.ts` resolves links to the real catalogue and contact sections. `Questions.svelte` prerenders all answers into the HTML, with native disclosures that also work without JavaScript. The same content supplies `FAQPage` JSON-LD on the homepages only; detail pages retain their work-specific schema. The build checks that marked-up answers exist in the visible footer.

This is structured, factual reference content, not a promise of a search feature or ranking gain. Google retired FAQ rich results in May 2026 ([Search documentation updates](https://developers.google.com/search/updates#may-2026)); its [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) recommends established SEO practices without special AI markup requirements.

## Add an album

Add its ID to `AlbumId` and `albumLinks` in `src/data/albumLinks.ts`, add its metadata to `src/data/albums.ts`, then add matching descriptions/genres in both locale files. Keep release dates and tracklists factual. `UPC` is an optional string that preserves leading zeros; configured codes appear as JSON-LD identifiers and are intentionally absent from the visual layout. The supplied codes and complete tracklists are retained.

Add square JPG artwork under `public/assets/albums/`. Optional `audio` and `video` paths are relative to `public/assets/`. Empty streaming URLs are hidden. The supplied YouTube Music and Spotify links are preserved exactly; other services appear only once configured.

Album detail routes, canonical/alternate links, structured data and sitemap entries are generated from the catalogue automatically.

Streaming links use locally hosted SVG logo buttons for Spotify, Apple Music, YouTube Music and Deezer, sourced from [Simple Icons](https://github.com/simple-icons/simple-icons). Source/license notes are in `public/assets/platforms/`. Buttons keep translated accessible names and platform-name tooltips; only configured URLs are shown.

Service buttons are circular and ordered Spotify, Apple Music, YouTube Music, then Deezer. Each configured Spotify album link also enables an expandable, responsive 1:1 player on the portfolio and detail page. Opening “Spotify player” loads Spotify's native album iframe; closing it removes the iframe and stops its playback. No Spotify requests are made before opening a player, and no embed API/SDK is installed. The external Spotify logo link remains available if the embed is blocked. Configure an actual `https://open.spotify.com/album/...` link; no album IDs are guessed.

## Add a composition or commissioned score

Add an entry to `src/data/projects.ts` with a descriptive `slug`, `sample: false`, factual year/media and `kind: 'independent'` or `'commissioned'`. Add the corresponding title, description, role and optional instrumentation/image alt text under its ID in both locale files. This publishes the reusable detail page and MusicComposition schema. Entries marked `sample: true` remain labelled examples on the portfolio and never become indexable project pages or structured-data claims.

The generative album also describes its actual custom Python composition system as a CreativeWork. It is not described as AI-generated music. No ratings, reviews, awards, clients or commissions are fabricated.

## Assets

Below-the-fold imagery is lazy-loaded with dimensions; album covers use 400px/800px WebP sources with their JPG fallback. Optional regeneration scripts require Python/Pillow:

```sh
python scripts/optimize-images.py
python scripts/generate-social.py
```

The 1200 × 630 sharing image is `public/assets/social/portfolio.png`. Matching original album covers were sourced from the [Apple catalogue lookup](https://itunes.apple.com/lookup?id=1713124640,1602229409,1795225627); this does not configure Apple Music listening links.

Add genuine showreel media as `public/assets/showreel.mp4` and `showreel-poster.jpg`; missing video retains the waveform. Missing recordings show a translated forthcoming label. Native playback never autoplays, does not preload recordings, and pauses other players when started. Restart development or rebuild after adding files. Supply caption tracks if adding spoken content.

## HTTP status codes and hosting

`npm run preview` serves the real static output at port 5174: pages return 200, `/` and missing trailing slashes return 308, and unknown routes return 404 with `noindex`. Set `PORT` if needed. There is no SPA catch-all that turns unknown URLs into successful pages.

A static adapter cannot configure an arbitrary host's HTTP behaviour. Deploy `build/_redirects` on a host supporting that format, or apply `deploy/nginx.conf` inside the production server block with its document root pointing to `build/`. Configure directory indexes and serve `404.html` with a 404 status. Preserve these rules when deploying on another host; a meta refresh alone is not an HTTP redirect. The project is prepared locally and has not been deployed.

## Search tools, analytics and validation

Set the Google Search Console / Bing verification values in `site.verification` or use DNS verification. Once the domain is deployed and verified, submit `https://aidanwyber.xyz/sitemap.xml` in each webmaster tool. `robots.txt` allows crawlers and advertises the sitemap. Sitemap entries exclude redirects, errors and sample work; no made-up modification dates are emitted.

Analytics is disabled by default. A configured script loads only when `enabled: true` and `consentRequired: false`; use this only after choosing a privacy-friendly cookieless service and considering applicable consent requirements. If your provider requires consent, leave the gate enabled and integrate a consent mechanism before loading it. No tracking script or consent banner is added to the default page.

`npm run check` validates TypeScript/Svelte. Every production build runs `scripts/verify-build.mjs`, which checks prerendered content, unique route titles, canonical/hreflang URLs, sitemap entries, local assets, JSON-LD syntax, stable entity IDs and factual track counts. For independent vocabulary validation, paste rendered HTML into the [Schema.org validator](https://validator.schema.org/); use [Google's Rich Results Test](https://search.google.com/test/rich-results) for Google's supported types. Valid structured data does not guarantee a rich result, ranking or AI citation.
