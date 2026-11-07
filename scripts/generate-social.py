"""Regenerate the local social graphic with Pillow. No external services or imagery."""
from pathlib import Path
from math import sin, cos, pi
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
display_font = root / 'scripts/fonts/AlienBlock-Regular.ttf'
text_font = root / 'scripts/fonts/SpaceGrotesk.ttf'
def text_face(size):
    face = ImageFont.truetype(str(text_font), size)
    face.set_variation_by_axes([400])
    return face
image = Image.new('RGB', (1200, 630), '#ffe500')
draw = ImageDraw.Draw(image)
draw.text((64, 48), 'Aidan Wyber / Composer', font=text_face(28), fill='#100082')
draw.text((64, 150), 'Original music\nfor moving images.', font=ImageFont.truetype(str(display_font), 76), fill='#100082', spacing=8)
for i in range(18):
    points = [(64 + j * 4, 475 + sin(j / 15 + i * .12) * cos(j / 31 - i * .12) * sin(pi * j / 268) ** 2 * (35 + i)) for j in range(269)]
    draw.line(points, fill='#100082', width=1)
draw.text((64, 563), 'music.aidanwyber.xyz', font=text_face(22), fill='#100082')
target = root / 'public/assets/social/portfolio.png'
target.parent.mkdir(parents=True, exist_ok=True)
image.save(target, optimize=True)
