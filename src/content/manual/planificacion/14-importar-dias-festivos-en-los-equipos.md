---
schemaVersion: "1.0"
contentId: planificacion-14-importar-dias-festivos-en-los-equipos
title: Importar días festivos en los equipos
description: El proceso de crear los festivos del cuadrante (ver Festivos ) puede resultar más sencillo importando todos los días festivos desde un archivo y no ir creando uno a uno.
contentType: reference
module: Planificación
submodule: General
subtopic: ""
intent: Importar días festivos en los equipos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: dias
    label: Dias
  - id: equipos
    label: Equipos
  - id: festivos
    label: Festivos
  - id: importar
    label: Importar
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
    - https://manual.aturnos.com/knowledgebase/14-importacion-de-festivos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/14-importacion-de-festivos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar días festivos en los equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/14-importacion-de-festivos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/14-importacion-de-festivos/
  contentHash: 7f5c175149e6ccfade8c4f21c7ca2b5b79ba9ff0df632813b128b4407e4e2a56
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El proceso de crear los festivos del cuadrante (ver Festivos ) puede resultar más sencillo importando todos los días festivos desde un archivo y no ir creando uno a uno.

## Opciones y datos disponibles
Esta importación se realiza completando la plantilla de ejemplo que puedes descargar:

CSV import_festives

Te contamos los pasos, si lo que prefieres es crear un documento Excel propio con las siguientes columnas:

- ID aTurnos, informar del número de identificación del equipo (ver Ajustes → Módulos).
- Día, indicar el número del día de la fecha del festivo.
- Mes, informar del número de mes del año en el que es el festivo.
- Año, indicar el año. Si se indica el valor 0, el festivo se configurará para que se repita todos los años.
- Especial, si lo quieres categorizar como especial, informar valor ‘ 1 ‘, en caso contrario, valor ‘ 0 ‘. Por ejemplo, el día 25 de diciembre, 1 y 6 de enero suelen ser considerados especiales.
- Descripción, identificación con el que queremos conocer el festivo.
- Localización, campo opcional, se informa con el nombre exacto de la localización en la que queremos añadir el festivo. Se asocia con el campo “Localización” en el proceso de importación.

Guardar tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú “Importar “.

Termina de configurar la importación, asociando los campos del documento con los campos de aTurnos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![14. Importar días festivos en los equipos](/media/manual/14-importar-dias-festivos-en-los-equipos-26d66f59fa.png)

![14. Importar días festivos en los equipos](/media/manual/14-importar-dias-festivos-en-los-equipos-279d61c5c0.png)
