---
schemaVersion: "1.0"
contentId: "planificacion-1-1-filtros-de-fichajes"
title: "Filtros de fichajes"
description: "En la barra superior podemos filtrar los fichajes que se quieren visualizar por:."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Filtros de fichajes"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "fichajes"
    label: "Fichajes"
  - id: "filtros"
    label: "Filtros"
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
    - "https://manual.aturnos.com/knowledgebase/1-1-barra-de-filtros-de-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-1-barra-de-filtros-de-fichajes/"
ai:
  answerableQuestions:
    - "¿Cómo puedo filtros de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "06c0a669b0699f3262a79affc5cd05b72281b98aba8761850d622b2d2671a1a8"
  migratedAt: 2026-08-17
---
## Resumen

En la barra superior podemos filtrar los fichajes que se quieren visualizar por:.

## Contenido

- Fechas: se muestran los fichajes de un día.
- Fichajes según la acción que se ha realizado.
- Horas: se muestran los fichajes desde una hora inicio a una hora fin.
- Filtro que permite seleccionar a los trabajadores de una localización.

Los fichajes se pueden filtrar por numerosas acciones, como fichajes sin cerrar, en un día donde no estaba el trabajador planificado, si se solapan con absentismo programado, entre otras.

Los filtros que se muestran a continuación, son los que aparecen por defecto:

- Todos los fichajes
- Solo sin ajustar
- Solo ajustados
- Puntualidad
- Fichajes automáticos
- Fichajes manuales
- Estado negativo
- Estado positivo

Para mostrar el resto de la lista que de explica más adelante, se debe de configurar en las “Alertas”.

Este filtro puede mostrar:

Aparecen todos los trabajadores con o sin planificación de turnos u horas que hayan realizado algún fichaje.

Indica los trabajadores que no han tenido un ajuste del estado por parte del administrador o de forma automática. Estos son los fichajes que tienen exceso o defecto de tiempo respecto al turno u horas planificadas.

Se visualizan a los trabajadores que se les ha ajustado el estado (ver Ajustar fichajes ).

Indica los trabajadores que han registrado el fichaje de entrada más tarde de la hora inicio del turno u horas que tiene planificados. Por ejemplo: un trabajador que tenía un turno de inicio a las 22:00 horas y ha fichado a las 22:10. Estos casos se pueden supervisar de forma más específica en ‘Detalle’. De igual forma se mostrarán los trabajadores que no hayan realizado ningún fichaje.

Se muestran los fichajes realizados por los trabajadores a través de los distintos sistemas de control de presencia sin ninguna acción manual de administradores.

Aparecen los trabajadores que tienen fichajes que han sido añadidos o editados en algún momento por algún administrador desde las acciones de ‘Añadir fichajes’, des ‘Insertar fichajes’.

Se visualizan los trabajadores cuyas horas planificadas son mayores que las horas presenciales. Interpretado como saldo o estado negativo.

Muestra los trabajadores cuyas horas planificadas son menores que las horas presenciales. Interpretado como saldo o estado positivo.

Aparecen filtrados los fichajes que se hayan realizado por cualquier trabajador que tuviera un absentismo total planificado en el mismo día.

Cuando hay planificado un turno sin horas en el cuadrante, si el trabajador que lo tiene en su cuadrante ha fichado ese día, aparecerá filtrado el fichaje.

Se muestran los fichajes realizados por los trabajadores en un día que tienen planificado en el cuadrante con un turno “V” de vacaciones.

Aparecen todos aquellos trabajadores que han fichado cuando por su planificación no deberían haber fichado porque:

- Tienen vacaciones planificadas.
- No tienen un turno planificado.
- Tienen un absentismo planificado en ese día.

Si existe un descanso a nivel del turno, un descanso a nivel del trabajador o un descanso a nivel de equipo, en caso de que el trabajador haya realizado el fichaje y en la configuración se descansos se indique que se deben fichar los descansos, se mostrarán aquellos trabajadores que no han fichado el descanso.

Cuando exista un descanso a nivel del turno, un descanso a nivel del trabajador o un descanso a nivel de equipo, si los descansos están configurados que se fichan, se mostrarán todos los descansos que se hayan fichado que sean superiores a 1:30, es decir, hora y media.

Esto se puede ver que se cumple, si se consulta el ‘Detalle por trabajador’, donde aparece en la columna ‘Descanso’ más de 1 hora y 30 minutos.

Se mostrarán todos aquellos trabajadores que hayan fichado un descanso menor del 50% del descanso que tiene planificado a nivel del turno, a nivel del trabajador o a nivel de equipo.

Por ejemplo, si un trabajador tiene configurado un descanso de 30 minutos y el trabajador ficha un descanso de 14 minutos, aparecerá filtrado.

Esto se puede ver que se cumple, si se consulta el ‘Detalle por trabajador’, donde aparece en la columna ‘Descanso’ menos de 15 minutos.

Para que un fichaje se considere cerrado, debe tener un fichaje de entrada y otro de salida. En ocasiones, ya sea por olvido o un fallo técnico, es posible que el fichaje de entrada o salida no haya sido realizado. Este filtro, muestra todos aquellos fichajes que no se han cerrado, los cuales deben actualizarse para computar el tiempo presencial trabajado de los empleados.

El Control de Presencia de aTurnos dispone de una configuración para que los descansos se fichen, pero por la cual si los descansos no se fichan, se descuenten automáticamente. Este descanso descontado automáticamente, puede ser anulado por el trabajador.

Todos aquellos descansos descontados automáticamente que hayan sido anulados por los trabajadores, se mostrarán con este filtro.

Aparecen los fichajes cerrados que no coinciden con los turnos y horas planificadas a los trabajadores en ese día.

Se mostrarán los trabajadores que teniendo planificadas un tipo de horas extra o complementaria, no se ha realizado ningún fichaje de entrada o salida.

En los casos donde existan dos trabajadores que tengan un cambio sin confirmar en un día, además de mostrarse la alerta.

Se podrán filtrar todos aquellos afectados por un cambio, hayan fichado o no en el Control de Presencia.

Un trabajador puede tener tres días seguidos planificados en el cuadrante.

En el caso de que ese trabajador no haya fichado en ninguno de esos tres días, se mostrará una alerta.

Todos aquellos trabajadores que cumplan estos requisitos, aparecerán filtrados.

Son los trabajadores que en el momento de hacer la consulta están en tiempo de trabajo y han fichado.

Se muestran los trabajadores que en el momento de hacer la consulta, no están en tiempo de trabajo, tienen informado un absentismo en el cuadrante (ver añadir absentismo en el cuadrante ) o no han fichado.
