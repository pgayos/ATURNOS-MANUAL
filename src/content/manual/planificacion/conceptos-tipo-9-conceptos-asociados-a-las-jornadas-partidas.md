---
schemaVersion: "1.0"
contentId: planificacion-conceptos-tipo-9-conceptos-asociados-a-las-jornadas-partidas
title: "Conceptos tipo 9: Conceptos asociados a las jornadas partidas"
description: Contabilizan el número de jornadas partidas que estén definidas expresamente como tales, en PLANIFICADOR → TIPOS DE TURNO → Pestaña Jornadas Partidas.
contentType: concept
module: Planificación
submodule: Altas y bajas
intent: "Conceptos tipo 9: Conceptos asociados a las jornadas partidas"
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asociados
    label: Asociados
  - id: conceptos
    label: Conceptos
  - id: jornadas
    label: Jornadas
  - id: partidas
    label: Partidas
  - id: tipo
    label: Tipo
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-9-conceptos-asociados-a-las-jornadas-partidas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-9-conceptos-asociados-a-las-jornadas-partidas/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 9: Conceptos asociados a las jornadas partidas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-9-conceptos-asociados-a-las-jornadas-partidas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-9-conceptos-asociados-a-las-jornadas-partidas/
  contentHash: 7d0074f1ba28ae28385b016b72620e6ef8c6dcc9728a9a5df9a83d7ebd7ae6fd
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Contabilizan el número de jornadas partidas que estén definidas expresamente como tales, en PLANIFICADOR → TIPOS DE TURNO → Pestaña Jornadas Partidas.

## Qué debes saber
En aTurnos, las jornadas partidas se configuran con dos turnos, es decir, una jornada de 09:00 a 18:00 con 1 hora para comer a mediodía, en aTurnos se precisa un turno de mañana de 09:00 a 14:00 y un turno de tarde de 15:00 a 16:00, que se pueden asociar como jornada partida.

En este equipo de ejemplo existe dos jornadas partidas creadas

En el caso de uso, solo una de las jornadas partidas va a generar un concepto de nómina, como el Ticket Restaurante, cuando el trabajador tenga planificada la Jornada partida con la descripción “Partida-1”

1.- A través de NOMINAS → CONCEPTOS DE CALCULO, se selecciona la jornada partida

2.- A través de NOMINAS → CONCEPTOS EN NOMINA, seleccionar el concepto

3.- En el ejemplo el trabajador tiene dos jornadas partidas. Solo la jornada partida del día 8 está definida como concepto de nómina (Ticket Restaurante)

4.- A través de ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA, se visualiza el resultado
