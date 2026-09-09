# Cómo agregar un término nuevo al glosario

Sigue estos 3 pasos. No hace falta tocar ningún otro archivo del proyecto —
con crear el `.md` en el lugar correcto, el término aparece solo en
`/manual/glosario/`, en su letra correspondiente.

## Paso 1 — Crea el archivo

En la carpeta `src/content/manual/glosario/`, crea un archivo nuevo. El
nombre define la dirección web del término, así que usa minúsculas, sin
tildes ni espacios, separado por guiones. Ejemplos:

- Término "Turno" → `turno.md`
- Término "Balance de horas" → `balance-de-horas.md`

## Paso 2 — Copia esta plantilla completa

Las líneas marcadas con 👉 son las que tienes que cambiar. **Todo lo demás
se deja exactamente igual**, aunque no entiendas para qué sirve — son
datos internos que necesita el sistema, no afectan lo que se ve en la web.

```yaml
---
schemaVersion: "1.0"
contentId: glosario-turno                       # 👉 "glosario-" + el mismo nombre que le has puesto al archivo (sin .md)
title: Turno                                    # 👉 el nombre del término
order: 1
description: Bloque de horas planificado para un trabajador dentro del cuadrante.  # 👉 la definición, en una frase (mínimo 30 caracteres)
contentType: concept
module: Glosario
submodule: Glosario
intent: Turno                                   # 👉 pon lo mismo que en "title"
audience:
  - role: Trabajador
    access: applicable
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
entities: []
synonyms: []                                    # 👉 si el término tiene otros nombres, añádelos aquí (ver ejemplo más abajo). Si no, déjalo así.
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls: []
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué es Turno?                            # 👉 cambia "Turno" por el nombre del término
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/glosario/
  redirectFrom:
    - https://manual.aturnos.com/glosario/
  contentHash: "0000000000000000000000000000000000000000000000000000000000000000"
  migratedAt: 2026-09-02                        # 👉 la fecha de hoy, formato AAAA-MM-DD
labels:
  - PENDIENTE
---

## Resumen

Turno: bloque de horas planificado para un trabajador dentro del cuadrante.  <!-- 👉 escribe aquí la definición completa del término -->
```

### Si el término tiene otros nombres (sinónimos)

Por ejemplo, si "Turno" también se conoce como "Tipo de turno":

```yaml
synonyms:
  - Tipo de turno
```

Cada nombre en `synonyms` aparecerá como una entrada más en el índice A-Z,
en su propia letra, pero llevando a este mismo término.

## Paso 3 — Guarda y comprueba

Guarda el archivo. Si el sitio está corriendo (`npm run dev`), entra en
`/manual/glosario/` y busca el término en su letra — debería aparecer
solo, sin necesidad de avisar a nada más.

---

### Lo único que realmente cambia de un término a otro

`contentId`, `title`, `description`, `intent`, `ai.answerableQuestions`,
`migratedAt` y el texto de `## Resumen`. Todo lo demás de la plantilla es
igual siempre — cópialo tal cual.
