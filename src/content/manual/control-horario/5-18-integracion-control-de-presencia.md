---
schemaVersion: "1.0"
contentId: control-horario-5-18-integracion-control-de-presencia
title: Integración Control de Presencia
description: aTurnos pone a disposición de sus clientes el fichaje a través de sistemas biométricos, pero también facilita que otros software de fichaje se puedan integrar con aTurnos para insertar los f.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Integración Control de Presencia
audience:
  - role: Planificador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: control
    label: Control
  - id: integracion
    label: Integracion
  - id: presencia
    label: Presencia
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
    - https://manual.aturnos.com/knowledgebase/5-18-integracion-control-de-presencia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-18-integracion-control-de-presencia/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre integración Control de Presencia?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-18-integracion-control-de-presencia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-18-integracion-control-de-presencia/
  contentHash: f673af4b1b33d2950029dc01d0cac494c2e64c9bd6f84519aa54fe1ee73258ce
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre integración Control de Presencia, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
aTurnos pone a disposición de sus clientes el fichaje a través de sistemas biométricos, pero también facilita que otros software de fichaje se puedan integrar con aTurnos para insertar los fichajes en el Control de Presencia.

La integración se puede producir gracias a nuestra API y APIrestfull

En este enlace ofrecemos toda la documentación sobre los parámetros de Control de Presencia: APIdoc

En este método, en el parámetro “what” primero mira si lo que se pasa es un Dato Personalizado sino, mira el “id_user” y si no el “id_employee”.

POST

Parámetro

- Campo | Tipo | Descripción
- id_user | Integer | user unique id with permissions to do this action.
- token | String | Token to access into aTurnos.
- id_aturno | Integer | The id_aturno that you want to enter
- what | String | The id_user who is marked.
- when | DateTime | The date of checkin, Format: YYYY-MM-DD HH:MM
- where | String | The location where the check-in takes place. You can retrieve the available location IDs in getLocationList
- why | String | Type of checkin, can be retrieved from getCheckinTypes, being identified by the id_tipo_marcaje.
- direction | Integer | The direction of the checkin. The value 0 is input and the value 1 is output.
- correction | Integer | Make correction of direction if it is same direction than previous check
- language | String | Selected language to return the data in abbreviation ES, EN, CA. Valor por defecto: ES

- Request-Example:

En este método, el parámetro “what” únicamente mira por el “id_employee”.

POST

Parámetro

- Campo | Tipo | Descripción
- id_user | Integer | user unique id with permissions to do this action.
- token | String | Token to access into aTurnos.
- id_aturno | Integer | The id_aturno that you want to enter.
- what | String | The id_employee who is marked.
- id_length | Int | ength of the employee id. If it is smaller it is filled with zeros.
- when | DateTime | The date of checkin, Format: YYYY-MM-DD HH:MM
- where | String | he location where the check-in takes place. You can retrieve the available location IDs in getLocationList
- why | String | Type of checkin, can be retrieved from getCheckinTypes, being identified by the id_tipo_marcaje.
- direction | Integer | The direction of the checkin. The value 0 is input and the value 1 is output.
- language | String | Selected language to return the data in abbreviation ES, EN, CA. Valor por defecto: ES

- Request-Example:

En este enlace ofrecemos toda la documentación sobre los parámetros de Control de Presencia: APIdoc

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.18 Integración Control de Presencia](/media/manual/5-18-integracion-control-de-presencia-40c52af690.webp)

![5.18 Integración Control de Presencia](/media/manual/5-18-integracion-control-de-presencia-3bdee12777.webp)
