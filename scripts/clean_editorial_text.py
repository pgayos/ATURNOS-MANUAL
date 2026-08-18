#!/usr/bin/env python3
"""Apply conservative, reviewable corrections to migrated Spanish text."""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path("src/content/manual")

LITERAL_REPLACEMENTS = {
    "tupoi": "tipo",
    "planicados": "planificados",
    "aparatado": "apartado",
    "concpetos": "conceptos",
    "Concpetos": "Conceptos",
    "U na vez": "Una vez",
    "aTurno s": "aTurnos",
    "I P": "IP",
    "una análisis": "un análisis",
    "quedan registrado": "quedan registrados",
    "de permiso de poder realizar cambios": "dé permiso para realizar cambios",
    "elegir cual es": "elegir cuál es",
    "el siguiente aparatado": "el siguiente apartado",
    "por un libre un trabajador, a sí mismo": "por un día libre para el mismo trabajador",
    "Es decir, que para la situación actual": "Para la situación actual",
    "en última estancia": "en última instancia",
}

SENTENCE_REPLACEMENTS = {
    "En primer lugar, el proceso de realizar un cambio, solo es posible hacer a presente o futuro, nunca se puede hacer cambio a pasado.":
        "Los cambios de turno solo pueden realizarse en el presente o en fechas futuras; aTurnos no permite aplicarlos sobre fechas pasadas.",
    "Los trabajadores que tienen planificación y pueden realizar el turno que quiere librar el trabajador que comienza el proceso de cambio de libre, no los muestra el sistema porque estos trabajadores al tener planificación doblaría una jornada.":
        "El sistema no muestra a los trabajadores que ya tienen planificación, porque aceptar ese turno implicaría doblar su jornada.",
}


def clean_text(source: str) -> str:
    for old, new in SENTENCE_REPLACEMENTS.items():
        source = source.replace(old, new)
    for old, new in LITERAL_REPLACEMENTS.items():
        source = source.replace(old, new)
    source = re.sub(r"^(#{2,3}\s+.+?)\s+#+$", r"\1", source, flags=re.M)
    source = re.sub(r"[“]\s+", "“", source)
    source = re.sub(r"\s+[”]", "”", source)
    source = re.sub(r"[«]\s+", "«", source)
    source = re.sub(r"\s+[»]", "»", source)
    source = re.sub(r"\(\s+([^\n()]+?)\s+\)", r"(\1)", source)
    source = re.sub(r"\s+([,.;:!?])", r"\1", source)
    return source


def main() -> None:
    changed = []
    for path in sorted([*ROOT.rglob("*.md"), *ROOT.rglob("*.mdx")]):
        original = path.read_text()
        cleaned = clean_text(original)
        if cleaned != original:
            path.write_text(cleaned)
            changed.append(str(path))
    print(f"Corrected {len(changed)} files")


if __name__ == "__main__":
    main()
