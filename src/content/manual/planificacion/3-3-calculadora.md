---
schemaVersion: "1.0"
contentId: planificacion-3-3-calculadora
title: Calculadora
description: Esta herramienta te ayuda a calcular un patrón en función de los turnos creados, e indicando necesidades como trabajadores que necesitas por turno y día, además de tener en cuenta restriccio.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Calculadora
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
  - id: calculadora
    label: Calculadora
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
    - https://manual.aturnos.com/knowledgebase/3-3-calculadora/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-3-calculadora/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre calculadora?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-3-calculadora/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-3-calculadora/
  contentHash: 0c145ab775827639bb8b29426a09b0d2299defac99fc7c563710ae1571cfb87e
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre calculadora, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Esta herramienta te ayuda a calcular un patrón en función de los turnos creados, e indicando necesidades como trabajadores que necesitas por turno y día, además de tener en cuenta restricciones indicadas por el administrador.

En ocasiones, es necesario la búsqueda de un nuevo patrón de turnos para el equipo, esta necesidad puede surgir por diferentes causas, como puede ser por cambio del número de trabajadores en plantilla, aumento de la demanda del servicio, cambios de convenio de los trabajadores o incluso por un nuevo cambio de patrón de turnos que solicita el propio equipo para una mejora en la conciliación de la vida laboral y familiar.

Generar un nuevo patrón de turnos es una necesidad que puede resultar compleja, para la cual aTurnos dispone de diferentes herramientas que te pueden facilitar dicha tarea, como es la calculadora de patrones de turnos.

Es una herramienta que te ofrece, tras informar con valores unas variables previas, una propuesta de patrón de turnos. Es un resultado que garantiza la cobertura de trabajadores por cada tipo de turno y día de la semana. Además, sobre este resultado, se puede trabajar modificándolo y adaptándolo aún más a las necesidades del equipo.

La cobertura o necesidad es previamente informada en un formulario donde se indicará los siguientes valores:

- Trabajadores del equipo u Horas por trabajador/año: Indicar número de trabajadores: se puede escoger el número de trabajadores que van a componer esta demanda de turnos. Por ejemplo, si una unidad organizativa o equipo se compone de 20 trabajadores y 14 de ellos son los que van a cubrir la demanda que necesitamos, hay que distribuir esos 14 trabajadores en los tipos de turnos y días que necesitamos (en nuestro ejemplo, hemos distribuido los 14 trabajadores en el turno M3 de lunes a viernes). Con los 6 trabajadores restantes, buscaremos otra demanda de turnos repitiendo el proceso anterior (en nuestro ejemplo, los hemos distribuido en el turno M2). Horas por trabajador/año: se trata del número total de horas por Convenio de los trabajadores al año, sin contar con las horas de las vacaciones. Ejemplo: si informas 1800 horas, hay que tener en cuenta añadir las 176 horas de los días de vacaciones (en caso de 40 horas semanales/22 días laborables).

Una opción excluye a la otra, es decir, si informas el número de trabajadores, el sistema no permitirá que añadas un valor al número de horas por trabajador/año y viceversa.

El resultado de la calculadora puede generar patrones atendiendo o no a las restricciones que tenga informada el equipo de trabajadores, seleccionando la opción “Si o No” del formulario. Las restricciones son previamente creadas y asignadas al equipo. Por defecto, en el momento del alta se asignan a todo el equipo 2 restricciones: “descanso de 12 horas entre turno y turno” y “no permitir solapamientos de turnos”.

Para que una restricción pueda considerarse en la calculadora, debe estar asignada a todos los trabajadores.

- Turnos/Días: a modo de tabla, aparece en columnas los días de la semana, y en filas los diferentes tipos de turnos. Es aquí donde hay que informar el número de trabajadores que se necesitan para cubrir la demanda, indicando cuántos trabajadores se necesitan por cada tipo de turno y día de la semana. Los días libres se van a calcular de forma automática, restando los trabajadores que se necesitan de los disponibles y teniendo en cuenta cualquier restricción sobre los descansos.
- Datos avanzados para calculadora: l as dos funciones que aparecen en esta sección son complementarias para una planificación más avanzada, pero si se dejan por defecto, el resultado igualmente será óptimo.

- Una asignación más relajada o concentrada: al hacer clic, aparece un desplegable con 2 variables (“dispersa, más relajada, pero con menos libres seguidos” o “concentrada y con más libres seguidos”). Total de días a calcular: el resultado de la calculadora es un patrón de demanda de turnos constituido por periodos. Al hacer clic, aparece un desplegable que te permite seleccionar el escalonado de tu patrón, es decir, puedes decidir si la rotación de tu patrón será cada 7 días, 30 días, o algún otro. Son cuatro opciones: “para hacer patrones 7 días, equivale a una semana y cuadran los fines de semana al rotar” es el más recomendado; “28 días, equivale a cuatro semanas y cuadran los fines de semana al rotar”; “30 días”, un mes de 30 días o “31 días”, un mes de 31 días.

Una vez se realiza el cálculo según las variables incluidas, la calculadora te muestra como resultado una propuesta de patrón de turnos, sobre ella puedes realizar ajustes o cambios para adaptarla aún más a las necesidades del equipo. Por ejemplo, permite cambiar de posición un turno por otro (en el mismo día o columna) si consideras que así mejora la rotación de los turnos y días libres, del patrón.

La tabla con el resultado de la calculadora muestra la siguiente información:

- Períodos: Indica el número de períodos que tiene el patrón, es decir, la cantidad de veces que va a rotar a un nuevo período cada trabajador para garantizar la cobertura. El orden de los períodos puede cambiarse en las flechas verdes que aparecen junto a la definición del Periodo (subir o bajar un período para modificar la secuencia del patrón).
- Los días de la semana (según el escalonado seleccionado, ej. 7 días, de 28 días, etc.): indican los turnos asignados esos días. Desde una misma columna (en cualquiera de los días) puedes cambiar la posición de un turno, si consideras que así mejoras la rotación de los mismos dentro del patrón.
- Horas Computadas: Muestra la sumatoria de horas que realmente cuentan dentro de la duración de los turnos en el período. Ejemplo, cuando la duración total de un turno es de 8 hrs y solo cuentan 7:30 hrs, porque tiene 30 min de descanso que no computan para la jornada, entonces las horas computadas del turno serían 7:30 hrs.
- Horas: Sumatoria de la duración total de los turnos del período (horas desde el inicio hasta el fin del turno).
- Experiencia: esta opción te permite identificar el o los períodos en los cuales vas a requerir trabajadores con capacidades y/o polivalencias determinadas y así separarlos a un nuevo patrón sin dejar de cumplir la cobertura inicial solicitada, Para completar la cobertura se deberán aplicar los dos patrones que fueron partidos. Es muy útil cuando, por ejemplo, uno de los trabajadores que realizará el patrón solo puedo rotar en un periodo con turnos de mañana.

Cuando se parte o divide la propuesta por Especialidad se muestra también la cantidad de horas que genera cada patrón por separado, así como el detalle de cantidad de turnos y horas de los mismos.

1.- Tabla de cobertura: desde la Tabla de cobertura del equipo se valida si el patrón está cubriendo realmente la necesidad solicitada. Se muestra, en resumen, la cantidad de trabajadores asignados día a día y por turnos para cubrir la demanda.

2.- Gráfico de la demanda: Por último, puedes visualizar fácilmente la cobertura del patrón propuesto a través del gráfico que refleja la Cobertura cubierta vs. Cobertura demandada.
