---
schemaVersion: "1.0"
contentId: planificacion-6-periodos-de-absentismos
title: Periodos de absentismos
description: Se entiende por absentismo (permiso) una ausencia o abandono del puesto de trabajo durante toda la jornada laboral planificada (Absentismo Total), o durante un determinado periodo de tiempo.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Periodos de absentismos
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
  - id: periodos
    label: Periodos
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
    - https://manual.aturnos.com/knowledgebase/6-periodos-de-absentismos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-periodos-de-absentismos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre periodos de absentismos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-periodos-de-absentismos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-periodos-de-absentismos/
  contentHash: 4184591f87f87e0d3142e579a2eb1a61f9bf9e6cf793b7705b50daed04b85828
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre periodos de absentismos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Se entiende por absentismo (permiso) una ausencia o abandono del puesto de trabajo durante toda la jornada laboral planificada (Absentismo Total), o durante un determinado periodo de tiempo en la planificación correspondiente a un día laboral ( Absentismo Temporal).Ejemplos de caso de uso:

Caso de absentismo total: Jesús tienen planificado ambos durante un determinado día un turno “M” (8:00-15:00); Jesús no ha podido ir ese día a trabajar puesto que está de baja por prescripción médica durante 24h., por lo tanto, al faltar durante todo el día que se le ha planificado, es un absentismo total.

Caso de absentismo temporal: María tenía la misma planificación, pero ella ese día únicamente faltó de 8:00-11:00 (es decir, un total de 3h.), ya que tuvo que ir a realizar un examen no oficial, pero de 11:00-15:00 sí que vuelve a trabajar, por lo que al faltar únicamente durante una parte de las horas planificadas en el día en cuestión, se trata de un absentismo temporal.

Un periodo de absentismo está compuesto por absentismo totales. Puede ser de un solo día, o de más de un día. El final del periodo de absentismo puede estar identificado con un día en concreto, o bien extenderse de manera indefinida en el cuadrante el periodo de absentismo en el caso de informar la fecha de fin del periodo.

El administrador puede añadir un periodo de absentismo desde el cuadrante donde está planificado el trabajador o desde el perfil del trabajador en la opción periodos de absentismos. Se mostrará un formulario donde tienes que rellenar los siguientes datos:

- Fecha de inicio: día en el que el trabajador inicia el absentismo correspondiente. Se corresponde con el día de efecto en que dicho trabajador comienzo el absentismo, no con el día en que se procede a informar en aTurnos del mismo.
- Fecha de fin: día en el que el trabajador finaliza el absentismo correspondiente. Al igual que en el caso anterior, se corresponde con el día de finalización en que dicho trabajador finaliza el absentismo.
- Tipo de absentismo: indica, a partir del desplegable, la tipología de absentismo que quieres introducir. Recuerda, que en aTurnos, hay 3 tipologías diferentes de absentismo por defecto, según si descuenta o no horas sobre el mismo, así como si afecta a la nocturnidad o a los festivos planificados en el trabajador. (Aquí puedes visualizar los diferentes tipos de absentismo ).
- Recaída del absentismo: indica si se produce a razón de un absentismo anterior con el mismo motivo o no. Ejemplo: si previamente en otro periodo has creado un absentismo que se denomina Incapacidad Temporal (y dicho trabajador ya ha regresado a su puesto de trabajo); pero si ahora vas a insertarle un absentismo en otro periodo posterior que también es a causa de una Incapacidad Temporal, informar que SÍ es una recaída (insertar NO si la causa del absentismo es diferente a otro que tuvo con anterioridad).
- Días de baja: muestra la totalidad de días que el trabajador está de baja en referencia al tipo de absentismo que se ha añadido. Ejemplo: Jesús ha estado de baja por Incapacidad Temporal entre el día 06/04/2020 hasta el día 12/04/2020, de lunes a domingo (ambos inclusive), por lo tanto, mostrará que ha estado un total de 7 días de baja. Este dato es muy importante, de cara a establecer la remuneración económica que se le abonará a Jesús durante el periodo que tenga establecido de baja.
- Días efectivos de trabajo durante la baja: puedes visualizar la totalidad de días efectivos de trabajo en el que el trabajador no ha estado en su puesto de trabajo en referencia al absentismo que se ha añadido. Ejemplo: tomando de referencia el ejemplo anterior, Jesús estuvo de baja de lunes a domingo (ambos inclusive), es decir, durante un total de 7 días de baja. En la planificación, Jesús tiene aplicados diferentes turnos de lunes a viernes, pero el sábado y domingo no trabaja y los tiene asignados como libres, por lo tanto, el total de días efectivos de trabajo durante la baja son 5, es decir, aquellos días en los que tiene asignados turnos de trabajo.
- Horas de baja: te permitirá comprobar la totalidad de las horas de baja que ha estado el trabajador según los turnos que tenía planificados durante el absentismo. Ejemplo: tomando de nuevo como referencia los ejemplos anteriores, Jesús tenía planificados durante la baja un turno “M” (8:00-15:00) de lunes a viernes y el fin de semana asignado como libre. Por lo tanto, realiza la suma de las horas efectivos de los turnos que tenía planificados durante el absentismo, que son 5 días de la semana x 7h. planificadas en cada día, hacen un montante total de 35h. de baja durante el absentismo notificado según los turnos planificados.

Para borrar un periodo de absentismo desde aTurnos lo puedes hacer desde el perfil del trabajador en la opción periodos de absentismos, con la función borrar. Esta acción quitará el periodo de absentismos y se quedará la planificación actual sin los absentismos.

Para editar un periodo de absentismo desde aTurnos lo puedes hacer desde el perfil del trabajador en la opción periodos de absentismos, con la función editar. Esta acción permite al administrador cambiar el día de inicio o fin del periodo, el tipo de absentismos, identificarlo como recaída o no, así como las horas que se le asociará a la jornada durante el tipo de absentismo.

Cuando se modifique algún campo del formulario de edición es necesario guardar esta acción para conservar los nuevos datos del periodo de absentismo.
