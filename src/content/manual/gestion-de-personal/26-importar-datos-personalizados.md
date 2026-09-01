---
schemaVersion: "1.0"
contentId: gestion-de-personal-26-importar-datos-personalizados
title: Importar datos personalizados
description: Un administrador puede informar los datos personalizados de los trabajadores de manera masiva. Este proceso se realiza a través de la importación datos personalizados.
contentType: concept
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Importar datos personalizados
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: datos
    label: Datos
  - id: importar
    label: Importar
  - id: personalizados
    label: Personalizados
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
    - https://manual.aturnos.com/knowledgebase/26-importar-datos-personalizados/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/26-importar-datos-personalizados/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar datos personalizados?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/26-importar-datos-personalizados/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/26-importar-datos-personalizados/
  contentHash: b503a569249f7c8fa707219fc2ff0db3902d23b585bca9af6eabd2138e4448ad
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Un administrador puede informar los datos personalizados de los trabajadores de manera masiva. Este proceso se realiza a través de la importación datos personalizados.

## Qué debes saber
Puedes completar la plantilla de ejemplo, la cual tienes disponible para descargar CSV:

- Mail del trabajador, a quien se le va a informar el dato personalizado en su perfil de trabajador.
- ID usuario, número identificativo del trabajador en aTurnos
- ID equipo de aTurnos, número identificativo del equipo en aTurnos

- ID del periodo de contrato, número identificativo del periodo de contrato en aTurnos. Se localiza en el final de la url que se muestra en navegador.

- Fecha inicio del periodo de contrato, en el que se quiere informar los datos personalizados de cada trabajador.
- Dato personalizado, se crea tantas columnas como datos personalizados se quieran añadir.

Una vez creado el fichero, habría que asociar los campos siguiendo las indicaciones mencionadas en b. Importar

En el caso de las columnas de los Datos personalizados, se asociará cada una de ella al campo “Dato personalizado” tantas veces como columnas de datos personalizados haya.

Los campoS que se asocian de “datos personalizados” aparecen con el nombre del dato personalizado que se han generado previamente en el equipo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![26. Importar datos personalizados](/media/manual/26-importar-datos-personalizados-4f17017c95.png)

![26. Importar datos personalizados](/media/manual/26-importar-datos-personalizados-4547c21ffc.png)

![26. Importar datos personalizados](/media/manual/26-importar-datos-personalizados-862c390741.png)

![26. Importar datos personalizados](/media/manual/26-importar-datos-personalizados-cd68874be1.png)
