---
schemaVersion: "1.0"
contentId: planificacion-2-importacion-turnos-al-trabajador-con-localizacion
title: Importación turnos al trabajador con localización
description: En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de los turnos con su localización correspondiente.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Importación turnos al trabajador con localización
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: importacion
    label: Importacion
  - id: localizacion
    label: Localizacion
  - id: trabajador
    label: Trabajador
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importación turnos al trabajador con localización?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-importar-turnos-al-trabajador-con-localizacion/
  contentHash: 8dc74b4a442ba93636f3bb60678afebc4c9d1e00722bae1e32ceff7deb7f3a0b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de los turnos con su localización correspondiente.

## Opciones y datos disponibles
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

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![2. Importación turnos al trabajador con localización](/media/manual/2-importacion-turnos-al-trabajador-con-localizacion-454da64fd6.png)

![2. Importación turnos al trabajador con localización](/media/manual/2-importacion-turnos-al-trabajador-con-localizacion-673750bb96.png)
