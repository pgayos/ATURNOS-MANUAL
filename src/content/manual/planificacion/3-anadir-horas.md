---
schemaVersion: "1.0"
contentId: "planificacion-3-anadir-horas"
title: "Añadir horas"
description: "Los responsables de los equipos de trabajo por necesidades planificación o debido a la realización de horas que sobrepasan la jornada habitual pueden ‘Añadir horas ‘ en el cuadrante de los trabajadores."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Añadir horas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "anadir"
    label: "Anadir"
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
    - "https://manual.aturnos.com/knowledgebase/3-anadir-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-anadir-horas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo añadir horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "e869e22b342ad5a68b84ed0d917e3f48a032ebf39ccfcf9d0703350fe750ca41"
  migratedAt: 2026-08-17
---
## Resumen

Los responsables de los equipos de trabajo por necesidades planificación o debido a la realización de horas que sobrepasan la jornada habitual pueden ‘Añadir horas ‘ en el cuadrante de los trabajadores.

## Contenido

Se insertan y planifican horas a un trabajador o varios. El tipo de hora se elige dentro del formulario, normal, extra o complementaria, así como asignarle una localización.

Por defecto, las horas están “ Fuera de bolsa de trabajo ” se puede seleccionar para su realización a cualquier trabajador disponible en el día elegido.

El administrador tiene la posibilidad de gestionar las horas mediante las bolsas de trabajo creadas. De esta forma se añaden horas a los trabajadores que formen parte de cada bolsa de trabajo.

Al seleccionarla y hacer clic a “Asignar trabajadores” nos aparece la opción de poder asignar las horas a los trabajadores disponibles de la bolsa.

Se mostrarán los datos de planificación de los trabajadores disponibles de la bolsa y las horas disponibles.

El administrador pulsando sobre los trabajadores disponibles, les añadirá las horas.

Las horas de bolsa, se encontrarán planificadas en el cuadrante, destacado con un borde de color rojo y un signo +, a los trabajadores seleccionados.
