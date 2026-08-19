---
schemaVersion: "1.0"
contentId: control-horario-1-4-anadir-insertar-modificar-y-cerrar-fichajes
title: Añadir, insertar, modificar y cerrar fichajes
description: Todos los fichajes modificados o insertados por el administrador se guardarán como fichajes manuales. Para poder insertar fichajes debes acceder a Control de Presencia → Detalle o Detalle por trabajador.
contentType: procedure
module: Control horario
submodule: Fichajes
intent: Añadir, insertar, modificar y cerrar fichajes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anadir
    label: Anadir
  - id: cerrar
    label: Cerrar
  - id: fichajes
    label: Fichajes
  - id: insertar
    label: Insertar
  - id: modificar
    label: Modificar
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
    - https://manual.aturnos.com/knowledgebase/1-4-anadir-insertar-modificar-y-cerrar-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-anadir-insertar-modificar-y-cerrar-fichajes/
ai:
  answerableQuestions:
    - ¿Cómo puedo añadir, insertar, modificar y cerrar fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-4-anadir-insertar-modificar-y-cerrar-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-anadir-insertar-modificar-y-cerrar-fichajes/
  contentHash: 871bcee2172de8250c5c1e971ebffb9adf6cc4fa3510f772c8556e288ae85511
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Todos los fichajes modificados o insertados por el administrador se guardarán como fichajes manuales. Para poder insertar fichajes debes acceder a Control de Presencia → Detalle o Detalle por trabajador.

## Procedimiento
Este botón permite al administrador añadir nuevos fichajes de forma manual a un trabajador. Para ello se debe:

- Seleccionar al trabajador.
- Indicar fecha y hora del fichaje
- Informar el sentido del fichaje, como entrada o salida.
- Localización del fichaje si existe (ver Localizaciones ).
- Tipo de fichaje si existen varios (ver Tipos de fichaje ).

Cuando se añade un fichaje, aparece reflejado con una línea roja en la línea del tiempo.

Existen varias formas para insertar fichajes dependiendo de si lo que se desea insertar es un único fichaje (por ejemplo, para cerrar fichajes no cerrados como una entrada cuya salida no se ha fichado) o varios fichajes a la vez (por ejemplo, en el caso de una jornada partida, cuatro fichajes, dos de entrada (a las 9:00 y a las 15:00) y dos de salida (a las 14:00 y a las 18:00)).

Desde el botón de ‘Ajustar’, se despliegan dos opciones desde las cuales insertar fichajes:

- Insertar fichajes.
- Insertar fichajes con arrastre.

Esta función permite insertar un fichaje (si no está cerrado) o varios (si no hay ningún fichaje o se trata de una jornada partida), en base al turno y/o el tipo de hora planificado en el cuadrante.

En los casos, donde un trabajador haya realizado un fichaje de entrada antes o después de la hora de inicio del turno planificado (periodo verde), al insertar el fichaje con arrastre realizará un fichaje de entrada o salida manteniendo la duración total del turno planificado.

Por ejemplo, si un trabajador ficha 15 minutos más tarde de su hora de inicio, utilizando esta opción inserta el fichaje de salida ampliando la duración del fichaje en tantos minutos como tiempo de menos que ha realizado al inicio del turno.

Todas las líneas rojas que hay en la línea del tiempo de un día o aquellos fichajes cerrados que forman un periodo naranja entre el fichaje de entrada y el de salida, pueden ser modificables de forma manual.

Para modificar un fichaje, hay que hacer clic sobre el fichaje o el periodo naranja de un fichaje cerrado

Todos los fichajes modificados o insertados por el administrador se guardarán como fichajes manuales. Para poder cerrar fichajes debes acceder a Control de Presencia → Detalle o Detalle por trabajador

Cerrar fichajes implica añadir una salida a una entrada, o viceversa. Los fichajes cerrados (entrada y salida) suman una cantidad de tiempo, si solo existe la entrada o la salida, el sistema no puede calcular el tiempo total trabajado en un día porque el fichaje está incompleto.

Estos casos se pueden cerrar manualmente desde la función de ‘Insertar fichajes’.

Si los trabajadores se olvidan de fichar la entrada o la salida, pueden realizar una petición de fichaje, la cual según la configuración del control de presencia (ver Ajustes de configuración ) puede necesitar la validación de un administrador (ver Peticiones de fichajes ).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/anadir-marcajes-6ebb1cda06.png)

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/anadir-marcajes-e38ba774a7.png)

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/insertar-o-modificar-marcajes-fe79415dd9.png)

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/1-4-anadir-insertar-modificar-y-cerrar-fichajes-9421c1e966.webp)

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/1-4-anadir-insertar-modificar-y-cerrar-fichajes-22fe4ecb01.webp)

![1.4 Añadir, insertar, modificar y cerrar fichajes](/media/manual/1-4-anadir-insertar-modificar-y-cerrar-fichajes-46c34063e2.webp)
