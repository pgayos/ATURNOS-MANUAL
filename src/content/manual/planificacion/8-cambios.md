---
schemaVersion: "1.0"
contentId: planificacion-8-cambios
title: Cambios en aTurnos
description: Esta restricción impide que se puedan realizar cambios de turno.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Cambios en aTurnos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cambios
    label: Cambios
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
    - https://manual.aturnos.com/knowledgebase/9-cambios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/9-cambios/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cambios en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/9-cambios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/9-cambios/
  contentHash: 4afc598df025503a54086aa0e3ec31e1687ae11210f709f698b344d7b1b1cb6b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Esta restricción impide que se puedan realizar cambios de turno.

## Opciones y datos disponibles
⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que se puedan realizar cambios de turno en un día que se tengan también planificadas horas extra o complementarias.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Tipo de hora: Indica el tipo de hora o los tipos de horas a los que afecta a la restricción.

Esta restricción impide que, si se realiza un cambio de turno en un día festivo, se quiera devolver en otro día que no sea festivo. Es decir, obliga a devolver el cambio en otro día festivo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Comprobación día al que pertenece el evento: Selecciona si usa el inicio o final del evento para comprobar la restricción.

Esta restricción impide que un trabajador solicite un cambio de turno con otro compañero si, en el mismo día del cambio propuesto, existe alguna petición pendiente de confirmación por parte de ese compañero. Esto incluye permisos por días, horas, vacaciones, cambios de turno u horas. La restricción evita conflictos en la planificación al asegurar que no se gestionen solicitudes simultáneas no resueltas para un mismo día.

⚙️Configuración: Esta restricción no requiere campos adicionales más allá de la configuración básica.

Esta restricción impide que se puedan realizar peticiones de cambio de turno si ya se tiene otra pendiente en el mismo día.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que se puedan realizar cambios de turnos si se tiene planificada una jornada partida.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide realizar cambios de turno si el turno está afectado por un absentismo temporal.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que si se pide un cambio de turno por un libre, cuando se va a devolver el cambio, no se haga con un turno distinto al cambiado en un primer momento.

⚙️Configuración: Esta restricción tiene una configuración básica.
