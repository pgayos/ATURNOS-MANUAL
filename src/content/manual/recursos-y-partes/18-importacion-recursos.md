---
schemaVersion: "1.0"
contentId: recursos-y-partes-18-importacion-recursos
title: Importación recursos
description: Algunos managers conocen cuál son los recursos generados por sus trabajadores durante su turno de trabajo o en horas predeterminadas.
contentType: concept
module: Recursos y partes
submodule: General
intent: Importación recursos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: importacion
    label: Importacion
  - id: recursos
    label: Recursos
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
    - https://manual.aturnos.com/knowledgebase/18-importacion-recursos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/18-importacion-recursos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importación recursos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/18-importacion-recursos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/18-importacion-recursos/
  contentHash: 29854b362638c7467619973d04ffa3f300de151ec5bbc3c8f068f1110c479205
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre importación recursos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Algunos managers conocen cuál son los recursos generados por sus trabajadores durante su turno de trabajo o en horas predeterminadas. Si necesitas incluir recursos a varios trabajadores de manera rápida y sencilla, podemos importar un importar un fichero Excel donde indiquemos los recursos generados en dichos trabajadores. Para importar este archivo, se debe tener activado el módulo de Recursos

Para poder importar los recursos puedes completar la plantilla de ejemplo que puedes descargar:

CSV Importar recursos

Es posible por otra parte incluir los recursos, creando desde cero un documento Excel en formato con las siguientes columnas:

- Fecha*: día, mes y año. El formato de celda de esta columna, a pesar de ser una fecha, debe estar en formato texto.
- Trabajador: nombre que el usuario tiene en aTurnos.
- Email*: correo que tiene el usuario en aTurnos.
- Turnos*: si el recurso a incluir va asociado a un turno deberemos indicar la abreviatura de este.
- Hora: si por el contrario, el recurso está asociado a una hora en concreto deberemos indicar la hora de inicio dónde lo vamos a incluir.
- Recurso*: descripción del recurso en la herramienta.
- Valor*: número de recursos a introducir.
- Observaciones: en caso de querer poner un comentario a dicho recurso.
- Validado*: indicaremos un 1 en caso de que queramos importar este recurso ya validado. En caso contrario, dejaremos esta celda sin informar.

Los datos indicados con * son de carácter obligatorio indicarlos en el fichero.

Por último, antes de realizar la importación, guarda el documento con formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú de “Importar “.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![18. Importación recursos](/media/manual/18-importacion-recursos-1cee57f428.png)

![18. Importación recursos](/media/manual/18-importacion-recursos-2a28eb53c4.png)
