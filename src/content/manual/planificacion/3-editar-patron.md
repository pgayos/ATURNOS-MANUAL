---
schemaVersion: "1.0"
contentId: planificacion-3-editar-patron
title: Editar patrón
description: En aTurnos se pueden crear todos los tipos de patrones de turnos que sean necesarios.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Editar patrón
audience:
  - role: Administrador
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
  - id: patron
    label: Patron
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
    - https://manual.aturnos.com/knowledgebase/3-editar-patron/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-editar-patron/
ai:
  answerableQuestions:
    - ¿Cómo puedo editar patrón?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-editar-patron/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-editar-patron/
  contentHash: 80fdc699e68900be2782d4fa34af72f0145bf1e34357351ea62c92739c317836
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a editar patrón, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
En aTurnos se pueden crear todos los tipos de patrones de turnos que sean necesarios. Para crear un patrón de turno, es imprescindible que se hayan generado previamente los tipos de turno. Estos tipos de turnos son los que utilizarás para definir una secuencia de turnos, la cual que se repite cíclicamente en el momento de ser planificado a los trabajadores.

En aTurnos, los patrones de turnos pueden estar formados por un solo periodo, o por más de un periodo de turnos.

Un periodo del patrón de turnos es una secuencia de tipos de turnos en un número determinado de días, por defecto aTurnos genera periodos de 7 días, simulando una semana, siendo, por ejemplo, el día 1 del patrón el lunes de la semana y los días 6 y 7 del patrón, el sábado y domingo respectivamente. El primer día del patrón puede ser diferente a un lunes, porque se puede configurar según el día de la semana en el que tiene que empezar el patrón.

El periodo de turno puede tener más de 7 días, o menos, para ello se cambiará el número de días del periodo en el campo “escalonado”, cuando se crea o edita el patrón.

Puede existir patrones con un solo periodo, o con más de un periodo. En el caso de tener más de un periodo de turnos, los periodos tienen el mismo número de días. Los periodos se insertan en el cuadrante de los trabajadores, de manera ordenada atendiendo el orden en el que se encuentren posicionado en el patrón de turnos.

Todos los patrones de turnos creados se quedan guardados en un listado de patrones de turnos, en la opción planificador del menú del equipo de aTurnos donde se creo, para acceder a ellos y poder planificar con ellos, editarlos, visualizarlos o borrarlos.

Planificar con patrones de turnos es una acción habitual que puedes realizar en tus equipos de trabajo. Los patrones de turnos ya creados posteriormente podrás editarlos. A continuación te mostramos los pasos para editar un patrón de turnos.

1. Tienes que acceder a Menú- → Planificador- → Patrones de turno.
2. Hacer “clic” en el botón de acción editar “lapicero”.
3. Modificar la información indicada, en el momento de cuando se creo el patrón de turnos en los siguientes campos:

- Descripción: nombre con el que se identifica el turno. Escalonado: número de días que constituye el ciclo del patrón. Es decir, duración en días de los periodos del patrón, cada cuánto tiempo van a rotar los periodos. El escalonado a 7 días es el más común, ya que cuadran los fines de semana cuando rotan los periodos del patrón. Festivos: cuando se planifique con el patrón, se insertará los tipos de turnos en los festivos en el caso que se informe en este campo “aplicar a festivos”, de lo contrario no se aplicará turnos en los días festivos, previamente informados en el cuadrante. Aplicar patrón desde: informa el día de inicio del patrón, por defecto aTurnos lo asocia con un lunes, considerado como el primer día de la semana, aunque hay empresas que el primer día para aplicar el patrón puede ser cualquier día de la semana. Siendo el día de la semana desde cuando se aplicará el patrón.

1. Insertar en cada día de la secuencia del patrón (identificado en aTurnos como día 1, día 2… día 7) el/los tipos de turnos. Se pueden insertar los turnos en las celdas, de esta secuencia, de varias maneras:

- Desde el menú de acciones al hacer clic en una celda/día. En este menú aparece varias opciones como añadir, borrar, modificar turno; copiar, pegar, mover día; asociar una localización al turno, etc. Desde la barra de herramientas, que se encuentra en la parte inferior, haciendo clic sobre los tipos de turnos disponibles, se insertan de una manera ordenada, a su vez la secuencia del patrón va añadiendo nuevas celdas/días con el tipo de turno seleccionado. Desde la barra de herramientas, arrastrando el tipo de turno a la celda/día de la secuencia del patrón que corresponda. En la propia secuencia que va definiendo el patrón, se puede mover turnos de una celda para insertarlos en otra, también con una acción de arrastre del contenido de una celda a otra.

- El día 1 (de la secuencia del patrón, no se refiere al día 1 del mes) será lunes y el día 7 (de la secuencia del patrón) será domingo, porque hemos informado “Lunes” en el campo Aplicar patrón desde y el patrón tiene una secuencia de 7 días.
- Se inserta el tipo de turno M (mañana) en los días del 1 hasta 5 (corresponde de lunes a viernes) y además se inserta un turno tipo T (tarde) en los días 2 y 4 (martes y jueves). Para el día 6 y 7, considerado como sábado y domingo, se insertará L (libres).
- Observando la última columna de la tabla, te muestra la información del total de horas de cada periodo del patrón. En cada fila informa la suma de horas computadas de los diferentes turnos que forman parte de cada periodo del patrón. Se actualiza cuando alguna celda/día cambia de planificación (inserta un turno nuevo, se borra, se cambia un turno por otro con diferente número de horas computadas,…).

Ya modificados los datos del patrón, se guarda en el botón inferior derecho “Guardar”, salvando con éxito la edición del patrón de turnos.

En el momento de editar un patrón de turnos con más de un periodo, dispones de otras herramientas que te permiten hacer las mismas acciones que a la hora de crear un patrón de turnos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3. Editar patrón](/media/manual/3-editar-patron-94745471c7.png)

![3. Editar patrón](/media/manual/3-editar-patron-68d0af11ca.png)

![3. Editar patrón](/media/manual/3-editar-patron-63e133eeff.png)
