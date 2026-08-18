---
schemaVersion: "1.0"
contentId: planificacion-1-reportes-por-equipos
title: Reportes por equipos
description: Si necesitas la información agregada por equipo, desde aquí vas a poder seleccionar los datos que desees para generar tu informe.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Reportes por equipos
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: equipos
    label: Equipos
  - id: reportes
    label: Reportes
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
    - https://manual.aturnos.com/knowledgebase/8-5-reportes/
    - https://manual.aturnos.com/knowledgebase/a-reportes-por-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-5-reportes/
    - https://manual.aturnos.com/knowledgebase/a-reportes-por-equipos/
ai:
  answerableQuestions:
    - ¿Cómo puedo reportes por equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 2
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-5-reportes/
    - https://manual.aturnos.com/knowledgebase/a-reportes-por-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-5-reportes/
    - https://manual.aturnos.com/knowledgebase/a-reportes-por-equipos/
  contentHash: adab3c2c203f4980a45ba3ad3899b236308145ca2f7dd75a038d8399d4f4ebe7
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a reportes por equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Si necesitas la información agregada por equipo, desde aquí vas a poder seleccionar los datos que desees para generar tu informe. Indica el periodo, día, mes o año, si el dato lo quieres del Cuadrante o del Cuadrante Borrador, las fechas y los datos del informe, que pueden ser los siguientes:

- Turnos: total de turnos planificados en cada día del periodo seleccionado, teniendo en cuenta a todos los trabajadores del equipo. Los totales se encuentran separados por cada equipo seleccionado. Los turnos con absentismos asociados también se incluyen.
- Jornadas (de acuerdo a la Configuración general ): total de jornadas planificadas en cada día del periodo seleccionado, teniendo en cuenta a todos los trabajadores del equipo. Los totales se encuentran separados por cada equipo seleccionado.
- Jornadas computadas (de acuerdo a la Configuración general ): total de jornadas planificadas en cada día del periodo seleccionado, teniendo en cuenta a todos los trabajadores del equipo y si los turnos u horas de su cuadrante computan horas. Los totales se encuentran separados por cada equipo seleccionado.
- Horas (horas de tipo normal): total de horas planificadas en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores del equipo. Los totales se encuentran separados por cada equipo seleccionado. Las horas con absentismos asociados también se incluyen, pero se excluyen las horas tipos complementarias y horas extra. Ver tipos de horas.
- Complementarias/extras (Horas no tipo normal): total de horas planificadas tipo extraordinaria y complementarias en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores del equipo. Los totales se encuentran separados por cada equipo seleccionado. Las horas con absentismos asociados también se incluyen, se excluyen las horas tipos normales o de contrato Ver tipos de horas.
- Jornadas de absentismos: total de jornadas con absentismos planificados en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores de cada equipo seleccionado.
- Vacaciones: total de días de vacaciones (planificadas) en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores de cada equipo seleccionado
- Horas festivas: total de horas festivas planificadas en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores de cada equipo seleccionado.
- Horas nocturnas: total de horas nocturnas planificadas en el periodo consultado (en días, en mes o año), teniendo en cuenta a todos los trabajadores de cada equipo seleccionado. Ver configuración de horario nocturno en ajustes de datos del convenio del equipo.
- Libres: total de días libres (sin planificación) en cada día del periodo consultado, teniendo en cuenta a todos los trabajadores de cada equipo seleccionado.
- Trabajadores activos: trabajadores activos (periodo contratado) en el equipo durante el periodo de tiempo consultado.
- Personal libre: números de trabajadores del equipo que no tienen ninguna planificación en el periodo consultado.
- Media de trabajadores: media de trabajadores activos (altas) en el equipo durante el periodo de tiempo consultado.
- % de trabajadores planificados que no fichan: indica el porcentaje de trabajadores que se encuentran planificados, pero que no han realizado la acción de marcaje del control de presencia.
- % de trabajadores no planificados que fichan: indica el porcentaje de trabajadores que no se encuentran planificados, pero han realizado una acción de marcaje del control de presencia.
- Accesos: número total de acceso en aTurnos de los trabajadores de un mismo equipo.
- Trabajadores planificados: número total de trabajadores planificados del/os equipo/os seleccionados.
- Demandas: número total de demandas insertadas en el/os equipo/os seleccionados.

Ver más información: las variables de reportes.
