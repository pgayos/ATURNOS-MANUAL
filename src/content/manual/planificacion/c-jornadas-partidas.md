---
schemaVersion: "1.0"
contentId: "planificacion-c-jornadas-partidas"
title: "Jornadas partidas"
description: "Información sobre jornadas partidas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Jornadas partidas"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "jornadas"
    label: "Jornadas"
  - id: "partidas"
    label: "Partidas"
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
    - "https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre jornadas partidas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ecc1fa44637fd336ab1e15ecec053b5c2f91aabb105b28d77e4d12e3a46b84e8"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre jornadas partidas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

En aTurnos, se considera jornada partida a aquella jornada de trabajo donde se planifica dos o más tipos de turnos en un mismo día en el cuadrante de un trabajador y en la que no se solapan sus horarios entre sí. Ejemplos de jornadas partidas:

- Sin descanso entre tipos de turnos y sin solapamiento de horario entre ellos: En una jornada la planificación dispone de un primer turno M1 de 8:00h a 10:00h y un segundo turno M2 de 10:00h a 15:00h.
- Con descanso entre tipos de turnos: En una jornada la planificación dispone de un primer turno M de 9:00h a 14:00h con un descanso de 2 horas, y un segundo turno T de 16:00h a 18:30h.

Puede ser interesante crear jornadas partidas en vez de un turno completo, porque se puede dividir a posteriori esa unidad (turno) por cambios de turnos, peticiones de absentismo de solo un turno de ellos, para asociar diferentes localizaciones en cada turno de los que forma parte de la jornada partida, etc.

Como hemos definido anteriormente, una jornada partida se considera como la suma de dos o más tipos de turnos, por ello es necesario crear los tipos de turnos que van a formar parte de una jornada partida, de manera individual. En el caso de una jornada partida de 9:00h a 14:00h y de 16:00h a 18:30h se crean 2 tipos de turno. El tipo de turno de 9:00h-14:00h (“MP” Mañana Partida) y el tipo de turno de 16:00h-18:30h (“TP” Tarde Partida).

Se informan los campos que aparecen en el formulario, los cuales son los siguientes:

- Descripción de la jornada partida: nombre identificativo de la jornada partida.
- Seleccionar los tipos de turnos (A+B) que constituyen tu nueva jornada partida.

En nuestro ejemplo anterior, para crear una jornada de 9:00h a 14:00h y de 16:00h a 18:30h, se informa seleccionando en el primer campo el tipo de turno “MP ” y en segundo campo se selecciona el tipo de turno “TP”.

Horario: indica el horario de la jornada partida, se controla el solapamiento de los horarios de los turnos a medida que se van seleccionando los tipos de turnos en los campos diseñados para ello. En el caso de solapamiento entre turnos, se genera un aviso y no permite crear la jornada con los tipos de turnos seleccionados.
