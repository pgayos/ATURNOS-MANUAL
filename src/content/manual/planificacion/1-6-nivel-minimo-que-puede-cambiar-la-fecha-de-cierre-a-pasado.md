---
schemaVersion: "1.0"
contentId: planificacion-1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado
title: Nivel mínimo que puede cambiar la fecha de cierre a pasado
description: Indica el nivel del usuario para modificar la fecha de cierre de cuadrante a una fecha anterior a la que el cuadrante está cerrado.
contentType: procedure
module: Planificación
submodule: Cuadrante
intent: Nivel mínimo que puede cambiar la fecha de cierre a pasado
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: cambiar
    label: Cambiar
  - id: cierre
    label: Cierre
  - id: fecha
    label: Fecha
  - id: minimo
    label: Minimo
  - id: nivel
    label: Nivel
  - id: pasado
    label: Pasado
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
    - https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/
ai:
  answerableQuestions:
    - ¿Cómo puedo nivel mínimo que puede cambiar la fecha de cierre a pasado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/
  contentHash: 05f03ba0f1b7be2995ac36bd5f81f95ce3f91da3978ee7eb352472b1be0b62f5
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Indica el nivel del usuario para modificar la fecha de cierre de cuadrante a una fecha anterior a la que el cuadrante está cerrado.

## Procedimiento
Las opciones permitidas son:

- Administrador Validador
- Administrador Planificador
- Administrador Total: Opción por defecto
- Superusuario: Opción recomendada PYMES y Grandes Empresas muy descentralizadas

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.6 Nivel mínimo que puede cambiar la fecha de cierre a pasado](/media/manual/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado-71e2339402.png)
