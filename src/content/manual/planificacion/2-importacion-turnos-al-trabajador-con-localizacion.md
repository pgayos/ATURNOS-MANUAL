---
schemaVersion: "1.0"
contentId: "planificacion-2-importacion-turnos-al-trabajador-con-localizacion"
title: "Importación turnos al trabajador con localización"
description: "En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de los turnos con su localización correspondiente."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Importación turnos al trabajador con localización"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "importacion"
    label: "Importacion"
  - id: "localizacion"
    label: "Localizacion"
  - id: "trabajador"
    label: "Trabajador"
  - id: "turnos"
    label: "Turnos"
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
    - "https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importación turnos al trabajador con localización?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "60a6e9deab125b735606cf027cf7a0b317d113b4d1b2af6778c49ca6e25eca3d"
  migratedAt: 2026-08-17
---
## Resumen

En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de los turnos con su localización correspondiente.

## Contenido

Para poder importar la planificación puedes completar la plantilla de ejemplo que puedes descargar:

CSV Tipos de turnos

- ID User o ID Empleado*
- Nombre del trabajador
- Email
- Fecha*: dd/mm/aaaa en el cual se desea añadir el turno al trabajador.
- Abreviatura del turno*
- Localización del turno
- Cuadrante Existen tres opciones de importación: Valor 0, se importa únicamente en el cuadrante. Actuará de la misma manera si lo dejamos sin informar. Valor 1, se importa en el cuadrante borrador. Valor 2, se importan tanto en el cuadrante, como en el cuadrante borrador.

- Localización por defecto del empleado Existen dos opciones de importación: Valor 0. Si en el campo de localización del turno no se tiene informado nada e informamos el valor 0, se incorporará el turno sin localización. Actuará de la misma manera si lo dejamos sin informar. Valor 1. Si el campo de localización del turno no se tiene informado nada e informamos el valor 1, se incorporará el turno con la localización por defecto del trabajador.

Guarda el documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú de “Importar “.
