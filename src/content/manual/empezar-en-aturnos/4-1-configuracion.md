---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-4-1-configuracion
title: "Configuración"
description: "Variables configurables del Control Horario: tolerancias, permisos de gestión, turnos de guardia y tipos de fichaje."
contentType: reference
module: "Empezar en aTurnos"
submodule: "Control horario"
intent: "Configuración"
audience:
  - role: Administrador
    access: applicable
entities: []
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
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-1-configuracion/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-1-configuracion/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre configuración?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-1-configuracion/
  redirectFrom:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-1-configuracion/
  contentHash: "918cb8da649fb87e43e004e38a33efdae73f3fec56d318f7ba5c03589ca4c231"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 2
---

## Resumen

Desde la configuración del Módulo de Control Horario, se pueden ajustar variables como:

## Procedimiento

- **Tolerancias**: Indica cuanto tiempo de margen tienen los trabajadores para introducir sus fichajes desde la hora de inicio del turno (también conocido como tiempo de cortesía).

- **Permisos de gestión y visualización**: determina qué perfiles pueden gestionar y ver los marcajes. (para más información sobre estos perfiles haz clic [aquí](https://blog.aturnos.com/2019/07/roles-de-usuario-en-aturnos/))

- **Turnos de guardia**: Tipos de turnos que no se cuentan en el control de presencia.

Para acceder a la configuración, se debe hacer clic en **Control Horario > Configuración**. Para información más detallada sobre como configurar estos campos, consulta este [enlace](https://manual.aturnos.com/m/control-de-presencia/control-de-presencia-administrador/configuracion-control-de-presencia/).

También es posible **crear tipos de fichajes** como descanso o salida comercial, y definir si estos cuentan o no en el total de horas trabajadas. Para más información sobre como configurarlo, haz clic [aquí](https://manual.aturnos.com/m/control-de-presencia/control-de-presencia-administrador/configuracion-control-de-presencia/).
