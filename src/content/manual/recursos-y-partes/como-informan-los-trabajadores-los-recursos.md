---
schemaVersion: "1.0"
contentId: "recursos-y-partes-como-informan-los-trabajadores-los-recursos"
title: "¿Cómo informan los trabajadores los recursos?"
description: "Solo se pueden asignarse recursos si se tienen turno y/u horas planificadas en el cuadrante."
contentType: faq
module: "Recursos y partes"
submodule: "Vacaciones y ausencias"
intent: "¿Cómo informan los trabajadores los recursos?"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "informan"
    label: "Informan"
  - id: "recursos"
    label: "Recursos"
  - id: "trabajadores"
    label: "Trabajadores"
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
    - "https://manual.aturnos.com/knowledgebase/casos-de-uso-de-trabajadores/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/casos-de-uso-de-trabajadores/"
ai:
  answerableQuestions:
    - "¿Cómo informan los trabajadores los recursos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "8f58cd1a1c540f1e49c7612d7b08587f359945510f08117f72b1bf4459a8fffd"
  migratedAt: 2026-08-17
---
## Resumen

Solo se pueden asignarse recursos si se tienen turno y/u horas planificadas en el cuadrante.

## Contenido

Para añadir un Recurso, el trabajador debe:

1.- Desde el menú CUADRANTE → CUADRANTE, hacer clic en el día y turno al que se le va a añadir el recurso y seleccionar la opción “Recursos”

2.- Los “Recursos” disponibles son los creados por el administrador de aTurnos (accede al Manual de Administrador de Recursos, para ampliar la información), marca “Por defecto” para visualizar los recursos disponibles.

El trabajador informa los “Recursos” disponibles, en este ejemplo:

- Dietas: En el que se informa un importe al que se le puede añadir observaciones, a través del campo “Obs.”. Es un campo numérico.
- Descripción: En el que se informa una descripción, en el caso de que se precise. Es un campo tipo texto.
- Kilómetros: En el que se informa un importe al que se le puede añadir observaciones, a través del campo “Obs.”. Es un campo numérico.
- Luces: En el que se marca un check que puede formar parte de una Lista de Comprobación informa una descripción, en el caso de que se precise. Es un campo tipo texto.
- Kilómetros a pagar: Es un campo autocalculado, multiplica el número del recurso “Kilómetros” x el valor 0,21 indicado en el campo “Fórmula” del recurso.

3. Por último Guardar y cerrar o Borrar.

4.- Los trabajadores visualizan los recursos tanto en el Cuadrante, siempre que se tenga filtrado con la opción “Recursos”

5.- Accediendo a RECURSOS → RESUMEN, el trabajador puede visualizar los recursos informados y el estado del recurso (validado o no por el administrador).

Un trabajador de mantenimiento tiene que registrar los recursos creados del tipo “Si o No”.

En el parte de trabajo aparecen todos los recursos del parte de trabajo creado por el administrador:

- Revisión del estado del agua de la piscina.
- Revisión de los extintores de la comunidad.
- Puesta en marcha de la nueva depuradora de la piscina.

El trabajador marcará los recursos que hay realizado y terminado en la jornada.

La acciones que tiene que realizar el trabajador en este caso son las siguientes:

1.- Cuando realice cada tarea o al final de la jornada, desde el cuadrante de planificación hacer clic en el día de la jornada donde va a reflejar los recursos realizados.

2.- Los recursos añadidos por el administrador están creados como tipo de recurso check list, apareciendo una casilla sin marcar junto al lado de cada una de ellos. El trabajador marcará haciendo clic sobre las casillas de los recursos realizados y terminados.

3.- Por último hacer clic en Cerrar.

4.- En el resumen de los recursos, se visualiza con un 1 en el caso de que este marcado el check, en este ejemplo los recursos “Revisión del estado del agua de la piscina” y “Revisión de los extintores de la comunidad”
