---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-1-10-configuracion-de-jornadas
title: Configuración de jornadas
description: Para poder calcular el número de Jornadas, Jornadas Nocturnas, Jornadas Festivas, Jornadas Festivas Especiales, etc. se deben establecer en aTurnos cuatro variables, a través ADMINISTRAR → AJUSTES → Configuración.
contentType: procedure
module: Configuración y cuenta
submodule: General
intent: Configuración de jornadas
audience:
  - role: Planificador
    access: applicable
entities:
  - id: configuracion
    label: Configuracion
  - id: jornadas
    label: Jornadas
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
    - https://manual.aturnos.com/knowledgebase/1-10-jornadas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-10-jornadas/
ai:
  answerableQuestions:
    - ¿Cómo puedo configuración de jornadas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-10-jornadas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-10-jornadas/
  contentHash: 159a10840725f74d5826f90b2d9d107236f4a3bd9efc89d3f1a9dc6753ddf9f3
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Para poder calcular el número de Jornadas, Jornadas Nocturnas, Jornadas Festivas, Jornadas Festivas Especiales, etc. se deben establecer en aTurnos cuatro variables, a través ADMINISTRAR → AJUSTES → Configuración.

## Procedimiento
Los conceptos que recuperan las jornadas son los conceptos tipo 1.4, accede al Manual para consultar los conceptos de cálculo que hacen referencia a jornadas. Conceptos 1.4.

Las variables son:

1.- Un número de horas al día de trabajo efectivo para que se pueda considerar una jornada, es decir, se debe establecer el número de horas a partir de las que se considerará una jornada. Por defecto el valor de este campo es cero

En este ejemplo, las horas para considerar una jornada en un día es 1 hora:

- El 03/07/2022 con turno planificado de 7 horas de duración total, el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora.
- El 05/07/2022 con 7 horas de tipo normal, el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora.
- El 07/07/2022 con 7 horas de tipo extra, el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora, dependiendo del concepto de cálculo seleccionado.
- El 09/07/2022 con 7 horas de tipo complementaria, el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora, dependiendo del concepto de cálculo seleccionado.
- El 11/07/2022 con absentismo no justificado (como una falta de asistencia), no calcula jornadas al ser las horas del turno planificadas menores a 1 hora.
- El 13/07/2022 con absentismo no productivo (como una enfermedad), no calcula jornadas al ser las horas del turno planificadas menores a 1 hora.
- El 15/07/2022 con absentismo productivo (como una hora sindical), el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora.
- El 17/07/2022 con turno planificado de 7 horas de duración total, con un absentismo temporal de 6 horas, el número de jornadas que devuelve es 1, al ser las horas del turno planificadas mayor o igual a 1 hora.
- El 19/07/2022 con turno planificado de 7 horas de duración total, con un absentismo temporal de 6 horas y 1 minuto,, no calcula jornadas al ser las horas del turno planificadas menores a 1 hora.

2.- Un número de horas mínimas para considerar la jornada en ese día, aplica para los turnos de noche que empiezan en un día y terminan en otro. Por defecto el valor de este campo es cero.

En este ejemplo, las horas mínimas para considerar la jornada en ese día es 1 hora y 30 minutos:

- El 01/07/2022 con 1 hora y 29 minutos, el número de jornadas que devuelve es 0. Las horas el día 1 son menores a 1 hora 30 minutos.
- El 02/07/2022 con 8 hora y 31 minutos, el número de jornadas que devuelve es 1. Las horas el día 1 son mayores a 1 hora 30 minutos.
- El 03/07/2022 con 1 hora y 31 minutos, el número de jornadas que devuelve es 1. Las horas el día 1 son mayores a 1 hora 30 minutos.
- El 04/07/2022 devuelve cero jornadas, la jornada computa en el día 03/07/2022.

3.- Se debe indicar el limite de horas para considerar una jornada más, aplica cuando las horas planificadas supera el limite indicado. Por defecto el valor de este campo es 24 horas

En este ejemplo, el límite de horas es de 24 horas

- El 27/07/2022 con un turno de 25 horas (desde las 09:00 hasta las 10:00 del día siguiente), el número de jornadas que devuelve es 2.
- El 29/07/2022 con un turno de 8 horas más horas desde las 15:00 hasta las 08:00 del día siguiente, el número de jornadas que devuelve es 2.
- El 31/07/2022 con un turno de 24 horas (desde las 08:00 hasta las 08:00 del día siguiente), el número de jornadas que devuelve es 1.

4.- Un número de horas para considerar jornada nocturna, es decir, calculará como jornadas nocturnas siempre que las horas planificadas sean superior3es a a las indicadas. Por defecto el valor es cero.

En este ejemplo, se considerará jornada nocturna siempre que se superen los 30 minutos en periodo nocturno

- El 09/07/2022 solo tiene 29 minutos en periodo nocturno (tiene un absentismo no justificado desde las 22:29 a las 08:00), el número de jornadas nocturnas es cero.
- El 11/07/2022 tiene 31 minutos en periodo nocturno (tiene un absentismo no justificado desde las 22:31 a las 08:00), el número de jornadas nocturnas es 1.
- El 13/07/2022 tiene 31 minutos en periodo nocturno (tiene un absentismo no justificado desde las 22:00 a las 07:29), el número de jornadas nocturnas es 1.
- El 15/07/2022 solo tiene 29 minutos en periodo nocturno (tiene un absentismo no justificado desde las 22:00 a las 07:31), el número de jornadas nocturnas es cero.

Los valores se expresan en centesimal no en horas.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.10 Configuración de jornadas.](/media/manual/1-10-configuracion-de-jornadas-547d1a06f0.png)

![1.10 Configuración de jornadas.](/media/manual/1-10-configuracion-de-jornadas-84d10ce463.png)

![1.10 Configuración de jornadas.](/media/manual/1-10-configuracion-de-jornadas-10bad17aee.png)

![1.10 Configuración de jornadas.](/media/manual/1-10-configuracion-de-jornadas-9a47f2decd.png)
