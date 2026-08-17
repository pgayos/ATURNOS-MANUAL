---
schemaVersion: "1.0"
contentId: "gestion-de-personal-d-historico"
title: "Histórico"
description: "Información sobre histórico, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Histórico"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "historico"
    label: "Historico"
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
    - "https://manual.aturnos.com/knowledgebase/d-historico-sustituciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/d-historico-sustituciones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre histórico?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "740ba16df800a1251003871377bcca051ba47f8c42fd53b9cd60258a3dd280fe"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre histórico, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

En esta pestaña, puedes visualizar el listado histórico del total de sustituciones que has realizado dentro de un periodo determinado. Todo ello, para que así puedas tener un mejor control sobre ellas y que aTurnos te informe sobre todo el historial de sustituciones realizadas.

En esta pestaña mostrará el listado mediante los siguientes campos que te explicamos de forma breve a continuación (los cuales aparecen en azul oscuro, para que así tengas sobre ellos una mejor identificación):

- Trabajador a sustituir: es el trabajador el cual tiene ya registrados los turnos y/o localizaciones, así como ya realizada su planificación en el cuadrante, es decir, es al trabajador al cual se pretende cambiar la planificación para aplicarla sobre otro compañero del equipo. Ejemplo: si quieres aplicar la planificación de Jesús en otro compañero, Jesús será tu usuario origen.
- Trabajador sustituto: es el trabajador al que se le aplica la planificación, turnos y/o localizaciones del trabajador origen. Ejemplo: se pretende aplicar la misma planificación que tiene Jesús (trabajador origen) sobre su compañera María, por lo tanto, María es la trabajadora destino.
- Realizado: indica el usuario que realizó la acción de sustituir a los trabajadores, con el fin de que tengas mejor identificado la persona que realizó cada acción.
- Tipo: muestra el tipo de acción que fue realizada (ver más en: Tipos de sustituciones ).
- Orden y localización: te indicará si la sustitución que previamente ha realizado un determinado usuario se aplicó también sobre el orden y la localización.
- Desde: muestra la fecha de comienzo del periodo a través del cual se aplicó la sustitución sobre el trabajador.
- Hasta: muestra la fecha de finalización del periodo en el que se aplicó la sustitución al trabajador.
- Fecha: indica la fecha en la cual surte efecto la acción de sustitución por parte de un determinado usuario del equipo.
