---
schemaVersion: "1.0"
contentId: "control-horario-control-horario-app"
title: "Control Horario (APP)"
description: "Información sobre control Horario (APP), con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Control horario"
submodule: "Fichajes"
intent: "Control Horario (APP)"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "app"
    label: "App"
  - id: "control"
    label: "Control"
  - id: "horario"
    label: "Horario"
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
    - "https://manual.aturnos.com/knowledgebase/control-de-presencia/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/control-de-presencia/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre control Horario (APP)?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  contentHash: "1723a3a93642c3003741357b7bfaf767200cf9df6865e6ebf9834a0fda6a3ac8"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre control Horario (APP), con instrucciones y contexto revisables por el equipo de aTurnos.

### 1.1 Cómo fichar

Para fichar desde la app de aTurnos (iOS y Android), acceda a Control Horario → Fichar donde podrá ver el botón correspondiente para realizar el marcaje (ya sea de entrada o de salida). A continuación te mostramos cómo puedes realizar tus fichas de inicio y fin de la jornada laboral por medio de la app:

Dicho proceso se ejecutará desde el apartado de fichar, donde te saldrá el tiempo que ha trabajado en caso haber fichada la entrada anteriormente, o directamente el botón donde hacer clic:

- No estar en la zona delimitada por el administrador, aunque físicamente estés dentro de la “zona”, en muchas ocasiones, el GPS del móvil no estático y se mueve de sitio intentando encontrar la localización correcta. Por ello, te recomendamos que si este problema persiste, lo comentes con tu administrador.
- No tener el GPS activo, o que la APP de aTurnos no tenga permiso de geolocalización (siempre y cuando sea un requisito para fichar en tu equipo).
- No estar conectado a la red (WIFI) registrado en tu equipo, por ejemplo, si estas conectado con los datos del móvil.

### 1.2 Mis fichajes

En este apartado del Control de Presencia, aparecerá la información sobre un día determinado, que seleccionará en la parte superior sobre los marcajes realizados comparándolos con la planificación. Los gráficos de colores representan los siguientes conceptos:

- Periodo verde: representara la franja horaria en la se encuentra planificado, bien con turnos u horas en el cuadrante del equipo.
- Periodo naranja: representa las franjas horarias del tiempo presencial fichado.
- Línea roja: representa el momento en el que se ha insertado una acción de marcaje de entrada y cuando aún no se ha cerrado la salida.
- Periodo negro: representa la franja horaria en la que se ha insertado un absentismo.
- Periodo marrón: representa la franja horaria en la que se han insertado horas de más en la planificación.

Además, también te aparecerá el estado mensual del mes en el que te encuentres, es decir, tanto las horas planificadas como las horas realizadas hasta ese mismo día, así como los tiempos en cuanto a horas complementarias, nocturnidades, absentismos, descansos realizados, etc. También, gracias a esta información existe la posibilidad de c errar el Timecard el último día de cada mes con los datos correspondientes:

### 1.3 Petición de marcajes

Si por error u olvido no se han registrado los marcajes de entrada o salida en el Control Horario, tienes la opción de solicitar a los administradores del equipo la petición de cerrar esos fichajes. Para ello tendrás que hacer clic en “Nueva petición de marcaje” y rellenar los siguientes campos:

- Localización: selecciona la localización donde estabas al haberte olvidado el marcaje.
- Tipo de marcaje: aquí tendrá que seleccionar si se trata de una entrada, salida, descanso, etc.
- Dirección: marcar si se trata de una entrada o una salida.
- Fecha y hora: Indica la fecha y la hora en la cual se te ha olvidado realizar dicho marcaje.
- Comentario: si desea poner algún comentario extra en la solicitud.

Una vez rellenados estos datos, tienes que pulsar en solicitar e inmediatamente esa petición le llegará al Administrador del equipo, el cual tendrá que aceptarla o en caso de que dicha acción sea automática, le aparecerá el fichaje marcado ya.

### 1.4 Peticiones pendientes

En esta sección podrá ver todas las solicitudes de marcajes pendientes que estén pendientes de aprobar por el Administrador de su equipo en caso de no ser automáticas, y podrá verlas de una fecha seleccionada o la lista al completo.

### 1.5 Historial de peticiones de marcajes

Al igual que el caso anterior, aquí podrá visualizar todo el historial de solicitudes de marcajes manuales realizados hasta el momento.

### 1.6 Incidencias

Este apartado nos muestra los errores al realizar los fichajes del Control Horario, ya sea por olvido de alguno de ellos o debido a una mala planificación (absentismo o turnos de vacaciones erróneo). En esta lista de incidencias aparecerán todos aquellos errores de forma ordenada dentro de la fecha seleccionada. Dicha fecha podrá modificarse haciendo clic en ella.

Hay distintos tipos de incidencias:

- Trabajadores sin fichajes con planificación. Son trabajadores que no han realizado ningún fichaje y están planificados en su cuadrante.
- Trabajadores con fichajes sin planificación. Son trabajadores que han realizado fichajes pero no tenían ningún turno planificado en su cuadrante en ese día.
- Trabajadores con fichajes con absentismo. Estos trabajadores han realizado algún fichaje en un día que tenía indicado un absentismo.
- Trabajadores con fichajes con vacaciones. Son trabajadores que han realizado fichajes teniendo planificado un turno (V) de vacaciones.
- Fichajes olvidados sin cerrar. Estos trabajadores no han completado el fichaje de ese día, por lo que el fichaje de entrada o salida, no tiene su par que cierra el fichaje.
- Fichajes coincidentes con el absentismo. Son trabajadores que estando de absentismo planificado en el cuadrante, han realizado algún fichaje en día.

Para ver los detalles o resolverlos en este caso, deslizando hacia la izquierda nos aparece el emoticono de un ojo. Haciendo clic en él, se muestra en pantalla todos los detalles de dicha incidencia, así como la opción de “solicitar el fichaje” y “solicitar modificación” y de esta forma eliminar el error.

Además, más abajo aparecerán todos los detalles relacionados con los tiempos donde nos muestran toda la información sobre:

- Horas complementaria s: se computan de forma separada a las horas normales ya que no forman parte de las horas establecidas por el contrato y solo se pueden utilizar para el personal que tiene un porcentaje de jornada menor al 100%. El límite de horas complementarias que le corresponde a cada trabajador se puede informar en el perfil del mismo. Este límite se informa como un porcentaje respecto a su contrato anual.
- Nocturnidad: periodo planificado en turnos nocturnos.
- Estado: diferencia entre horas de un turno y/o un tipo de hora añadida planificadas en el cuadrante y las horas presenciales registradas entre una entrada y una salida.
- Acumulado: contabiliza la suma (exceso de tiempo) o resta (defecto de tiempo) de tiempo de los estados de todos los marcajes visualizados.
- Horas planificadas: número de horas que tenía el trabajador planificadas con un turno y un tipo de horas añadidas en su cuadrante para ese día en concreto.
- Horas trabajadas: contabilizan las horas planificadas menos cualquier tipo de absentismo, así los descansos si se contabilizan o fichan.
- Absentismos: periodos de menos registrados en el control de presencia con respecto al turno planificado.
- Descanso planificado: hace referencia a cuando turno planificado tiene una duración computada menor, donde X minutos pertenecen al descanso (contabilizar descansos, no se fichan).
- Descanso fichado: también llamado como descanso de control de presencia, hace referencia a cuando el trabajador hace un fichaje de salida a las 11:30 y un marcaje de entrada a las 11:42, donde 12 minutos son de descanso, por ejemplo (contabilizar los descansos, si se fichan).
- Ajustes: si se realiza un exceso o defecto de tiempo presencial, se comprobará un estado positivo o negativo.
