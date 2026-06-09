#!/bin/bash
# Régénère les PDFs FR et EN depuis les sources HTML
# Usage: bash pdf-sources/generate.sh

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/../public/pdf"

echo "Génération dossier-competence.pdf..."
google-chrome --headless=new --disable-gpu --no-sandbox \
  --print-to-pdf="$OUT/dossier-competence.pdf" \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  "file://$DIR/dossier-fr.html" 2>/dev/null && echo "  FR OK" || echo "  FR ERREUR"

echo "Génération dossier-competence-en.pdf..."
google-chrome --headless=new --disable-gpu --no-sandbox \
  --print-to-pdf="$OUT/dossier-competence-en.pdf" \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  "file://$DIR/dossier-en.html" 2>/dev/null && echo "  EN OK" || echo "  EN ERREUR"

echo "Done — $(ls -lh $OUT/*.pdf | awk '{print $5, $9}')"
