---
schemaVersion: "1.0"
contentId: costes-y-nominas-1-1-modo-de-validacion-para-la-exportacion
title: Modo de validación para la exportación
description: Se precisa indicar el estado en el que se debe encontrar el cuadrante para que se pueda ejecutar el proceso de descarga de variables.
contentType: reference
module: Costes y nóminas
submodule: Usuarios y perfiles
subtopic: ""
intent: Modo de validación para la exportación
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: exportacion
    label: Exportacion
  - id: modo
    label: Modo
  - id: validacion
    label: Validacion
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
    - https://manual.aturnos.com/knowledgebase/1-1-modo-de-validacion-para-la-exportacion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-modo-de-validacion-para-la-exportacion/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre modo de validación para la exportación?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-1-modo-de-validacion-para-la-exportacion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-modo-de-validacion-para-la-exportacion/
  contentHash: f1b9bd0245e723df26ead122053dd1c3f7147c6a4eafc59c64325b342e8b4238
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Se precisa indicar el estado en el que se debe encontrar el cuadrante para que se pueda ejecutar el proceso de descarga de variables.

## Opciones y datos disponibles
Las opciones disponibles son tres:

1. No necesita validación, es decir, la descarga de las variables siempre se puede ejecutar.
2. El cuadrante debe estar cerrado, es decir, la descarga de variables se permite hasta la fecha de fin de cierre de cuadrante. Es la opción recomendada.
3. El cuadrante debe estar cerrado y validado, es decir, la descarga de variables se permite si el cuadrante está cerrado y, en un proceso posterior se valida. La descarga se permite hasta la fecha de fin de validación.

La función de cierre de cuadrante impide la modificación de la planificación (añadir, modificar y/o borra turnos, horas, absentismos temporales) hasta el día de la fecha de cierre informada.

En un proceso posterior al del cierre de cuadrante, otro usuario (habitualmente con un rol superior al que ha cerrado el cuadrante) puede validar el cálculo de los conceptos de nómina.

La validación se realiza por el importe total de cada uno de los conceptos por equipo (más adelante veremos un caso de uso).

Para ver en nuestro Manual cómo se modifica la fecha de cierre del cuadrante en un equipo, haz clic aquí.

Para ver en nuestro Manual cómo se modifica la fecha de cierre del cuadrante, la fecha de validación y el último día exportado en todos los equipos (o los indicados en el filtro de equipos), haz clic aquí.

NOTA: La función de validación solo está disponible para los usuarios con perfil Superusuario. Envía un correo a soporte@aturnos.com si se desea disponer de esta función. Ver el punto 10.7 del Manual

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.1 Modo de validación para la exportación](/media/manual/1-1-modo-de-validacion-para-la-exportacion-146a199667.png)
