"""Regenerate social and favicon assets from local fonts and score artwork.

Run: python scripts/generate-social.py (requires Pillow).
No font installation, external services or generated release artwork.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
public = root / 'public'
paper = '#eeece4'
carbon = '#252622'
display_font = root / 'scripts/fonts/CormorantGaramond-Medium.ttf'
text_font = root / 'scripts/fonts/SpaceGrotesk.ttf'


def text_face(size):
    face = ImageFont.truetype(str(text_font), size)
    face.set_variation_by_axes([400])
    return face


# Editorial portfolio preview, using the current lead score's real first page.
image = Image.new('RGB', (1200, 630), paper)
draw = ImageDraw.Draw(image)
draw.text((64, 52), 'Aidan Wyber / Composer', font=text_face(25), fill=carbon)
draw.multiline_text((64, 152), 'Instrumental,\nelectronic &\ngenerative music.',
                    font=ImageFont.truetype(str(display_font), 76),
                    fill=carbon, spacing=2)
draw.text((64, 448), 'Compositions / Recordings / Scores', font=text_face(21), fill=carbon)
draw.text((64, 554), 'aidanwyber.xyz', font=text_face(23), fill=carbon)
score = Image.open(public / 'assets/scores/Two Cellos - De toekomst in.webp').convert('RGB')
score.thumbnail((336, 475), Image.Resampling.LANCZOS)
image.paste(score, (800, 60))
draw.text((800, 554), 'De toekomst in / Two cellos', font=text_face(18), fill=carbon)
target = public / 'assets/social/portfolio.png'
target.parent.mkdir(parents=True, exist_ok=True)
image.save(target, optimize=True)

# Three offset strokes: a small navigation identifier, without a monogram.
strokes = [(18, 22, 18, 46), (32, 14, 32, 38), (46, 24, 46, 48)]
paths = ' '.join(f'M{x1} {y1}V{y2}' for x1, y1, x2, y2 in strokes)
(public / 'favicon.svg').write_text(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n'
    f'  <path fill="{carbon}" d="M0 0h64v64H0z"/>\n'
    f'  <path fill="none" stroke="{paper}" stroke-width="4" d="{paths}"/>\n'
    '</svg>\n', encoding='utf-8')
scale = 16
icon = Image.new('RGB', (64 * scale, 64 * scale), carbon)
ink = ImageDraw.Draw(icon)
for x1, y1, x2, y2 in strokes:
    ink.rectangle(((x1 - 2) * scale, y1 * scale, (x2 + 2) * scale - 1, y2 * scale - 1), fill=paper)
icon.resize((48, 48), Image.Resampling.LANCZOS).save(
    public / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
icon.resize((180, 180), Image.Resampling.LANCZOS).save(public / 'apple-touch-icon.png', optimize=True)
print('Generated 1200x630 social image, SVG/ICO favicons and 180x180 Apple touch icon.')
