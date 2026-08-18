---
schemaVersion: "1.0"
contentId: planificacion-2-cargar-la-demanda
title: Cargar la demanda
description: La curva de demanda en aTurnos es la cantidad de personal necesario en un período de tiempo establecido para garantizar un servicio con una calidad de servicio definida.
contentType: concept
module: Planificación
submodule: General
intent: Cargar la demanda
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cargar
    label: Cargar
  - id: demanda
    label: Demanda
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
    - https://manual.aturnos.com/knowledgebase/1-cargar-la-demanda/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-cargar-la-demanda/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cargar la demanda?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-cargar-la-demanda/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-cargar-la-demanda/
  contentHash: abb1c73d622386ab7c87c87650a1b9b4538d008e478f089057b09a6a57c2c7ee
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre cargar la demanda, con instrucciones y contexto revisables por el equipo de aTurnos.

### Crear curva de Demanda

La curva de demanda en aTurnos es la cantidad de personal necesario en un período de tiempo establecido para garantizar un servicio con una calidad de servicio definida. La calidad de servicio es la encargada de convertir una variable de negocio en necesidades de personal. Por ejemplo, si una enfermera puede atender 5 pacientes a la vez, la calidad de servicio será 1/5. Esto implica que si en el turno tenemos 20 pacientes, deberemos tener 4 enfermeras, esta conversión y control la realiza aTurnos automáticamente.

La demanda se pude generar desde diferentes fuentes, puede ser de turnos, donde ya definimos las necesidades de personal y será 11. O por una variable de negocio como por ejemplo como llamadas o clientes cada 15 minutos con una calidad definida.

Para crear esta curva existen dos vías según la necesidad que tenga. Puede tener demanda de turnos que consiste en cubrir turnos, es típico de sectores como Enfermería con ejemplos como 3 en turnos de mañana, 3 en turno de tarde y 3 en turno de noche. Pero otros son más dinámicos y las necesidades pueden cambiar durante el turno, por ejemplo un call center, se necesitan 10 trabajadores a las 9:00 pero a las 10:00 se necesitan 15 trabajadores.

- A través de la Calculadora (Demanda de turnos)
- A través del Cuadro de mando (Demanda por horas)

Desde el menú Planificador – Calculadora, se registra la cantidad de trabajadores que se requieren por día de la semana y por tipos de turno (previamente creados, ver detalle ) para cubrir la necesidad del servicio o actividad.

Una vez informados en cada casilla la cantidad de trabajadores requeridos, se guarda la demanda en el icono de “Guardar como demanda”. En este modal se nos abren tres opciones:

- Guardar como ‘Nueva demanda’.

Para crear una nueva demanda, se necesitan completar los siguientes datos:

- Desde/hasta: período en el que tendrá validez o aplicará la demanda, informando fecha de inicio y fecha fin del período. Descripción: Indica el nombre con el que se identificará la demanda. Festivos: en este punto se selecciona una de las tres opciones disponibles. 1) Aplicar en festivos (asignará turnos en días festivos), 2) No aplicar en festivos (No asignará turnos en los días informados como festivos) y, 3) Aplicar en festivos con la cobertura de domingo (el día festivo asignará la cobertura requerida en los días domingo) Localización: Se debe informar la localización a la cual estará relacionada la demanda establecida. (ver mas acerca de Localizaciones) Especialidad: este punto es opcional, pero en el mismo podrás indicar si la demanda debe aplicar solo a los trabajadores con una especialidad determinada. (Ver mas acerca de Especialidades).

- Guardar como una demanda ya existente para modificar los datos como la fecha fin de la curva de demanda, pudiendo ampliar a una fecha posterior a la original. Para ello se ha de indicar la demanda ya creada que se pretende modificar.

Así como, seleccionar la fecha a partir de la cual queremos ampliarla, la nueva fecha fin y finalmente la opción ‘Modificar demanda’.

- Guardar como una demanda ya existente para incrementar los datos de la demanda en función de la demanda existente a partir de una nueva fecha fin de la curva de demanda. Es decir, si teníamos una demanda de un trabajador por el turno “M” en cada día de la semana en la demanda original, si volvemos cargar esta demanda e indicamos la opción ‘Incrementar demanda’, a partir de la nueva fecha la curva de demanda necesitará dos trabajadores por el turno “M” en cada día de la semana, al incrementarse en un trabajador.

Y por último se procede a “Guardar” la demanda creada.

Desde el menú Operaciones – Cuadro de mando, puedes crear también una curva de demanda haciendo clic en el icono de Acciones.

En Acciones debes seleccionar la opción de añadir demanda y registrar la información:

- Demanda: debes seleccionar la opción de Nueva demanda.
- Descripción: Indica el nombre con el que se identificará la demanda.
- Localización: Se debe informar la localización a la cual estará relacionada la demanda establecida. (ver mas acerca de Localizaciones)
- Especialidad: este punto es opcional, pero en el mismo podrás indicar si la demanda debe aplicar solo a los trabajadores con una especialidad determinada. (Ver mas acerca de Especialidades)
- QoS (Calidad de servicio): registra el indicador de calidad de referencia para garantizar un optimo servicio. Afecta directamente la cobertura diaria ya que será multiplicativo de los “Valores separados por espacios”.
- Inicio (fecha/hora): indicar la fecha y hora desde la cual inicia o aplica esta demanda.
- Intervalo: establece el período de tiempo en que cambiará la cobertura según los “Valores separados por espacios”.
- Valores separados por espacios: en este punto se informaran los valores de las coberturas (separadas con un espacio). Cada valor informado cambiará al siguiente según el tiempo establecido en el Intervalo. Ejemplo: si mi demanda inicia el 01/12/2020 a las 00:00 horas, informo un intervalo de 30min y mis valores son: 5 10 6 10, iniciará la demanda a las 00:00 con 5 trabajadores luego a las 00:30 la demanda aumentará a 10 trabajadores y así sucesivamente.

Y por último se procede a “Guardar” la demanda creada.

Crear la curva por esta vía es muy útil cuando la empresa maneja coberturas con picos de demanda y necesita (por ejemplo) aumentar la cobertura de trabajadores en ciertas horas del día.

Este proceso de carga también se puede hacer mediante la importación de un archivo desde nuestra importación. Se asocian los campos del archivo de carga con cada uno de los campos que existen definido un poco más arriba de este texto en el volcado manual. Esta carga de datos de demanda también se puede realizar desde el API.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
