---
schemaVersion: "1.0"
contentId: "gestion-de-personal-migrar-saldos-del-acumulado-del-estado-de-horas"
title: "Migrar saldos del Acumulado del Estado de Horas"
description: "El ‘Estado de horas’ mide en cada día cuánto tiempo por exceso o defecto se ha fichado en el Control Horario."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Migrar saldos del Acumulado del Estado de Horas"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "acumulado"
    label: "Acumulado"
  - id: "estado"
    label: "Estado"
  - id: "horas"
    label: "Horas"
  - id: "migrar"
    label: "Migrar"
  - id: "saldos"
    label: "Saldos"
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
    - "https://manual.aturnos.com/knowledgebase/migrar-saldos-del-acumulado-del-estado-de-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/migrar-saldos-del-acumulado-del-estado-de-horas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo migrar saldos del Acumulado del Estado de Horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "93806daf3d734f033ebfd45ff213c75e92dfeefdd9f01ab30d5a93ec7a045bc5"
  migratedAt: 2026-08-17
---
## Resumen

El ‘Estado de horas’ mide en cada día cuánto tiempo por exceso o defecto se ha fichado en el Control Horario.

## Contenido

Este saldo se va compensando en el ‘Acumulado anual’, pero al final del año sin los estados no han sido ajustados, este acumulado puede tener un balance de exceso de horas trabajadas por el trabajador (horas que le debe la empresa) o un balance por defecto de horas trabajadas (horas que debe el trabajador a la empresa), teniendo la opción de migrar este saldo al año siguiente para compensar ese exceso o defecto de horas.

Para realizar la migración se tiene que informar:

- Equipos, seleccionando los equipos de trabajo en los que se quiere realizar la acción.
- Año origen, desde qué año se quiere migar el saldo.
- Nombre/Email/ID Empleado, en el caso de querer migrar el saldo de un solo trabajador, se puede filtrar indicando alguno de estos datos.

Completado el formulario, la siguiente acción es pulsar sobre ‘Ver migración’ para que se muestren los saldos del año origen.

Para completar el proceso, se tiene que seleccionar el trabajador y pulsar sobre ‘Migrar’.

Y de esta forma, teniendo habilitada en la configuración, la variable ‘Acumulado año anterior’ (según los permisos de rol de usuario que se habiliten para poder verlo), mostrará el saldo migrado.
