---
schemaVersion: "1.0"
contentId: gestion-de-personal-5-4-configuracion-alertas
title: Configuración Alertas
description: Las alertas disponibles son explicadas en el siguiente enlace (ver Alertas ).
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Configuración Alertas
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: alertas
    label: Alertas
  - id: configuracion
    label: Configuracion
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
    - https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/
ai:
  answerableQuestions:
    - ¿Cómo puedo configuración Alertas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-4-configuracion-alertas/
  contentHash: 07d8a29370e4d8416f4e6a87ee291243179075024930407d52cb35337097583b
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
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

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Configuración](/media/manual/configuracion-e1ee6a5705.webp)

![Configuración](/media/manual/configuracion-4a9148a96b.webp)

![Información de alertas](/media/manual/informacion-de-alertas-1aaed92fd1.webp)

![Reportes de alertas](/media/manual/reportes-de-alertas-24c247f006.webp)

![Reportes de alertas](/media/manual/reportes-de-alertas-183d78740d.webp)

![Reportes de alertas](/media/manual/reportes-de-alertas-0c84f684fa.webp)

![Información de alertas](/media/manual/informacion-de-alertas-469c9e06dc.webp)

![Reportes de alertas](/media/manual/reportes-de-alertas-2860b637ae.webp)
