---
schemaVersion: "1.0"
contentId: planificacion-f-tabla-de-cobertura
title: Tabla de Cobertura
description: La tabla de cobertura es una solución que aTurnos ofrece a los administradores para que puedan consultar de un vistazo si las demandas están cubiertas. Esta tabla se encuentra haciendo clic en su pestaña en el cuadrante.
contentType: reference
module: Planificación
submodule: Cuadrante
intent: Tabla de Cobertura
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: cobertura
    label: Cobertura
  - id: tabla
    label: Tabla
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
    - https://manual.aturnos.com/knowledgebase/6-tabla-de-cobertura/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-tabla-de-cobertura/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tabla de Cobertura?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-tabla-de-cobertura/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-tabla-de-cobertura/
  contentHash: 26bc39a7610b92ff7a16693c041795ee0bcb88c0c4b218e1314309661667e09b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

La tabla de cobertura es una solución que aTurnos ofrece a los administradores para que puedan consultar de un vistazo si las demandas están cubiertas. Esta tabla se encuentra haciendo clic en su pestaña en el cuadrante.

Dentro de esta opción, encontramos varios filtros para visualizar la información según la preferencia del administrador que lo consulta. Estos filtros se pueden desplegar haciendo clic el botón con un triángulo invertido:

El número de las opciones que se despliegan dependerá de si se tiene activado o no el módulo de planificación automática. Si no lo tienes activado, tendrás 7 maneras de visualizar la cobertura de tu equipo. Si lo tienes activado, el número asciende a 14. Para saber más sobre el cuadrante con el módulo de planificación automática activado, haz clic aquí.

Además de la configuración de visualización en la pestaña de tabla de cobertura, también se puede configurar la visualización por días/semanas/mes a través de la barra superior del cuadrante.

A continuación, te desarrollamos qué puedes visualizar en cada una de las opciones que te ofrece la tabla de cobertura (sin el módulo de planificación automática).

## ¿Qué operaciones pueden afectar a los datos mostrados en la tabla de cobertura?

- Inserción de absentismos totales: Cuando a un turno se le inserta un absentismo total, se muestra en la tabla como otro tipo de turno, insertando al lado de la abreviatura, entre paréntesis, el tipo de absentismo que afecta al tipo de turno. Por ejemplo: T (-MU) indica que el turno T que había planificado, se le ha añadido un absentismo del tipo mudanza.
- Inserción de absentismos temporales*: Este tipo de absentismos, como afecta a algunas horas, y no a la totalidad del turno, no aparece en la tabla de cobertura.
- Realización de peticiones**: Las peticiones, sean del tipo que sean, hasta que no se acepten o denieguen, no aparecerán en la tabla de cobertura.
- Planificación de Horas normales, extra o complementarias*: Estas horas no se muestran en las tablas de cobertura, ya que solo se muestran los tipos de turno.
- Cambios de turno a horas*: Al igual que ocurre con las horas normales, extra o complementarias, cuando se realiza este cambio, deja de ser un tipo de turno, por lo que no se muestra en la tabla de cobertura.

*Estas se muestran únicamente en la opción de visualización “Resumen medio total”, la cual muestra el detalle de la planificación por horas, el resto de opciones solo se muestra por tipos de turno.

**A excepción de la opción “Total por turno descontando peticiones” que es la única opción que las tiene en cuenta.

## Opción Total por turno

Seleccionando esta opción, se pueden visualizar el número de trabajadores que tienen planificado cada tipo de turno. Esta información muestra, de manera general, el número de trabajadores que tiene planificado cada tipo de turno. Cabe mencionar que esta opción no atiende a la localización que se tenga informada, únicamente muestra cuantos trabajadores tienen planificado cada turno.

En el caso, de tener contratado el módulo de planificación automática y tener demandas, puedes consultar en este enlace información detallada de la Tabla de cobertura por turno con demandas

## Opción Total por localización

Para este tipo de visualización es fundamental tener definidas unas localizaciones en el equipo en las que se agrupará a los trabajadores.

La diferencia con respecto a la primera visualización es el desglose detallado por localizaciones, es decir, ya no contabiliza únicamente los turnos, sino que también muestra sus localizaciones.

## Opción. Total por turno descontando peticiones

Esta opción de visualización muestra de manera general el número de tipos de turno planificados, descontando en los días con una petición, el turno planificado. El tipo de peticiones que descuenta el número de turnos planificados son: permisos de días, vacaciones y periodos de absentismo.

Si comparamos esta opción con la opción Total por turno podemos observar diferencias:

## Opción Resumen medio Total

Es la única opción de visualización que muestra la información de la planificación por horas. Adicionalmente a las horas de los turnos, se incluyen horas complementarias, extra o normales y los absentismos temporales planificados. Lo único que contabiliza como tipo de turno son las vacaciones.

1.- Horas planificadas: Suma las horas computadas de los trabajadores que tienen planificación sin ningún tipo de absentismos.

2.- Nº de trabajadores: Indica el número de trabajadores planificados sin ningún tipo de absentismos ni vacaciones

3.- Horas de absentismos: Horas computadas de los turnos que tiene asociado absentismos

4.- Nº Trabajadores con absentismos: Indica el número de trabajadores planificados solo con absentismos.

5.- % absentismos =Horas de absentismos/(horas planificadas+horas de absentimsos)*100

6.- Nº de usuarios con vacaciones: números de trabajadores que tiene planificado vacaciones ese día.

7.- % Vacaciones: Nº de usuarios con vacaciones/(Nº de trabajadores +nº de trabajadores con absentimsos+nº de trabajadores con vacaciones)*100

8.- %Total vacaciones + absentismos: %Vacaciones +% absentismos NO justificados

## Opción Ver cuadrante de otro equipo

En ocasiones, un mismo administrador es el encargado de planificar y gestionar varios equipos (servicios, departamentos, centros…) por lo que utilizando esta opción, podría tener una comparativa de la planificación entre uno y otro (sobre todo si existen trabajadores que comparten ambos equipos).

Para comparar la planificación de otros equipos, se debe seleccionar la opción “Ver cuadrante de otro equipo” y elegir en el seleccionable el equipo con el que se quiere comparar. En el menú se desplegarán todos los equipos que se administran:

Una vez se elige el equipo, aparece un nuevo botón, el botón “Intercambiar”. Si se hace clic, se pondrá en primer plano el cuadrante de este equipo (detrás de la pestaña de tabla de cobertura).

¡Importante!

Si se intercambia el equipo, la barra de localizaciones cambiará a color lila, esto indica que no se pueden realizar modificaciones sobre ese cuadrante (modo solo visualización). Si se quiere volver al equipo anterior al intercambio se debe volver a la pantalla de “mis equipos”, ya que si se intenta volver desde el botón “Intercambiar” ambos cuadrantes aparecerán de color lila y no se puede modificar.
