---
schemaVersion: "1.0"
contentId: "control-horario-8-control-horario"
title: "Control Horario"
description: "Esta pestaña está relacionada directamente con el Módulo adicional de Control Horario, en la cual se podrá configurar a nivel individual:."
contentType: reference
module: "Control horario"
submodule: "Fichajes"
intent: "Control Horario"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
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
    - "https://manual.aturnos.com/knowledgebase/8-control-horario/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/8-control-horario/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre control Horario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "1645564910572e3e6ba8ce93ca0d58300b99e0d0278aee14ca670a6e767a9760"
  migratedAt: 2026-08-17
---
## Resumen

Esta pestaña está relacionada directamente con el Módulo adicional de Control Horario, en la cual se podrá configurar a nivel individual:.

## Contenido

- Fichaje sin control Web/IP.
- Tolerancias.
- Descanso.
- Ajustes Control de Presencia.
- Importaciones de estado.

Permite y facilita el fichaje en remoto para aquellos trabajadores que realizan teletrabajo o que, debido a su movilidad, necesitan fichar desde cualquier lugar (ver TRABAJO REMOTO Y GESTIÓN DE ESPACIOS EN LAS OFICINAS ).

Esta opción permite la realización de fichajes en el Control Horario desde un ordenador por el acceso web de aTurnos o a través de un dispositivo móvil (móvil o tablet) por medio de nuestra APP.

La función, “Sin control Web/IP” por defecto estará desactivada (NO). Se puede configurar a “SI” y guardar los cambios realizados en el perfil para activarla. De esta forma, el trabajador podrá realizar el fichaje desde cualquier localización, es decir, tanto por el teléfono móvil a través del GPS como por la IP desde cualquier dispositivo que esté conectado a una red.

Se define como el margen de tiempo, ya sea al inicio o final de cada turno de trabajo, ya sea por exceso o defecto, que le permitimos a un trabajador tener a la hora de realizar el fichaje cerrado de su turno de trabajo.

Esta tolerancia puede ser la configurada a nivel de equipo (ver Tolerancias ) o tener una tolerancia individual para cada trabajador por distintas necesidades.

Ajustar con valores del equipo

Por defecto está activada la opción ‘SÍ’, con lo que se aplican sobre el trabajador los mismos ajustes del equipo. En caso contrario, se puede desactivar la configuración de equipo con la opción en ‘NO’ y se podrán definir los valores que se detallan a continuación:

- Calcular la tolerancia global de toda la jornada del trabajador: Indica los minutos de tolerancia de los que dispone el trabajador tanto para la entrada como para la salida (mismos minutos a la entrada y a la salida), sin que éstos se les descuenten o acumulen.
- Calcular la tolerancia por el inicio y fin de cada turno de la jornada: Al contrario que en la forma anterior, se pueden indicar unos minutos de tolerancia distintos en la entrada y en la salida.
- Por exceso y defecto del inicio y fin de cada turno de la jornada: Se pueden introducir minutos de tolerancia diferentes a la entrada y a la salida (tanto por comenzar antes o más tarde; como por salir antes o más tarde).

Esta función permite una gestión individualizada de los descansos de cada trabajador. Si existe tiempo de descanso a nivel de un tipo de turno, prevalece sobre la gestión de descanso a nivel de trabajador.

En este apartado aparecerán todos aquellos descansos que se quieran añadir, ya que pueden tener una fecha inicio y fin para su aplicación.

Haciendo clic sobre el botón “Gestionar descansos”, se mostrará el siguiente modal.

Para añadir una nueva gestión de descanso, se tiene que hacer clic sobre “Nuevos datos”. Cada vez que se añada una nueva gestión de descanso, se registrará en el “Histórico”. En “Configuración” aparecerá la gestión de descanso aplicada en el momento actual.

Para definir una nueva gestión de descanso, hay que indicar:

- Entrada en vigor: Fecha inicio de aplicación del descanso.
- Válido hasta: Fecha hasta la cual se aplica el descanso.
- Mínimo de horas trabajadas en turno: Para aplicarse el tiempo de descanso, debe tener planificado al menos un tipo de turno u horas añadidas que sean iguales o superiores, ya que las horas fichadas entre el inicio y fin antes del descanso, deben ser como mínimo, este valor. Como se puede ver en el detalle por trabajador, en el caso de que se hayan configurado 5 horas, el fichaje previo al descanso debe se de al menos 5 horas.
- Descanso en minutos: Duración del descanso.

El tiempo de descanso que se indique, será el que aparecerá como máximo en el campo “Descanso” en el detalle por trabajador, siempre y cuando esté configurado en el Control de Presencia que los descansos se contabilizan (ver Contabilizar descansos ).

Estos ajustes aumentan o decrementan el ajuste que ya existe en el “Estado de horas” de ‘Detalle por trabajador’.

Una de las funciones, es que permite ajustar el tiempo de los descansos que no han sido disfrutados (no fichados) durante el turno de trabajo que se tiene planificado.

Se pueden añadir nuevos ajustes desde el botón ‘Añadir’.

Se mostrará un modal con los siguientes campos a completar:

- Fecha: El día al que se aplicará el ajuste.
- Ajuste (en minutos): En positivo para aumentar el ajuste, en negativo para decrementar el ajuste.
- Descripción: La razón por la cual se añade el ajuste.

Estos ajustes quedarán registrados en un listado en cada perfil del trabajador.

Estos ajustes pueden ser importados mediante un archivo de Excel, asociando los campos “Ajuste control horario” y “Fecha ajuste control horario” en una ‘ Importación de trabajadores ‘.

Esta función permite forzar el “Estado de horas” de ‘Detalle por trabajador’ para casos como aquellos trabajadores que arrastran un estado de horas anterior al uso del Control Horario de aTurnos y que por tanto no tienen fichajes. Una vez se ha planificado el turno, ese tiempo aparecerá como un estado de horas negativo, ya que no hay tiempo presencial.

De esta manera los trabajadores no empiezan con un saldo negativo de estado de horas y su acumulado es cero horas, ya que se fuerza el tiempo que no se ha fichado sin importar los fichajes (ver Importación de marcajes ).

Esta importación de estado se puede realizar indicando un nuevo ajuste desde el botón ‘Añadir’.

Aparecerá un modal con los siguientes campos:

- Fecha: El día al que se aplicará la importación del estado.
- Estado (en minutos): En positivo para un estado de horas realizadas, en negativo para un estado de horas que no se han realizado.
- Descripción: La razón por la cual se añade la importación del estado.

Todas las importaciones del estado que se realicen aparecerán listadas en el apartado de “Importaciones de estado”.

Una forma de no tener que realizar todos estos ajustes de forma manual, es mediante una ‘ Importación de trabajadores ‘ con un archivo de Excel, asociando los campos “Estado inicial control horario” y “Fecha estado inicial control horario”.
