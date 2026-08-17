---
schemaVersion: "1.0"
contentId: "gestion-de-personal-3-mas-de-2-hrs-entre-fichajes"
title: "Más de 2 Hrs entre fichajes"
description: "Si un trabajador realiza un fichaje de salida y el siguiente fichaje de entrada se realiza más de 2 horas después, se mostrará en el reporte."
contentType: concept
module: "Gestión de personal"
submodule: "Altas y bajas"
intent: "Más de 2 Hrs entre fichajes"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "entre"
    label: "Entre"
  - id: "fichajes"
    label: "Fichajes"
  - id: "hrs"
    label: "Hrs"
  - id: "mas"
    label: "Mas"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/knowledgebase/3-mas-de-2-hrs-entre-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-mas-de-2-hrs-entre-fichajes/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre más de 2 Hrs entre fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "26e832067cffab89588330406d56aa32a88c555130bd97c6b7fa94abfbaf9372"
  migratedAt: 2026-08-17
---
## Resumen

Si un trabajador realiza un fichaje de salida y el siguiente fichaje de entrada se realiza más de 2 horas después, se mostrará en el reporte.

## Contenido

Es importante que exista una continuidad, como en los turnos con nocturnidad donde se pasa de un día a otro.

Esta continuidad puede darse:

- Por el fichaje, con entrada a las 22:00 horas y salida a las 00:30 del día siguiente.
- Por un turno u horas planificadas, como un turno de 22:00 a 06:00 del día siguiente.

El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Fecha en la que se produce el caso.
- Tiempo entre fichajes (entre el fichaje anterior y el siguiente).

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.
