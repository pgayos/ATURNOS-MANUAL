---
schemaVersion: "1.0"
contentId: planificacion-7-crear-tipos-de-turnos
title: Crear tipos de turnos
description: El administrador puede tener definido previamente un horario de trabajo, lo que en aTurnos llamamos ‘ Tipos de turno ’.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Crear tipos de turnos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: crear
    label: Crear
  - id: tipos
    label: Tipos
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
    - https://manual.aturnos.com/knowledgebase/7-crear-tipos-de-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-crear-tipos-de-turnos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre crear tipos de turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-crear-tipos-de-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-crear-tipos-de-turnos/
  contentHash: b8e37cfc80e99a5514009876a4682b962972e3126016e30df230f59b788346b5
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

El administrador puede tener definido previamente un horario de trabajo, lo que en aTurnos llamamos ‘ Tipos de turno ’.

A esta función se llega desde Administrar → Importar/Exportar/Importar.

Adjuntamos una plantilla de ejemplo para poder realizar una importación de los tipos de turnos en un equipo de trabajo:

CSV importación_básica_turnos

También se puede crear un documento propio, en un archivo plano delimitado por comas (.csv).

Teniendo que definir las columnas con los siguientes conceptos:

- Descripción*: nombre del tipo de turno (mañana, tarde, guardia, mañana partida).
- Abreviatura*: recomendado hasta 4 caracteres (letras o números). Identifica el tipo de turno con la abreviatura en el cuadrante, en las tablas de estadísticas, en las peticiones, entre otros. Por ejemplo M.
- Hora Inicio*: informa la hora de inicio del tipo de turno (por ejemplo, las 09:00 horas). Formato hh:mm.
- Duración total*: informa la duración del turno. Ejemplo, en un turno M (Mañana de 09:00 a 13:00), el valor a informar será de 04:00. Formato hh:mm.
- Duración computada*: informa la duración del turno computable. Ejemplo, en un turno con duración total 12 horas de 8:00 a 20.00h, las horas computadas puede ser diferentes, puede computar más o menos horas, en comparación a las horas de duración del turno. Por ejemplo, puede computar media hora más y en este caso el valor a informar sería de 12:30. El sistema computará 12 horas y 30 minutos como horas de contrato, y no las 12 horas que dura el turno. Formato hh:mm.
- Descanso: Informa el tiempo de descanso (en minutos) que NO computa como jornada laboral. Formato hh:mm. Este dato puede afectar al cómputo de las horas del control de presencia según la configuración de los descansos que tenga informada el equipo (Menú Control de presencia-Configuración).
- Seleccionable: si el tipo de turno se define como seleccionable, los trabajadores podrán cambiar entre ellos los turnos seleccionables. Para ser seleccionable valor 1, para no ser seleccionable valor 0 (ver Hacer cambio ).
- Petición: permite al administrador ofertar turnos a los trabajadores, así como el trabajador ofrecerse para trabajar el turno. Para poder ser pedido valor 1, para no ser pedido valor 0 (ver Peticiones ).
- Absentismo: considera el turno como tipo de absentismo, informando con valor 1, en caso contrario, será valor 0.
- ID aTurnos: es el número del equipo dentro del sistema de aTurnos. Es útil para una importación de tipos de turnos a diferentes equipos desde un mismo fichero e importación. Con el id aTurnos informado, se importarán los tipos de turnos al equipo con el id aTurnos que corresponda.
- ID externo: es un número de identificación del equipo distinto al ‘ID aTurno’, el cual se puede informar en los ‘Datos del equipo’.
- Limitar horario de fichaje: valor 1 para habilitarlo, valor 0 para no estar habilitado (ver más información en Limitar horario de fichaje )
- Inicio horario fichajes: en formato hh:mm
- Fin horario fichajes: en formato hh:mm

### Nuevo periodo de turno

En algunos casos, un mismo turno puede tener información diferente hasta una fecha y a partir de otra cambiar su horario, duración o configuración. Si se importa sin registrar un ‘Nuevo periodo’, se sustituye la configuración actual por la que se importa.

Pero si se quiere un histórico donde a partir de una fecha, la configuración sea distinta, se deben informar los siguientes campos:

- Fecha de inicio: fecha a partir de la cual el turno se encuentra disponible en el sistema de turnos (ver Listado de tipos de turno ) para poder ser añadidos en el cuadrante (ver Añadir turno al cuadrante ). Formato según la configuración de Importar/exportar. Por ejemplo: dd/mm/aaaa.
- Nuevo periodo: es un campo que se debe informar con el valor 1, en el caso de que se quiera cambiar el comportamiento del turno, a partir de la fecha de inicio que se indique.

Finalmente, guardar el documento como formato tipo CSV.

Para importar el archivo, debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Nuevo periodo de turno](/media/manual/nuevo-periodo-de-turno-31fe1d7056.png)
