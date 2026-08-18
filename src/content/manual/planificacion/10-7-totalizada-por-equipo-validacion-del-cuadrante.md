---
schemaVersion: "1.0"
contentId: planificacion-10-7-totalizada-por-equipo-validacion-del-cuadrante
title: Totalizada por equipo. Validación del cuadrante
description: Desde aquí se valida el cuadrante siempre que en el equipo esté seleccionado “Modo de validación para la exportación” en la opción “El cuadrante debe estar cerrado y validado”.
contentType: procedure
module: Planificación
submodule: Usuarios y perfiles
intent: Totalizada por equipo. Validación del cuadrante
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
  - id: cuadrante
    label: Cuadrante
  - id: equipo
    label: Equipo
  - id: totalizada
    label: Totalizada
  - id: validacion
    label: Validacion
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
    - https://manual.aturnos.com/knowledgebase/10-7-totalizada-por-equipo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-7-totalizada-por-equipo/
ai:
  answerableQuestions:
    - ¿Cómo puedo totalizada por equipo. Validación del cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-7-totalizada-por-equipo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-7-totalizada-por-equipo/
  contentHash: 72e55f780893bf2a6795c8f7316fde8e6041d1211f6682cd3024db2179e4a78d
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Desde aquí se valida el cuadrante siempre que en el equipo esté seleccionado “Modo de validación para la exportación” en la opción “El cuadrante debe estar cerrado y validado”.

## Procedimiento
A través de RRHH → NÓMINAS → TOTALIZADA POR EQUIPOS, seleccionando:

- Fecha de inicio
- Fecha de fin
- Todos los equipos o solo los equipos con el cuadrante sin cerrar o solo los equipos con el cuadrante cerrado
- Al cargar, se recupera el importe de los conceptos totalizados.

Al marcar el check, se valida el cuadrante

La validación produce dos efectos:

1.- Permite la exportación de los conceptos de nómina cuando se precisa que el cuadrante esté cerrado y validado.

2.- Actualiza en el perfil del trabajador la fecha de validación.

También se puede consultar la fecha de validación desde RRHH → NOMINA → CIERRE POR EMPLEADO (Punto 10.3 del Manual)

NOTA: La función de validación solo está disponible para los usuarios con perfil Superusuario. Envía un correo a soporte@aturnos.com si se desea disponer de esta función.
