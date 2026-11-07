"""Bounded, deterministic SVG studies for review, never public release artwork.

Run `python scripts/generate-design-studies.py`, then open design/studies/index.html.
No randomness; geometry, parameters, formats and work associations are below.
Associations are proposals, not claims that these shapes encode musical data.
"""
from html import escape
from pathlib import Path

root = Path(__file__).resolve().parent.parent
target = root / 'design/studies'
target.mkdir(parents=True, exist_ok=True)
paper, carbon = '#eeece4', '#252622'
studies = [
    dict(id='recurrence', work='generative_variations.py', cover='generative-variations',
         count=20, step=15, shift=4,
         rule='Twenty equal segments recur at a fixed interval; each endpoint shifts four units. A proposal about rule and variation, not a plot of the algorithm or audio.'),
    dict(id='proximity', work='Substructures', cover='substructures',
         count=16, step=12, shift=6,
         rule='Two groups of sixteen vertical segments approach one another. The gap narrows by six units per pair, leaving the outer field empty. A proposal about underlying relationships.'),
    dict(id='expansion', work='As The Sun Rises', cover='as-the-sun-rises',
         count=18, step=10, shift=5,
         rule='Eighteen open angles share a turning point; each arm grows by ten units and shifts five units. A proposal about development and open space, not cosmological illustration.'),
]


def geometry(study):
    paths = []
    for i in range(study['count']):
        if study['id'] == 'recurrence':
            y = 145 + i * study['step']
            paths.append(f'M 180 {y} L {350 + i * study["shift"]} {y + 24}')
        elif study['id'] == 'proximity':
            x = 150 + i * study['step']
            gap = 130 - i * study['shift']
            paths.append(f'M {x} 130 V {300 - gap / 2} M {x} {300 + gap / 2} V 470')
        else:
            arm = 45 + i * study['step']
            offset = i * study['shift']
            paths.append(f'M {300 - arm} {260 + offset} L 300 260 L {300 + arm} {260 - offset}')
    return ''.join(f'<path d="{path}"/>' for path in paths)


sections = []
for study in studies:
    for name, width, height in [('square', 600, 600), ('landscape', 960, 540)]:
        # Uniform scaling keeps the geometry intact in both formats.
        scale = min(width, height) / 600
        dx, dy = (width - 600 * scale) / 2, (height - 600 * scale) / 2
        svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}">
<title>{escape(study['work'])} — experimental {study['id']} study</title>
<desc>{escape(study['rule'])} No randomness. Not approved artwork.</desc>
<path fill="{paper}" d="M0 0h{width}v{height}H0z"/>
<g transform="translate({dx} {dy}) scale({scale})" fill="none" stroke="{carbon}" stroke-width="1.25">{geometry(study)}</g></svg>'''
        (target / f'{study["id"]}-{name}.svg').write_text(svg, encoding='utf-8')
    sections.append(f'''<section><h2>{escape(study['work'])}</h2>
<p>{escape(study['rule'])}</p><p>count={study['count']}, step={study['step']}, shift={study['shift']}; no randomness or seed.</p>
<div class="comparison"><figure><img src="../../public/assets/albums/{study['cover']}.jpg" alt="Original release cover"><figcaption>Existing published artwork — retained</figcaption></figure>
<figure><img src="{study['id']}-square.svg" alt="Experimental square line study"><figcaption>Experimental square · 600 × 600</figcaption></figure>
<figure><img src="{study['id']}-landscape.svg" alt="Experimental landscape line study"><figcaption>Experimental landscape · 960 × 540</figcaption></figure></div>
<img class="thumbnail" src="{study['id']}-square.svg" alt="Same experimental study at thumbnail size"></section>''')

html = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Design studies — Aidan Wyber</title><style>
@font-face{font-family:Space;src:url('../../public/fonts/space-grotesk-latin.woff2')}
@font-face{font-family:Cormorant;src:url('../../public/fonts/cormorant-garamond-medium.woff2');font-weight:500}
@font-face{font-family:Alien;src:url('../../public/fonts/alien-block-latin.woff2')}
*{box-sizing:border-box}body{margin:0;padding:clamp(20px,4vw,64px);background:#eeece4;color:#252622;font:16px/1.6 Space,Arial,sans-serif}
h1{font:500 48px/1.1 Cormorant,Georgia,serif}h2{font-weight:500}p{max-width:80ch}section{margin-top:64px;border-top:1px solid #aaa99f;padding-top:24px}
.comparison{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;align-items:start}figure{margin:0}img{width:100%;height:auto}figcaption{font-size:14px}.thumbnail{width:96px;margin-top:24px}
.specimen{font-size:clamp(28px,4vw,48px);line-height:1.2;overflow-wrap:anywhere}.instrument{font-family:Cormorant,Georgia,serif;font-weight:500}.alien{font-family:Alien,Arial,sans-serif}
@media(max-width:700px){.comparison{grid-template-columns:1fr}}
</style><main><h1>Design studies</h1><p>7 November 2026. Review material outside the public site. The website uses the guide's recommended Cormorant Garamond and paper/carbon as its current implementation. Existing covers and original score pages remain the public imagery. These three line systems are experiments; none is a selected identity or replacement cover.</p>
<section><h2>Display comparison</h2><p>Cormorant Garamond Medium (current implementation)</p>
<p class="specimen instrument">generative_variations.py<br>Études voor cello<br>De Toekomst In</p>
<p>Alien Block (previous treatment)</p><p class="specimen alien">generative_variations.py<br>Études voor cello<br>De Toekomst In</p>
<p>Primary text remains Space Grotesk. Carbon on paper is used for all small text; ash is reserved for structural rules. No extra accent is assigned to a genre or composition.</p></section>
''' + ''.join(sections) + '</main></html>'
(target / 'index.html').write_text(html, encoding='utf-8')
