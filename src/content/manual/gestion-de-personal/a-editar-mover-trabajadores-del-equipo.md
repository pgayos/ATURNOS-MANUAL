---
schemaVersion: "1.0"
contentId: gestion-de-personal-a-editar-mover-trabajadores-del-equipo
title: Editar/Mover trabajadores del equipo
description: "Desde el icono del “lapicero” se podrán hacer dos acciones: editar alguna información básica del trabajador en el equipo actual o mover al trabajador a otro equipo (le llamaremos equipo de destino)."
contentType: concept
module: Gestión de personal
submodule: Contratos
intent: Editar/Mover trabajadores del equipo
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: editar
    label: Editar
  - id: equipo
    label: Equipo
  - id: mover
    label: Mover
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/1-1-mover-o-anadir-el-trabajador-a-otro-equipo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-mover-o-anadir-el-trabajador-a-otro-equipo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre editar/Mover trabajadores del equipo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-1-mover-o-anadir-el-trabajador-a-otro-equipo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-mover-o-anadir-el-trabajador-a-otro-equipo/
  contentHash: 8d472c564b4828fa4d0fca68f5c6093c8fcc1e6b789aadc39d50e00476526d7e
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Desde el icono del “lapicero” se podrán hacer dos acciones: editar alguna información básica del trabajador en el equipo actual o mover al trabajador a otro equipo (le llamaremos equipo de destino).

## Qué debes saber
Al hacer clic en el lapicero, el formulario nos mostrará el estado actual en el aTurno (equipo) del trabajador.

Esta información es editable en los siguientes campos:

1. El equipo: equipo del trabajador.
2. El rol de usuario que se le asigna al trabajador en el equipo de destino. Dependiendo del rol de usuario tendrá determinados permisos sobre los diferentes equipos.
3. Planificable: según la configuración de su perfil de trabajador (ver Configuración general planificabilidad ).
4. La categoría del trabajador: puesto del trabajador basado a una clasificación profesional de la empresa. Véase ¿ cómo crear categorías en aTurnos?.
5. El porcentaje de jornada del trabajador, se calculará automáticamente atendiendo a las horas contrato año, ya informadas en el equipo donde irá destinado.
6. La fecha indicará el día en que el trabajador estará activo en el nuevo equipo. La fecha fin (hasta) no es necesaria informarla en el caso de que se desconozca la fecha fin de actividad del trabajador en este equipo.

Por medio del mismo botón de acción del lapicero, podemos mover un trabajador de un equipo a otro. En el formulario se podrá editar la siguiente información:

1. El equipo de destino: equipo donde se añade y activa al trabajador. El rol de usuario que se le asigna al trabajador en el equipo de destino. Dependiendo del rol de usuario tendrá determinados permisos sobre los diferentes equipos. La categoría del trabajador: puesto del trabajador basado a una clasificación profesional de la empresa. Véase ¿ cómo crear categorías en aTurnos?. El porcentaje de jornada del trabajador, se calculará automáticamente atendiendo a las horas contrato año, ya informadas en el equipo donde irá destinado. La fecha indicará el día en que el trabajador estará activo en el nuevo equipo. La fecha fin (hasta) no es necesaria informarla en el caso de que se desconozca la fecha fin de actividad del trabajador en este equipo. La opción borrar del equipo origen, si es marcada se inactiva el trabajador del equipo origen (equipo desde donde se ha accedido al maestro de empleado), si no se marca seguirá activo en el equipo origen y en el equipo destino. En el caso, de que el cuadrante del trabajador esté cerrado, en el periodo que se quiere mover, esta acción no será permitida. Se tendrá que acceder al apartado de nóminas del perfil del trabajador y modificar la fecha de cierre de cuadrante a un día anterior a la fecha de alta del periodo que se quiere borrar del equipo de origen (en este caso, al ser movido a otro equipo destino). Por ejemplo, si se quiere mover a un trabajador a otro equipo en un periodo cuya fecha de alta es el 01/06/2020, la fecha de cierre de cuadrante siempre debe ser anterior, al menos al día 31/05/2020 para que se borre del equipo origen. Crear categoría en equipo destino si no existe, aTurnos crea la misma categoría del trabajador, que tiene en el equipo origen, en el equipo destino. Al trabajador se le asociará la categoría creada en su nuevo equipo. Copiar posición al nuevo equipo: en el caso de que existan posiciones (ver ¿Qué son y cómo usar las posiciones de los trabajadores para gestionar tu equipo? ), el número de posición se copiaría en el equipo de destino. Copiar turnos, horas planificadas y fichajes: esta opción de aTurnos consiste en copiar la planificación (tipos de turnos, horas y absentismos temporales) del trabajador del equipo origen, en el equipo destino, asi como los fichajes del control horario del trabajador. Es importante, antes de realizar esta operación observar si los tipos de turnos y horas están creados en el equipo destino. En el caso de no existir los tipos de turnos en el equipo destino, no se pueden insertar en la planificación del trabajador del equipo destino. Por ello, se debe crear los tipos turnos y horas, antes de copiar los turnos de un equipo a otro. Por último, hay que tener en cuenta que en este caso, los periodos de absentismos no se copian desde esta acción sino que habría que añadir el periodo de absentismo manualmente en el nuevo equipo (ver más). También existe la opción de clonar los datos de turnos, horas, absentismos y patrones al nuevo equipo (ver Clonar datos ).

- Horas contrato/año: informar de la horas anuales del trabajador por contrato en el equipo destino. Vacaciones/año: indicar el número de días de vacaciones en el equipo destino, en caso de ser distinto al mostrado por defecto. Tipo de vacaciones: seleccionar el tipo de vacaciones que se aplicarán al trabajador en el equipo destino. Guardar, haciendo clic en este botón de acción se actualizará aTurnos, en base a la información cumplimentada en los pasos anteriores.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![a. Editar/Mover trabajadores del equipo](/media/manual/a-editar-mover-trabajadores-del-equipo-d3122bcbcb.png)

![a. Editar/Mover trabajadores del equipo](/media/manual/a-editar-mover-trabajadores-del-equipo-44179105aa.png)

![a. Editar/Mover trabajadores del equipo](/media/manual/a-editar-mover-trabajadores-del-equipo-fdd6d7e7a8.png)
