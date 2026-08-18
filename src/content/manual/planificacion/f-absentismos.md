---
schemaVersion: "1.0"
contentId: planificacion-f-absentismos
title: Absentismos
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Absentismos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismos
    label: Absentismos
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
    - https://manual.aturnos.com/knowledgebase/6-6-absentismos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-6-absentismos/
ai:
  answerableQuestions:
    - ¿Cómo puedo absentismos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-6-absentismos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-6-absentismos/
  contentHash: 35c8194111f9ec83413434922e415dd6ffba27272b01e9ec3793f86ce3a1cf3f
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

Este informe ofrece las estadísticas de los Absentismos, en el que se contabilizan las ausencias y su comparación con los turnos planificados. Todos estos datos se pueden desglosar según el tipo de absentismo, además de diferenciarlo entre productivos y no productivos. Los Tipos de Absentismos se tienen que crear o importar por el administrador del equipo para que se puedan colocar en el cuadrante, o se contabilicen a la hora de realizar los ajustes en el Control de Presencia (ver más).

En los siguientes puntos se expone de forma sencilla las utilidades incluidas en este informe estadístico de los absentismos:

A través de esta pestaña, observarás toda la información sintetizada que compara por cada trabajador las Horas Trabajadas respecto de las Horas Planificadas, indicando el porcentaje de absentismo. Te mostrará una vista sobre el informe, en la cual destacan los siguientes campos:

- Trabajadores: se refiere a cada uno de los trabajadores registrados en el listado del equipo.
- Horas trabajadas: se trata del número de horas trabajadas por cada trabajador en un periodo concreto.
- Horas planificadas: es el número de horas planificadas dentro del cuadrante del equipo para cada trabajador.
- %: comparativa entre las horas que estaban planificadas con respecto a las horas trabajadas, mostrando para ello el porcentaje de horas de absentismo de cada trabajador.

### Absentismos totales

Se trata de la pestaña que sale por defecto en aTurnos al acceder al informe por absentismos. Esta tabla, detalla, por turno y trabajador, cada Tipo de Absentismo que se ha ocasionado. Para ello, alerta en último lugar, el número total de jornadas que se han visto afectadas por los absentismos. En aTurnos se define por absentismos totales aquellos cuya ausencia se produce durante toda la jornada laboral planificada. Podrás visualizar una vista sobre el informe, en la cuál se detallan los siguientes campos:

- Trabajadores: hace referencia a cada uno de los trabajadores registrados en el listado del equipo.
- Turnos: en esta columna se indica el tipo de absentismo dentro de cada turno, y para ello muestra entre paréntesis el número de turnos afectados.
- Horas: Total de horas de los absentismos totales que afecta a los turnos planificados. Se excluyen las horas de absentismos temporales.
- Total: Sumatorio de la totalidad de turnos con absentismos totales de cada trabajador durante un intervalo temporal consultado.

### Gráfico absentismos totales

Existe la opción de visualizar el informe referente a los absentismos totales por medio de un diagrama de barras, donde indica los turnos que están afectados por un absentismo total según cada trabajador. Cada turno está en un color distinto, para resaltar los diferentes tipos de turno en este Gráfico de absentismos totales. Una vez pasas con el cursor sobre el color de las barras, te mostrará el número de jornadas/turnos en los que hay absentismos totales.

La visualización de dicho gráfico se muestra de la siguiente forma:

### Absentismos temporales

En esta pestaña podrás visualizar aquellos absentismos que no afecten a la totalidad de los turnos planificados, sino solo a un tiempo determinado, a lo que llamamos Absentismos Temporales. Estos se definen a la hora de crearse, así como si están justificados o no. En aTurnos se definen como aquellas ausencias dentro de la jornada por un trabajador en un periodo de tiempo inferior a la totalidad de la jornada laboral planificada de un determinado día.

Podrás visualizar una vista sobre el informe, en la cuál se detallan los siguientes campos:

- Trabajadores: son aquellos trabajadores que tienes registrados en el listado de tu equipo.
- Tipo de absentismos: se representa cada tipo de absentismo, indicando por cada trabajador el número de absentismos temporales en un intervalo acotado entre dos fechas.
- Total de absentismo temporal: total de absentismos temporales planificados en el cuadrante.
- Horas absentismos temporales: indica el total de horas que cada trabajador se ha ausentado con los absentismos temporales planificados. Se excluyen las horas afectadas de absentismos totales.
- Justificado productivo: Sumatorio de la totalidad de absentismos temporales planificados tipo justificado productivo planificados. Se excluyen las horas afectadas de absentismos totales.
- Justificado no productivo: Sumatorio de la totalidad de absentismos temporales planificados tipo justificados no productivos en cuanto al plus de festivos y nocturnicidad. Se excluyen las horas afectadas de absentismos totales.
- No justificado: Sumatorio de la totalidad de absentismos temporales planificados tipo no justificado. Se excluyen las horas afectadas de absentismos totales.

### Gráfico absentismos temporales

Existe la opción de visualizar el informe referente a los absentismos temporales por medio de un diagrama de barras. Cada barra indica el número de horas de absentismos temporales por que tiene cada trabajador. La visualización de dicho gráfico se muestra de la siguiente manera:

### Barra superior del informe

Al igual que en anteriores informes, en la parte superior de la tabla, existen varias funciones para filtrar los datos:

- Por fecha: indica una fecha con un Desde y una fecha con un Hasta, seleccionando un espacio de tiempo.
- Por tipo de cuadrante: según las planificaciones realizadas desde el Cuadrante Borrador o un Cuadrante que ya hemos aplicado.
- Por trabajadores y turnos: filtrar estadísticas por el Nombre/Email/ID Empleado, la Experiencia que tienen, las Localizaciones, las Categorías y la Especialidad/Rol.

Si necesitas saber más para filtrar los datos de tabla, puedes ver una de nuestras demostraciones anteriores.

### Ocultar y acciones

A través de hacer clic en Ocultar, podrás eliminar aquellas columnas de la tabla o volverlas a añadir. Al ocultar las columnas en la tabla, ocultaremos esa representación del Gráfico.

1. Puedes hacerlo mediante el botón Acciones
2. Elige entre hacer una Copia de los datos para pegarlos en una Hoja de Excel, o directamente puedes exportarlo a un Libro de Excel, CSV (delimitado por comas), y PDF. También se podrá descargar el gráfico en distintos formatos (PNG, JPGE y SVG) o en PDF.

Puedes seguir la demostración de estas herramientas en puntos anteriores, haciendo clic aquí: Ocultar y exportar.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
