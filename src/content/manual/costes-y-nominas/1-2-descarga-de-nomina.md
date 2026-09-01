---
schemaVersion: "1.0"
contentId: costes-y-nominas-1-2-descarga-de-nomina
title: Descarga de nómina
description: Se precisa indicar si se permite descargar de nuevo los conceptos de nómina ya descargados o por el contrario una vez descargados no se permite realizar una nueva descarga.
contentType: reference
module: Costes y nóminas
submodule: Usuarios y perfiles
subtopic: ""
intent: Descarga de nómina
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: descarga
    label: Descarga
  - id: nomina
    label: Nomina
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
    - https://manual.aturnos.com/knowledgebase/1-2-descarga-de-nomina/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-descarga-de-nomina/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre descarga de nómina?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-2-descarga-de-nomina/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-descarga-de-nomina/
  contentHash: 21e2bdda1227e570b753faefa90e7689530fa8f5aca15f880a803ca2c0719866
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Se precisa indicar si se permite descargar de nuevo los conceptos de nómina ya descargados o por el contrario una vez descargados no se permite realizar una nueva descarga.

## Opciones y datos disponibles
Las opciones disponibles son dos:

1. No permitir la descarga de los conceptos de nómina anteriormente descargados. Es la opción recomendada.
2. Permitir la descarga de los conceptos de nómina anteriormente descargados.

En ambos casos, con carácter general, al ejecutar el proceso de cálculo de las variables de nómina, se informa en el perfil del trabajador la fecha del último día exportado.

La fecha del último día exportado es la que limita la descarga, es decir, si la fecha de último día exportado en el perfil del trabajador es 19/03/2022, solo se podrán descargar conceptos desde este día en adelante.

En el caso de seleccionar la segunda opción, cada vez que se ejecute el proceso, descargaría los conceptos.

En la siguiente pantalla, se visualiza las tres fechas a las que hemos hecho referencia que se visualiza en la pestaña “Nóminas” del perfil del trabajador:

1. Fecha de cierre de cuadrante.
2. Fecha de validación.
3. Último día exportado.

Para ver en nuestro Manual cómo se modifica la fecha de cierre del cuadrante, la fecha de validación y el último día exportado en todos los equipos (o los indicados en el filtro de equipos), haz clic aquí.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.2 Descarga de nómina](/media/manual/1-2-descarga-de-nomina-9e7b912d60.png)

![1.2 Descarga de nómina](/media/manual/1-2-descarga-de-nomina-c02d327a98.png)
