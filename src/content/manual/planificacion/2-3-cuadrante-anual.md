---
schemaVersion: "1.0"
contentId: planificacion-2-3-cuadrante-anual
title: Cuadrante Anual
description: En el menú Cuadrante anual, el Administrador puede visualizar la planificación asignada durante el año a cualquiera de sus trabajadores.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Cuadrante Anual
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anual
    label: Anual
  - id: cuadrante
    label: Cuadrante
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
    - https://manual.aturnos.com/knowledgebase/2-3-cuadrante-anual/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-3-cuadrante-anual/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cuadrante Anual?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-3-cuadrante-anual/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-3-cuadrante-anual/
  contentHash: 44a3a69b224c5a718eac88fb8cf3494ecbaa0cd2c03b504bdeb17d930f689ae0
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre cuadrante Anual, con instrucciones y contexto revisables por el equipo de aTurnos.

En el menú Cuadrante anual, el Administrador puede visualizar la planificación asignada durante el año a cualquiera de sus trabajadores. Desde esta pantalla se pueden realizar acciones básicas (como modificar, añadir, eliminar… un turno) que se registrarán automáticamente en el cuadrante del trabajador.

Además, el cuadrante anual muestra un resumen general de eventos del año, junto con el cómputo de horas, vacaciones y otros datos relevantes para la gestión del tiempo de los trabajadores.

En este cuadrante anual, el administrador podrá ver también el total de horas efectivas por mes y la cantidad de horas ajustadas, que tiene el trabajador en ese período.

### Barra superior del cuadrante anual

Esta barra incluye opciones para personalizar la visualización y exportación de datos del cuadrante:

- Mostrar todos mis equipos

Este check solo aparece si el trabajador que se está consultando se encuentra dado de alta en varios equipos. Esto permite al administrador visualizar los turnos asignados al trabajador en todos los equipos donde esté dado de alta y planificado.

- Sin marcar: solo se muestran los turnos del equipo actual.
- Marcada: se muestran los turnos planificados en todos los equipos. Al pasar el ratón sobre un turno, se indica a qué equipo pertenece.

Importante: Solo se podrán realizar acciones (añadir, modificar o eliminar turnos, crear absentismos, aceptar peticiones) en el equipo donde el usuario tenga permisos de administración. Ejemplo: Si un trabajador pertenece a “Madrid Este” y “Madrid Sur”, pero el supervisor solo administra “Madrid Este”, cualquier acción que realice se aplicará en “Madrid Este”.

- Año: Permite seleccionar el año (o año fiscal) que se desea visualizar.

- Trabajador: Selecciona el trabajador cuyo cuadrante anual se desea consultar.

- Nivel de detalle: Define la cantidad de información que se desea visualizar en el cuadrante.

Opciones:

- Turnos: Visualiza/oculta la abreviatura del turno en el cuadrante.
- Horario: Visualiza/oculta el horario del turno en el cuadrante.
- Localización: Visualiza/oculta la localización del turno en el cuadrante.
- Recursos: Visualiza/Oculta los recursos del turno en el cuadrante.

- Cuadrante: Permite cambiar la vista a:

- Cuadrante principal (planificación actual),
- Cuadrante borrador, o
- Cuadrante original (sin cambios ni modificaciones).

- Enviar cuadrante anual por email: Envía el cuadrante al correo del trabajador o a otra dirección (email de aTurnos o no).

Se puede incluir, entre otros, información resumida de:

- Horas planificadas y balance de horas
- Vacaciones y absentismos planificados
- Fecha de generación del informe

- Vista Grid: modifica la vista del cuadrante anual a modo Grid o cuadrícula.

- Vista Tabla: modifica la vista del cuadrante anual a modo Tabla.

- Exportar: Permite exportar o descargar el cuadrante anual en Excel, PDF A4 o PDF A3. Un administrador o superusuario puede exportar el cuadrante de un solo trabajador o de todos a la vez.

Opciones de exportación:

- Con todos los detalles,
- Solo cuadrante, o
- Cuadrante con detalles básicos.

También se puede incluir la fecha de generación del informe y los datos personalizados.

Permiten ajustar la información visualizada según criterios del trabajador, localización o tipo de turno.

- Filtro por trabajador

Muestra únicamente los turnos asociados a las localizaciones seleccionadas.

- Filtro por turnos

Ofrece tres opciones:

1. Por tipo de turno: muestra solo los turnos seleccionados.
2. Excluir turnos con absentismos: oculta turnos que tengan el absentismo indicado (solo si cubre el turno completo).
3. Mostrar absentismos tipo: muestra únicamente los turnos con los absentismos seleccionados (parciales o totales).

- Por Turnos, ofrece 3 opciones,: Por Tipo de turno, solo se mostrarán en el cuadrante anual los turnos seleccionados. Excluir turnos con Absentismos, se muestra el cuadrante sin los turnos que tengan asignado el absentismo seleccionado (en jornada completa, es decir, el turno completo, no excluye los turnos que tengan informado solo algunas horas de ese absentismo). Mostrar absentismos tipo, con esta opción se mostrará en el cuadrante solamente los turnos con el o los absentismos seleccionados (tanto absentismos de horas como totales).

### Acciones dentro del cuadrante anual

Haciendo clic en cualquier día del calendario, se despliega un menú que permite:

1. Añadir turno: permite insertar un turno del listado de tipos de turno que se hayan creado.
2. Modificar turno: cuando el día o casilla seleccionada ya tiene un turno asignado esta opción permite cambiar ese turno por otro.
3. Absentismo: haciendo clic en esta opción puedes informar un tipo de absentismo. Para más información, ver ¿Cómo gestionar los absentismos de trabajo?
4. Localización turno: esta función permite añadir una localización a los turnos del día.
5. Borrar: permite borrar el evento seleccionado (sobre el cual se ha hecho clic) como un turno, horas o un absentismo.
6. Peticiones: haciendo clic en esta opción permite realizar peticiones de vacaciones, permisos, turnos, horas o libre (dependiendo de los permisos).
7. Añadir horas: por medio de esta acción se pueden ‘ añadir horas ‘ en el día que se pinche, aunque exista un turno insertado.

### Estadísticas y datos del cuadrante anual

En la parte inferior se puede consultar la siguiente información:

- Resumen: se puede ver la cantidad o total de cada turno que el trabajador tiene asignado a lo largo del año, con el total de horas por turno. En caso de necesitar una comparación directa con otros compañeros del equipo, debe acceder a Estadísticas-Turnos y filtrar por el periodo deseado (por ejemplo, un año).

- Tiempos: muestra conceptos relacionados con los parámetros establecidos para el cálculo de horas, vacaciones, nocturnidades y festivos correspondientes al trabajador que afectan su registro de horas en el año. Es la misma información que podrás encontrar en el perfil del trabajador en los apartados de ‘Vacaciones’ y ‘Horas’.

- Horas y Vacaciones: aquí puede consultar de forma ágil y sencilla detalles relacionados con las horas y vacaciones anuales del trabajador en los equipos donde está dado de alta y planificado. También se tiene acceso al apartado Horas en los equipos cuando se ha marcado la opción “Mostrar todos mis equipos”.

### Cuadrante anual según año fiscal

El ejercicio o año fiscal de las empresas no siempre corresponde con el período del año natural (01 de enero a 31 de diciembre) para generar reportes o informes en relación al área financiera (Ver mas acerca de Configurar Año fiscal ). En estos casos, la visualización del cuadrante anual se adaptará a los 12 meses que correspondan al año fiscal informado.

Ejemplo, si el año fiscal de la empresa es del 01/04 al 31/03 (FY= Fiscal Year) los 12 meses que se mostrarán en el cuadrante se informarán iniciando la secuencia con el mes de Abril y así sucesivamente cerrará con el mes de Marzo.

En la barra superior desplegable se selecciona el año fiscal (FY= Fiscal Year) que se quiere consultar o visualizar en el cuadrante anual. De igual forma, todas las estadísticas y datos del cuadrante se ajustarán según el año fiscal informado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
