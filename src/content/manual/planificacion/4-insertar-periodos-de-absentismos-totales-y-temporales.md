---
schemaVersion: "1.0"
contentId: planificacion-4-insertar-periodos-de-absentismos-totales-y-temporales
title: Insertar periodos de absentismos totales y temporales
description: El administrador puede insertar periodos de absentismos (ver Nuevo periodo de absentismo ) o absentismos temporales a través de un fichero Excel en el cuadrante de aTurnos.
contentType: concept
module: Planificación
submodule: Altas y bajas
intent: Insertar periodos de absentismos totales y temporales
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismos
    label: Absentismos
  - id: insertar
    label: Insertar
  - id: periodos
    label: Periodos
  - id: temporales
    label: Temporales
  - id: totales
    label: Totales
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
    - https://manual.aturnos.com/knowledgebase/4-importacion-de-periodos-de-absentismo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-importacion-de-periodos-de-absentismo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre insertar periodos de absentismos totales y temporales?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-importacion-de-periodos-de-absentismo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-importacion-de-periodos-de-absentismo/
  contentHash: d4877842429b8c3b0d13b92bf9d99b8dacef4a933d2132e4557e3b34f787ce6f
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre insertar periodos de absentismos totales y temporales, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
El administrador puede insertar periodos de absentismos (ver Nuevo periodo de absentismo ) o absentismos temporales a través de un fichero Excel en el cuadrante de aTurnos. Para poder importar los absentismos puedes completar la plantilla de ejemplo que puedes descargar CSV Importar periodos de absentismos

En caso de querer hacer un fichero propio, te ayudamos a confeccionar un documento Excel en formato CSV con las siguientes columnas:

- Email trabajador: informar, en las celdas de las diferentes filas, el mail del trabajador.
- Fecha de inicio: primer día del periodo de absentismo que se importa al cuadrante. Si es un periodo de absentismo el formato será dd/mm/aaaa pero si es una absentismo temporal el formato será dd/mm/aaaa hh:mm
- Fecha de fin: último día del periodo de absentismo que se importa al cuadrante. Si es un periodo de absentismo el formato será dd/mm/aaaa pero si es una absentismo temporal el formato será dd/mm/aaaa hh:mm
- Tipo de absentismo: abreviatura del tipo de absentismo que se importará. Las abreviaturas tienen que coincidir con las dadas de alta en aTurno (cómo dar de alta absentismo).
- Id aTurno equipo: número del equipo, generado por el sistema aTurno, es único para todos los trabajadores del mismo equipo (ver aTurnos ID ).
- Id externo equipo: identificador del equipo, generado por el administrador del equipo, es único para todos los trabajadores del mismo equipo (ver Datos del equipo ).
- Borrado: es utilizado para borrar un absentismo informado previamente a un trabajador en el equipo. Se deben rellenar las celdas anteriores relacionadas al absentismo que se desea eliminar, e informar en esta celda un 1. En caso de no querer borrar el absentismo se enviará la celda el blanco.
- Borrar periodo superpuesto: al registrar en el fichero un absentismo informando en esta celda un 1, se eliminarían los absentismos ya planificados en el cuadrante del trabajador entre la fecha de inicio y fin del periodo de absentismo que se quiere informar. En el caso de querer mantener los absentismos ya planificados se debe enviar la celda en blanco.

Una vez se ha creado o completado el archivo, guardar tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).
