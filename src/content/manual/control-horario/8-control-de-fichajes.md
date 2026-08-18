---
schemaVersion: "1.0"
contentId: "control-horario-8-control-de-fichajes"
title: "Control de fichajes"
description: "En este reporte se puede consultar de forma simplificada la jornada planificada, los fichajes realizados y las incidencias (absentismos) que puedan producirse a diario."
contentType: concept
module: "Control horario"
submodule: "Usuarios y perfiles"
intent: "Control de fichajes"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "control"
    label: "Control"
  - id: "fichajes"
    label: "Fichajes"
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
    - "https://manual.aturnos.com/knowledgebase/8-control-de-fichajes-rrhh/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/8-control-de-fichajes-rrhh/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre control de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "5ed05550313c5afe7a02abcf2a3f8dbd60cadf02e64ba7596912826a3a9d3d61"
  migratedAt: 2026-08-17
---
## Resumen

En este reporte se puede consultar de forma simplificada la jornada planificada, los fichajes realizados y las incidencias (absentismos) que puedan producirse a diario.

El listado se puede ver por pantalla o generar una ‘ Petición de reporte ‘ para su descarga cuando el volumen de datos se sobrepasa.

## Filtros

Se pueden definir:

- Fechas

- Equipos

- Trabajadores, filtrando por Nombre, Email o ID Empleado.

- Fichajes: Sin fichajes realizados. Con fichajes realizados.

- Solo empleados con id de empleado, se filtran solo aquellos trabajadores que tienen informado un ID Empleado en su perfil del trabajador.
- Ficticio, son todos aquellos trabajadores que al crearlo se les informa como ficticio, así como aquellos trabajadores que no tienen un correo real. Se puede filtrar por: Todos. Ocultar ficticios. Mostrar solo ficticios.
- Planificados, se filtran aquellos que tienen un turno u horas planificadas en el cuadrante en ese día.

## Variables

Se informan los siguientes campos:

- Fecha
- Jornada planificada, turno u horas planificadas.
- Fichajes, marcajes de entrada y salida realizados.
- Incidencias, absentismos informados.
