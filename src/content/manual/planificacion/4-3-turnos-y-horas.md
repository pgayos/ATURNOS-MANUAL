---
schemaVersion: "1.0"
contentId: planificacion-4-3-turnos-y-horas
title: Turnos y Horas
description: Desde este registro, se pueden modificar, editar o borrar turnos y horas insertados previamente en el cuadrante.
contentType: concept
module: Planificación
submodule: Usuarios y perfiles
subtopic: ""
intent: Turnos y Horas
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
  - id: horas
    label: Horas
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/4-3-turnos-y-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-3-turnos-y-horas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre turnos y Horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-3-turnos-y-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-3-turnos-y-horas/
  contentHash: f0651f4c7e73d9cbc1d18c6fc5529ebb31fe9e2567158008dda1d48ca8a0695b
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Desde este registro, se pueden modificar, editar o borrar turnos y horas insertados previamente en el cuadrante.

Esto es muy útil ya que, en muchas ocasiones, los Administradores insertan una gran cantidad de turnos y horas, que prefieren revisar o realizar su tratamiento posteriormente. Pueden obtener información de los turnos y de los diferentes tipos de horas de manera detallada o resumida (Ej. en un período de tiempo, de un trabajador en específico) y hacer algún cambio en caso de requerirlo.

Para acceder más rápido al registro deseado, en la parte superior de la pantalla se puede definir un periodo de tiempo entre fechas que se quiera visualizar y/o hacer uso del filtro para ver solo las características que necesite, como: nombre del trabajador, una localización, un tipo de turno o tipo de hora en específico. Además, se puede exportar dicho listado haciendo clic en el botón de Exportar en la parte superior de la tabla.

Las opciones para utilizar el Filtro y ayudarte a ubicar los datos de turnos y horas en sus respectivos listados, son los siguientes:

- Nombre/E-mail/ID Empleado: con ello podrás ver directamente los horas o turnos de un trabajador en concreto.
- Experiencia: es de utilidad para poder segregar y buscar trabajadores que cuenten con una determinada experiencia. Tiene un rango de puntuación del 0 al 5, siendo 5 el nivel más alto. (L ink manual administrador para definir experiencia).
- Localizaciones: en este caso, seleccionando una de las localizaciones, el sistema te mostrará solamente el listado de turnos u horas (según sea el caso) que estén relacionados a esa localización. (L ink definición y creación de localizaciones).
- Categorías: podrás filtrar según la clasificación del puesto de trabajo que tenga definida la empresa. El listado mostrará solo aquellos trabajadores con turnos u horas asignados que estén dentro de esa categoría. (L ink definición y creación de categorías).
- Especialidad/Rol: este filtro te presenta todas las especialidades que existen en el equipo, puntuando en el rango alguna de ellas podrás ver el listado de turnos u horas de los trabajares que cuenten con esa valoración en la especialidad. (L ink definición y creación de Especialidades).

### Turnos

En esta pantalla se muestra el listado de turnos que tienen asignados los trabajadores en el cuadrante, reflejando nombre del trabajador con detalle de fecha y cantidad de horas que tiene cada turno (duración computada).

Al hacer clic en el botón de expandir se puede dividir el turno (icono de la tijera) transformándolo en horas, indicando: el inicio y fin, el tipo de horas, así como, si se consideran dentro de alguna localización o no, de esta manera la información pasaría a reflejarse en el listado de horas. Con la segunda acción (icono de herramienta) se pueden añadir recursos (es necesario tener activo el Módulo de Recursos).

### Horas

En este apartado podrás ver y modificar de manera resumida y sencilla el listado de trabajadores que han realizado horas (adicionales al turno) y que han sido registradas en el cuadrante, se detalla nombre del trabajador que las realizó, la fecha y cantidad de horas.

Al hacer clic en la acción de expandir, es posible cambiar el tipo de las horas: Normal, extra o complementaria (puedes crear más tipos de horas, te explicamos cómo hacerlo en el siguiente enlace (Crear tipos de hora). De igual forma, puede modificar la cantidad de horas (aumentarlas o reducirlas) en caso de considerar que no estén correctas. Asimismo, tienes la opción de dividir en dos o más los tipos de horas y modificar la descripción.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![4.3 Turnos y Horas](/media/manual/4-3-turnos-y-horas-c61cfcaee4.png)

![Turnos](/media/manual/turnos-316635b969.png)

![Horas](/media/manual/horas-b3a294bbfb.png)
