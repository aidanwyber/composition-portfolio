"""Regenerate the local social graphic with Pillow. No external services or imagery."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
display_font = root / 'scripts/fonts/CormorantGaramond-Medium.ttf'
text_font = root / 'scripts/fonts/SpaceGrotesk.ttf'
def text_face(size):
    face = ImageFont.truetype(str(text_font), size)
    face.set_variation_by_axes([400])
    return face
image = Image.new('RGB', (1200, 630), '#eeece4')
draw = ImageDraw.Draw(image)
draw.text((60, 48), 'Aidan Wyber / Composer', font=text_face(25), fill='#252622')
draw.text((60, 146), 'Compositions,\nrecordings & scores.', font=ImageFont.truetype(str(display_font), 76), fill='#252622', spacing=4)
# Preserve the original release artwork and its square proportions.
cover = Image.open(root / 'public/assets/albums/generative-variations.jpg').convert('RGB')
cover = cover.resize((360, 360), Image.Resampling.LANCZOS)
image.paste(cover, (780, 60))
draw.text((780, 444), 'generative_variations.py', font=text_face(23), fill='#252622')
draw.text((780, 480), '2025 / Aidan Wyber', font=text_face(20), fill='#252622')
draw.text((60, 554), 'music.aidanwyber.xyz', font=text_face(23), fill='#252622')
target = root / 'public/assets/social/portfolio.png'
target.parent.mkdir(parents=True, exist_ok=True)
image.save(target, optimize=True)
