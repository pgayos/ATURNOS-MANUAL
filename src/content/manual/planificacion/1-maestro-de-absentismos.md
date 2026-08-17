---
schemaVersion: "1.0"
contentId: "planificacion-1-maestro-de-absentismos"
title: "Maestro de absentismos"
description: "Información sobre maestro de absentismos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Maestro de absentismos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "absentismos"
    label: "Absentismos"
  - id: "maestro"
    label: "Maestro"
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
    - "https://manual.aturnos.com/knowledgebase/1-maestro-de-absentismos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-maestro-de-absentismos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre maestro de absentismos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "3d54d4ae72ee06188fae875c846b60f93eebfc835085e9fe4888a296c13e71f9"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre maestro de absentismos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

El maestro de absentismo genera un reporte informando diferentes conceptos e información sobre los absentismos, incluyendo los periodos de absentismos, absentismos de días completos y horas de absentismos. El superusuario puede consultar esta información en una fecha y en los equipos que se seleccionen.

La tabla del maestro de absentismos muestra los siguientes conceptos, por defecto:

Nombre, es el nombre del trabajador.

ID Usuario, es el número identificativo del trabajador, este número es generado por el sistema aTurnos.

Localización, es la localización del turno que tiene asignado el absentismo.

Equipo, es el nombre del equipo.

Fecha Inicio, es la fecha de inicio del periodo de absentismo, del absentismo total o temporal.

Fecha Fin, es la fecha fin del periodo de absentismo, del absentismo total o temporal.

Absentismo, informa si el absentismo planificado pertenece a un periodo de absentismo, aun absentismo total o es un absentismo temporal.

Tipo Absentismo, informa la abreviatura del absentismo planificado.

Recaída, informa las fechas de inicio y fin del periodo al que está vinculado el periodo que muestra en esta línea de la tabla del maestro de absentismo.

Días de absentismos, número total de días que tiene el periodo de absentismos. En los absentismos totales o temporales indicará 1, porque no son considerados periodos.

Días estimados de trabajo durante el absentismo, los días estimados son proporcionales a los días de descanso semanal medio indicado en la configuración del equipo. Por ejemplo, si el valor es 1 día, implica que por cada día de trabajo le corresponde un descanso semanal de 0,14 días, del resultado de dividir 1 día por los 7 días de la semana.

Si el valor fueran 1,5 días, implica que por cada día de trabajo le corresponde un descanso semanal de 0,21 días, del resultado de dividir 1 día por los 7 días de la semana y multiplicarlo por 1,5.

Días de trabajo durante el absentismo, número de días planificados, con turnos u horas, que se encuentran dentro del periodo de absentismos. Los días del periodo de absentismo que no tengan planificación no se incluye.

Días de trabajo durante el absentismo en la fecha consultada, número de días planificados, con turnos u horas, que se encuentran dentro del periodo de absentismos y fecha consultada. Los días del periodo de absentismo que no tengan planificación no se incluye.

Horas de baja estimadas durante el absentismo, las horas de baja estimadas se calculan con las horas al día informadas en el perfil del trabajador y son proporcionales a los días de descanso semanal medio indicado en la configuración del equipo, tal y como se ha indicado en “Días efectivos de trabajo durante la baja”.

Continuando con el ejemplo 1, si el trabajador tiene 8 horas informadas en su perfil, las horas de baja estimadas serán 8 horas x 0,8517 (este valor es el resultado de restar a la unidad la división entre los días de descanso semanal entre los días de la semana (1 menos 0,14) ), el resultado en este caso es de 6,81 En el ejemplo 2, si el trabajador tiene 6 horas informadas en su perfil, las horas de baja estimadas serán 6 horas x 0,7857 (este valor es el resultado de restar a la unidad la división entre los días de descanso semanal entre los días de la semana (1 menos 0,21), el resultado en este caso es de 4,71.

Horas de absentismos planificadas, son las horas computadas que tiene asociado el periodo de absentismo desde su fecha de inicio.

Horas de absentismos, en la fecha consultada, son las horas computadas que tiene asociado el periodo absentismo en la fecha consultada.
