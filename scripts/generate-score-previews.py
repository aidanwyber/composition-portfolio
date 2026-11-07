"""Render uncropped first-page previews, leaving the source PDFs untouched.

Requires PyMuPDF and Pillow: python -m pip install pymupdf pillow
Run: python scripts/generate-score-previews.py
"""
from pathlib import Path
import pymupdf

scores = Path(__file__).resolve().parent.parent / 'public/assets/scores'
for path in sorted(scores.glob('*.pdf')):
    with pymupdf.open(path) as document:
        document[0].get_pixmap(matrix=pymupdf.Matrix(1, 1)).pil_save(
            str(path.with_suffix('.webp')), lossless=True
        )
