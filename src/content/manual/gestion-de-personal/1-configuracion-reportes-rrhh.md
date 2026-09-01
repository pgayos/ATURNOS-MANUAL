---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-configuracion-reportes-rrhh
title: Configuración Reportes RRHH
description: El superusuario, desde la opción RRHH → ESTADISTICAS → CONFIGURACION REPORTE RRHH se parametriza:.
contentType: reference
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Configuración Reportes RRHH
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: configuracion
    label: Configuracion
  - id: reportes
    label: Reportes
  - id: rrhh
    label: Rrhh
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
    - https://manual.aturnos.com/knowledgebase/8-8-configuracion-reportes-rrhh/
    - https://manual.aturnos.com/knowledgebase/f-configuracion-reportes-rrhh/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-8-configuracion-reportes-rrhh/
    - https://manual.aturnos.com/knowledgebase/f-configuracion-reportes-rrhh/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre configuración Reportes RRHH?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 2
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-8-configuracion-reportes-rrhh/
    - https://manual.aturnos.com/knowledgebase/f-configuracion-reportes-rrhh/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-8-configuracion-reportes-rrhh/
    - https://manual.aturnos.com/knowledgebase/f-configuracion-reportes-rrhh/
  contentHash: 4d88c9bbc5b07b587840dad569cb0990645fb3eb4af1304919d65d2467f6c7fe
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El superusuario, desde la opción RRHH → ESTADISTICAS → CONFIGURACION REPORTE RRHH se parametriza:.

## Opciones y datos disponibles
1.- El formato de salida:

- Excel o csv (en este caso se debe indicar el separador)
- Formato de Horas

2.- Los campos identificativas del trabajador que recuperará el reporte

A nivel de equipos se pueden añadir los siguientes campos identificativos:

-Nombre del equipo, ID aTurno (número único del equipo para el sistema aTurnos) e ID externo del equipo (número único del equipo para la empresa del mismo)

A nivel de trabajadores se pueden añadir los siguientes campos identificativos:

-Nombre del trabajador, ID Usuario (número único del trabajador para el sistema aTurnos), ID Empleado (número único del trabajador para la empresa a la cual pertenece), teléfono, localización en el cuadrante, categoría, perfil, horas por semana, horas por periodos, balance de horas, porcentaje de jornada, horas normales, extraordinarias, complementarias, fecha de alta, de baja, último día planificado,…

Dato personalizado del empleado: en este campo se puede seleccionar uno o varios Datos personalizados para que aparezcan en la plantilla del reporte solicitado. En caso de requerir que aparezcan en el informe varios datos personalizados es necesario registrar en el campo cada uno deparado por “,” y un espacio, ejemplo: Centro de costes, Area

Dependiendo de los campos que se quieran observar en los reportes del superusuario se debe añadir estos campos disponibles desde el botón de acción “añadir” y guardarlos con el botón de acción que “Guardar”.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1. Configuración Reportes RRHH](/media/manual/1-configuracion-reportes-rrhh-a6331a45cf.png)
