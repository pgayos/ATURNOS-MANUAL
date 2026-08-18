---
schemaVersion: "1.0"
contentId: planificacion-3-detalle
title: Detalle en aTurnos
description: El trabajador puede tener acceso a sus fichajes para ver gráficamente el estado de sus horas comparando las horas trabajadas presenciales con las horas planificadas.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Detalle en aTurnos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: detalle
    label: Detalle
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
    - https://manual.aturnos.com/knowledgebase/3-detalle/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-detalle/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre detalle en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-detalle/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-detalle/
  contentHash: 7b935f1dbb2edd077c4fcadfd2814c5f6d7107c0604637f4bcf9f4ea0292c5ff
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre detalle en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

El trabajador puede tener acceso a sus fichajes para ver gráficamente el estado de sus horas comparando las horas trabajadas presenciales con las horas planificadas. Las horas realizadas son aquellas que suman la duración total de los tipos de turno aplicados en el cuadrante.

Se divide en dos pestañas para el trabajador, principalmente el listado de fichajes con el detalle diario y un informe de fichajes que puede ser solicitado por la inspección laboral.

### Listado de fichajes

Al igual que se puede ver en ‘ Detalle ‘ se puede visualizar la representación gráfica de las horas computables de los turnos que hay planificados en el cuadrante y las horas que se han registrado en el sistema de control de presencia (ver Interpretación de los gráficos ).

Desde el botón ‘+’ se pueden realizar peticiones de fichajes.

Esta pestaña en Control de Presencia → Detalle por trabajador incluye dos pestañas: Listado de fichajes e Informe. La primera contiene la siguiente información:

- Fecha: día del fichaje.
- Línea del tiempo: periodo de 24 horas donde se indican los turnos planificados, fichajes realizados y ajustes por absentismos y/0 horas de más (para entender mejor la interpretación de los gráficos accede al siguiente enlace).
- Día: horas presenciales dentro lo planificado.
- Horas presenciales: horas contabilizadas desde que se ficha el fichaje de entrada hasta que se realiza el de salida (presumibles al tiempo presencial en el puesto de trabajo).
- Horas trabajadas: dependiendo de los ajustes contarán con el descanso computado o no dentro del tiempo de trabajo.
- Descanso: al igual que la horas trabajadas, aparecerá dependiendo de si el descanso es computable o no, además de si se realiza el fichaje del mismo.
- Horas planificadas: número de horas planificadas en su cuadrante para ese día en concreto.
- Puntualidad: tiempo de menos marcado en la entrada del Control de Presencia con respecto al inicio del turno planificado (dependiendo de las tolerancias ).
- Estado: diferencia entre horas planificadas y presenciales.
- Acumulado: total de horas no ajustadas acumuladas en el periodo de fechas indicado.

### Informe

Por otro lado en la pestaña de Informe se puede ver en formato de listado los fichajes realizados en el periodo de tiempo seleccionado en la parte superior de la pantalla.

Los datos son los siguientes:

- Fecha: día, mes y año.
- Planificado: turno planificado en el día.
- Entradas: cada uno de los fichajes de entrada realizados en el día*
- Salidas: cada uno de los fichajes de salida realizados en el día.*
- Horas de absentismo: horas de menos registradas en el control de presencia con respecto al turno planificado.
- Horas voluntarias: horas que el trabajador hace de más de su turno planificado.
- Estado: diferencia entre las horas planificadas y las presencial que no han sido ajustadas, ni como absentismo, ni como horas añadidas.

*Las entradas y salidas vienen acompañadas de una abreviatura (A, M o P) que indica el origen de dicho fichaje. Siendo A=automático (originado por el fichaje del trabajador), M=Manual (insertado por el administrador de forma manual) y por último P=Petición (fichaje solicitado mediante el proceso de solicitar fichajes ).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
