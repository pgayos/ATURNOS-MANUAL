---
schemaVersion: "1.0"
contentId: planificacion-5-planificacion-automatica
title: Planificación Automática
description: Una vez definidas las variables, como lo son curvas de necesidades o demanda y las restricciones, pasamos a planificar de manera automática a través del menú Planificación Automática- → Planificación Automática.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Planificación Automática
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: automatica
    label: Automatica
  - id: planificacion
    label: Planificacion
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
    - https://manual.aturnos.com/knowledgebase/4-ajuste-automatico/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-ajuste-automatico/
ai:
  answerableQuestions:
    - ¿Cómo puedo planificación Automática?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-ajuste-automatico/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-ajuste-automatico/
  contentHash: b03c86267f647d852b405e283446262b7b1a9b423453195e788f9ba7d8a3c819
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Una vez definidas las variables, como lo son curvas de necesidades o demanda y las restricciones, pasamos a planificar de manera automática a través del menú Planificación Automática- → Planificación Automática.

## Procedimiento
Esta función te permite crear una nueva Petición de Planificación que, posteriormente, podrás aplicar al cuadrante. Se muestran 8 pasos a seguir:

1.- Demandas: Indica si quieres cubrir una demanda o varias. Si no hay demanda, pero has creado tareas, puedes asignarlas. Una vez haces clic en añadir demanda debes seleccionar la(s) que quieres incluir y mover su posición según prioridad.

2.- Turnos donde aplicar la demanda:

- Todos: se seleccionas este punto, te incluirá todos los turnos que tienes creados, o puedes indicar que turnos usar para cubrir la demanda haciendo clic en el campo en blanco y seleccionándolo(s).
- Generar turnos: Puedes generar los turnos de forma automática para cubrir la demanda.
- Ajustar únicamente con los turnos de la demanda: Si has creado una demanda con turnos puedes cubrir específicamente estos. Puede ser interesante o que lo proponga el algoritmo
- Permitir múltiples turnos en un día por demanda: si quieres permitir varios turnos en un mismo día.
- Ajustar con turnos sin localización: cuando existen turnos sin localización y tienes que asignarlos dentro de la demanda el algoritmo puede modificar la localización.

3.- Desde/hasta: Indica el periodo donde quieres que te asignemos los turnos de forma automática.

4.- Asignación de compañeros: Indica sobre que trabajadores realizar la planificación. Podrás usar los filtros para seleccionar subgrupos.

5.- Criterio de prioridad: Define como quieres que se seleccionen los trabajadores

- Indica que criterios de horas quiere que haga los trabajadores para ser seleccionados: horas a la semana, al mes o al año.
- Si seleccionas ascendente el sistema irá repartiendo las horas entre todos, si es descendente intentará colocar el máximo de horas a los primeros trabajadores.

6.- Priorizar especialidad del trabajador/Nivel mínimo: Las demandas pueden requerir una especialidad de los empleados. Este punto define si quieres ordenar por el criterio de la especialidad de la demanda, primero serán asignados los que tenga mayor especialidad, estableciendo el valor mínimo de la especialidad que tiene que tener el trabajador para ser seleccionable para cubrir un turno en esa demanda.

7.- Orden de los usuarios con respecto al criterio seleccionado: Define con qué algoritmo quieres lanzar la planificación en el desplegable:

- Priorizar los turnos más grandes: Intenta rellenar primero con los turnos más grandes, nunca supera la demanda. Es interesante si tienes que cubrir perfectamente la demanda.
- Priorizar los picos de la demanda: Busca los picos de demanda e intenta cubrir al máximo estos picos. Es muy útil cuando no hay trabajadores para cubrir toda la demanda, pero se centra en los picos.
- Permitir superar la demanda si es necesario: Supera la demanda y asegura que se va a cubrir completa aunque puedan existir exceso de horas. El algoritmo puede borrar turnos que existan previamente que excedan la demanda para ajustarlo mejor.

8.- Localización:

- En el desplegable: Puedes forzar que los turnos se inserten en alguna de las localizaciones que tienes creadas en tu equipo.
- Borrador: Puedes mandar la planificación al borrador
- Restricciones: Puedes tener en cuenta o no las restricciones del equipo para hacer los cálculos.

Guardar datos: mantendrá la información registrada en los 8 pasos por defecto para cuando vuelvas a ingresar al módulo de Operaciones → Ajuste Turnos.

Calcular: Una vez informados los 8 puntos, haces clic en el botón de Calcular para que se registre la petición y la muestre como una Petición de Planificación.

En este desplegable se muestran las peticiones de planificación o propuestas que se han generado, detallando el estatus de las mismas, ejemplo: Terminado, Visualizado el resultado, o Planificado (cuando se ha aplicado esa propuesta en el cuadrante). Cuando ya se ha calculado la petición aparecerá como “Terminado” (recuadro Nro. 1 del gráfico) y se mostrará un alerta en azul en el menú principal Operaciones (recuadro Nro. 2 del gráfico):

En el punto Nro. 1 tienes las opciones de:

- Cargar: una vez seleccionas la petición, haces clic en el botón Cargar para ver la propuesta de planificación sugerida por el sistema según los parámetros que estableciste.
- Eliminar: permite borrar definitivamente la planificación que ya no utilices.

Al “Cargar” la propuesta se mostrará la planificación que ha calculado el algoritmo, tomando en cuenta las restricciones (tanto individuales del trabajador como las totales o colectivas del equipo), los turnos que propone el algoritmo aparecerán con un fondo morado.

1.- Mover o cambiar el período de un trabajador; puedes cambiar la línea de planificación del trabajador para asignarle otra, haciendo clic en los iconos de las flechas de subir y/o bajar

2.- Mover o cambiar el turno del día de un trabajador por otro. Puedes realizar modificaciones posteriormente sobre la propuesta de planificación para mejorarla o ajustarla mas a lo que deseas, en los turnos con fondo morado, al hacer clic en el que quieres modificar se coloreará en naranja o amarillo y luego hacer clic en el turno con el que deseas cambiarlo. Puedes validar o controlar las coberturas de la demanda en la pestaña de “Tabla Cobertura” que se ubica abajo a la derecha.

3.- Aplicar en Cuadrante: luego de revisar la propuesta generada por el algoritmo y hacer los cambios (en caso de requerirlo) podrás aplicar la propuesta para registrarla directamente en el Cuadrante.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5. Planificación Automática](/media/manual/5-planificacion-automatica-0a04ba4634.png)

![5. Planificación Automática](/media/manual/5-planificacion-automatica-8b3add20c0.webp)

![5. Planificación Automática](/media/manual/5-planificacion-automatica-00a5822b77.webp)
