---
schemaVersion: "1.0"
contentId: "planificacion-4-2-horas"
title: "Horas en aTurnos"
description: "Aprende a horas en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Horas en aTurnos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "horas"
    label: "Horas"
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
    - "https://manual.aturnos.com/knowledgebase/4-2-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-2-horas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo horas en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9022984acad0683634da1a8cab1d336e134a1237ea7e2f4e87299df66f0fd122"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a horas en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

En esta tabla de estadísticas se hablará siempre en número de horas entre dos fechas seleccionadas. En primer lugar, veremos las columnas que indican el número de horas por cada tipo de turno que tenemos planificado en el cuadrante.

A continuación se mostrarán las horas de absentismos (totales y temporales) y las horas añadidas, ya sean de tipo normal, extra, complementarias y de aquellos tipos de horas que hayan sido creados.

En el resto de columnas se informa de los siguientes datos:

- Planificadas: Se compone por la suma de las horas y turnos planificados recuperando las horas computadas de los turnos, del intervalo de tiempo indicado en la barra de herramientas de fechas. Se descuenta los absentismos no justificados..
- Realizadas: Horas planificadas contando las horas totales de duración de los turnos y horas, en vez de las computadas. Es decir, la duración de tiempo real de la jornada de trabajo. Se descuenta los absentismos no justificados.
- Planificadas año: resulta de la suma de las horas planificadas, tanto de turnos como de horas añadidas, recuperando las horas computadas de los turnos, dentro del año actual.
- Contrato año: número de horas establecidas en el perfil atendiendo al convenio colectivo o relación contractual.
- Ajustes año: información sobre los diferentes ajustes realizados por incremento de horas (por ejemplo pendientes a recuperar del año anterior), decremento de horas (como horas que se compensarán por permisos de descanso en el futuro), abono de nómina (que se han pagado en finiquito y no deben constar como pendientes de completar) o por decremento del saldo de vacaciones (por haber sido también abonadas dentro del finiquito).
- Balance año: diferencia entre las horas de contrato y las horas planificadas del año.

También tendrá la posibilidad de ver en una barra gráfica el total de horas:
