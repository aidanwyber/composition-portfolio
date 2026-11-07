"""Optional asset regeneration: python scripts/optimize-images.py (requires Pillow)."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent / 'public/assets/albums'
for source in root.glob('*.jpg'):
    with Image.open(source) as image:
        image.convert('RGB').save(source.with_suffix('.webp'), quality=84, method=6)
        image.resize((400, 400), Image.Resampling.LANCZOS).convert('RGB').save(source.with_name(source.stem + '-400.webp'), quality=82, method=6)
