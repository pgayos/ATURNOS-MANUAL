---
schemaVersion: "1.0"
contentId: gestion-de-personal-6-limites-inferiores-de-horas-de-los-empleados
title: Límites inferiores de horas de los empleados
description: Esta restricción establece una duración mínima que debe tener un tipo de hora si se quiere solicitar o planificar.
contentType: reference
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Límites inferiores de horas de los empleados
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: empleados
    label: Empleados
  - id: horas
    label: Horas
  - id: inferiores
    label: Inferiores
  - id: limites
    label: Limites
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
    - https://manual.aturnos.com/knowledgebase/6-limites-inferiores-de-horas-de-los-empleados/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-limites-inferiores-de-horas-de-los-empleados/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre límites inferiores de horas de los empleados?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-limites-inferiores-de-horas-de-los-empleados/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-limites-inferiores-de-horas-de-los-empleados/
  contentHash: f527d9d80442b9ba7ce2dd402bcdcdc60c7bcf9e27539912ed574b6f5da3aecc
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Esta restricción establece una duración mínima que debe tener un tipo de hora si se quiere solicitar o planificar.

## Opciones y datos disponibles
⚙️ Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica la duración mínima que debe tener el tipo de hora. Tipo de hora: Indica el tipo de hora al que aplica la restricción.

Esta restricción impide que se pueda planificar al día menos horas de las informadas en el perfil del trabajador. Si se tiene configurada esta restricción, primero mira las horas configuradas en el perfil del trabajador y después al valor de la restricción. Si el valor es menor al del perfil del trabajador, salta. Si el valor es mayor, tiene en cuenta el valor de la restricción.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Mínimo: Indica el valor mínimo de horas que se deben planificar Tener en cuenta complementarias y extras: Decide si tener en cuenta las horas complementarias y extras Flexibilidad: Indica el porcentaje de flexibilidad que debe tener la restricción para saltar o no según la flexibilidad que se defina.

Esta restricción impide que se pueda planificar a la semana menos horas de las informadas en el perfil del trabajador.

⚙️Configuración: Además de la configuración básica, tiene un campo adicional.

- Flexibilidad: Indica el porcentaje de flexibilidad que debe tener la restricción para saltar o no según la flexibilidad que se defina.

Esta restricción informa si la planificación mensual es inferior a las especificadas en su contrato, el sistema mostrará una advertencia, indicando que el trabajador aún dispone de horas pendientes de planificar en ese mes (ya sea de 28, 30 o 31 días). Esta validación ayuda a cumplir con la planificación mínima acordada contractualmente.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Flexibilidad: Indica el porcentaje de flexibilidad que debe tener la restricción para saltar o no según la flexibilidad que se defina.

Esta restricción establece un mínimo de horas que se deben tener planificadas al día.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Mínimo: Indica el mínimo de horas planificadas al día. Mínimo de horas en jornada partida: Indica el número de mínimo de horas planificadas al día de las jornadas partidas.

Por ejemplo, si se tiene la restricción configurada con un mínimo de turno de 6 horas, al añadir un turno de 2 h al cuadrante a un trabajador, salta.
