# Aidan Wyber — Music

Svelte 5 + SvelteKit 3 + `adapter-static`. Prerendered Dutch and English pages with native media controls and plain CSS. The layout uses the browser width with left-aligned content and responsive edge padding.

Typography uses Google Fonts: Alien Block exclusively for the largest hero/contact headings, and Space Grotesk for all other text. WOFF2 subsets and licenses are served locally from `public/fonts/`, with no Google font requests needed at runtime.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Upload **`build/`**, not the old Vite `dist/`. All public content, metadata and JSON-LD are present in HTML before JavaScript runs. `/` redirects to `/nl/`; indexable pages are `/nl/`, `/en/`, `/nl/werk/[slug]/` and `/en/work/[slug]/`.

## Metadata and configuration

- `src/data/site.ts`: production origin (`https://music.aidanwyber.xyz`), identity, email, portrait path, sharing image, webmaster verification and optional analytics settings.
- `src/locales/nl.ts` and `en.ts`: route titles, descriptions, biography, album descriptions, project copy and accessibility labels.
- `src/lib/seo.ts`: a single graph per page using stable Person, WebSite, MusicAlbum and CreativeWork IDs. Sample projects are excluded. Albums with only a release year use ISO 8601 year precision; no month or day is invented.
- `src/data/profiles.ts`: verified Spotify, Apple Music, YouTube, Deezer, Instagram, LinkedIn, SoundCloud and Bandcamp profiles. Only configured HTTP(S) URLs appear in the footer/contact area and Person `sameAs`. These must identify Aidan, not a distributor or someone else's profile.

Blank profiles, portrait and verification codes are omitted. Add `portrait.jpg` to `public/assets/`, set `site.portrait`, then rebuild. Configure a real email before launch.

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

Set the Google Search Console / Bing verification values in `site.verification` or use DNS verification. Once the music subdomain is deployed and verified, submit `https://music.aidanwyber.xyz/sitemap.xml` in each webmaster tool. `robots.txt` allows crawlers and advertises the sitemap. Sitemap entries exclude redirects, errors and sample work; no made-up modification dates are emitted.

Analytics is disabled by default. A configured script loads only when `enabled: true` and `consentRequired: false`; use this only after choosing a privacy-friendly cookieless service and considering applicable consent requirements. If your provider requires consent, leave the gate enabled and integrate a consent mechanism before loading it. No tracking script or consent banner is added to the default page.

`npm run check` validates TypeScript/Svelte. Every production build runs `scripts/verify-build.mjs`, which checks prerendered content, unique route titles, canonical/hreflang URLs, sitemap entries, local assets, JSON-LD syntax, stable entity IDs and factual track counts. For independent vocabulary validation, paste rendered HTML into the [Schema.org validator](https://validator.schema.org/); use [Google's Rich Results Test](https://search.google.com/test/rich-results) for Google's supported types. Valid structured data does not guarantee a rich result, ranking or AI citation.
