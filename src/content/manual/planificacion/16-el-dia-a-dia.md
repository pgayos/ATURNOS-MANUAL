---
schemaVersion: "1.0"
contentId: planificacion-16-el-dia-a-dia
title: El día a día
description: Al no poder reservar on-line a más de 15 días, se debe comprobar en el cuadrante si los turnos de trabajo asignados se corresponden con los días de apertura.
contentType: procedure
module: Planificación
submodule: Cuadrante
intent: El día a día
audience:
  - role: Planificador
    access: applicable
entities:
  - id: dia
    label: Dia
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
    - https://manual.aturnos.com/knowledgebase/16-el-dia-a-dia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/16-el-dia-a-dia/
ai:
  answerableQuestions:
    - ¿Cómo puedo el día a día?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/16-el-dia-a-dia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/16-el-dia-a-dia/
  contentHash: 84d368c882ad9e48f7bfd910812a0673efbd293ced3890cbbac121ee2fd51393
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Al no poder reservar on-line a más de 15 días, se debe comprobar en el cuadrante si los turnos de trabajo asignados se corresponden con los días de apertura.

### Tareas a realizar:

### ¿Cómo se comprueba?

El cuadrante se visualiza dentro del menú CUADRANTE, la opción CUADRANTE y donde utilizando el filtro, para cada una de las tareas marcando un cinco (5) para cada una de ellas, si no hay turno, añádelo, para hacerlo marca el día y puesto y utiliza la opción Añadir Turno y selecciona el turno deseado

En el caso de que alguna de las tareas no tengan asociada un puesto con turno de trabajo, los clientes no podrán solicitar cita (no pueden reservar un slot de tiempo al no tener tiempo, no tiene turno asignado).

1. Usuarios dados de alta.
2. Fecha de visualización de los turnos de trabajo.
3. Opciones de visualización del cuadrante: Diario por horas, diario, 1 semana, 2 semanas, 3 semanas, 4 semanas, 1 mes.
4. Opciones de visualización de los turnos: Sólo turnos, con localización y todos los detalles.
5. Filtros por colas.
6. Marque el día libre y puesto a asignar un turno y seleccione la opción AÑADIR UN TURNO.
7. Para BORRAR utilice esa opción.

### ¿Qué debo comprobar?

Días de apertura o de cierre, festivos, etc. En el caso de que se precise que añadir o borrar un turno, marca el día y el puesto y Añade o Borra el Turno (habitualmente TC), en el caso de que el horario de apertura no sea el habitual (10:00 a 22:00), debe crear un turno como se indico en el apartado 6.1.

Si para cada una de las distintas tareas hay puestos con turno de trabajo (TC, AE, etc.) pero que no tenga un Libre (L) asignado.

### Otras cosas importantes

La duración de los slots la puedes modificar en el menú en TAREAS → PROCESOS → COLAS, edítala e indícale un nuevo tiempo.

También aquí, en la opción “Cantidad de tareas pendientes para visualizar en el Timeline (no llamadas en orden)”, puedes indicar que en las pantallas se vean las dos siguientes citas a llamar.

### Cambios de funciones con citas solicitadas

Hay que tener alguna precaución en el caso de que queramos que un puesto que durante el día ha tenido una determinada función lo pasemos a otra.

En estos casos, si le quitamos la función que ha estado desarrollando (le indicamos un 1 en la especialidad que tiene), es posible que clientes con cita solicitada (para la tarea que hemos marcado como 1) no sean llamados, esto ocurriría en el caso de que al puesto al que le hemos quitado la tarea sea el único que tiene el día planificado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
