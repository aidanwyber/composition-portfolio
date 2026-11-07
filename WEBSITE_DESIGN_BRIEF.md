# Website design brief

**Aidan Wyber — compositional practice**  
**Date:** 7 November 2026  
**Basis:** `BRAND_GUIDE.md`, version 0.1  
**Status:** Design direction and recommendations; not implementation approval.

## Decision boundaries

The guide establishes a visual identity for the music, not a new personal brand. Its confirmed decisions are: minimal and abstract presentation; music before visual effects; subtle existential atmosphere; generative imagery with lines as its primary material; Space Grotesk as the primary typeface; a contrasting display face; a restrained, mostly monochrome palette; and individual visual expressions for different works. Do not invent a logo, label, monogram, catalogue system or additional brand name.

Instrument Serif is the current display recommendation, **not a final selection**. The paper/carbon/ash/sage hex values, optional accents, margin percentages and image formats are provisional starting points. IBM Plex Mono is optional functional typography. Exact line geometry, algorithm families, musical inputs, colour assignments and motion remain unresolved. The guide mentions “four exploratory generative families” without defining a numbered set; do not manufacture a taxonomy from that reference.

The recommendations below translate those boundaries into website decisions. Proposed information architecture and hierarchy remain recommendations. Preserve the existing Dutch/English experience and useful listening, publication and contact functions; these are existing product requirements, rather than rules newly established by the guide.

## A. Design objective

Present an encounter with musical work: a visitor can identify a composition or release, understand its context, and reach a recording or score without navigating a spectacle first. Structure, recurrence and restraint should be perceptible in the arrangement of content; intuition and difference should emerge through the works themselves.

The website must also make original-music commissions and professional contact easy to find. That practical offer should sit alongside the independent work without turning the opening screen into an agency pitch. The composer's name identifies authorship and the site; it is not the dominant visual event.

**Success criteria:** real works are discoverable early; title, imagery and listening routes have clear relationships; missing recordings are represented honestly; contact remains easy to reach; and the interface is recognisable without a logo, fixed visualiser motif or constant animation.

## B. Positioning and tone

Express a practice shaped by resonance, composition and contemplation. Use clear, factual language about what a work does, how it was made and how it can be heard or performed. Keep the balance between instrumental writing, electronic production and generative methods visible without reducing the practice to a technical identity or a single musical genre.

Allow supplied programme notes to retain their particular concerns. Do not turn existential themes into generic mystical language or present algorithmic work as AI-generated music. Avoid claims about passion, innovation, clients, commissions or performances that the content does not support.

Keep a short factual statement of the commissioning offer and a direct contact route. The exact opening sentence and relative emphasis between commissions and independent works should be reviewed as a content decision, not silently rewritten during a styling pass.

## C. Visual direction

### Colour usage

- Begin design trials with `paper #EEECE4` and `carbon #252622`, or their inverse. A quiet light interface is the recommended starting treatment; an inverted work-specific surface is an option, not a required theme switch.
- Treat the restrained, near-monochrome direction as confirmed. Treat those particular hex values as candidates to test in real pages before adopting them as final tokens.
- Reserve ash and sage for nonessential details, surfaces or line work with sufficient contrast. Do not assume a palette swatch is suitable for small body text.
- Introduce a work-specific accent only where it has a compositional reason. No fixed genre-to-colour mapping and no requirement that every release carry a different colour.
- Preserve the original colours of published album artwork. An interface change does not authorise recolouring or replacing existing covers.

### Typography and hierarchy

Use Space Grotesk Regular for reading and practical information; Medium for navigation and neutral headings. Use Semibold rarely. Test Instrument Serif Regular for work titles and a small number of editorial statements, with selective italic only where it improves the reading. Compare title specimens against actual long Dutch text and `generative_variations.py` before settling the display face.

Give work titles clear prominence within their context. Keep composer credit present but secondary. Metadata should be smaller and grouped by meaning; uppercase with modest tracking is an option for selected short labels, not a global text treatment. Do not introduce a monospaced layer unless real durations, work numbers or other technical content justify it.

The current emphatic block display treatment is not the target display voice. Its replacement should be tested rather than treated as a mechanical font-file substitution: measure, weight, line breaks and whitespace must work together.

### Generative imagery and artwork

Lines are the confirmed material; a sine wave or any other specific line behaviour is not the identity. Develop a small set of still experiments against actual works before selecting production imagery. Each experiment should have a stated internal rule, a reproducible configuration and a considered relationship between density and open space.

Use artwork as a primary visual object, not as wallpaper behind unrelated text or a generic sound illustration. Keep type separate from dense imagery. Evaluate images as thumbnails and at feature size. Default to a still, accessible presentation until motion has a reason to exist.

Existing published covers are authentic release material, even where they do not resemble the future image family. Present them faithfully in a quieter surrounding interface. New line imagery may accompany works, but replacing an official cover requires a separate decision.

### Composition, spacing and density

Retain left alignment and the browser-width canvas requested for this site. Do not reinstate a centred sheet. Use consistent responsive edge padding, while constraining long prose to a readable measure. Full-width sections do not require every paragraph to span the viewport.

Use a small, named spacing scale for text groups, media groups and section changes. Give work titles and imagery space; tighten the relationship between controls and the music they operate. Use thin rules only where they clarify a transition or list structure. Avoid putting every element in a bordered container.

Artwork and publication layout may have different compositional rules. Do not impose one universal generative grid or one identical cover template. Asymmetry is useful when it clarifies a particular work, not as a requirement for every screen.

### Movement and atmosphere

Aim for quiet attention, precision and room to pause. No animation is required to communicate generative practice. If experiments establish a useful transformation, it should be slow, purposeful, pausable and independent of playback by default. Respect reduced-motion preferences and provide a still presentation. Never make essential information depend on motion, colour or a visual effect.

## D. Information architecture

Recommend retaining a bilingual portfolio index with genuine work-detail pages:

| Destination                            | Function                                                                                                                |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `/nl/`, `/en/`                         | Introduce the practice briefly; provide an early route to real work, listening, About and contact.                      |
| `/nl/werk/[slug]/`, `/en/work/[slug]/` | Present a particular published release or real composition, its materials, context and available listening/score links. |
| About and Contact anchors              | Keep short biographical and enquiry content within the portfolio unless later content warrants dedicated pages.         |

Do not add separate pages for scores, recordings, services or biography merely to fill a navigation system. Group materials with their work. Distinguish published releases, independent compositions and verified commissioned work through factual labels and content, not separate visual brands.

The current three published albums can anchor the real catalogue immediately. Editable sample compositions are preparation material, not an established catalogue or commission history. Before publication, replace them with supplied real work or exclude them from the public index. Avoid empty categories implying unavailable content.

Include a showreel feature only when a genuine showreel exists. Until then, a conspicuous placeholder must not become the site's main artistic statement. Agree the opening sequence using the real catalogue: a featured work followed by the work list is a useful starting candidate, not a settled structural rule.

## E. Page-level guidance

### Portfolio homepage

Use a modest site identifier and minimal navigation. Offer a concise factual introduction, then a clear encounter with real work. The commissioning offer should be visible without repeating it in several large statements. Prefer a work-led first screen or an early featured-work entry over a dominant promotional slogan followed by unavailable media.

Present real compositions and releases through title, distinct artwork and concise metadata, with an obvious listening or detail route. Keep platform controls subordinate to the work. Existing album descriptions may be edited for index length only with a deliberate content review; retain their substance on detail pages.

### Composition/release detail

Use the actual title as the primary textual focus, then imagery, instrumentation/work type, available year/duration/score information, and composer credit. This order is adjustable for the work. Retain genuine square release covers; allow responsive landscape imagery for a different work where it is appropriate.

Place playback and external listening choices near the description and image. Include a score/download only when a real file or supplied URL exists. A recording or score should be reachable without opening unrelated information first. Tracklists and longer process notes may use accessible disclosures where they help scanning; substantive context must remain discoverable in the rendered page.

Retain bilingual equivalents, a clear route back to the catalogue, and the useful existing detail template. Allow a work with different material to vary within it; do not require every piece to have an album cover or streaming release.

### About and contact within the homepage

Keep About concise, factual and connected to the compositional practice. A portrait is optional and should not become a substitute for work imagery. Preserve the confirmed biography rather than inventing personal narrative.

Provide a simple contact heading, configured email and a short factual enquiry invitation. Give this section distinction through spacing and typography rather than assuming an intense colour panel and oversized slogan are necessary. Show only verified profile links that have actually been configured.

## F. Interaction and usability

- Use ordinary descriptive links, visible focus states, semantic headings and keyboard-operable controls. Keep the language switcher legible and preserve corresponding work/section context.
- Preserve native audio/video controls and direct external listening routes. Disclosures must clearly distinguish programme notes, tracklists and a player that loads external content.
- Retain the current ability to load Spotify only on user action and to stop its iframe when closed. Platform branding belongs inside the player; it must not become the site's identity.
- Circular service buttons are an existing functional choice, not a brand-guide requirement. Retain adequate targets and accessible platform names; supplement icon recognition if user testing finds it unclear.
- Do not autoplay sound. Do not imply that the website can synchronise native media with third-party embeds unless that behaviour is implemented and verified.
- Preserve useful static HTML, bilingual metadata and factual structured data. Exclude samples and unavailable materials from publication claims.
- Test text, focus and control boundaries for contrast. Judge subdued information by its reading function, not by a desire to use every palette token.

## G. Responsive behaviour

**Desktop:** keep the canvas left-aligned with consistent edge padding. Use image/text relationships where they support a work. Limit prose measure; let deliberate empty space remain on wide displays. Do not scale a placeholder or generic motif simply to occupy a large monitor.

**Tablet:** collapse image/text arrangements before text or controls become cramped. Test long titles and translated navigation at intermediate widths, not just device presets. A square player is an existing preference to evaluate against actual track visibility and scrolling; it is not a permanent brand format.

**Mobile:** keep the title, image and listening route in a clear sequence. Preserve relevant image content rather than relying on automatic crops. Scale editorial statements for readable line breaks instead of allowing the display face to consume the opening screen. Maintain comfortable touch targets and logical keyboard order. Whitespace should separate ideas without imposing desktop-sized gaps.

Use actual artwork to decide between contain, crop or bleed. Check each decision at thumbnail, mobile and feature sizes. Do not add mobile-only decorative imagery to compensate for a simpler layout.

## H. Principles and anti-patterns

**Follow:** music before promotion; work-specific titles and truthful metadata; left-aligned, legible structure; a coherent family with individual differences; Space Grotesk for functional reading; selective contrasting display typography; restrained colour; purposeful line imagery; accessible, deliberate listening.

**Avoid:** a generic musician/producer template; stock instruments, headphones or equipment; generic waveform/equaliser decoration; untested line systems presented as definitive branding; unnecessary gradients, shadows, cards or pills; a new logo, monogram or brand name; constant/audio-reactive motion; invented credits or catalogue numbers; recoloured published covers; and effects that compete with the music.

## Review gate for a later implementation

Before changing the site, agree the display-font specimen, palette application, opening content hierarchy and the role of existing versus newly generated imagery. Test several line approaches against real compositions; do not promote one experiment to a permanent system by default. The guide provides direction, not automatic approval to replace the present website or its published artwork.
