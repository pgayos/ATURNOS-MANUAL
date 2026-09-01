---
schemaVersion: "1.0"
contentId: planificacion-c-jornadas-partidas
title: Jornadas partidas
description: En aTurnos, se considera jornada partida a aquella jornada de trabajo donde se planifica dos o más tipos de turnos en un mismo día en el cuadrante de un trabajador y en la que no se solapan.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Jornadas partidas
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: jornadas
    label: Jornadas
  - id: partidas
    label: Partidas
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
    - https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre jornadas partidas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/d-jornadas-partidas/
  contentHash: 4456877fefa26213a41917a5c956f5d7098802ad93127f029d4bde0f9670d868
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre jornadas partidas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En aTurnos, se considera jornada partida a aquella jornada de trabajo donde se planifica dos o más tipos de turnos en un mismo día en el cuadrante de un trabajador y en la que no se solapan sus horarios entre sí. Ejemplos de jornadas partidas:

- Sin descanso entre tipos de turnos y sin solapamiento de horario entre ellos: En una jornada la planificación dispone de un primer turno M1 de 8:00h a 10:00h y un segundo turno M2 de 10:00h a 15:00h.
- Con descanso entre tipos de turnos: En una jornada la planificación dispone de un primer turno M de 9:00h a 14:00h con un descanso de 2 horas, y un segundo turno T de 16:00h a 18:30h.

Puede ser interesante crear jornadas partidas en vez de un turno completo, porque se puede dividir a posteriori esa unidad (turno) por cambios de turnos, peticiones de absentismo de solo un turno de ellos, para asociar diferentes localizaciones en cada turno de los que forma parte de la jornada partida, etc.

Como hemos definido anteriormente, una jornada partida se considera como la suma de dos o más tipos de turnos, por ello es necesario crear los tipos de turnos que van a formar parte de una jornada partida, de manera individual. En el caso de una jornada partida de 9:00h a 14:00h y de 16:00h a 18:30h se crean 2 tipos de turno. El tipo de turno de 9:00h-14:00h (“MP” Mañana Partida) y el tipo de turno de 16:00h-18:30h (“TP” Tarde Partida).

Se informan los campos que aparecen en el formulario, los cuales son los siguientes:

- Descripción de la jornada partida: nombre identificativo de la jornada partida.
- Seleccionar los tipos de turnos (A+B) que constituyen tu nueva jornada partida.

En nuestro ejemplo anterior, para crear una jornada de 9:00h a 14:00h y de 16:00h a 18:30h, se informa seleccionando en el primer campo el tipo de turno “MP” y en segundo campo se selecciona el tipo de turno “TP”.

Horario: indica el horario de la jornada partida, se controla el solapamiento de los horarios de los turnos a medida que se van seleccionando los tipos de turnos en los campos diseñados para ello. En el caso de solapamiento entre turnos, se genera un aviso y no permite crear la jornada con los tipos de turnos seleccionados.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![c. Jornadas partidas](/media/manual/c-jornadas-partidas-69e4b42938.png)

![c. Jornadas partidas](/media/manual/c-jornadas-partidas-643c7daa5b.png)
