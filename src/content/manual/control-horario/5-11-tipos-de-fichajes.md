---
schemaVersion: "1.0"
contentId: control-horario-5-11-tipos-de-fichajes
title: Tipos de fichajes
description: El sistema funciona por pares, es decir, se necesita un fichaje de entrada y otro fichaje de salida para cerrar el fichaje.
contentType: procedure
module: Control horario
submodule: Altas y bajas
intent: Tipos de fichajes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fichajes
    label: Fichajes
  - id: tipos
    label: Tipos
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
    - https://manual.aturnos.com/knowledgebase/5-11-tipos-de-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-11-tipos-de-fichajes/
ai:
  answerableQuestions:
    - ¿Cómo puedo tipos de fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-11-tipos-de-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-11-tipos-de-fichajes/
  contentHash: b0b1ab764088ced980143f5de60f30dc992a2d15439858b86e8c85aec3e4ef81
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El sistema funciona por pares, es decir, se necesita un fichaje de entrada y otro fichaje de salida para cerrar el fichaje.

## Procedimiento
Estos fichajes pueden ser de dos tipos:

- Computables. Se representan con una barra naranja y computan el tiempo trabajado y presencial que se ficha.

- No computables. Se representan con una barra gris y no afectan al cómputo del tiempo trabajado o presencial.

Los trabajadores pueden seleccionar qué tipo de fichaje están realizando, por defecto en todos los equipos existe “Checkin/out” que computa las horas trabajadas y presenciales de la jornada.

Se pueden crear tipos de fichajes desde el botón ‘Acciones’ y ‘Añadir tipo de fichaje’.

Al crear un nuevo tipo de fichaje se necesita informar:

- Nombre, para identificar el tipo de fichaje.
- Descripción, para explicar para qué es este tipo de fichaje.
- Computa en el horario, permite configurar si es ‘Computable’ o ‘No computable’
- Tipo de hora, configura el tipo de hora añadida con el que se va a ajustar de forma automática el fichaje cuando hay exceso de tiempo fichado.
- Tipo de absentismo, configura el absentismo con el que se va a ajustar de forma automática el fichaje cuando hay defecto de tiempo fichado.
- Disponibilidad, el tipo de fichaje puede estar disponible solo para App, ó Web y App
- Orden, dependiendo del número informado, de menor a mayor, se ordenará el listado de los tipos de fichajes.

Todos aquellos tipos de fichajes creados, pueden ser editados y eliminados, desde los botones de acciones del listado.

Los fichajes no computables se pueden visualizar tanto en el Diario como en el Detalle. De forma estadística, estos fichajes se pueden consultar en el Listado de fichajes.

En aTurnos, los tipos de fichajes no se eliminan, lo que ocurre es que se fusiona el tipo de fichaje, que se quiere eliminar, con otro tipo de fichaje existente en el listado. El motivo de que no se elimine del sistema, es para que no desaparezcan los fichajes existentes de los trabajadores del tipo de fichaje, que se ha eliminado del listado de tipos de fichajes del equipo.

La fusión de tipos de fichaje se puede realizar entre fichajes que ambos computen, o que ambos no computen. No se puede fusionar, por ejemplo, un tipo de fichaje que compute con otro que no compute.

A continuación, os mostramos con imágenes un caso de uso: Eliminar el tipo de fichaje computable tipo 3, el cual se fusionará en el tipo de fichaje computable tipo 1.

Se hará clic en el icono de la papelera del tipo fichaje tipo 3, se abre un formulario donde se debe elegir el tipo de fichaje, en el que se quiere fusionar el tipo de fichaje 3, en nuestro ejemplo, seleccionamos el fichaje tipo 1. Cuando se fusione, al hacer clic en el botón “Migrar”, todos los fichajes que se registraron como tipo 3, pasarán a identificarse en tipo 1. A su vez, el fichaje tipo 3, dejará de estar disponible en el listado y, por tanto, los trabajadores no pueden fichar con el fichaje tipo 3.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-ae1d5128b7.webp)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-0d5bb020c2.png)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-f80c1c8ebe.png)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-1fa9015c7f.webp)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-82ae22d7e2.png)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-4f85446b79.png)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-1cb1c889b0.png)

![5.11 Tipos de fichajes](/media/manual/5-11-tipos-de-fichajes-4c8a985cd8.png)
