---
schemaVersion: "1.0"
contentId: planificacion-1-aplicar-patron
title: Aplicar patrón
description: Una vez creado un patrón de turnos, se puede aplicar al cuadrante asignándolo al trabajador correspondiente en el periodo de tiempo que se desee. También se puede aplicar al cuadrante borrador.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Aplicar patrón
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: aplicar
    label: Aplicar
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
    - https://manual.aturnos.com/knowledgebase/1-aplicar-patron/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-aplicar-patron/
ai:
  answerableQuestions:
    - ¿Cómo puedo aplicar patrón?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-aplicar-patron/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-aplicar-patron/
  contentHash: fbf92a8df6a2edfe6df54ee0a6f7fcf69c13a5622397ae9e60918abb90407fc9
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Una vez creado un patrón de turnos, se puede aplicar al cuadrante asignándolo al trabajador correspondiente en el periodo de tiempo que se desee. También se puede aplicar al cuadrante borrador.

Planificar con patrones de turnos facilita la labor a la hora de insertar los turnos en el cuadrante de uno o varios trabajadores entre dos fechas. Simplifica la planificación al insertar de forma cíclica la secuencia de los tipos de turnos que constituye cada patrón de turnos.

Aplicar un patrón de turnos, requiere completar 10 sencillos pasos.

Se recomienda seguir el orden del asistente:

Esta opción, permite seleccionar el patrón a insertar en el cuadrante a uno o varios trabajadores.

Se pueden visualizar los periodos del patrón con la opción que ofrece el icono “vista”.

Se indica el periodo de inicio y fin del patrón a aplicar. Por ejemplo, si solo se quiere planificar el primer trimestre del año, se indicaría desde el 01/01/2023, hasta 31/03/2023.

Se eligen los trabajadores que deben realizar el patrón seleccionado Al hacer clic en ‘Seleccionar’, se despliega un listado con el nombre de todos los trabajadores disponibles. Haciendo clic sobre sus nombres, se pueden seleccionar a uno o a varios trabajadores.

Si el listado es amplio, se puede utilizar el filtro, para buscar a los trabajadores de una localización, especialidad o categoría.

Si se quiere quitar a un trabajador, se puede deshacer al último añadido.

Se informa el día de la semana que se va a considerar como primer día del patrón de turnos.

Por defecto, es el lunes, pero se puede cambiar por cualquier día de la semana. También puede ser un día indefinido, en el caso de que se quiera aplicar el patrón desde el día que se indica en el paso 2.

Es el lunes, porque la cobertura de lo fines de semanas suele ser diferente al resto de días de la semana (de lunes a viernes). Al considerar el lunes como el día en el que va a comenzar el patrón, en patrones con periodos de 7 días, se garantiza que la planificación que se va aplicar es correcta de lunes a domingo. Teniendo además la siguiente opciones:

Al aplicar un patrón con varios periodos, al inicio de cada mes, la secuencia de turnos se iniciará desde el primer periodo aplicado en el día que corresponda según el patrón, no continuando el periodo correspondiente. Por ejemplo, en el siguiente patrón el primer periodo tiene:

- Día 1: Lunes -N-;
- Día 2: Martes -L-;
- Día 3: Miércoles -T1-;
- Día 4: Jueves -L-;
- Día 5: Viernes -T1-;
- Día 6: Sábado -L-;
- Día 7: Domingo -T1-.

Si tomamos como ejemplo aplicar el patrón desde el 01/03/2023 al 30/04/2023, el día 01/03/2023 se corresponde con un miércoles, es decir, el día 3 del patrón que tiene un turno “T1”.

La secuencia de turnos volverá a iniciarse en el primer periodo, el 01/04/2023 se corresponde con el día 6, sábado, que no tiene turno, y por tanto es libre.

Se aplica el patrón de turnos desde el primer periodo y del día/celda del patrón de turnos que coincida con el día 1 del mes en la primera semana. En la segunda semana del mes, se recupera los turnos y localización de las celdas/días del primer periodo que no se aplicaron en la primera semana del mes, ocurriendo cuando el día 1 del mes no coincida con un lunes.

Cuando el patrón está constituido por más de un periodo, estos periodos se escalonan con “x” días cuando se selecciona a los trabajadores. Esto quiere decir que cada trabajador empezará con un periodo diferente del patrón. Por defecto, para una correcta planificación y se cumpla la cobertura, el valor de los días escalonados debe ser el número de días que tiene un periodo (Ejemplos casos prácticos ).

En patrones de un solo periodo, todos los trabajadores comenzarán por el único periodo del patrón y la planificación será idéntica si no se cambia el valor que se informa por defecto (Ejemplo caso práctico).

Determina a qué localización se va a insertar el patrón:

- Localización por defecto del trabajador, aplica el patrón con la localización que tiene el trabajador en su perfil.

- Opción de aplicar el patrón “Sin localización “.

- Con una localización diferente a la localización por defecto del trabajador.

En el caso de ser un patrón de turnos con localizaciones, se aplicará la localización que tenga asignada el turno en el patrón.

Escoge la opción de que:

- El patrón se aplique en festivos (inserta turno en el día festivo).

- Se aplique en vacaciones (inserta turno en día planificado de vacaciones).

Un patrón puede tener varios periodos para varios trabajadores.

Por ejemplo, si quieres que un trabajador empiece su planificación a partir del periodo 2 de un patrón de 8 periodos, indicaremos el periodo 2 en este paso.

Cuando se informa en ‘ E scalonado’ (Paso 5) con valor 0, en este campo aparecen los índices numerados (días/celdas del patrón de turnos).

Esto permite empezar a aplicar el patrón a partir de un determinado día/celda del patrón, seleccionando el índice que corresponde con dicho día/celda. Ejemplo de escalonado con valor 0.

Permite escoger si se quiere:

- Insertar el patrón en los absentismos totales.

- No insertar sobre los absentismos totales.

- Buscar el primer día sin absentismos.

Al aplicar un patrón sobre un patrón anterior aparecen cinco opciones:

- Borrar: elimina toda la planificación del cuadrante en los trabajadores seleccionados, entre las fechas indicadas en el punto 2.

- Borrar solo cuando se inserte un turno: elimina el turno planificado en el cuadrante donde coincida un turno al insertar del nuevo patrón, el resto de la planificación la mantendrá.

- Borrar, pero no aplicar en turnos sin horas: eliminará todos los turnos planificados en el cuadrante de los trabajadores seleccionados, excepto aquellos turnos que no tienen horas computadas, por ejemplo un saliente de noche) entre las fechas indicadas en el punto 2.

- Mantener e insertar en libres: solo inserta turnos en los días libres y mantiene la planificación anterior.

- Mantener: mantiene todos los turnos previamente planificados e inserta los turnos del patrón que se está aplicando.

### Comprobar restricciones

Esta acción permite verificar que el patrón que se va a aplicar a los trabajadores cumple con las Restricciones configuradas.

En la parte inferior donde se muestra la proposición del asistente de aplicar patrón, aparece el botón ‘ Comprobar restricciones’.

El sistema mostrará en la pantalla qué restricciones se están incumpliendo.

En caso contrario, se nos mostrará que se cumplen todas las restricciones.

### Insertar patrón

Completados todos los pasos, analizada la propuesta de planificación (turnos en morado) y verificado que se cumplen las restricciones, para terminar de aplicar el patrón se debe hacer clic sobre ‘ Insertar patrón’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
