---
schemaVersion: "1.0"
contentId: "planificacion-2-vacaciones"
title: "Vacaciones"
description: "En aTurnos las vacaciones se pueden considerar como tipo absentismo o como tipo de turno. Recomendamos que se creen como tipo de absentismo."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Vacaciones"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "vacaciones"
    label: "Vacaciones"
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
    - "https://manual.aturnos.com/knowledgebase/2-vacaciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-vacaciones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre vacaciones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "b6b6c82bbb8027c1c2f2709be11fcb8a399789de03d8b95515d5fef99c2df132"
  migratedAt: 2026-08-17
---
## Resumen

En aTurnos las vacaciones se pueden considerar como tipo absentismo o como tipo de turno. Recomendamos que se creen como tipo de absentismo.

### Las vacaciones como un tipo de absentismo

Crear las vacaciones como periodo de absentismo incluye una serie de ventajas que no se obtienen creándolas como tipo de turno:

- Se pueden pedir como periodos de absentismo, por lo que quedarían reflejadas en su correspondiente pestaña en el perfil del trabajador.
- Se puede configurar de una manera más detallada, informando si las horas de estas vacaciones se suman o no.

- Se sombrean en amarillo, además de añadir el marco de color amarillo propio de las vacaciones como tipo de turno.

### Las vacaciones como un tipo de turno

Cuando se contrata aTurnos, por defecto las vacaciones aparecen como tipo de turno, el administrador del equipo puede planificar las vacaciones de varias formas: añadiéndolas desde el propio cuadrante, aplicando patrones de vacaciones o por el proceso de p eticiones de vacaciones.

En el Cuadrante se muestra con un color amarillo y la abreviatura “V “.

### ¿Cómo puedo configurar que las Vacaciones sean Naturales o Laborables?

El administrador del equipo desde Administrar → Ajustes puede configurar, a nivel de equipo el tipo de vacaciones (naturales o laborables), el número de días de vacaciones que dispone en el año, si hay redondeo, y hasta definir cuándo se pueden disfrutar las vacaciones pasadas dentro del año anterior (fin del periodo vacacional). También puede personalizar a nivel individual el tipo de vacaciones a un trabajador dentro del perfil del trabajador.

- Tipos de vacaciones: Existen dos opciones “Días naturales” o “Solo días laborables”. Se escoge una opción para determinar los diferentes comportamientos del sistema en el momento de gestionar las vacaciones. Las vacaciones naturales se insertan cuando exista o no planificación en el cuadrante del trabajador, por ejemplo, si se solicita una semana, tenga o no turnos, se van a contar para las vacaciones los 7 días de la semana. En el caso de las vacaciones laborales solo contaría las vacaciones en las peticiones cuando tuviera turno y solo se sustituye por vacaciones los días que tiene turno asignado. Aunque pida una semana de vacaciones, solo contaría a su saldo de vacaciones los días planificados (con turnos). ¿Vacaciones naturales o laborables?
- Vacaciones/año: indica el número de días de vacaciones por defecto que se asociará a todos los trabajadores del equipo cuando se encuentren de alta todo el año. Si no estuviera de alta todo el periodo se calcularía automáticamente según la proporción del período de alta que lleva en el año activo. Posteriormente y de manera individual, se puede modificar en el perfil de cada uno de ellos si fuera necesario. Puedes crear una restricción que te ayude a llevar el control y no sobrepasar la cantidad de días permitidos. (Ver restricción: No superar el saldo vacacional anual del trabajador ).
- Redondeo de vacaciones: se puede decidir entre “Sin redondeo” o “Redondeo entero” en el valor de las vacaciones, para ajustar las vacaciones cuando no sea un número entero. En caso de indicar el redondeo, cuando las vacaciones tienen decimales, el redondeo se comportaría incrementando en una unidad si el primer decimal es igual a 5 ó mayor. Es decir, si se tiene marcado “Redondeo entero” si las vacaciones calculadas son 19,1 se quedarían en 19 y si fueran 19,6 se redondearían a 20.
- Fin periodo vacacional: Indica la fecha fin del periodo en el que un administrador puede planificar las vacaciones de un trabajador o pueden ser solicitadas por el trabajador. Por ejemplo, si en el año 2019 un trabajador dispone de 22 días de vacaciones y tiene como fecha fin del periodo vacacional el 15 de enero 2020, el administrador puede planificar las vacaciones de 2019 desde el 1 de enero de 2019 hasta el 15 de enero de 2020.
