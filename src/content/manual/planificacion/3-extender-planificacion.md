---
schemaVersion: "1.0"
contentId: "planificacion-3-extender-planificacion"
title: "Extender planificación"
description: "Los trabajadores pueden tener un patrón aplicado (ver aplicar Patrón de turnos ) hasta una fecha, es posible extender planificación hasta otra fecha futura."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Extender planificación"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "extender"
    label: "Extender"
  - id: "planificacion"
    label: "Planificacion"
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
    - "https://manual.aturnos.com/knowledgebase/2-extender-planificacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-extender-planificacion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre extender planificación?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "a8577f60d0cfe03ad3a0bf90564198ca471048622082b175616177d0bd44a561"
  migratedAt: 2026-08-17
---
## Resumen

Los trabajadores pueden tener un patrón aplicado (ver aplicar Patrón de turnos ) hasta una fecha, es posible extender planificación hasta otra fecha futura.

## Contenido

Un ejemplo de su utilidad es cuando el administrador planifica al trabajador aplicándole un patrón de turnos por un mes y luego quiere extenderle esa misma planificación al mes siguiente o por un período más largo. En este caso, Jaime tiene planificado el mes de enero.

Un dato importante, antes de extender planificación, es conocer qué es:

Fecha de inicio (1): es la fecha en la que se ha insertado por primera vez el patrón. Esta fecha siempre es la misma en los datos de planificación. Solo cambiará cuando se aplique otro patrón distinto.

Fecha de fin (2) de planificación: es la fecha hasta donde se ha aplicado el patrón o extendido planificación por última vez. Se cambia cada vez que se extiende el patrón. Este dato lo encontramos en su perfil del trabajador. En este caso, la fecha fin es el 31/01/2022, por lo que al extender planificación posteriormente, lo hará a partir del 01/02/2022, si no se edita la fecha de inicio (3).

Fecha de inicio (3): esta fecha puede ser editable, depende de un permiso de configuración del equipo. Esta fecha indica, a partir de qué día, se quiere extender la planificación, en el caso de que no se quiera extender desde el día siguiente de la fecha fin (2).

Fecha de fin (4): es la fecha hasta donde se quiere extender la planificación con el mismo patrón

Al hacer clic en extender planificación, lo primero que nos aparece es la información de los datos de planificación del trabajador. El patrón que tiene aplicado desde qué fecha, inicio y fin, a partir de qué día de la semana y el escalonado.

Además, nos ofrece las siguientes opciones de planificación con la acción de extensión:

En esta opción, se visualizará con todo detalle el patrón que tiene aplicado el trabajador antes de extender su planificación.

El sistema extiende el patrón dando continuidad a la planificación desde el último período que había aplicado en el cuadrante hasta la fecha fin que se informe.

Por ejemplo, Jaime tiene planificado el mes de enero de 2022, pero se quiere extender la planificación del mismo patrón hasta el final de febrero.

La continuidad del patrón, aplicaría turno (T) los días 1 y 2 para seguir la secuencia del periodo.

En esta opción, al extender la planificación, el patrón se aplicará a partir de la primera fecha sin planificación desde el inicio del patrón con el que se planificó al trabajador.

Se utiliza cuando el administrador necesita que cada mes la planificación sea idéntica, respetando por ejemplo que todos los días 6, 7, 8 y 9 de todos los meses el trabajador tenga libre. Para ello s e debe informar la fecha fin hasta donde quiera extender el patrón o seleccionar la opción que se muestra en el próximo punto “Hasta final de mes”.

Por ejemplo, si Pepe tiene un patrón de 31 días, si se aplica al mes de febrero, planificará hasta el 28 o 29, según se trate de año bisiesto o no.

Con extender planificación, los días 1, 2, 3 y 4 de marzo, se planificarán continuando donde termino el patrón, en este caso sería un turno (T), informando en estos días los turnos correspondientes a los días 29, 30, 31 y 1 del patrón.

Al marcar la opción “Comenzar desde inicio de patrón”, la planificación de los días 1, 2, 3 y 4 de marzo será la misma que tuvo los días 1, 2, 3 y 4 de febrero o los mismos días en enero, en este caso un turno (M), dependiendo de la fecha de inicio de los datos de planificación.

Este proceso también deberá marcar la opción de planificar “Hasta final de mes” y seleccionar en la fecha fin, el mes hasta el cual se quiere extender.

Al seleccionar esta opción, se extenderá la planificación hasta el último día del mes indicado.

Dará continuidad al patrón desde el último día del periodo hasta el final del mes que se indique.

Por ejemplo, al extender planificación de Pepe, continuaría el patrón aplicando turnos (T) el 1 y 2 de abril, siguiendo la secuencia del patrón hasta el final del mes.

En este caso, hasta el mes de mayo, se ha hecho hasta el final de mes de mayo.

También tienes la opción de no elegir ninguna de las anteriores. Si esto sucede, el sistema solo le dará continuidad al patrón según el día en el que quedó en la planificación anterior.

Marcar la opción “SÍ” tendrá en cuenta los festivos y vacaciones al extender la planificación, y por tanto sobrescribirá el turno de vacaciones o insertará turno en el día festivo. Mientras que, si selecciona “NO”, no respetará las vacaciones de la planificación y no insertará turno en días festivos.

En este apartado hay 2 opciones; una que se inserte el patrón en los días planificados, independientemente del absentismo, o bien que no se inserte el patrón en los días donde haya absentismos totales.

Para revisar los detalles del patrón que tiene aplicado un trabajador antes de extender la planificación, lo puedes consultar en el Perfil del trabajador en la casilla de Datos de planificación, con solo hacer clic en el nombre del trabajador y seleccionando la opción “Ver perfil”.
