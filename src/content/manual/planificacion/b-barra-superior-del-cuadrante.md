---
schemaVersion: "1.0"
contentId: planificacion-b-barra-superior-del-cuadrante
title: Barra superior del cuadrante
description: En la parte superior del cuadrante se encuentra una barra de herramientas desde la que se pueden realizar diferentes acciones.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Barra superior del cuadrante
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: barra
    label: Barra
  - id: cuadrante
    label: Cuadrante
  - id: superior
    label: Superior
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
    - https://manual.aturnos.com/knowledgebase/2-barra-superior-del-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-barra-superior-del-cuadrante/
ai:
  answerableQuestions:
    - ¿Cómo puedo barra superior del cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-barra-superior-del-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-barra-superior-del-cuadrante/
  contentHash: bdcd80c95f46c6b8e57bcc421185eb2a71b062285eaa2c0bfdd2e84f49fb1b9d
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Aprende a barra superior del cuadrante, con instrucciones y contexto revisables por el equipo de aTurnos.

En la parte superior del cuadrante se encuentra una barra de herramientas desde la que se pueden realizar diferentes acciones. Para mejorar la visibilidad del mismo, ésta se puede ocultar y mostrar desde el botón de la flecha (1). En ella podrás marcar y ver los siguientes puntos:

### 1. Ocultar / Mostrar barra

Para ganar mayor visibilidad del cuadrante, al hacer clic en la flecha, se puede ocultar o mostrar la barra superior del cuadrante.

### 2. Leyenda cuadrante

Información sobre la leyenda de colores que aparecen en el cuadrante:

- Bolsas: Los trabajadores con horas de bolsa se muestran en el cuadrante en color rojo. Para ver cómo crear bolsas haz clic en el siguiente enlace (ver Bolsas ). En este caso muestra las horas de bolsa y la localización.

- Extra / Complementarias: Los trabajadores con horas extra / complementarias se muestran en el cuadrante en color marrón. Las horas extras / complementarias se pueden ejecutar en el cuadrante por añadirlas directamente desde” Añadir horas “, o por petición de un trabajador teniendo el administrador que aceptarlas en ‘ Peticiones y cambios ‘ o al añadir horas extra / complementarias al hacer un ajuste en el control de presencia.

- Vacaciones: Los trabajadores con vacaciones aceptadas se muestran en el cuadrante en color amarillo. Las vacaciones podrán ser añadidas en la planificación por el administrador añadiendo un turno “V”, por aplicar un patrón con turnos “V” de vacaciones o porque el administrador acepta una petición de vacaciones del trabajador en ‘ Peticiones y cambios ‘. Tienes más información sobre la gestión de vacaciones en Operativa de vacaciones.

- Absentismo: Los trabajadores con absentismos se muestran en el cuadrante en color negro. Los absentismos también pueden planificarse añadiendo un absentismo en el cuadrante, por petición de un trabajador teniendo el administrador que aceptarlas en ‘ Peticiones y cambios ‘ o al ajustar por defecto de tiempo registrado de la jornada de trabajo respecto al turno planificado, al hacer un ajuste en el control de presencia.

- Propuesta: Se muestra así las solicitudes realizadas que aún no han sido aceptadas por el administrador y que aún están pendientes de su aprobación en ‘ Peticiones y cambios ‘.

- Cambios Pendientes: Se muestran así los cambios pendientes de confirmar. Éstos se solicitan en el cuadrante por los trabajadores en” Hacer cambio” a los compañeros para intercambiar turnos, cambiarlo por un día libre o para que doble turno un compañero, quedando pendiente en ‘ Peticiones y cambios’ hasta que lo apruebe el administrador.

- Cambios confirmados: Se muestran así los cambios confirmados. Se aplica este color verde a los turnos, una vez han sido confirmados por los compañeros y administradores (dependiendo del flujo de aprobación de cambios ) en” Peticiones y cambios “.

### 3. Fecha del cuadrante

En el caso de querer visualizar el cuadrante desde una fecha concreta, seleccionando la fecha, el cuadrante se mostrar a partir de la fecha indicada.

### 4. Visualización del cuadrante

Indicaremos de qué forma se quiere visualizar el cuadrante:

En esta función se indicará la opción de los detalles que se quieren visualizar en los turnos del cuadrante:

- Foto perfil: Muestra o no la foto de perfil.
- Empleado: Muestra el nombre del trabajador.
- Más datos de empleado: Muestra información adicional de los trabajadores configurada en Administrar → Ajustes → Visualización en el cuadrante.
- Turnos: Muestra la abreviatura del turno.
- Horario: Muestra el rango horario de los turnos.
- Localización: Muestra la localización de los turnos.
- Duración: Muestra la duración total del turno.
- Duración computada: Muestra la duración computada del turno.
- Comentario: Muestra los comentarios en el cuadrante.
- Recursos: muestra si hay o no recursos asociados en el cuadrante.

Haciendo clic en el icono del filtro, se puede buscar por detalles de los trabajadores (nombre, localización, categoría, etc.) o por turnos (sin datos de planificación, con datos de planificación, tipos de turnos y tipos de horas). Podemos guardar los elementos filtrados para no perderlos al navegar en otras ventanas, para ello se debe hacer clic en “Guardar filtros”, para seguir filtrando por los mismos datos.

En caso de que no necesite filtrar por los datos guardados, se tiene que seleccionar la opción “Quitar filtros”.

Es importante destacar que para filtrar por “Datos personalizados” sebe seleccionar primero el Nombre del dato personalizado que se requiere y luego informar en la casilla de “Valor” el dato a buscar. Ej. Si un dato personalizado es la Licencia para Conducir debo colocar en el campo de valor el número de Licencia que necesita buscar.

Este filtro en el cuadrante sirve para filtrar por la localización por defecto (indicada en el perfil) del trabajador. Funciona de la siguiente forma:

1. Si filtramos por una localización en Localización por defecto, nos muestra los trabajadores que tienen esa localización por defecto con toda su planificación (aunque su planificación no esté en la localización filtrada)

2. Si filtramos tanto en la Localización por defecto y en Localizaciones por la misma localización, el resultado es: muestra la planificación en dicha localización de los trabajadores con dicha localización por defecto.

3. Si se filtra por la Localización por defecto una localización y en Localizaciones otra, el resultado es que se mostrarán los eventos planificados en la localización de “Localizaciones” de los trabajadores que tienen como “Localización por defecto” la localización filtrada.

Se puede exportar para su distribución / impresión en formato Excel, PDF A4 o A3.

También se puede exportar el cuadrante para crear un patrón, está opción está disponible si el periodo que se visualiza es múltiplo de 7 (1, 2,3 o 4 semanas) utilizando la opción Exportar a patrón.

Desde este botón se puede activar la función de aplicar patrón a los trabajadores que desee (ver Manual de Aplicar Patrón).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
