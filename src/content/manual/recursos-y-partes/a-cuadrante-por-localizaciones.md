---
schemaVersion: "1.0"
contentId: recursos-y-partes-a-cuadrante-por-localizaciones
title: Cuadrante por localizaciones
description: En aTurnos, el administrador dispone de varias opciones de cuadrante, atendiendo a cómo quiere visualizar la planificación de los turnos del equipo.
contentType: reference
module: Recursos y partes
submodule: Vacaciones y ausencias
subtopic: ""
intent: Cuadrante por localizaciones
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cuadrante
    label: Cuadrante
  - id: localizaciones
    label: Localizaciones
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
    - https://manual.aturnos.com/knowledgebase/2-4-cuadrante-por-localizaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-4-cuadrante-por-localizaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cuadrante por localizaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-4-cuadrante-por-localizaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-4-cuadrante-por-localizaciones/
  contentHash: a238223e7e17ac3eec51f21af202a97a0af599eaa5773e72b294df8e68d34f85
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre cuadrante por localizaciones, con instrucciones y contexto revisables por el equipo de aTurnos.

En aTurnos, el administrador dispone de varias opciones de cuadrante, atendiendo a cómo quiere visualizar la planificación de los turnos del equipo. A continuación, mostraremos una de estas opciones, que denominamos Cuadrante por localizaciones.

Es una nueva visión para el responsable o administrador del equipo que necesita consultar los turnos planificados según las Localizaciones establecidas. En este punto, es importante recordar que una localización en aTurnos es el área, tarea o localización física que tiene asignado por defecto un trabajador o un turno de trabajo. Ejemplo: la localización por defecto del trabajador sea “Hospitalización”, y la localización asignada a un turno de ese trabajador sea “Planta 1” (Ver detalles de Localizaciones).

El cuadrante por localizaciones presenta, a modo de tabla, una primera columna con todas las localizaciones, previamente creadas en el equipo (Ver Localizaciones ), y los turnos con nombre de los trabajadores que lo tienen asignado día a día, según la opción de vista del calendario que se seleccione (día, semana, mes) en la barra superior del cuadrante.

A continuación mostramos las opciones y acciones que se pueden realizar desde esta funcionalidad:

### Barra superior del cuadrante

Fecha: En el caso de querer visualizar el cuadrante desde una fecha concreta, seleccionando la fecha, el cuadrante se mostrará a partir de la fecha indicada.

Período: para indicar de qué forma se quiere visualizar el cuadrante, cuenta con las opciones para ver por Semanas (1, 2,3 ó 4 semanas), un día o el Mes completo.

Detalles: permite definir el nivel de detalle de los datos que se muestran en el cuadrante, con opciones como: empleado, horario, descripción, etc.

Filtro: donde puede filtrar o seleccionar un dato en específico que se pretende buscar de una manera más rápida y sencilla. Para conocer las opciones de filtro consultar en el enlace Filtro del cuadrante. Es de mucha utilidad cuando el administrador necesita ver, por ejemplo, solamente los turnos “M” de todas las localizaciones o de las localizaciones que tenga seleccionadas en el filtro.

- Filtro trabajadores: Permite filtrar por datos asociados a los trabajadores como el nombre, la localización o la experiencia:

- Filtro de turnos: Permite filtrar por datos asociados a los turnos como el tipo de turno que se quiere filtrar, o la franja a la que corresponde:

Cuando filtramos por franja horaria, encontramos en la parte izquierda especificando la franja por la que hemos filtrado y los horarios que conforman la misma.

### Tabla de cobertura

La información que facilita el “Cuadrante por Localizaciones” es de utilidad cuando, por ejemplo, el Administrador necesita garantizar que ciertas localizaciones o tareas están cubiertas y cuentan con la cantidad de trabajadores requeridos. Apoyándose en el desplegable de la “Tabla de cobertura” verá la cantidad de turnos planificados en el cuadrante por localización.

- Buscar trabajador para el turno: cuando la cobertura sea inferior a la demanda requerida y previamente informada, esta opción le permitirá ver los trabajadores que están disponibles para cubrir el turno y así seleccionar uno de ellos para cubrir la necesidad.
- Añadir demanda de turno: en caso de requerir el aumento de la demanda un día puntual.
- Quitar demanda de turno: cuando es necesario disminuir el número de la demanda en un día puntual. En caso de necesitar cubrir menos turnos de los que están informados inicialmente en la curva de demanda.

### Acciones en el cuadrante

Este cuadrante cuenta con un menú de acciones de planificación, de manera que el Administrador pueda hacer los cambios que considere. Para acceder a este menú de acciones se debe hacer clic sobre la celda del día y localización del cuadrante.

Es importante resaltar que todos los cambios o modificaciones que se realicen en el Cuadrante por localizaciones se actualizarán y registrarán automáticamente en el Cuadrante (principal).

- Buscar trabajador para turno: esta opción permite ver los trabajadores que están disponibles para cubrir el turno requerido y así seleccionar uno de ellos para cubrir la necesidad. En caso de no tener trabajadores para cubrir el turno se podrá crear una oferta de turnos (ver detalles en Oferta de turno ).
- Comentarios: esta opción permite insertar a un trabajador un comentario. Por ejemplo: Lo trabaja por el día x.
- Peticiones: esta opción permite realizar peticiones (vacaciones, absentismo…) a ese trabajador colocando en la fecha de inicio la fecha del día que se hace clic.
- Añadir horas: permite agregar horas (Normales, extra o complementarias) al trabajador en la localización correspondiente (ver detalles en Añadir horas ).
- Modificar turno: esta opción permite modificar el turno que se le ha planificado a ese trabajador por otro.
- Absentismos: con esta acción el administrador podrá informar absentismos temporales (ausencia de algunas horas en su jornada) o totales (ausencia de jornada completa) al trabajador que tenga asignado el turno (ver detalles en Absentismos)
- Localización turno: permite cambiar la localización que tiene asignada el turno (de un trabajador) a una nueva. Ej. si el turno del trabajador esta en la localización “Soporte” y quiero modificarlo y que aparezca ahora en la localización de “Oficina” (ver detalles en Localizaciones ).
- Borrar: para eliminar el turno del trabajador que se encuentra en esa localización.
- Copiar: para copiar un turno planificado un día y posteriormente planificarlo (pegar) a otro trabajador el mismo día o al mismo otro día.
- Cortar: Esta opción coge el turno que se ha cortado y cuando se pega se elimina del trabajador que lo tenía inicialmente.

Nuevamente resaltamos que las acciones realizadas en el Cuadrante por localización se registran automáticamente en el Cuadrante (Ver Cuadrante)

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Barra superior del cuadrante](/media/manual/barra-superior-del-cuadrante-9dce01bb11.webp)

![Barra superior del cuadrante](/media/manual/barra-superior-del-cuadrante-be0e373e26.webp)

![a. Cuadrante por localizaciones](/media/manual/a-cuadrante-por-localizaciones-3f92d7386f.webp)

![Barra superior del cuadrante](/media/manual/barra-superior-del-cuadrante-83a654bed8.webp)

![Tabla de cobertura](/media/manual/tabla-de-cobertura-f901e8f1cf.webp)

![Acciones en el cuadrante](/media/manual/acciones-en-el-cuadrante-60fea09830.webp)
