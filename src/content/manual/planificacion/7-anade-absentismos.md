---
schemaVersion: "1.0"
contentId: planificacion-7-anade-absentismos
title: Añade absentismos
description: Un absentismo es una ausencia del trabajador al no estar ejerciendo sus funciones y deberes de su puesto de trabajo en un horario planificado.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Añade absentismos
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismos
    label: Absentismos
  - id: anade
    label: Anade
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
    - https://manual.aturnos.com/knowledgebase/f-anade-absentismos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/f-anade-absentismos/
ai:
  answerableQuestions:
    - ¿Cómo puedo añade absentismos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/f-anade-absentismos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/f-anade-absentismos/
  contentHash: fc044ba7b20b1a5b914f8de646d7423ac4002143543f2d9f8ca714fb985ba285
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Aprende a añade absentismos, con instrucciones y contexto revisables por el equipo de aTurnos.

Un absentismo es una ausencia del trabajador al no estar ejerciendo sus funciones y deberes de su puesto de trabajo en un horario planificado. Dichos absentismos pueden ser justificados o no, dependiendo de su configuración (ver tipos de absentismo ).

En aTurnos existen varias formas de informar un absentismo según la finalidad:

- Absentismo temporal (afecta a un número de horas).
- Absentismo entre fechas (afecta a más de un día).
- Absentismo total (afecta a un único día).
- Periodo de absentismo (puede afectar a uno o más días).

Para crear los diferentes tipos de absentismo: ir al Médico, Formación, Compensación de horas extra, Compensación de festivos, Baja de maternidad, entre otros permisos o absentismos recogidos en la legislación laboral vigente, hay que acceder a Planificador → Tipos de turno → Crear → Absentismo. (Para más detalles, consulta el manual de tipos de absentismo ).

### Acciones para añadir absentismos desde el cuadrante

Se habla de absentismo temporal como aquella ausencia o permiso de duración determinada con una fecha y hora de inicio y fin. Se suele utilizar para absentismos como por ejemplo una Visita Médica o un permiso por la realización de horas sindicales.

En el caso de que exista un límite máximo de horas de un tipo de absentismo, se puede restringir que se supere esa duración mediante las restricciones asociada a los absentismos.

Ejemplo, hay convenios que permiten 8 horas de visita médica, se podría limitar con la restricción “Máximo de horas de un tipo de absentismo”.

Los absentismos entre fechas en aTurnos se entienden como una secuencia de días con un tipo de absentismo, por ejemplo, “Compensación de festivos trabajados”, que, a diferencia de los ‘ Periodos de absentismo ‘ se pueden eliminar individualmente o con la opción borrar absentismo entre fechas.

A la hora de informar un absentismo entre dos fechas, únicamente se debe de indicar la fecha inicio y fin, así como el tipo de absentismo.

Los absentismos totales cubren todos los turnos u horas planificados en un día.

Para insertar un absentismo total, hay que hacer clic en el turno y en la opción de absentismos, seleccionar el tipo de absentismo del que se trate, por ejemplo: “Consulta Médica”.

Periodo de tiempo planificado en el cuadrante, el cual informa, que el trabajador se encuentra ausente en los días que incluyen este periodo, por un determinado tipo de absentismo, como por ejemplo una baja por maternidad, por incapacidad temporal, permisos de larga duración …

Este periodo tiene una fecha de inicio. La fecha fin se puede informar si ya se conoce, o bien dejar la fecha de fin abierta hasta que se conozca.

Este periodo destaca, en el cuadrante, por sombrear de color azul las celdas de los días del cuadrante que pertenecen al periodo. Estos días puede estar planificados con turnos/horas o no poder estar planificados.

Si se solicita y se acepta una petición de un periodo de absentismo, se refleja en el cuadrante sombreado en azul los días del periodo solicitado. Solo en aquellos días que exista planificación se insertará el tipo de absentismo de la petición, en el turno planificado. En los días que no tiene planificación, no se registra el tipo de absentismo en el cuadrante porque no está asociado a ningún turno u hora, pero queda identificado como periodo de absentismo con el sombreado azul en las celdas de cuadrante.

En el caso, de planificar el cuadrante con turnos/horas a posteriori en los días del periodo de absentismo, si aparecerá el tipo de absentismo de la petición con el turno que se ha planificado en el cuadrante.

A estos periodos de absentismo se puede acceder también desde el perfil del trabajador (ver Editar perfil del trabajador ), editar los datos del trabajador e informar el inicio del periodo, así como el tipo de absentismo (ver Tipos de absentismo ) que se asociará a todo lo planificado en ese periodo de absentismo.

Al hacer clic sobre añadir ‘Nuevo periodo de absentismo’, se mostrará el siguiente modal:

- Fecha de inicio: día, mes y año en el que comienza el periodo.
- Fecha de fin: día, mes y año en el que termina el periodo.
- Tipo de absentismo: ausencia o permiso del trabajador del listado de tipos de absentismo s.
- Recaída del absentismo: en el caso de que al ausencia sea por una enfermedad o incapacidad temporal, se puede indicar que se debe a una misma situación ya producida.

Otra opción para insertar un periodo de absentismo es realizando una petición de periodo de absentismos.

Por último, existe un último dato que informar con varias opciones disponibles a seleccionar en ‘ Añadir horas por cada día de la baja ‘.

En los casos en los cuales el periodo de absentismo tenga una larga duración, se puede configurar un ajuste de absentismo que estime las horas de baja en base a dos opciones y añada esas horas por cada día planificado con un periodo de absentismo. Estas dos opciones son:

- Cada día las horas diarias. Las horas contrato día (ver perfil del trabajador ), se multiplican por la cantidad de días con turno para verlos por este valor y se añaden a su planificación.

- Cada días las horas semanales entre 7. En el otro caso, la media de la semana toma las horas contrato a la semana y lo divide entre 7 y se añaden a la planificación. En el siguiente ejemplo, las horas semanales del trabajador son 48, divididas entre 7, añadirán 6,86, traducido al sistema sexagesimal son 6:51 minutos.

Con esta opción se pueden visualizar los periodos de absentismo sin necesidad de acceder al perfil del trabajador. De esta forma, se puede editar (por ejemplo, introduciendo una fecha de fin de la baja previa a la prevista) o se puede eliminar el periodo de absentismo.

Esta opción permite borrar los absentismos insertados entre dos fechas (no confundir con la opción anterior de “Periodos de absentismo”). Para ello hay que introducir las fechas entre las cuales se desean eliminar los absentismos totales y guardar.

Para quitar un absentismo total, hay que hacer clic encima del turno afectado por el absentismo, se desplegará el menú de opciones. Seleccionando la opción Absentismo, se nos abrirá otro menú donde elegir ‘Quitar absentismo’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
