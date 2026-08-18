---
schemaVersion: "1.0"
contentId: planificacion-6-2-cierre-por-equipos
title: Cierre por equipos
description: A través del cierre de cuadrante bloqueas la posibilidad de modificar la planificación existente.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Cierre por equipos
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
  - id: cierre
    label: Cierre
  - id: equipos
    label: Equipos
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
    - https://manual.aturnos.com/knowledgebase/10-2-cierre-por-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-2-cierre-por-equipos/
ai:
  answerableQuestions:
    - ¿Cómo puedo cierre por equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-2-cierre-por-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-2-cierre-por-equipos/
  contentHash: a41aa2fba212554ce770e9efa886e71729ab6fe1adeee8a16e0473e2c27859fb
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a cierre por equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
A través del cierre de cuadrante bloqueas la posibilidad de modificar la planificación existente. El cuadrante se cierra de forma automática, si se selecciona la opción, cuando se ejecuta el proceso de exportación a nómina (ver más).

No solo impide la modificación del cuadrante, sino que es un requisito previo para la descarga de nómina si en los ajustes del equipo está seleccionada esta opción, consulta Exportación a nómina.

Esta opción permite a los Superusuarios abrir o cerrar el cuadrante en la fecha y a los equipos que seleccione.

Para mostrar los equipos que se van a cerrar, se tienen que seleccionar en la barra superior y se debe hacer clic en el botón “Cargar”.

Una vez se carga el listado con los equipos, nos muestra la siguiente información:

- Id aTurno: número de registro del equipo de aTurnos.
- Id externo: número de la unidad organizativa con la que está integrado aTurnos con un sistema externo.
- Equipo: nombre del equipo de trabajo.
- Trabajadores: número de usuarios (trabajadores y administradores) que forman el equipo de trabajo.
- Fecha cierre del cuadrante: fecha a la que está cerrado el cuadrante a todos los trabajadores del equipo.
- Cerrado por: nombre del administrador que ha cerrado el cuadrante.

Por último, para realizar el cierre de cuadrante, se tiene que hacer clic en el botón “Acciones” y posteriormente en la acción “Cerrar cuadrante”.

Por último indicar la fecha de cierre antes de guardar para registrar la fecha de cierre del cuadrante.

En RRHH → Nóminas → Fecha de cierre y exportación visualizas las fechas de ambos procesos por equipo y por trabajador.
