---
schemaVersion: "1.0"
contentId: planificacion-6-sobre-la-tabla-al-hacer-clic-en-casilla
title: Sobre la tabla, al hacer clic en casilla
description: Como administrador, puedes crear y modificar los días del periodo del patrón con un menú de acciones del cual vas a disponer al hacer clic en el día/celda del periodo a modificar. Cuentas con las siguientes acciones:.
contentType: procedure
module: Planificación
submodule: Turnos y patrones
intent: Sobre la tabla, al hacer clic en casilla
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: casilla
    label: Casilla
  - id: clic
    label: Clic
  - id: hacer
    label: Hacer
  - id: sobre
    label: Sobre
  - id: tabla
    label: Tabla
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
    - https://manual.aturnos.com/knowledgebase/6-sobre-la-tabla-al-hacer-clic-en-casilla/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-sobre-la-tabla-al-hacer-clic-en-casilla/
ai:
  answerableQuestions:
    - ¿Cómo puedo sobre la tabla, al hacer clic en casilla?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-sobre-la-tabla-al-hacer-clic-en-casilla/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-sobre-la-tabla-al-hacer-clic-en-casilla/
  contentHash: 470998bec11efc2ada283a553267ac948f93edc33f63c9792c982e6d1adf208c
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Como administrador, puedes crear y modificar los días del periodo del patrón con un menú de acciones del cual vas a disponer al hacer clic en el día/celda del periodo a modificar. Cuentas con las siguientes acciones:.

## Procedimiento
- Cortar: permite quitar el turno y localización del período y día seleccionado (posteriormente se puede pegar en otro diferente). Copiar: permite copiar el turno y localización del período y día seleccionado (posteriormente se puede copiar en otro diferente). Pegar: permite pegar el turno y localización seleccionadas en el período y día seleccionado. Insertar: para agregar un turno mas en el día/ casilla seleccionada. En esta opción se despliega un listado de los tipos de turnos creados y al hacer clic, se inserta en la celda el tipo de turno elegido. Se pueden insertar más de un tipo de turno (ver detalle de tipos de turno ). Modificar: cambia el turno de la celda (día) donde se hace clic por el seleccionado en el listado de turnos disponibles que aparece en su desplegable. Borrar día: borra por completo la celda donde se hace clic, borrando todos los turnos y localizaciones del día/celda seleccionado. Insertar día libre: inserta una celda más en el periodo del patrón sin planificación, dejando en la planificación el tipo de turno L = libre, desplazando una posición más a la celda planificada donde se ha realizado el clic Pegar desde Excel: pegar turnos desde Excel o del portapapeles. Guarda el turno de la casilla y se inserta a partir de entonces. Si no se desea mantener el turno de esa casilla, una vez pegada la secuencia, se puede borrar posición. Por el contrario, para no desplazar el patrón, se puede pegar al final del patrón de forma que se crean nuevos periodos con los turnos pegados. Borrar: cuando existan más de un turno en un mismo día, desde esta opción borraremos siempre el último tipo de turno añadido, manteniendo el resto. Borrar posición: elimina la planificación (tipo de turnos y localización) de la celda/día donde se hace clic, borrando la posición (celda/día) al mismo tiempo, por ello, se desplaza el resto de la secuencia posterior a la celda borrada y se disminuye un día/celda en el patrón de turnos. Localización: se despliega un listado de localizaciones creadas y al hacer clic en una de ellas se inserta en la celda y tipo turno seleccionado, al cual se le asociará la localización. Se pueden insertar solo una localización por cada tipo de turnos. Muy útil para crear patrones de turnos con localizaciones.
