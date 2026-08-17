---
schemaVersion: "1.0"
contentId: "gestion-de-personal-6-importar-ofertas-de-horas"
title: "Importar ofertas de horas"
description: "El administrador puede realizar ofertas de horas de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de horas."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Importar ofertas de horas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "horas"
    label: "Horas"
  - id: "importar"
    label: "Importar"
  - id: "ofertas"
    label: "Ofertas"
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
    - "https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-importar-ofertas-de-horas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importar ofertas de horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "24380a70c50056e3519881fe5201334bf2d094b9e2b882bed694e3d51ccc4581"
  migratedAt: 2026-08-17
---
## Resumen

El administrador puede realizar ofertas de horas de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de horas.

## Contenido

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
