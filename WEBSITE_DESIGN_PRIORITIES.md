# Website design priorities

**Date:** 7 November 2026  
**Basis:** [Design brief](WEBSITE_DESIGN_BRIEF.md) and [read-only audit](WEBSITE_DESIGN_AUDIT.md).  
**Status:** Implementation requested by the owner on 7 November 2026. The original recommendations below are retained as the audit record.

## Implementation update — 7 November 2026

Owner revision: Cormorant Garamond replaces the previous display font throughout the site, font assets and exports. The header is now only “Aidan Wyber”. The catalogue hierarchy is “Eigen werk” → “Albums” / “Partituren”, with a shared list/grid switch. “Werk in opdracht” appears above it only for published commissioned projects. Contact is the single shared footer, with extra space and a right-aligned back-to-top link. Scores open online in a new tab; there is no download action. The opening no longer has a featured-release label.

Follow-up refinements: display weight is Medium (500), the default catalogue view is grid, and the list/grid switch is temporarily hidden with `display: none`. Opening links are “Werk in opdracht” / “Eigen werk” if commissioned projects exist, otherwise “Albums” / “Partituren”. Hover states use eased transitions with reduced-motion handling.

The featured-release block has now been removed entirely from the opening, including its cover, title, year, listening controls, data selection and dedicated styles.

- **P1-01 implemented:** the opening links directly to the real catalogue sections. Work navigation reaches published work, with listening links on the release entries. Editable samples and the unavailable showreel are withheld from the public homepage.
- **P1-02 implemented:** the owner confirmed `aidanwyber@gmail.com`; both bilingual contact actions use that address.
- **P1-03/P1-04 implemented for review:** Cormorant Garamond Medium and the guide’s paper/carbon values are the current website treatment, including work titles, contact, media surfaces, font preload, social preview and generated 404. Space Grotesk remains the reading face. Local font sources and licences are retained. This application does not turn the guide’s provisional recommendations into permanent identity rules. A comparison with Alien Block is in `design/studies/index.html`.
- **P1-05 public motif retired; exploration remains open:** the public video fallback, homepage and social preview no longer use the generic waveform. Actual release covers and score pages remain the public imagery. Three reproducible line studies, with their rules and parameters, live outside the public site in `design/studies/`; none is an approved replacement cover or universal identity. Generate them with `python scripts/generate-design-studies.py`.
- **Supplied scores integrated:** `Études voor cello` (v2, ten pages) and `De Toekomst In` (v1, two pages) have bilingual catalogue entries and detail pages, uncropped first-page previews, authorship, instrumentation verified from the PDFs, and links that open the original files in a new tab. No dates, durations, recordings, or usage licences are inferred. Regenerate previews with `python scripts/generate-score-previews.py`.

Validation: `npm run check` reports zero errors/warnings; `npm run build` verifies 12 prerendered routes, metadata, assets and JSON-LD. Chrome checks covered eight representative bilingual pages at 320, 390, 600, 768, 1024 and 1440px, plus 200% text at 768px. No horizontal overflow or browser script errors were found. Original PDF responses, image loading, contact links, deferred players, keyboard skip navigation and contextual language switching were checked. Actual third-party audio playback and full accessibility conformance are not established by these checks.

The work is local to this repository; deployment is outside this implementation.

Effort estimates are relative implementation estimates for the present SvelteKit site, not delivery promises. They exclude writing missing programme notes, producing recordings, replacing published artwork or resolving third-party playback restrictions. “Approval” below identifies a decision to settle before a later implementation; it is not a request to start work now.

## P1 — Essential

### P1-01. Make the published music the primary discovery route

- **What:** Reorder the opening so that a real release or composition and its listening/detail route appear early. Change the main discovery action and Work navigation to reach real catalogue content. Withhold editable samples from the public catalogue until replaced by genuine work. Do not retain an unavailable showreel as the main feature merely to occupy space.
- **Why:** The current Dutch desktop release section starts around 2496px down the page, after a placeholder and four sample entries. This directly undermines the guide's music-first principle even though the placeholders are honestly labelled.
- **Affected:** `src/routes/[lang=language]/+page.svelte`, `Shell.svelte`, `Showreel.svelte`, `ProjectRow.svelte`, `src/data/projects.ts`, homepage locale copy. Audit A01, A06–A08, A13.
- **Effort:** **Medium**.
- **Dependencies:** Agree the commissioning/independent-work balance and which genuine work should lead. Existing albums provide sufficient real content; do not wait for new recordings or invented commissions. A future genuine showreel can be introduced later.
- **Completion check:** Both languages offer an early route to a real work and available listening; Work no longer leads visitors primarily to examples or unavailable media.

### P1-02. Replace the placeholder enquiry address

- **What:** Configure the real email in `src/data/site.ts` and verify both the visible address and large enquiry link resolve to it.
- **Why:** `mailto:your-email@example.com` is a confirmed practical blocker to the site's professional purpose. A visual redesign cannot compensate for it.
- **Affected:** `site.ts`, homepage Contact links. Audit A13.
- **Effort:** **Small**.
- **Dependencies:** The actual address must be supplied by the owner. No typography or artwork decision is required.
- **Completion check:** Dutch and English contact actions target the confirmed recipient; no placeholder recipient remains in generated public HTML.

### P1-03. Agree and implement a quieter display hierarchy

- **What:** Compare Cormorant Garamond Medium with the existing Alien Block treatment using real work titles, a restrained introductory statement and both languages. Agree the display role, scale and line breaks; then apply the approved treatment. Give actual work titles appropriate prominence and keep Space Grotesk as the functional reading face.
- **Why:** The current strongest display voice belongs to promotional headlines. The guide asks for a quieter contrast that serves the compositions. Cormorant Garamond is recommended, not already a final decision that can be installed without review.
- **Affected:** `src/style.css` display/title selectors, homepage and work-detail templates, font assets/preloads. Audit A02, A07, A10.
- **Effort:** **Medium**.
- **Dependencies:** Review/approval of the display specimen and P1-01's opening hierarchy. The previous explicit Alien Block choice remains the current implementation until a replacement is agreed. Do not add IBM Plex Mono by default.
- **Completion check:** Selected work titles and reading hierarchy are clear at desktop/mobile sizes; the approved display voice no longer competes with the music or makes Dutch headings difficult to scan.

### P1-04. Establish a restrained interface palette

- **What:** Trial the guide's paper/carbon pair across the homepage and one work page, including contact, media fallbacks, focus, hover, selection and rules. Agree the exact colours and the scope of any remaining accent before adopting tokens.
- **Why:** The global blue/yellow treatment is a major source of visual intensity. The confirmed direction is near-monochrome, but the exact proposed hex values remain provisional.
- **Affected:** `src/style.css`, media/fallback surfaces and, in a later coordinated export update, `generate-social.py` and static error styling. Audit A03, A14.
- **Effort:** **Medium**.
- **Dependencies:** Approve the palette application using actual album covers and the typography specimen. No cover recolouring. Keep essential text on adequately contrasting colours; ash/sage on paper are unsuitable small-text combinations.
- **Completion check:** Interface colour is restrained, states remain usable, and published artwork retains its original colour information.

### P1-05. End the generic waveform signature and agree an artwork approach

- **What:** Remove the assumption that one waveform represents the whole practice. Plan a small set of still, reproducible line studies against actual compositions, documenting each study's rule, parameters and seed if randomness is used. Compare their internal logic and negative space before choosing an approach to integrate.
- **Why:** Lines are established; sine waves, grids, flow fields and other particular behaviours are not. The current universal waveform is specifically at odds with the guide's anti-patterns.
- **Affected:** `SoundDrawing.svelte`, `Showreel.svelte`, `Video.svelte`, `scripts/generate-social.py`; future work-specific artwork configuration. Audit A05, A14.
- **Effort:** **Medium** for bounded studies and direction selection, not a complete rendering platform.
- **Dependencies:** Choose real works for evaluation and a restrained palette trial. New artwork direction needs review before integration. P1-01 can proceed with authentic existing covers and does not depend on a new generator.
- **Completion check:** No universal decorative visualiser is treated as the settled identity. A selected study has a reproducible rationale and has been checked at thumbnail and feature sizes; unresolved approaches remain explicitly experimental.

## P2 — Important

### P2-01. Refine work-page hierarchy and factual materials

- **What:** Tune title, artwork, work type, available metadata, listening controls and composer credit within the current reusable detail template. Add a restrained nearby authorship credit where useful. Keep full supplied descriptions and process notes available; add score/download controls only for real materials.
- **Why:** Detail pages already contain good content and an appropriate title-first structure. They need a closer relationship between artistic imagery, typography and practical materials, rather than a new page system.
- **Affected:** `src/routes/[lang=language]/[section=work]/[slug]/+page.svelte`, `Albums.svelte`, `catalog.ts`, project/album locale entries. Audit A07, A09.
- **Effort:** **Medium**.
- **Dependencies:** P1-03/P1-04 and verified material availability. Preserve published metadata, tracklists, UPC identifiers and the distinction between independent and commissioned work.
- **Completion check:** Visitors can identify, contextualise and hear a real work, with authorship and available performance/download material clearly placed.

### P2-02. Consolidate spacing and structural rules

- **What:** Introduce a small spacing scale with named roles for inline metadata, text groups, media groups and sections. Tune the existing left-aligned layouts against the revised content hierarchy; remove only genuinely redundant dividers or containers.
- **Why:** The canvas and reading measures work. Scattered literal spacing values make consistency and responsive refinement harder, while unnecessary rebuilding would discard useful structure.
- **Affected:** `.container`, section padding, `.album`, `.project`, `.detail-layout`, metadata/disclosure spacing in `src/style.css`. Audit A04.
- **Effort:** **Medium**.
- **Dependencies:** P1-01 and the approved type hierarchy. Do not impose a universal grid on the artwork or restore a centred page sheet.
- **Completion check:** Related information reads as a group; section transitions are clear; prose stays readable at wide widths; important work is not delayed by empty placeholder surfaces.

### P2-03. Make listening choices easier to recognise

- **What:** Review the listening route in the new work-first sequence. Test the existing service icons, disclosure labels and square player with real visitors and actual playback. Add a concise text cue only if icon recognition or the difference between loading a player and leaving the site is unclear. Check independent Spotify frames for competing playback before deciding whether coordination is needed.
- **Why:** Local geometry and keyboard checks work, but they do not establish that all visitors recognise platform marks or that remote streaming behaves well in every account/browser context.
- **Affected:** `ListeningLinks.svelte`, `SpotifyPlayer.svelte`, `Audio.svelte`, `Video.svelte`, `src/lib/media.ts`, listening copy in both locales. Audit A09, A12.
- **Effort:** **Medium**.
- **Dependencies:** P1-01 and access to actual listening sessions. Preserve circular buttons, Deezer-last ordering, deferred loading and 1:1 player sizing unless evaluation leads to an agreed change. Do not replace working native/platform controls with a custom player as a default response.
- **Completion check:** A visitor can deliberately choose a player or external service, use it with the keyboard, and recover through a direct link if an embed is unavailable.

### P2-04. Validate responsive reading and accessibility after the visual changes

- **What:** Recheck both languages at intermediate and small widths, enlarged text/zoom, keyboard navigation, focus, heading order and colour contrast. Review small metadata and image descriptions in context. Preserve square album covers, and check any future artwork crop individually.
- **Why:** The present no-overflow and accessibility foundations are worth retaining; new fonts, colours and line compositions can invalidate them. The proposed ash/sage colours are a concrete risk if used as small text.
- **Affected:** Global CSS; `Shell`, `Image`, album/work templates and media controls. Audit A03, A10, A12.
- **Effort:** **Medium**.
- **Dependencies:** Approved P1 treatments and P2-01/P2-02. Test actual generated imagery if it has been selected; do not invent alt-text symbolism or certify full conformance from a few screenshots.
- **Completion check:** No horizontal overflow or lost controls, readable translated headings, correct image proportions, usable focus/keyboard journeys, and adequate contrast for the role of each text/control colour.

### P2-05. Carry the approved direction into exports and fallback states

- **What:** Update the sharing-image generator/output, font sources/preloads and generated error/media states alongside the website treatment. Derive the social preview from the approved artwork/layout direction rather than retaining the waveform-and-slogan graphic as a separate identity.
- **Why:** A CSS-only redesign would leave recognisable old typography and saturated colours in search/social and fallback surfaces.
- **Affected:** `scripts/generate-social.py`, `public/assets/social/portfolio.png`, `scripts/postbuild.mjs`, relevant font assets, `src/app.html`, media fallbacks. Audit A14.
- **Effort:** **Medium**.
- **Dependencies:** P1-03/P1-04 and the agreed artwork decision from P1-05. Retain licence and provenance information. Regenerate assets only during an authorised implementation, not this audit.
- **Completion check:** Website, shared preview and fallback surfaces use the same approved identity without introducing another logo or brand system.

## P3 — Refinement

### P3-01. Add technical metadata and performance materials when supplied

- **What:** Extend work presentation with verified instrumentation, duration, score/version information or downloadable materials where the actual piece needs them. Evaluate a technical mono only for a demonstrated information-design need.
- **Why:** These can help performers and ensembles, but invented detail or empty download categories would weaken trust. A universal catalogue number scheme is unresolved.
- **Affected:** Project/album data and locale schemas, `catalog.ts`, work-detail metadata and download controls. Audit A07.
- **Effort:** **Small** for the next supplied work's fields/materials.
- **Dependencies:** Real, owner-supplied information and files. Do not infer durations, create catalogue identifiers or add IBM Plex Mono simply to make the interface technical.

### P3-02. Expand the artwork toolkit only after successful studies

- **What:** If a selected study needs repeated production use, separate rendering logic, per-work settings, palette and dimensions; provide deterministic exports for the formats actually needed.
- **Why:** Reuse and reproducibility support the guide, but building a full generative platform before visual evaluation would lock in assumptions.
- **Affected:** The eventual artwork module/configuration and export scripts; current starting references are `SoundDrawing.svelte` and `generate-social.py`, not mandatory architecture.
- **Effort:** **Medium**.
- **Dependencies:** A successful and approved P1-05 experiment, actual export requirements and a demonstrated need for reuse. SVG should remain vector where appropriate; no arbitrary requirement to rasterise it.

### P3-03. Explore motion only for a work that benefits from it

- **What:** Prototype a slow, purposeful transformation for a selected work only if it reveals a musical/compositional relationship. Include still output, pause/stop behaviour and reduced-motion handling before integration.
- **Why:** Stillness is already compatible with the identity. Motion is unresolved and must earn its place, rather than become a generic “generative music” effect.
- **Affected:** A future work-specific artwork renderer and its media/display controls, not a global animated background.
- **Effort:** **Medium**.
- **Dependencies:** Approved still imagery, an explicit artistic reason and review of the interaction. This item can be omitted entirely without leaving the site incomplete.

## The five changes to make first

1. **P1-01:** Lead visitors to the real catalogue; retire the placeholder-led discovery journey.
2. **P1-02:** Configure a real enquiry email before publication.
3. **P1-03:** Agree the quieter work-led type hierarchy and display specimen.
4. **P1-04:** Agree a restrained, accessible palette application.
5. **P1-05:** Retire the universal waveform assumption and evaluate bounded line studies against actual music.

These are the essential content/art-direction foundations. The immediate practical email change need not wait for the longer design decisions, and a new generative-art system is not a prerequisite for presenting the existing releases well.

## Suggested implementation sequence

1. **Settle content and publication facts:** confirm the contact address, choose the leading genuine work, decide how samples are withheld/replaced, and agree the role of the commissioning offer/showreel.
2. **Review a small design specimen set:** one homepage opening and one work-detail treatment using real covers, a restrained palette trial and display-font candidates. In parallel, evaluate a small number of still line studies. This is the decision stage, not a platform build.
3. **Implement the approved foundations:** real-work-first navigation/content sequence; approved type, colour and spacing; refined work-detail hierarchy. Keep genuine artwork as the visual baseline while any new imagery remains unapproved.
4. **Validate listening and responsive use:** both languages, actual playback, platform choices, keyboard and reduced-motion behaviour, text enlargement, image proportions and contrast. Adjust only observed problems or agreed editorial opportunities.
5. **Publish a coherent implementation package:** update sharing/fallback assets and run the existing build/route/metadata checks. Preserve canonical URLs and factual schema. Deployment would be a separate authorised action.
6. **Consider P3 work later:** verified additional materials, reusable artwork tooling and purposeful motion only when there is real content and a reason to support them.

## What should deliberately remain unchanged

- The composer's real name as a modest authorship/site identifier; no invented logo, brand name or monogram.
- Space Grotesk as the primary reading face and local font delivery/licence records.
- The browser-width, left-aligned canvas and readable prose measures; no return to a centred sheet.
- Authentic album covers, supplied descriptions, tracklists, years, UPC data and listening URLs. Reframing the interface does not authorise replacing release artwork or rewriting artistic facts.
- SvelteKit/static output, bilingual routes, contextual language switching, catalogue/locale separation, useful detail templates and factual SEO/schema.
- Semantic content, visible keyboard focus, skip navigation, native disclosures/controls, no autoplay, reduced-motion handling, deferred Spotify loading and direct listening fallbacks.
- Existing circular service buttons, Deezer-last order and square player preference, pending evidence or an agreed reason to change them.
- The absence of stock music photography, unnecessary animation libraries and invented credits. No portrait or social profile must be added merely to fill a layout.

## Decisions still needing exploration or owner approval

| Decision               | Established boundary                                                    | Still open                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Display type           | Space Grotesk is primary; a contrasting free display voice is wanted.   | Cormorant Garamond is recommended, but replacing the previously chosen Alien Block and its exact hierarchy requires review.                |
| Colour                 | The interface should be restrained and mostly monochrome.               | Final paper/carbon values, inverse surfaces, the contact treatment and any work-specific accent.                                         |
| Opening hierarchy      | The music should lead and contact must remain usable.                   | Which genuine work leads; how prominent the commissioning statement remains; where a real future showreel belongs.                       |
| Artwork family         | Lines, abstraction, internal logic and distinct work identities.        | Geometry, density, algorithm families, seeds/parameters, music-to-image mapping and whether new imagery supplements particular releases. |
| Existing covers        | They are authentic release material and should be preserved by default. | Any deliberate new accompanying image or replacement release cover is a separate content/artwork decision.                               |
| Listening presentation | Available material must be accessible, labelled and deliberate.         | Whether user testing supports added text labels or changes to the existing square-player preference.                                     |
| Motion/catalogue       | No gratuitous motion or invented metadata.                              | Whether any work benefits from motion, a technical typeface or a future numbering convention at all.                                     |

No experiment should silently become a permanent rule, and no implementation should begin simply because it appears in this priority list.
