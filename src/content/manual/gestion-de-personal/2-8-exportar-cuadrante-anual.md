---
schemaVersion: "1.0"
contentId: gestion-de-personal-2-8-exportar-cuadrante-anual
title: Exportar cuadrante anual
description: El superusuario puede exportar todos los cuadrantes anuales de los trabajadores de los equipos que estime necesario desde esta acción.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Exportar cuadrante anual
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anual
    label: Anual
  - id: cuadrante
    label: Cuadrante
  - id: exportar
    label: Exportar
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
    - https://manual.aturnos.com/knowledgebase/7-8-exportar-cuadrante-anual/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-8-exportar-cuadrante-anual/
ai:
  answerableQuestions:
    - ¿Cómo puedo exportar cuadrante anual?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-8-exportar-cuadrante-anual/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-8-exportar-cuadrante-anual/
  contentHash: 8b23fe364aa2aa2017e0529c26becbff4b673ef3dbf3df840844e5589505a903
  migratedAt: 2026-08-17
labels: []
---
## Resumen

El superusuario puede exportar todos los cuadrantes anuales de los trabajadores de los equipos que estime necesario desde esta acción.

## Procedimiento
¿Cómo exportar los cuadrantes anuales de los trabajadores de varios equipos?

Desde el menú de aTurnos en la función RRHH, al acceder a la opción Registros/Exportar cuadrante anual:

1. El superusuario puede seleccionar el año del cuadrante anual y el/os equipo/os de los que quiere exportar los cuadrantes anuales de todos los trabajadores de los equipos seleccionados.
2. Cuando solicita el informe, al hacer clic en “solicitar informe”, el sistema ofrece varias opciones para generar los datos que se van a registrar informes:

- Generar solo el cuadrante anual
- Generar el cuadrante anual y detalles básicos
- Generar el cuadrante con todos los detalles. Ver información del cuadrante anual
- Incluir la fecha de generación del informe en el propio informe

3. Cuando lo solicita la petición al hacer clic en “OK”, el sistema nos informa que la petición se ha realizado correctamente. El resultado serán los cuadrantes de todos los trabajadores de los equipos seleccionados y año indicado. Se podrá acceder a los informes y descargarlos cuando se haya generado y almacenado en el listado de Peticiones de reporte del menú.(RRHH/Peticiones de reportes).
