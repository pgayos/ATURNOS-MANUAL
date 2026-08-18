---
schemaVersion: "1.0"
contentId: "recursos-y-partes-9-sobre-las-localizaciones"
title: "Sobre las localizaciones"
description: "Esta restricción impide planificar a los trabajadores de una determinada localización."
contentType: procedure
module: "Recursos y partes"
submodule: "Vacaciones y ausencias"
intent: "Sobre las localizaciones"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "localizaciones"
    label: "Localizaciones"
  - id: "sobre"
    label: "Sobre"
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
    - "https://manual.aturnos.com/knowledgebase/7-sobre-las-localizaciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-sobre-las-localizaciones/"
ai:
  answerableQuestions:
    - "¿Cómo puedo sobre las localizaciones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "abfaac2952a85c2b44648b2b54e88e1e45cd2c45b6312d0744dd85e22ec87662"
  migratedAt: 2026-08-17
---
## Resumen

Esta restricción impide planificar a los trabajadores de una determinada localización.

## Contenido

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Todas las localizaciones: Marcando SÍ no permitirá planificar en ninguna localización. Únicamente a los trabajadores sin localización por defecto. Localización: Este campo se habilitará si el campo anterior está marcado como NO. Este campo te permite seleccionar las localizaciones que no tienen permitido añadir ningún tipo de planificación.

Por ejemplo, si “Trabajador 2” no puede trabajar en la localización “Envasado”, se puede crear una restricción para que ningún tipo de turno tenga asignada esta localización en “Trabajador 2”.

Esta restricción limita el número de trabajadores de la misma localización que pueden trabajar turnos que comparten horas.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Localización: Selecciona las localizaciones a las que se le aplicará la restricción. Valor de restricción: Indica el número máximo de trabajadores que pueden estar planificados al mismo tiempo.

Esta restricción limita la duración de un tipo de horas que se puede insertar en el cuadrante.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Localización: Selecciona las localizaciones a las que se le aplicará la restricción.
- Valor de la restricción: Indica la duración máxima de un tipo de hora al mes por localización.
- Tipo de hora: Indica el tipo de hora al que le afectará la restricción

Por ejemplo, si se configura a 3 horas, se pueden planificar de varias maneras, pero en cuanto se excede la cantidad de horas (3) salta la restricción. Se puede hacer 1 hora por día, 2 horas un día y 3 h otro o hacer 3 horas un solo día. En cuanto se intenta planificar más de 3 h en el mes, salta la restricción.
