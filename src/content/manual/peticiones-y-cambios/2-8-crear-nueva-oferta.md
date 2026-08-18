---
schemaVersion: "1.0"
contentId: "peticiones-y-cambios-2-8-crear-nueva-oferta"
title: "Crear nueva oferta"
description: "Cabe destacar que esta opción SOLO podrá realizarla los ADMINISTRADORES del equipo. Los trabajadores únicamente podrán inscribirse en dichas ofertas."
contentType: concept
module: "Peticiones y cambios"
submodule: "General"
intent: "Crear nueva oferta"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "crear"
    label: "Crear"
  - id: "nueva"
    label: "Nueva"
  - id: "oferta"
    label: "Oferta"
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
    - "https://manual.aturnos.com/knowledgebase/2-8-crear-nueva-oferta/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-8-crear-nueva-oferta/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre crear nueva oferta?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "62ac1d783f5cece8e06ebf73fc2da0080c39f2d433dab8866744838aef5a35fb"
  migratedAt: 2026-08-17
---
## Resumen

Cabe destacar que esta opción SOLO podrá realizarla los ADMINISTRADORES del equipo. Los trabajadores únicamente podrán inscribirse en dichas ofertas.

## Contenido

Los administradores podrán crear ofertas de turnos y horas para los trabajadores en función de sus necesidades rellenando los siguientes:

- Tipo: turnos u horas.
- Localización: si queremos referirnos a una oferta de turnos u horas en una localización asignada en concreto.
- Especialidad: en el caso de que se haga una oferta de turnos u horas de una especialidad concreta.
- Cantidad: el número de turnos y horas a ofertar.
- Solo visible para la localización: en el caso de que dicha oferta solo esté visible para los trabajadores que se encuentran en dicha localización.
- Tipo de turno y horas: se selecciona el turno o la hora en concreto que se quiere ofertar.
- Fecha inicio y fecha fin.
- Comentarios: si queremos añadir un comentario para complementar la información, es opcional.

Una vez seleccionada y completadas las opciones anteriores, se hará clic en solicitar y automáticamente buscar todo el listado de ofertas en el apartado de “ofertas de turno”:

El proceso para inscribirse en dichas ofertas de turnos y horas es igual que el apartado ofertas de turno.
