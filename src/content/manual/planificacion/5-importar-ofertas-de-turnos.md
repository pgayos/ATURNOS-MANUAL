---
schemaVersion: "1.0"
contentId: planificacion-5-importar-ofertas-de-turnos
title: Importar ofertas de turnos
description: El administrador puede realizar ofertas de turnos de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de turnos.
contentType: reference
module: Planificación
submodule: Usuarios y perfiles
intent: Importar ofertas de turnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: importar
    label: Importar
  - id: ofertas
    label: Ofertas
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/5-importar-ofertas-de-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-importar-ofertas-de-turnos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar ofertas de turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-importar-ofertas-de-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-importar-ofertas-de-turnos/
  contentHash: c5c46cb4accac8a9fffe54104ece9fbc7d2ae8b8f735e70fe89dd81728acfcc9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El administrador puede realizar ofertas de turnos de manera masiva sin tener que ir una a una a través de la herramienta. Este proceso se realiza a través de la importación de ofertas de turnos.

## Opciones y datos disponibles
Puedes completar la plantilla de ejemplo, la cual tienes disponible para descargar CSV Importar ofertas de turno

- Fecha: aaaa-mm-dd en la que se desea que se realice el turno ofertado. El formato que debe seguir tanto el fichero como en la configuración de Importar/Exportar debe ser aaaa-mm-dd.
- Turno: horario a realizar por los trabajadores inscritos.
- Cantidad: necesidad de trabajadores para cubrir el turno.
- Localización en la que se debe realizar el turno ofertado
- Auto aprobable: con el valor 0 se estaría indicando que NO lo es, con valor 1 si sería auto aprobable, es decir, nada más apuntarse el trabajado se le asignaría dicho turno.
- Experiencia: nombre de la especialidad que debe tener el usuario para apuntarse a ella.
- Valor Experiencia: puntuación mínima de la experiencia indicada previamente para poder apuntarse a la oferta.

Los campos a asociar deben ser los siguientes:

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5. Importar ofertas de turnos](/media/manual/5-importar-ofertas-de-turnos-af00753746.png)

![5. Importar ofertas de turnos](/media/manual/5-importar-ofertas-de-turnos-854a8acb89.png)
