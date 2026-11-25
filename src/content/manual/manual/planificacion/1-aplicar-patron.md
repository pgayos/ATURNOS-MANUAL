---
schemaVersion: "1.0"
contentId: planificacion-1-aplicar-patron
title: Aplicar patrón
description: Una vez creado un patrón de turnos, se puede aplicar al cuadrante asignándolo al trabajador correspondiente en el periodo de tiempo que se desee. También se puede aplicar al cuadrante borrador.
contentType: procedure
module: "Planificación"
submodule: "Tipos de turnos, tipos de horas y Patrones"
subtopic: ""
intent: Aplicar patrón
audience:
  - role: Administrador
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
  contentHash: 057720f01cd23369c38ca5f7d7a279df10ce8672e5864a96e45ecd93cbcaa195
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Una vez creado un patrón de turnos, se puede aplicar al cuadrante asignándolo al trabajador correspondiente en el periodo de tiempo que se desee. También se puede aplicar al cuadrante borrador.

![Asistente para aplicar un patrón de turnos](/media/manual/1-aplicar-patron-256682e0f9.webp)

Planificar con patrones de turnos facilita la labor a la hora de insertar los turnos en el cuadrante de uno o varios trabajadores entre dos fechas. Simplifica la planificación al insertar de forma cíclica la secuencia de los tipos de turnos que constituye cada patrón de turnos.

## Pasos para aplicar un patrón

Aplicar un patrón de turnos, requiere completar 10 sencillos pasos.

Se recomienda seguir el orden del asistente:

![Pasos del asistente para aplicar un patrón](/media/manual/aplicar-patron-53a2d2d705.webp)

### 1. Elegir un patrón

Esta opción, permite seleccionar el patrón a insertar en el cuadrante a uno o varios trabajadores.

![Paso 1: elegir el patrón](/media/manual/aplicar-patron-885e04fde5.webp)

Se pueden visualizar los periodos del patrón con la opción que ofrece el icono “vista”.

![Icono «vista» para ver los periodos del patrón](/media/manual/aplicar-patron-6143114185.webp)

![Vista de los periodos del patrón](/media/manual/aplicar-patron-da00f4c810.webp)

### 2. Desde/hasta

Se indica el periodo de inicio y fin del patrón a aplicar. Por ejemplo, si solo se quiere planificar el primer trimestre del año, se indicaría desde el 01/01/2023, hasta 31/03/2023.

![Paso 2: fechas desde y hasta](/media/manual/aplicar-patron-13dc16f86c.webp)

### 3. Asignación de compañeros

Se eligen los trabajadores que deben realizar el patrón seleccionado Al hacer clic en ‘Seleccionar’, se despliega un listado con el nombre de todos los trabajadores disponibles. Haciendo clic sobre sus nombres, se pueden seleccionar a uno o a varios trabajadores.

![Paso 3: seleccionar trabajadores](/media/manual/aplicar-patron-7fbe94a911.webp)

Si el listado es amplio, se puede utilizar el filtro, para buscar a los trabajadores de una localización, especialidad o categoría.

![Filtro de trabajadores por localización, especialidad o categoría](/media/manual/aplicar-patron-f03aa5d75c.webp)

Si se quiere quitar a un trabajador, se puede deshacer al último añadido.

### 4. Aplicar patrón desde

Se informa el día de la semana que se va a considerar como primer día del patrón de turnos.

Por defecto, es el lunes, pero se puede cambiar por cualquier día de la semana. También puede ser un día indefinido, en el caso de que se quiera aplicar el patrón desde el día que se indica en el paso 2.

Es el lunes, porque la cobertura de lo fines de semanas suele ser diferente al resto de días de la semana (de lunes a viernes). Al considerar el lunes como el día en el que va a comenzar el patrón, en patrones con periodos de 7 días, se garantiza que la planificación que se va aplicar es correcta de lunes a domingo. Teniendo además la siguiente opciones:

#### Reiniciar patrón al inicio de cada mes

Al aplicar un patrón con varios periodos, al inicio de cada mes, la secuencia de turnos se iniciará desde el primer periodo aplicado en el día que corresponda según el patrón, no continuando el periodo correspondiente. Por ejemplo, en el siguiente patrón el primer periodo tiene:

- Día 1: Lunes -N-;
- Día 2: Martes -L-;
- Día 3: Miércoles -T1-;
- Día 4: Jueves -L-;
- Día 5: Viernes -T1-;
- Día 6: Sábado -L-;
- Día 7: Domingo -T1-.

![Ejemplo: primer periodo del patrón](/media/manual/aplicar-patron-c83441df55.webp)

Si tomamos como ejemplo aplicar el patrón desde el 01/03/2023 al 30/04/2023, el día 01/03/2023 se corresponde con un miércoles, es decir, el día 3 del patrón que tiene un turno “T1”.

![Ejemplo: opción «Reiniciar patrón al inicio de cada mes»](/media/manual/aplicar-patron-556d8b9609.webp)

![Ejemplo: resultado en marzo](/media/manual/aplicar-patron-7b4779cc2e.webp)

La secuencia de turnos volverá a iniciarse en el primer periodo, el 01/04/2023 se corresponde con el día 6, sábado, que no tiene turno, y por tanto es libre.

![Ejemplo: reinicio del patrón el 1 de abril](/media/manual/aplicar-patron-ef0deceb18.webp)

![Ejemplo: resultado en abril](/media/manual/aplicar-patron-c67ed0037d.webp)

#### Comenzar con patrón adaptado a día de inicio de semana

Se aplica el patrón de turnos desde el primer periodo y del día/celda del patrón de turnos que coincida con el día 1 del mes en la primera semana. En la segunda semana del mes, se recupera los turnos y localización de las celdas/días del primer periodo que no se aplicaron en la primera semana del mes, ocurriendo cuando el día 1 del mes no coincida con un lunes.

![Ejemplo: patrón adaptado al día de inicio de semana](/media/manual/aplicar-patron-897832b3da.webp)

### 5. Escalonados a

Cuando el patrón está constituido por más de un periodo, estos periodos se escalonan con “x” días cuando se selecciona a los trabajadores. Esto quiere decir que cada trabajador empezará con un periodo diferente del patrón. Por defecto, para una correcta planificación y se cumpla la cobertura, el valor de los días escalonados debe ser el número de días que tiene un periodo (Ejemplos casos prácticos ).

En patrones de un solo periodo, todos los trabajadores comenzarán por el único periodo del patrón y la planificación será idéntica si no se cambia el valor que se informa por defecto (Ejemplo caso práctico).

![Paso 5: días escalonados](/media/manual/aplicar-patron-21e2030506.webp)

### 6. Localización

Determina a qué localización se va a insertar el patrón:

- Localización por defecto del trabajador, aplica el patrón con la localización que tiene el trabajador en su perfil.

  ![Localización por defecto del trabajador](/media/manual/aplicar-patron-ee278b1126.webp)

- Opción de aplicar el patrón “Sin localización “.

  ![Aplicar el patrón sin localización](/media/manual/aplicar-patron-2c4ae4f72f.webp)

- Con una localización diferente a la localización por defecto del trabajador.

  ![Aplicar el patrón con otra localización](/media/manual/aplicar-patron-b1ff12e5bf.webp)

En el caso de ser un patrón de turnos con localizaciones, se aplicará la localización que tenga asignada el turno en el patrón.

![Patrón de turnos con localizaciones](/media/manual/aplicar-patron-dde13bfae3.webp)

### 7. Festivos/Vacaciones

Escoge la opción de que:

- El patrón se aplique en festivos (inserta turno en el día festivo).

  ![Opción de aplicar en festivos](/media/manual/aplicar-patron-8fb7c0c807.webp)

  ![Resultado de aplicar en festivos](/media/manual/aplicar-patron-2788c7b371.webp)

- Se aplique en vacaciones (inserta turno en día planificado de vacaciones).

  ![Opción de aplicar en vacaciones](/media/manual/aplicar-patron-32ca6cbdbd.webp)

### 8. Periodo inicial

Un patrón puede tener varios periodos para varios trabajadores.

![Paso 8: periodo inicial](/media/manual/aplicar-patron-c9049d47c2.webp)

Por ejemplo, si quieres que un trabajador empiece su planificación a partir del periodo 2 de un patrón de 8 periodos, indicaremos el periodo 2 en este paso.

![Ejemplo: empezar en el periodo 2](/media/manual/aplicar-patron-52a39f06fa.webp)

Cuando se informa en ‘ E scalonado’ (Paso 5) con valor 0, en este campo aparecen los índices numerados (días/celdas del patrón de turnos).

![Índices numerados con escalonado 0](/media/manual/aplicar-patron-6cc7aa3842.webp)

Esto permite empezar a aplicar el patrón a partir de un determinado día/celda del patrón, seleccionando el índice que corresponde con dicho día/celda. Ejemplo de escalonado con valor 0.

![Ejemplo de escalonado con valor 0](/media/manual/aplicar-patron-9d38344cf3.webp)

### 9. En absentismos totales

Permite escoger si se quiere:

- Insertar el patrón en los absentismos totales.

  ![Insertar el patrón en los absentismos totales](/media/manual/aplicar-patron-22f333c5ff.webp)

- No insertar sobre los absentismos totales.

  ![No insertar sobre los absentismos totales](/media/manual/aplicar-patron-7ca8a78069.webp)

- Buscar el primer día sin absentismos.

### 10. Turnos existentes

Al aplicar un patrón sobre un patrón anterior aparecen cinco opciones:

![Paso 10: opciones para los turnos existentes](/media/manual/aplicar-patron-8011bd69ec.webp)

- Borrar: elimina toda la planificación del cuadrante en los trabajadores seleccionados, entre las fechas indicadas en el punto 2.

- Borrar solo cuando se inserte un turno: elimina el turno planificado en el cuadrante donde coincida un turno al insertar del nuevo patrón, el resto de la planificación la mantendrá.

  ![Opción «Borrar solo cuando se inserte un turno»](/media/manual/aplicar-patron-bcc4f9bf7c.webp)

- Borrar, pero no aplicar en turnos sin horas: eliminará todos los turnos planificados en el cuadrante de los trabajadores seleccionados, excepto aquellos turnos que no tienen horas computadas, por ejemplo un saliente de noche) entre las fechas indicadas en el punto 2.

  ![Opción «Borrar, pero no aplicar en turnos sin horas»](/media/manual/aplicar-patron-bacef7680b.webp)

- Mantener e insertar en libres: solo inserta turnos en los días libres y mantiene la planificación anterior.

  ![Opción «Mantener e insertar en libres»](/media/manual/aplicar-patron-0124b9d5bf.webp)

- Mantener: mantiene todos los turnos previamente planificados e inserta los turnos del patrón que se está aplicando.

  ![Opción «Mantener»](/media/manual/aplicar-patron-7c61290b94.webp)

### Comprobar restricciones

Esta acción permite verificar que el patrón que se va a aplicar a los trabajadores cumple con las Restricciones configuradas.

En la parte inferior donde se muestra la proposición del asistente de aplicar patrón, aparece el botón ‘ Comprobar restricciones’.

![Botón «Comprobar restricciones»](/media/manual/comprobar-restricciones-9df9e43778.webp)

El sistema mostrará en la pantalla qué restricciones se están incumpliendo.

![Restricciones incumplidas](/media/manual/comprobar-restricciones-984c46bf99.png)

En caso contrario, se nos mostrará que se cumplen todas las restricciones.

![Todas las restricciones se cumplen](/media/manual/comprobar-restricciones-6bbc9ecbc1.webp)

### Insertar patrón

Completados todos los pasos, analizada la propuesta de planificación (turnos en morado) y verificado que se cumplen las restricciones, para terminar de aplicar el patrón se debe hacer clic sobre ‘ Insertar patrón’.

![Botón «Insertar patrón»](/media/manual/insertar-patron-5d0556143a.webp)

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
