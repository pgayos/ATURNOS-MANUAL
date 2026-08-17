---
schemaVersion: "1.0"
contentId: "gestion-de-personal-5-4-configuracion-alertas"
title: "Configuración Alertas"
description: "Las alertas disponibles son explicadas en el siguiente enlace (ver Alertas )."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Configuración Alertas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "alertas"
    label: "Alertas"
  - id: "configuracion"
    label: "Configuracion"
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
    - "https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo configuración Alertas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "8a92bab42de3d0a2f86c4f50d97b8ce330edeef3548e968033f13a4c299c317f"
  migratedAt: 2026-08-17
---
## Resumen

Las alertas disponibles son explicadas en el siguiente enlace (ver Alertas ).

Las alertas tienen un doble objetivo:

1. Que el planificador pueda identificar una alerta con un símbolo y poner solución a la “incidencia” en el marcaje.
2. Que los roles de Administración Total y Superusuario puedan ejecutar un listado que devuelve la información del incumplimiento de las alertas, en su caso.

### Listado de alertas

### Configuración

En primer lugar se debe activar el cálculo de alertas.

Activado el cálculo, se pueden seleccionar y añadir todas aquellas alertas que se necesiten.

Para finalizar la configuración, se deben guardar los cambios realizados en el Control de Presencia.

### Información de alertas

Este es el tipo de alerta que se mostraría.

### Reportes de alertas

A través de Control de Presencia → Estadística → Alertas por Trabajador se puede generar un informe entre las fechas que se indiquen con el nombre del trabajador, la alerta definida y el número de veces que se incumple.

También se puede sacar el mismo reporte pero de varios equipos desde RRHH → Control de Presencia → Control Legal → Alertas por Trabajador se puede generar el mismo informe seleccionando los equipos.

El informe estará disponible para ser descargado en RRHH → Peticiones de Reporte con el nombre “Alertas por trabajador”.
