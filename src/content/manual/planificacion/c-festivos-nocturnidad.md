---
schemaVersion: "1.0"
contentId: "planificacion-c-festivos-nocturnidad"
title: "Festivos & Nocturnidad"
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: "Planificación"
submodule: "General"
intent: "Festivos & Nocturnidad"
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
  - id: "festivos"
    label: "Festivos"
  - id: "nocturnidad"
    label: "Nocturnidad"
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
    - "https://manual.aturnos.com/knowledgebase/6-3-festivos-nocturnidad/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-3-festivos-nocturnidad/"
ai:
  answerableQuestions:
    - "¿Cómo puedo festivos & Nocturnidad?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "2218f38a1164a7245dffbc087c4b53e22e366afced4d3328f013301dbb5ca252"
  migratedAt: 2026-08-17
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

Las estadísticas de festivos y nocturnidad vienen condicionadas por la configuración de lo que queremos considerar como festivos y como nocturnidad en Administrar → Ajustes → Datos de convenio. Es decir, los festivos pueden ser sábados y domingos también, o solo los festivos indicados; y la nocturnidad se puede configurar entre dos horas, es decir, entre por ejemplo las 22:00 y las 06:00.

En las estadísticas de festivos y nocturnidad encontramos tres pestañas:

### Tabla

Se compone de las siguientes columnas:

- Trabajadores: nombre del trabajador, al quién le corresponde los datos de las diferentes columnas.
- Horas: total de horas planificadas que no se encuentra en el horario de nocturnidad y en días no festivos. También incluye las horas de absentismos justificados.
- Horas Nocturnas: total de horas planificadas que se encuentran en el horario de nocturnidad. Se incluyen las horas festivas nocturnas y las horas festivas nocturnas especiales. No se incluye las horas nocturnas asociadas con absentismos no justificado, ni con absentismos justificados en la que el plus de noche no es productivo (Ver tipos de absentismo)
- Horas Festivas: total de horas planificadas que se encuentran en el horario de un día festivo del cuadrante. Se incluyen las horas festivas nocturnas y horas festivas especiales. No se incluye las horas festivas asociadas con absentismos no justificado, ni con absentismos justificados en la que el plus de festivo no es productivo (Ver tipos de absentismo).
- Horas Festivas Nocturnas: total de horas planificadas que se encuentran en el horario de un día festivo y en horario de nocturnidad. Se incluyen las horas de los festivos configurados como especiales. No se incluye las horas festivas no nocturnas, ni las horas festivas asociadas con absentismos no justificado o con absentismos justificados en la que el plus de festivo no es productivo (Ver tipos de absentismo)
- Horas Festivas Especiales: Suma de horas planificadas que se encuentran en el horario de un día festivo especial del cuadrante (Ver como dar de alta un festivo en el cuadrante) Se incluyen las horas festivas nocturnas especiales. No se incluye las horas festivas asociadas con absentismos no justificado o con absentismos justificados en la que el plus de festivo no es productivo (Ver tipos de absentismo)
- Horas Festivas Nocturnas Especiales: Suma de horas planificadas que se encuentran en el horario de un día festivo especial del cuadrante (Ver como dar de alta un festivo en el cuadrante) y en horario de nocturnidad. No se incluyen las horas festivas nocturnas (no especial), ni las horas festivas asociadas con absentismos no justificado o con absentismos justificados en la que el plus de festivo no es productivo (Ver tipos de absentismo).
- Festivos con → 0 horas: Total de horas añadidas (normales, complementarias y extraordinarias, superior a una 1 hora cuando es añadida en cuadrante) que se encuentra en un día festivo en el periodo de fecha seleccionado.
- Festivos especiales con → 0 horas: Total de horas añadidas (normales, complementarias y extraordinarias, superior a una 1 hora cuando es añadida en cuadrante) que se encuentra en un día festivo especial en el periodo de fecha seleccionado. (Ver como dar de alta un festivo en el cuadrante)
- Total: Suma total de las horas y turnos planificados, en el periodo seleccionado entre fechas. Independientemente que sean festivas y/o nocturnas. Se excluye los absentismos no justificado.

### Jornadas

En la tabla de Jornadas encontraremos las siguientes variables

- Trabajadores: nombre del trabajador, al quién le corresponde los datos de las diferentes columnas.
- Jornadas: número de jornadas totales por trabajador en un tiempo acotado en los filtros de fechas.
- Jornadas nocturnas: número de jornadas en turno de noche de cada persona en un intervalo temporal establecido.
- Jornadas festivas: número de jornadas planificadas en días declarados festivos, indicando el valor por cada trabajador entre dos fechas indicadas.

### Gráfico

Las estadísticas de Festivos y Nocturnidad, se nos representan según los filtros que apliquemos, en un Gráfico circular. Observaremos la cantidad que cada tipo de hora planificada representa dentro del total, los cuales están diferenciados por colores según el tipo de hora. Ya sea normal, festiva, nocturna o haya sido especial, tanto nocturna como festiva.
