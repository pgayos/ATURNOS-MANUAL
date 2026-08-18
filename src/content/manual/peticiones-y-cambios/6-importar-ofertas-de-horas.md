---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-6-importar-ofertas-de-horas
title: Importar ofertas de horas
description: El administrador puede realizar ofertas de horas de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de horas.
contentType: reference
module: Peticiones y cambios
submodule: Usuarios y perfiles
intent: Importar ofertas de horas
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: horas
    label: Horas
  - id: importar
    label: Importar
  - id: ofertas
    label: Ofertas
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
    - https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar ofertas de horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/
  contentHash: e1431c364e6a401de577f5b06d5b128639a6f5908193a1b09f30ab8a8de951b5
  migratedAt: 2026-08-17
labels: []
---
## Resumen

El administrador puede realizar ofertas de horas de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de horas.

## Opciones y datos disponibles
Puedes completar la plantilla de ejemplo, la cual tienes disponible para descargar CSV Importar ofertas de horas

- Fecha: aaaa-mm-dd en la que se desea que se realice el turno ofertado. El formato que debe seguir tanto el fichero como en la configuración de Importar/Exportar debe ser aaaa-mm-dd.
- Hora inicio: horario en el que comienza.
- Hora fin: horario en el que finaliza.
- Tipo: nombre de la hora.
- Cantidad: necesidad de trabajadores para cubrir el turno.
- Localización: en la que sebe realizar el turno ofertado
- Auto aprobable: con el valor 0 se estaría indicando que NO lo es, con valor 1 si sería auto aprobable, es decir, nada más apuntarse el trabajado se le asignaría dicho turno.
- Experiencia: nombre de la especialidad que debe tener el usuario para apuntarse a ella.
- Valor Experiencia: puntuación mínima de la experiencia indicada previamente para poder apuntarse a la oferta.

Una vez creado el fichero, habría que asociar los campos siguiendo las indicaciones mencionadas en b. Importar
