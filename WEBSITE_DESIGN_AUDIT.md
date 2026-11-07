# Website design audit

**Date:** 7 November 2026  
**Comparison:** [Website design brief](WEBSITE_DESIGN_BRIEF.md) against the existing site, informed by [Brand guide v0.1](BRAND_GUIDE.md).  
**Scope:** Read-only inspection. No website source, assets, configuration or build output changed.

## Method and evidence

The brand guide was read first and the design brief written before the implementation inspection. Source review covered the route templates, global CSS, reusable media/artwork components, catalogue data, locale files, metadata and static-serving configuration.

The existing `build/` was served locally at `http://127.0.0.1:5177/` using `scripts/serve.mjs`. No build, package installation or code-generation command was run. Both homepages were inspected at 1440, 768, 390 and 320 CSS pixels wide, with a 1000px viewport height. The Dutch generative-album detail page was visually inspected at desktop size and its player geometry checked at desktop/mobile widths. The English Substructures detail page was checked with JavaScript disabled. Keyboard checks covered the skip link and tracklist disclosure; a language switch retained the releases anchor.

Browser screenshots were captured only to the operating-system temporary directory; the repository's existing screenshot was not updated. `build/nl/index.html` is timestamped earlier than the formatted source stylesheet. Therefore rendered observations describe the existing build, supported by current source inspection, **not a newly verified build or deployed production site**.

Spotify's remote document was substituted during player-geometry checks. Opening/closing and layout were inspected; actual streamed audio, account restrictions and third-party interface accessibility were not assessed. No screen-reader user study, full WCAG audit or cross-browser certification is claimed.

## Existing implementation

| Area                  | Observed implementation                                                                                                                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technology            | Svelte 5, SvelteKit 3, TypeScript, Vite 8 and `@sveltejs/adapter-static`; plain global CSS. This is no longer a React site. See `package.json` and `vite.config.js`.                                                                    |
| Routes                | `/` redirects to Dutch; `/nl/` and `/en/`; three release pages per language under `/nl/werk/[slug]/` and `/en/work/[slug]/`. About and Contact are homepage anchors.                                                                    |
| Homepage              | Header → commissioning introduction → unavailable showreel → four editable sample compositions → three published albums → About → Contact → footer.                                                                                     |
| Navigation            | Work/About/Contact plus NL/EN; native links and context-preserving language switching in `src/components/Shell.svelte`. Work currently targets the sample section, not the published releases.                                          |
| Visual system         | CSS variables for blue `#100082`, yellow `#FFE500`, near-white `#FCFCFC`, ink and rule colour. Space Grotesk for reading; Alien Block for hero/contact. No comparable spacing-token system.                                             |
| Layout                | Browser-width `.container`, zero horizontal auto margin, edge padding `clamp(20px, 4vw, 64px)`, left alignment, thin section rules. Album rows use 300px imagery plus up to 720px text; tablet and mobile variants are provided.        |
| Work content          | Three authentic albums with artwork, years, descriptions, streaming links and supplied tracklists. Four clearly labelled samples have no supplied audio/image files. No showreel, portrait or score PDF is present in `public/assets/`. |
| Listening             | Native audio/video components exist, but the observed homepages render zero native audio/video elements because those files are absent. Each album has platform links and a user-opened Spotify embed.                                  |
| Reusable components   | `Shell`, `Albums`, `ProjectRow`, `Showreel`, `Image`, `Audio`, `Video`, `SpotifyPlayer`, `ListeningLinks` and `Seo`, all under `src/components/`. Data, locale copy and rendering are already separated.                                |
| Responsive/motion     | Breakpoints at 600, 700, 768 and 900px; no observed horizontal overflow at inspected sizes. Wave artwork is static. Smooth scrolling is enabled only without reduced-motion preference.                                                 |
| Publishing foundation | Prerendered HTML, canonical/hreflang metadata, sitemap, structured data and 404 handling exist. The configured public origin is `https://music.aidanwyber.xyz`. No deployment was performed or inspected.                               |

### Measured hierarchy

On `/nl/`, with a 1000px-tall viewport:

| Viewport width | Showreel section starts | Sample-work section starts | Published-release section starts | Total page height |
| -------------- | ----------------------: | -------------------------: | -------------------------------: | ----------------: |
| 1440px         |                  ~839px |                    ~1665px |                          ~2496px |           ~4983px |
| 390px          |                  ~622px |                     ~897px |                          ~1744px |           ~5497px |

These are observed positions in the existing build, not universal performance or usability thresholds. They establish that unavailable/example material currently precedes the real catalogue by a substantial distance.

## A01. Overall visual identity

**Classification:** Directional mismatch, rather than a functional defect.

**Current state:** The largest graphic events are the emphatic Alien Block commissioning headline, a saturated blue/yellow waveform panel and the yellow contact ending. The name in the header is comparatively modest; no invented logo or label is present.

**Desired state:** The music, its titles and its imagery should carry the identity, with a restrained interface and a practical commissioning offer.

**Gap:** The page reads primarily as a bold commissioned-music presentation. The real works have less initial prominence than a slogan and placeholder. This is a mismatch with the new guide, not evidence that the earlier design was implemented incorrectly.

**Recommendation:** Rebalance the opening around real work and quieter supporting type/colour. Keep the plain authorship identifier and clear professional offer; do not solve the mismatch by inventing a new brand or removing useful contact information.

**Evidence:** `src/routes/[lang=language]/+page.svelte`, `.hero`, `.contact`, `.reel-placeholder` in [style.css](src/style.css).

## A02. Typography

**Classification:** Confirmed primary-font alignment; display-direction decision needed.

**Current state:** Space Grotesk is used for functional text, album titles and detail-page H1s. Alien Block is used only on the hero/contact display statements. At 1440px the Dutch hero is 104px; at 390px it is about 36px. Fonts are served locally with `font-display: swap` and licences included.

**Desired state:** Space Grotesk remains primary. A contrasting display voice should support selected work titles and editorial moments. Instrument Serif is the current candidate, not an approved final font.

**Gap:** Alien Block supplies dense, assertive geometric mass, while the guide asks for a quieter contrast. Work titles receive a neutral sans treatment while promotional statements receive the strongest display treatment. The large face remains visually difficult to scan quickly on a phone; that is an editorial judgement, not a demonstrated contrast failure.

**Recommendation:** Compare actual title specimens in Instrument Serif and the current system, including long Dutch titles and the generative filename. Agree the hierarchy and display choice before replacing fonts. Retain Space Grotesk and local font delivery; do not add a technical mono by default.

**Evidence:** `.hero h1`, `.contact-link`, `.work-detail h1`, `.album-heading h3`; `src/app.html`; `public/fonts/`.

## A03. Colour palette

**Classification:** Visual mismatch; current main text contrast is strong.

**Current state:** Blue text on near-white, blue/yellow showreel, yellow contact, yellow hover/selection. The two bright colours operate as global identity colours rather than work-specific accents.

**Desired state:** A predominantly monochrome interface, provisionally paper/carbon, with restrained optional accents. Published artwork keeps its real colours.

**Gap:** The saturation and area of colour compete with work imagery. The issue is not insufficient contrast: computed solid-colour ratios are about **15.23:1** for current blue/near-white and **12.24:1** for blue/yellow.

**Recommendation:** Trial a restrained interface across a full homepage and work page, then approve the exact tokens. Include selection, focus, hover, rules, fallback media and exports in that trial. Do not recolour the red, grey or blue album covers to force a match.

The proposed carbon/paper pair is about **12.87:1**. Ash/paper is only **2.00:1**, and sage/paper **1.68:1**. Those latter combinations must not become small informational text simply because the guide includes them. For normal text the WCAG AA contrast threshold is 4.5:1; large text has a 3:1 threshold. See [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Evidence:** `:root`, `.contact`, `.platform-button:hover`, `::selection` in `src/style.css`; independent relative-luminance calculations on the specified hex values.

## A04. Layout and spacing

**Classification:** Strong existing alignment; consistency opportunity.

**Current state:** Sections use the browser width with left-aligned content. About is not centred. Prose measures are limited (`54ch` for About, `68ch` for album descriptions); artwork/text use a deliberate column relationship. Gaps and section padding are repeated literal values rather than a named scale.

**Desired state:** Preserve the left-aligned browser canvas, purposeful whitespace and readable text. Use a consistent spacing vocabulary without imposing a universal artwork grid.

**Gap:** Whitespace is generous, but much of the opening is allocated to unavailable material. The collection of 76/90/64/44/36px spacing values is harder to tune coherently. This is maintainability and hierarchy, not a reason to replace the layout engine.

**Recommendation:** Keep the canvas and reading measures. After agreeing content order, consolidate spacing roles and reassess section gaps. Retain only rules that clarify real relationships. Do not recenter the site or make every line full-width.

**Evidence:** `.container`, `.album`, `.about-copy`, `.album-description`, `.work`, `.releases`, `.about` in `src/style.css`.

## A05. Artwork and generative imagery

**Classification:** Clear motif conflict; future art direction remains exploratory.

**Current state:** `SoundDrawing.svelte` deterministically draws 27 SVG polylines using sine/cosine equations with embedded constants. It fills the large showreel fallback. `generate-social.py` repeats a related waveform beneath promotional text. No real recording drives either image. Existing release covers are presented faithfully and square.

**Desired state:** Lines as meaningful compositional material, with no prescribed geometry and no generic waveform identity. Coherent but distinct work imagery; authentic published covers retained.

**Gap:** The current image is reproducible and vector-based, which is useful, but it reads as the generic sound-wave motif explicitly excluded by the guide. Its fixed equations are not a configurable exploratory image system. That limitation does not make the static SVG malfunctioning.

**Recommendation:** Stop treating the waveform as the universal signature. First reduce its role where media is absent; separately develop a few reproducible line studies against real works. Approve their direction before integrating new artwork. Preserve the original album assets and do not build an elaborate generation platform in advance of successful studies.

**Evidence:** [SoundDrawing.svelte](src/components/SoundDrawing.svelte), [Showreel.svelte](src/components/Showreel.svelte), [Video.svelte](src/components/Video.svelte), [generate-social.py](scripts/generate-social.py).

## A06. Homepage hierarchy

**Classification:** High-impact content/discovery mismatch.

**Current state:** The hero's “Explore the work” targets `#showreel`, but no showreel file exists. The next section presents four labelled sample compositions with forthcoming-recording labels. Real albums begin at approximately 2496px on the inspected Dutch desktop page.

**Desired state:** A visitor should reach an actual musical work and listening route early. A showreel should be a centrepiece only when there is one to play.

**Gap:** The primary discovery journey leads first to unavailable media and then examples. The labels are honest, so this is not fabricated credit; their prominence still weakens the encounter with the real music.

**Recommendation:** Feature real work early, redirect the primary discovery action accordingly, and remove/withhold sample entries from a public-facing catalogue until real content is supplied. Agree whether a genuine future showreel belongs before or after the catalogue. Do not replace missing media with another large decorative placeholder.

**Evidence:** Homepage template, `Showreel.svelte`, `src/data/projects.ts`, `src/locales/{nl,en}.ts`, asset inventory and browser section positions.

## A07. Composition and release presentation

**Classification:** Useful foundation; work hierarchy can be improved.

**Current state:** Albums have actual titles, years, covers, descriptive notes, streaming buttons and tracklists. The generative release has supplied process notes, not invented AI claims. Detail pages put title and year/genre before image and description. Four sample entries remain clearly differentiated; `catalog.ts` excludes them from generated detail pages and publication schema. UPCs are data/structured identifiers, not visible decorations.

**Desired state:** Work title and imagery lead, followed by factual work type, available materials and authorship. Individual works can differ within a coherent system.

**Gap:** Home release covers are 300px beside descriptions and service controls; promotional display type is more visually prominent than any work title. Detail pages have useful content but no dedicated authorship line near the work—credit is supplied by the shared header/footer. This is an opportunity, not an absent identity or false attribution.

**Recommendation:** Refine the work-specific title/image/metadata/credit sequence within the existing template. Add only real metadata and actual score/download links. Assess a more prominent featured work without imposing identical artwork treatments on every release.

**Evidence:** [Albums.svelte](src/components/Albums.svelte), `src/routes/[lang=language]/[section=work]/[slug]/+page.svelte`, `src/data/albums.ts`, `src/lib/catalog.ts`, `src/lib/seo.ts`.

## A08. Navigation and information architecture

**Classification:** Routes work; catalogue destination needs alignment.

**Current state:** Work/About/Contact, NL/EN, native anchors and linked album titles/covers. Language switching preserves an album route or existing section hash. About/contact stay on the homepage. There are no redundant biography/service pages.

**Desired state:** Keep a small navigation system that reaches real work, listening, biography and enquiries. Separate pages only where content warrants them.

**Gap:** Work lands on the sample list. Published releases have no equivalent primary-nav destination; they are discovered farther down the index. The anchor itself is functional, so this is a content destination issue, not a routing failure.

**Recommendation:** Align Work with the real catalogue during the homepage hierarchy change. Retain bilingual route conventions, contextual language switching and work-page return links. Do not add separate top-level categories for empty score/recording collections.

**Evidence:** [Shell.svelte](src/components/Shell.svelte), homepage section IDs, `src/lib/catalog.ts`; browser switch from `/en/#releases` to `/nl/#releases`.

## A09. Audio experience

**Classification:** Working interaction foundation; discoverability opportunity and testing limits.

**Current state:** Three Spotify disclosures are available. No Spotify iframe exists until its disclosure is opened; closing removes it. Direct service buttons remain. Geometry measured 640×640px on desktop, 350×350px at a 390px viewport and 280×280px at 320px. Native players are supported for future supplied files, with `preload="none"` and translated missing-media labels.

**Desired state:** Listening should be easy to recognise and closely associated with a work, without autoplay or constant external loading. Scores should appear only when provided.

**Gap:** Listening follows the sample-heavy introduction. Platform icons are recognisable to some visitors but rely on familiarity or a tooltip for sighted platform identification. The square iframe is an existing user preference; there is no evidence here that it is broken. Native-player mutual pausing only queries `audio, video`, not separate Spotify frames.

**Recommendation:** Move available listening earlier with real works. Retain deferred Spotify loading, direct links and keyboard disclosures. Review icon labels and player height with actual listening sessions; test simultaneous external players before deciding whether single-player coordination is worth adding. Do not claim playback was verified in this audit or prescribe a custom player without a demonstrated need.

**Evidence:** [SpotifyPlayer.svelte](src/components/SpotifyPlayer.svelte), [ListeningLinks.svelte](src/components/ListeningLinks.svelte), [Audio.svelte](src/components/Audio.svelte), `src/lib/media.ts`.

## A10. Mobile experience

**Classification:** Responsive foundation works; editorial density needs refinement.

**Current state:** Both languages stayed within the viewport at 320/390/768/1440px. Navigation wraps into a second header row on small screens. Album rows collapse to one column; covers remain square. The Dutch mobile page is about 5497px tall at 390px width. Small section labels use 12px, while body and supporting copy use larger sizes.

**Desired state:** Preserve clear title/image/listening order, relevant image content and comfortable type. Reduce opening friction without simply removing whitespace everywhere.

**Gap:** The block display headline breaks across several dense lines, and placeholder sections lengthen the route to real listening. Small labels deserve a readability review. No observed overflow should be invented as a problem.

**Recommendation:** Re-test both translations after hierarchy/type changes; favour intentional line breaks and useful density. Keep the current one-column response, touch-sized service controls and image proportions. Do not treat total page length alone as a defect: the real album descriptions are substantive content.

**Evidence:** `src/style.css` responsive rules, `Image.svelte`, browser dimensions and screenshots.

## A11. Motion and interaction

**Classification:** Mostly aligned; no animation feature is needed.

**Current state:** The line image is static, there is no automatic audio-reactive animation, and there are no decorative transition libraries. Reduced-motion emulation produced `scroll-behavior: auto`. Native details provide tracklists, notes and optional embeds.

**Desired state:** Stillness as a valid default; motion only when an artistic relationship justifies it, with reduced-motion and pause behaviour.

**Gap:** No significant motion defect was observed. The existence of a generative formula does not require animating it. Adding constant movement would create a new risk rather than close the current identity gap.

**Recommendation:** Preserve the present stillness and reduced-motion behaviour. Keep motion as a later, work-specific experiment requiring a clear purpose, rather than a redesign prerequisite.

**Evidence:** `SoundDrawing.svelte`, media components and `@media (prefers-reduced-motion: no-preference)` in `src/style.css`.

## A12. Accessibility and usability

**Classification:** Several working foundations; incomplete formal assessment.

**Current state:** Semantic main/section headings, a skip link, visible focus styling, native disclosures and labelled service links exist. Service targets are 44×44px. The skip link reached `#main`; Enter opened a 13-track list. A no-JavaScript detail page returned 200 with its title and meaningful text. An unknown route returned 404. Existing primary text contrast is high.

**Desired state:** Retain those foundations throughout the art-direction change; visuals must not obscure text, controls or content.

**Gap:** Abstract display lettering and 12px labels present readability questions without establishing a WCAG violation. Alt text such as “Album artwork: [title]” identifies the work but does not describe its visual content. Future proposed subdued colours introduce a concrete contrast risk. External Spotify controls were not evaluated.

**Recommendation:** Preserve semantics, focus, text contrast, native controls and no-JS content. Review meaningful artwork descriptions against their function—avoid duplicating an already adequate link name or adding speculative symbolism. Test longer translations, keyboard operation and zoom after redesign. Do not claim full accessibility conformance from these limited checks.

**Evidence:** `Shell.svelte`, `Image.svelte`, `ListeningLinks.svelte`, `SpotifyPlayer.svelte`, `src/style.css`, browser checks and contrast calculations.

## A13. Contact and factual publication readiness

**Classification:** Confirmed practical blocker, not merely a styling issue.

**Current state:** Both the large contact link and visible email target `mailto:your-email@example.com` from `src/data/site.ts`. Portrait and professional-profile fields are blank and correctly omitted. Sample entries are explicitly labelled.

**Desired state:** A direct, real enquiry route and factual available materials. Optional missing content need not appear.

**Gap:** The prominent enquiry action opens a placeholder recipient. It is syntactically a mail link but not a usable professional contact destination. The public index also includes preparation examples before released work.

**Recommendation:** Obtain/configure the real email before launch. Keep unknown profiles, portrait and materials hidden. Replace or withhold samples rather than inventing projects, credits or recordings. Keep biography and descriptions unless a specific content review identifies a needed change.

**Evidence:** [site.ts](src/data/site.ts), `src/data/profiles.ts`, `src/data/projects.ts`, browser email target.

## A14. Identity propagation and implementation scope

**Classification:** Consistency gap; reuse existing infrastructure.

**Current state:** The sharing image and its Python generator use Alien Block, the yellow/blue palette and a waveform. The generated static 404 has its own small style block. Main website tokens live in one CSS file, but image-generation colours/type are separate constants. The Svelte catalogue/locale/SEO separation is already useful.

**Desired state:** The same approved direction across website, fallback states and social previews, with artwork rendering distinct from typography/layout. Experiments should be configurable and reproducible without establishing an elaborate platform too soon.

**Gap:** A later CSS-only change would leave the sharing image and relevant generated surfaces behind. The fixed waveform is reused as an identity motif in both site and export. None of this warrants a framework migration.

**Recommendation:** After visual decisions are approved, update exports and fallback states in the same release, with licences/provenance retained. Parameterise only the artwork experiments that have actually been selected for testing. Preserve SvelteKit, static output, the catalogue, locale data and SEO rather than rebuilding them.

**Evidence:** `scripts/generate-social.py`, `public/assets/social/portfolio.png`, `scripts/postbuild.mjs`, `src/lib/catalog.ts`, `src/lib/seo.ts`.

## Audit conclusion

The most consequential gap is **what receives attention first**: unavailable promotional media and sample content currently precede the published body of work. The new guide also calls for a quieter colour/display relationship and an end to the generic waveform as a universal identity device. Those are art-direction and hierarchy changes, not grounds for replacing the functioning technical system or authentic release material.

Retain the existing left alignment, primary font, bilingual routes, useful detail template, real artwork and descriptions, deferred playback, static content and accessibility foundations. The ordered next steps and outstanding approvals are in [Website design priorities](WEBSITE_DESIGN_PRIORITIES.md).
