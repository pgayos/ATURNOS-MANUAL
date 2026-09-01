---
schemaVersion: "1.0"
contentId: planificacion-7-datos-de-planificacion
title: Datos de planificación
description: Muestra información sobre la planificación que el trabajador tiene asignada, tratándose así mismo de información sobre los datos del patrón que previamente has creado y que le has asignado a.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Datos de planificación
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: datos
    label: Datos
  - id: planificacion
    label: Planificacion
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
    - https://manual.aturnos.com/knowledgebase/7-datos-de-planificacion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-datos-de-planificacion/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre datos de planificación?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-datos-de-planificacion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-datos-de-planificacion/
  contentHash: f52cac969266bf176437af60fd117b8808ae876582f4f49066090db84d24dd0b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre datos de planificación, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Muestra información sobre la planificación que el trabajador tiene asignada, tratándose así mismo de información sobre los datos del patrón que previamente has creado y que le has asignado al trabajador al que se hace referencia. La información está previamente detallada en dicho patrón. Es muy importante recordarte que, si esta información no la registras al inicio, en los datos de planificación no te aparecerá nada. (Puede visualizar cómo aplicar un patrón de turnos ).

Para que te sea más fácil, se detallará a continuación el significado de la información que contiene cada campo, que son los siguientes:

- Patrón: Es una secuencia de turnos que se repite atendiendo a un ciclo de días. Con los patrones de turnos se puede planificar los trabajadores durante un periodo de tiempo determinado. Así mismo, también puedes asignarle una localización, consiguiendo, por lo tanto, un patrón de turnos con localizaciones.
- Periodo: Trata sobre la semana del patrón (en el caso de que hayas creado dos periodos o más para un mismo patrón) que se quiera insertar primero. Para ello, antes de aplicar el patrón, debes fijarte con atención en el cuadrante que aparece justo debajo de los pasos a realizar, para que concuerde el primero de los periodos por el que quieres que comience la planificación con la semana correcta en la que le has planificado los diferentes turnos y/o localizaciones al trabajador. Ejemplo: si has asignado 2 periodos a un mismo trabajador (el periodo 1 todos con un turno “M” (8:00-15:00) y el periodo 2 con un turno “T” (15:00-22:00), todos ellos de lunes a viernes, insertando como libres el fin de semana). Si justo el día en que quieres aplicar el patrón, el trabajador tiene durante esa semana el turno “T”, tienes que fijarte en el cuadrante de abajo que efectivamente coincide con el turno “T”, por lo que entonces tienes que insertar el periodo 2 como el comienzo para realizar la planificación correctamente en el trabajador.
- Escalonado: Identifica la duración de los periodos del patrón, es decir, cada cuánto tiempo van a rotar los periodos. Ejemplo: a un trabajador se le ha asignado 2 periodos (imagina que le aplica el patrón en primer lugar con el periodo 2) y en el escalonado se le han asignado 30 días, por lo tanto, desde el día 1 de aplicación del patrón hasta el día 30 el trabajador tendrá asignado los turnos del periodo 1; ya en el día 31 hasta el día 60, automáticamente se le asignará al trabajador los turnos que le hayas definido en el periodo 1), por lo que como ves, es el total de días en el que quieres que roten dichos periodos.
- Fecha de inicio: Identifica la fecha de comienzo en la que has aplicado el patrón sobre el cuadrante del trabajador en cuestión. No significa la fecha exacta en la que aplicas el patrón sobre el trabajador, sino que quiere decir la fecha en la quieres que los turnos y/o localizaciones creadas en el patrón del trabajador tengan efecto sobre la planificación del mismo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7. Datos de planificación](/media/manual/7-datos-de-planificacion-aca42dc412.webp)
