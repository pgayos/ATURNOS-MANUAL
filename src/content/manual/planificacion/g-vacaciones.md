---
schemaVersion: "1.0"
contentId: planificacion-g-vacaciones
title: Vacaciones
description: Desde aquí podrás controlar las vacaciones que utilizan y de las que disponen todos los trabajadores de tu equipo.
contentType: reference
module: Planificación
submodule: Contratos
subtopic: ""
intent: Vacaciones
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: vacaciones
    label: Vacaciones
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
    - https://manual.aturnos.com/knowledgebase/6-7-vacaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-7-vacaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre vacaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-7-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-7-vacaciones/
  contentHash: 033f92833258a3c4dcc89ce5c426314e2ce56c74411b76f4564119e6a2bafdd2
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre vacaciones, con instrucciones y contexto revisables por el equipo de aTurnos.

Desde aquí podrás controlar las vacaciones que utilizan y de las que disponen todos los trabajadores de tu equipo. En este informe, aparece el listado de usuarios del equipo, mostrando las vacaciones disfrutadas, planificadas, las vacaciones anuales fijadas en ajustes según convenio y el saldo o balance respecto a las disfrutadas.

### Estadísticas por defecto de las Vacaciones

En el encabezado de la tabla del informe por Vacaciones, se describen en cada columna las siguientes variables:

- Trabajadores: Son los trabajadores que tienes registrado en tu equipo
- Disfrutadas: Número de días de Vacaciones (V) planificadas que se han hecho efectivas, es decir, se han utilizado en el año consultado. Estas vacaciones son las planificadas en día presente y días anteriores.
- Vacaciones planificadas en el periodo vacacional: Número de días de vacaciones que han sido planificados por el administrador en el cuadrante en el periodo vacacional del año consultado.
- Vacaciones contratos: Muestra el número de días de vacaciones (V) que, según convenio, pertenecen a cada trabajador en el año en curso. Si tiene más de un periodo de contrato en el mismo año, se sumaría los días de vacaciones que le corresponde al trabajador en cada periodo de contrato existente en el curso de dicho año.
- Balance: Muestra el número de días de vacaciones (V) resultado de restar las vacaciones planificadas en el periodo vacacional a las vacaciones contrato. Este dato es muy importante para controlar del número total de días de vacaciones de los que disponen aún ciertos trabajadores de tu equipo.

### Filtros, Ocultar y Acciones

A la hora de filtrar las estadísticas de vacaciones, las opciones para acotar un espacio temporal, se restringen a las vacaciones de cada año. Si contamos con la utilidad de realizarlo por trabajadores y turnos: en función del Nombre/Email/ID Empleado, la Experiencia que tienen, las Localizaciones, las Categorías y la Especialidad.

Si haces clic en Ocultar, se desplegará un menú contextual para eliminar columnas en nuestra Tabla y si volvemos a activarlas, aparecerán visibles.

1. Tienes que hacer clic en Acciones
2. Posteriormente, se desplegará un menú con opción a realizarlo mediante Copia de los datos para pegarlos en una Hoja de Excel, o exportándolo directamente a un Libro de Excel o un CSV (delimitado por comas), y también en PDF.

Puedes seguir la demostración de la herramienta de filtrar en puntos anteriores, y haciendo clic aquí: Ocultar y exportar.

Podrás variar la posición de las columnas, para ver cómo realizarlo, puedes ver la demostración de cambios por columnas.

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Estadísticas por defecto de las Vacaciones](/media/manual/estadisticas-por-defecto-de-las-vacaciones-713d891b59.png)
