# Visual Identity & Brand Guide

## Aidan Wyber — Compositional Practice

**Version:** 0.1  
**Status:** Working foundation  
**Primary use:** Creative direction, design implementation, and AI-assisted development (especially Codex)  
**Last updated:** 7 November 2026

---

## 1. Purpose of this document

This document defines a usable starting point for the visual presentation of a body of musical work.

It is intentionally a **visual identity for the music, not a personal brand**. The composer's name is an authorship credit and practical identifier; it is not the central graphic device. Do not invent a label name, project name, logo, monogram, or additional brand name.

The identity should be recognisable through its visual language, not through a logo.

This is a working system, not a finished art direction. Some decisions are deliberately left open so that the visual language can develop through experiments with actual compositions.

### Core idea

> Music as an encounter between order and intuition.

The visual language should suggest resonance, structure, recurrence, emergence, stillness, and the possibility of something larger than the individual. Spiritual or existential undertones should remain subtle. Avoid explicit religious imagery or literal illustration of musical meaning.

### Short creative brief

Create a restrained, minimal, generative visual language in which **lines are the primary visual material**. The images should feel precise but not sterile, systematic but not mechanical, and contemplative without becoming sentimental.

The visual system should support a varied musical practice: acoustic and electronic sounds, composed and experimental work, short pieces and longer evolving forms. It must not lock the music into one genre or mood.

---

## 2. Positioning and principles

The identity is informed by three connected ideas:

1. **Resonance — experience**  
   Music is made and evaluated through a felt response. The visual language can suggest interaction, vibration, interference, proximity, and relationships between elements.

2. **Structure — composition**  
   Musical work involves systems, patterns, repetition, development, proportion, and relationships over time. These can inform visual organisation without becoming literal notation.

3. **Contemplation — intention**  
   The work may touch on wonder, surrender, stillness, and something greater than oneself. This should be present as atmosphere and restraint, not as an explicit visual theme.

### Design principles

- **Music first.** The design must never compete with the work it presents.
- **Order and intuition.** Combine clear underlying rules with room for variation and surprise.
- **Meaningful restraint.** Every visible element should have a reason to exist.
- **Space is material.** Empty space is an active part of the composition.
- **Every work can differ.** Do not force every composition into an identical cover template.
- **A coherent family, not a repeated formula.** Works should be recognisable as belonging together while retaining their own visual character.
- **Subtle transcendence.** Suggest depth and wonder without using obvious spiritual symbols.

---

## 3. Visual language

### 3.1 Primary material: lines

Generative imagery is expected to consist primarily of lines. This is the only firm decision about the generative image-making process at this stage.

Treat lines as compositional material rather than decoration. They may eventually be explored through different behaviours, densities, relationships, rhythms, or spatial arrangements, but **do not assume or hard-code a specific line style**.

Do not prematurely decide that the system must use:

- concentric circles;
- sine waves;
- contour lines;
- grids;
- particles;
- flow fields;
- interference patterns;
- hand-drawn or perfectly geometric strokes.

These may be explored as experiments, but none is yet the definitive visual language.

### 3.2 What the imagery should feel like

Aim for:

- minimal and abstract;
- quiet, focused, and spacious;
- precise without looking clinical;
- organic or alive without becoming illustrative;
- visually interesting at both close and distant viewing sizes;
- capable of expressing both density and near-emptiness.

Avoid:

- stock music imagery (instruments, headphones, speakers, waveforms);
- generic audio visualisers and equaliser graphics;
- decorative geometry with no compositional purpose;
- sci-fi interfaces, neon technology aesthetics, or dashboard-like graphics;
- obvious spiritual or religious symbols;
- visual clichés associated with ambient, electronic, or classical music.

### 3.3 Generative image system: exploratory, not prescriptive

The eventual system may consist of several related algorithms or behaviours. For now, build it so that different approaches can be tested without rewriting the entire project.

Potential areas of exploration — **not fixed brand rules**:

- repetition and small deviations;
- multiple line systems interacting;
- gradual change across a field;
- areas of density contrasted with open space;
- regularity disrupted by restrained irregularity;
- visual relationships that suggest rhythm, duration, tension, or release.

A successful image should have an intelligible internal logic. Randomness alone is not a sufficient concept.

### 3.4 Image composition

Use these as starting constraints, not absolute laws:

- Prefer one strong visual event over many competing elements.
- Preserve substantial negative space where the image allows it.
- Let line work be the main image, not a background texture behind unrelated decoration.
- Do not add gradients, shadows, 3D effects, grain, or texture by default.
- Keep the image legible as a thumbnail as well as at full size.
- Allow the image to extend beyond the edges of a format when that strengthens the composition.
- Do not place type over visually dense line work unless contrast and legibility are clearly maintained.

---

## 4. Colour

The default identity is restrained and near-monochrome. Colour is optional and should be introduced deliberately, not as a requirement for every output.

### Core palette

| Token    |       Hex | Role                                      |
| -------- | --------: | ----------------------------------------- |
| `paper`  | `#EEECE4` | Primary light background                  |
| `carbon` | `#252622` | Primary dark, text, and line colour       |
| `ash`    | `#AAA99F` | Secondary information and subdued details |
| `sage`   | `#B8B9AC` | Optional muted supporting tone            |

### Optional work-specific accents

These are exploratory options, not mandatory brand colours:

| Token         |       Hex |
| ------------- | --------: |
| `rust`        | `#9D4937` |
| `blueGrey`    | `#657B82` |
| `ochre`       | `#B49B72` |
| `mutedViolet` | `#77748C` |

### Colour rules

- Default to `paper` background with `carbon` lines and typography, or the inverse.
- Most outputs should use two colours only.
- Use `ash` and `sage` sparingly.
- An accent colour may be assigned to an individual composition when it has a clear artistic reason.
- Do not use all accent colours together.
- Do not introduce a fixed colour-to-genre or colour-to-emotion mapping without testing it against actual work.
- Always check contrast and legibility.

### Suggested CSS tokens

```css
:root {
	--color-paper: #eeece4;
	--color-carbon: #252622;
	--color-ash: #aaa99f;
	--color-sage: #b8b9ac;

	--color-rust: #9d4937;
	--color-blue-grey: #657b82;
	--color-ochre: #b49b72;
	--color-muted-violet: #77748c;
}
```

---

## 5. Typography

### Primary typeface: Space Grotesk

Use Space Grotesk as the principal working typeface.

Recommended roles:

- Regular: body copy, descriptions, practical information.
- Medium: navigation, headings, labels, and titles where a neutral voice is needed.
- Semibold: rare emphasis only.
- Uppercase with modest tracking: metadata, categories, dates, and technical details.

Do not use excessive letter spacing or turn every label into uppercase text.

### Display typeface: Cormorant Garamond

Use Cormorant Garamond as the contrasting display face.

Owner selection, 7 November 2026: Cormorant Garamond is the chosen display family for this implementation. Space Grotesk remains the functional reading face.

Recommended roles:

- composition titles;
- occasional large editorial statements;
- selected poetic or expressive accents.

Use Medium (500) as the default for stronger contrast. Italic may be used selectively when it adds a meaningful contrast. Do not use it for long passages, small metadata, or decorative flourishes.

### Optional technical typeface: IBM Plex Mono

IBM Plex Mono may be introduced for functional technical information:

- catalogue or work numbers;
- durations;
- tempo and metre;
- instrumentation;
- dates and version details.

It is optional. Do not add it to every design merely to make the identity look technical.

### Typographic hierarchy

A typical work page or publication may use this order:

1. Work title — primary typographic focus.
2. Generative image — primary visual focus.
3. Instrumentation or work type.
4. Supporting metadata (duration, year, version, score availability).
5. Composer credit.

The hierarchy may change when a particular work calls for it. The composer's name should be present where useful or required, but it does not need to dominate the design.

### Font sources

- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- Cormorant Garamond: https://fonts.google.com/specimen/Cormorant+Garamond
- IBM Plex Mono: https://fonts.google.com/specimen/IBM+Plex+Mono

Check the current licence and include font files or webfont references appropriately in any implementation. Google Fonts families are generally available under open font licences; verify the licence files for the exact versions used.

---

## 6. Layout and composition

The layout system should feel editorial, calm, and deliberate.

### General rules

- Prefer left alignment for text and information.
- Use a consistent spacing scale within each implementation.
- Give titles and images room to breathe.
- Avoid unnecessary borders, cards, pills, badges, and UI decoration.
- Avoid centring everything by default.
- Use asymmetry when it improves the composition, not as a stylistic gimmick.
- Keep functional information clearly separated from the artwork.
- Do not let responsive layouts crop important parts of generated imagery without checking the result.

### Starting formats

| Use                     | Starting format                                          |
| ----------------------- | -------------------------------------------------------- |
| Digital release artwork | 1:1                                                      |
| Website feature image   | 16:9 or responsive landscape                             |
| Poster / print          | A-series or format-specific                              |
| Social preview          | Adapted from the artwork, not a separate visual identity |
| Score cover             | A4 portrait unless the publication requires otherwise    |

These are practical defaults, not restrictions.

### Margins and whitespace

Use generous margins. As a starting point, consider a safe margin of approximately 5–8% of the shorter canvas dimension for important text. Artwork may bleed to the edge.

Do not impose a universal grid on every generative image. The image system and the publication layout can have separate rules.

---

## 7. Information design and naming

The visual identity does not need a brand name or logo.

Use the actual title of each composition as the primary identifier. Use clear, factual descriptors where needed.

Example metadata:

```text
THE SEVENTH DAY
For saxophone quartet
2026 · 7/8
Aidan Wyber
```

Use factual information only. Do not invent subtitles, programme notes, durations, instrumentation, dates, catalogue numbers, or claims.

If a catalogue numbering system is introduced later, keep it functional and consistent. Do not create one prematurely.

---

## 8. Motion

Motion should follow the same principles as the static imagery.

Potential direction:

- slow or gradual transformation;
- repetition with subtle variation;
- changes that reveal relationships between lines;
- moments of stillness;
- no gratuitous movement.

Avoid:

- audio-reactive movement by default;
- fast equaliser-like animation;
- constant movement with no compositional purpose;
- transitions that distract from listening.

Motion should be able to exist silently and independently of the audio. If it is synchronised to music, the relationship should be intentional and considered.

---

## 9. Digital implementation

### Recommended approach

Use a modular generative system. Keep the rendering logic separate from:

- composition-specific parameters;
- colour and typography tokens;
- output dimensions;
- layout and metadata.

The first implementation should be exploratory and easy to change. Do not over-engineer a complete brand platform before the visual language has been tested.

### Suggested project structure

Adapt this to the repository rather than forcing this exact structure:

```text
/
├── BRAND_GUIDE.md
├── README.md
├── src/
│   ├── core/              # shared rendering and geometry utilities
│   ├── systems/           # experimental line-generation systems
│   ├── compositions/      # per-work parameter sets
│   ├── styles/            # colour, typography, layout tokens
│   └── export/            # image and animation export
├── public/
│   ├── fonts/
│   └── images/
└── output/
    ├── previews/
    └── final/
```

This is a suggested structure, not a requirement. Follow the existing project's conventions if a repository already exists.

### Technical principles for Codex

When working on this identity, Codex should:

1. Read this guide before making visual or code changes.
2. Preserve the distinction between **confirmed decisions** and **experiments**.
3. Keep line-generation systems modular and parameterised.
4. Make it easy to switch between algorithms and compare outputs.
5. Keep composition-specific settings in data/configuration rather than scattering them through rendering code.
6. Make random generation reproducible with an explicit seed.
7. Support deterministic exports at specified dimensions.
8. Separate artwork generation from typography and page layout.
9. Avoid adding dependencies unless they materially help.
10. Avoid inventing a logo, brand name, slogan, or extra visual motif.
11. Avoid silently changing the palette or typography.
12. Do not infer that a particular line behaviour is a permanent brand rule from one successful experiment.
13. Present multiple visual variations when a design decision is still open.
14. Prefer simple, readable code over an elaborate framework.

### Suggested configuration model

Use a configuration object or equivalent data structure. Keep the actual parameters flexible while the visual system is being explored.

```js
const artworkConfig = {
	seed: 1,
	format: 'square',
	palette: 'monochrome',
	system: 'experimental-lines',

	// Deliberately open-ended:
	// Add parameters only when an experiment needs them.
	parameters: {},
};
```

Do not assume that the example values above define the final system. In particular, `experimental-lines` is a placeholder, not the name of a final algorithm.

### Export requirements

Where technically appropriate, support:

- high-resolution PNG export;
- SVG export when the line system is vector-based;
- reproducible output from a saved seed and configuration;
- preview and final-render modes;
- square and landscape aspect ratios at minimum.

Do not rasterise vector artwork unnecessarily. Preserve editable/vector output when practical.

---

## 10. Accessibility and practical use

- Maintain readable contrast for all text.
- Do not encode essential information through colour alone.
- Ensure typography remains legible at small sizes.
- Keep text separate from generated imagery where possible.
- Provide alt text for meaningful artwork on websites.
- Check artwork at thumbnail size and on both light and dark displays.
- Ensure print exports have appropriate resolution, bleed, and colour handling for the printer.

---

## 11. What is decided — and what is not

This section is important. Do not treat every suggestion in this document as an equally fixed rule.

### Confirmed decisions

- The identity is about the music, not a personal brand.
- Do not invent a separate brand name or logo.
- The visual direction is minimal and abstract.
- The spiritual dimension should be subtle.
- Generative imagery is the preferred image source.
- Lines are the primary material of the generative imagery.
- Space Grotesk is the body / primary typeface.
- Cormorant Garamond is the chosen contrasting display typeface.
- The palette should be restrained and mostly monochrome.
- The identity should allow individual compositions to have distinct visual expressions.

### Provisional recommendations

- Core colours and hex values.
- IBM Plex Mono as an optional technical typeface.
- The four exploratory generative families described above.
- Layout proportions, margins, and export formats.
- Any proposed mapping between musical properties and visual parameters.

### Deliberately unresolved

Do not make permanent decisions yet about:

- exact line geometry or line behaviour;
- whether lines are straight, curved, continuous, broken, dense, sparse, or layered;
- whether the imagery is static, animated, or both;
- whether musical data directly controls the imagery;
- how many generative systems the final toolkit contains;
- whether individual works use colour;
- the final website structure;
- a catalogue or numbering convention.

These should emerge from experiments and from the music itself.

---

## 12. Evaluation checklist

Use this checklist when reviewing a generated image, cover, page, or other application.

### Visual quality

- [ ] Are lines the primary visual material?
- [ ] Does the image have a clear internal logic?
- [ ] Is there a considered relationship between density and empty space?
- [ ] Does it feel minimal without feeling generic?
- [ ] Does it avoid obvious music-visualisation clichés?

### Identity

- [ ] Does it belong to the same visual world as other work?
- [ ] Does it retain enough individuality for this particular composition?
- [ ] Is the spiritual dimension subtle rather than literal?
- [ ] Is the design serving the music rather than imposing a mood?

### Typography and information

- [ ] Is Space Grotesk used for functional text?
- [ ] Is Cormorant Garamond used selectively as a display voice?
- [ ] Is all metadata accurate?
- [ ] Is the composer's name treated as an authorship credit rather than a logo?

### Implementation

- [ ] Can the result be reproduced from its configuration and seed?
- [ ] Can the artwork be exported at the required size?
- [ ] Is the rendering code modular and understandable?
- [ ] Have responsive, thumbnail, and contrast checks been made?

---

## 13. Working rule

When in doubt, choose the option that is:

**quieter, simpler, more spacious, more intentional, and more closely connected to the composition.**

Do not add visual complexity merely to make the identity look more developed. The system should grow through making and evaluating images alongside the music.

The purpose of this guide is to give the work a coherent visual foundation while leaving enough room for discovery.
