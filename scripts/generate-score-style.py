"""Apply the score profile to the latest MuseScore style export in place.

Run: python scripts/generate-score-style.py
Unrelated settings and manual refinements are retained; no fonts are installed.
"""
from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
TARGET = ROOT / 'score-styles/Aidan Wyber.mss'
tree = ET.parse(TARGET)
style = tree.getroot().find('Style')
assert style is not None
before = deepcopy(style)
changed = set()


def set_value(tag, value=None, **attributes):
    element = style.find(tag)
    assert element is not None, f'Unknown setting in source stylesheet: {tag}'
    if attributes:
        element.attrib = {key: str(value) for key, value in attributes.items()}
    else:
        element.text = str(value)
    changed.add(tag)


# MuseScore serializes page margins in inches and spatium in millimetres.
set_value('spatium', 1.6)
for parity in ('Even', 'Odd'):
    for edge in ('Top', 'Bottom'):
        set_value(f'page{parity}{edge}Margin', format(10 / 25.4, '.12g'))

# Preserve title typography and specialist musical glyphs.
editorial = {'title', 'subTitle', 'composer', 'lyricist', 'translator',
             'partInstrument', 'frame', 'user1', 'user2', 'user3'}
page_details = {'header', 'footer', 'copyright', 'pageNumber'}
score_details = {'measureNumber', 'measureNumberAlternate', 'mmRestRange'}
chords = {'chordSymbolA', 'chordSymbolB', 'nashvilleNumber'}
specialized = {'tabFretNumber', 'romanNumeral', 'figuredBass'}
performance = set()
for element in style:
    if not element.tag.endswith('FontFace'):
        continue
    prefix = element.tag[:-len('FontFace')]
    if prefix in specialized or prefix in editorial:
        continue
    size = 8 if prefix in page_details | score_details else 10
    set_value(prefix + 'FontFace', 'Space Grotesk')
    set_value(prefix + 'FontSize', size)
    # Fixed point sizes must not shrink with the 1.6 mm staff space.
    set_value(prefix + 'FontSpatiumDependent', 0)
    if prefix not in page_details | score_details | chords:
        performance.add(prefix)

# The named instrumentation/version style is practical detail information.
set_value('user2FontFace', 'Space Grotesk')
for prefix in page_details:
    set_value(prefix + 'FontStyle', 0)

# First-page title block: title and subtitle at the left, practical details
# below them, and the extracted part name at the right of the title frame.
set_value('titleFontFace', 'Cormorant Garamond Medium')
set_value('titleFontSize', 30)
set_value('titleFontSpatiumDependent', 0)
set_value('titleAlign', 'left,top')
set_value('titlePosition', 'left')
set_value('titleOffset', x=0, y=0)
set_value('titleOffsetType', 0)
set_value('subTitleFontFace', 'Space Grotesk')
set_value('subTitleFontSize', 14)
set_value('subTitleFontSpatiumDependent', 0)
set_value('subTitleAlign', 'left,top')
set_value('subTitlePosition', 'left')
set_value('subTitleOffset', x=0, y=12)
set_value('subTitleOffsetType', 0)
for prefix in ('composer', 'lyricist', 'translator', 'partInstrument',
               'frame', 'user2'):
    set_value(prefix + 'FontFace', 'Space Grotesk')
    set_value(prefix + 'FontSize', 10)
    set_value(prefix + 'FontSpatiumDependent', 0)
set_value('composerAlign', 'left,bottom')
set_value('composerPosition', 'left')
set_value('composerOffset', x=0, y=0)
set_value('composerOffsetType', 0)
# Put duration/version details one line above the composer credit.
set_value('user2Align', 'left,bottom')
set_value('user2Position', 'left')
set_value('user2Offset', x=0, y=-4.5)
set_value('user2OffsetType', 0)
set_value('partInstrumentAlign', 'right,top')
set_value('partInstrumentPosition', 'right')
set_value('partInstrumentOffset', x=0, y=0)
set_value('showHeader', 1)
set_value('headerOddEven', 1)
for parity in ('even', 'odd'):
    set_value(parity + 'HeaderL', '$I')
    set_value(parity + 'HeaderC', '$p / $n')
    set_value(parity + 'HeaderR', '$:workTitle:')
set_value('showFooter', 1)
set_value('evenFooterR', 'https://aidanwyber.xyz')
set_value('oddFooterR', 'https://aidanwyber.xyz')

# Preserve transparency while normalizing foregrounds and backgrounds.
for element in style:
    if not element.tag.endswith('Color'):
        continue
    if element.tag.endswith('FrameBgColor'):
        shade = 255
    else:
        shade = 0
    set_value(element.tag, r=shade, g=shade, b=shade,
              a=element.get('a', '255'))

# Check the profile and preserve every setting outside its scope.
assert len(style) == len(before)
for old, new in zip(before, style):
    assert old.tag == new.tag
    if old.tag not in changed:
        assert ET.tostring(old) == ET.tostring(new), old.tag
for prefix in performance:
    assert style.findtext(prefix + 'FontFace') == 'Space Grotesk'
    assert style.findtext(prefix + 'FontSize') == '10'
    assert style.findtext(prefix + 'FontSpatiumDependent') == '0'
assert 'Cormorant' in style.findtext('titleFontFace')
assert not any('Instrument Serif' in (element.text or '') for element in style)
assert not any('IBM Plex Mono' in (element.text or '') for element in style)
tree.write(TARGET, encoding='UTF-8', xml_declaration=True)
count = sum(ET.tostring(a) != ET.tostring(b) for a, b in zip(before, style))
print(f'Updated {TARGET.name}: {count} settings changed; '
      f'{len(style)} settings retained; {len(performance)} fixed 10 pt text styles.')
