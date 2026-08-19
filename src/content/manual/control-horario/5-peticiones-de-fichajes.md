---
schemaVersion: "1.0"
contentId: control-horario-5-peticiones-de-fichajes
title: Peticiones de fichajes
description: Si por error u olvido no se han registrado los fichajes de entrada o salida en el control de presencia, tienes la opción de solicitar a los administradores del equipo la petición de cerrar e.
contentType: troubleshooting
module: Control horario
submodule: Fichajes
intent: Peticiones de fichajes
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
  - id: peticiones
    label: Peticiones
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
    - https://manual.aturnos.com/knowledgebase/5-peticiones-de-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-peticiones-de-fichajes/
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Peticiones de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-peticiones-de-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-peticiones-de-fichajes/
  contentHash: a27329d1ed5adcc6a578e5dc7c15f4c535f72dfd0f4eba621584437d840302af
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre peticiones de fichajes, con instrucciones y contexto revisables por el equipo de aTurnos.

Si por error u olvido no se han registrado los fichajes de entrada o salida en el control de presencia, tienes la opción de solicitar a los administradores del equipo la petición de cerrar esos fichajes o añadir algún fichaje que no se haya podido registrar.

Desde ‘Peticiones de fichaje’ dentro del menú de Control de Presencia, aTurnos mostrará un listado con todos los ‘Fichajes pendientes’, es decir, que no se han cerrado con respecto a la planificación. Tanto el total del turno planificado donde no se haya informado ni la entrada ni la salida, como aquellos donde quedó pendiente fichar el inicio de jornada de trabajo o el final de la misma.

## Fichajes pendientes ¿Cómo solicitar una petición de fichajes?

Un trabajador puede solicitar directamente la petición del fichaje sobre el inicio y fin del turno planificado o bien ‘Añadir’ una petición de fichaje con una fecha, hora y dirección (entrada o salida) determinada.

### Solicitar una petición de fichaje de un turno predeterminado

Si existe un turno planificado con una hora de inicio y fin, el trabajador puede solicitar el fichaje con esa hora de inicio y fin del turno.

Para ello debe hacer clic sobre el botón ‘Solicitar’ y ‘Guardar’ para registrar la petición que deberá ser autorizada por el administrador del equipo.

### Solicitar una petición de fichaje de un turno predeterminado indicando la hora de inicio y fin

De la misma forma que la anterior, es posible solicitar la petición de fichaje sobre el tipo de turno planificado y modificar la hora de inicio y fin.

Haciendo clic sobre ‘Solicitar’, se mostrará el modal con los fichajes de entrada y salida, tanto la hora de inicio como la hora fin, se pueden modificar, reflejando la hora real de cada fichaje no realizado y que se está solicitando.

En este caso, se quiere solicitar en la petición de fichaje que se debió fichar la entrada a las 07:30.

Y la salida, se debió fichar a las 15:10.

### Solicitar una petición de fichaje cuando ya existe el fichaje de entrada y falta la salida

En los casos en el que existan fichajes, como por ejemplo el fichaje de entrada al inicio del turno y que lo que no se fichara fuera la salida, en listado de fichajes pendientes se mostrará que existe un ‘Fichaje realizado’, en este caso de ejemplo, a las 07:50.

El trabajador únicamente deberá hacer clic sobre el botón ‘Solicitar’ e indicar la hora del fichaje de salida y ‘Guardar’ para registrar el petición.

### Solicitar una petición de fichaje cuando ya existe el fichaje de salida y falta la entrada

Si existe un fichaje de salida como por ejemplo a las 14:55, éste aparecerá como ‘Fichaje realizado’ en el listado de fichajes pendientes, faltando la entrada.

El trabajador únicamente deberá hacer clic sobre el botón ‘Solicitar’ e indicar la hora del fichaje de entrada y ‘Guardar’ para registrar el petición.

### Añadir una petición de fichaje de entrada y salida

La última opción de petición, es crear directamente en el día y hora la petición de fichaje de entrada o salida.

En la parte superior, en la barra se encuentra el botón ‘Acciones’, haciendo clic sobre él se despliega la opción ‘Nueva petición’.

Aparecerá el modal donde se tienen que añadir los fichajes a solicitar en la petición. Para ello existen los botones de ‘Añadir Entrada’ para un fichaje de inicio del registro de la jornada de trabajo o ‘Añadir salida’ para un fichaje de finalización del turno de trabajo.

Una vez añadidos los fichajes a solicitar, el trabajador debe ‘Guardar’ para registrar la petición.

## Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?

En ocasiones se producen fichajes realizados de forma incorrecta, sobre todo en los casos de los dispositivos de lectura de huellas al poner el dedo en más de una ocasión.

Estos fichajes que en condiciones normales se pueden registrar en aTurnos de forma incorrecta, pueden ser eliminados.

Para ello el trabajador puede realizar una petición de ‘Solicitar modificación’ de los fichajes incorrectos.

Esta solicitud se puede realizar en el ‘Detalle’ o en el ‘Detalle por trabajador’.

En este caso, existen dos fichajes que queremos solicitar para que se eliminen.

El fichaje de las 10:05 es erróneo.

También es erróneo el fichaje de las 10:15, de esta forma cuando sean eliminados solo quedaría el fichaje de entrada de las 10:00 horas que es el válido.

Se debe hacer clic sobre el botón ‘Solicitar modificación’ y eliminar los fichajes haciendo clic sobre el botón de la papelera.

Una vez son eliminados los fichajes, se debe hacer clic sobre el botón ‘Solicitar’ para registrar la petición de modificación de fichaje, en este caso, para eliminar fichajes incorrectos.

Todas aquellas solicitudes que estén todavía por validar por los administradores, se mostrarán dentro de ‘Peticiones de fichajes’, en el listado de ‘Peticiones pendientes’.

En este listado de peticiones pendientes se puede ver el detalle de la solicitud realizada, así como tener la opción de eliminar la petición.

Una vez la petición sea validada por los administradores del equipo, los fichajes incorrectos habrán desaparecido.

## Peticiones pendientes

Las peticiones que estén pendientes de ser aceptadas por los administradores del equipo de trabajo, se mostrarán en el listado de la pestaña ‘Peticiones pendientes’.

El trabajador puede saber cuántas peticiones quedan aún pendientes de validar, ya que tanto en el menú como en la pestaña, aparecerá una notificación con un número dentro de un círculo azul indicando la cantidad de peticiones pendientes.

### Denegar una petición realizada

El trabajador puede haber realizado también una petición de fichaje incorrecta.

Para poder eliminarla antes de ser validada, en el listado de ‘Peticiones pendientes’ se muestra un botón de acción para poderla cancelar.

Al hacer clic sobre este botón, el sistema alertará preguntando si se desea denegar la petición de fichaje.

## Histórico

Cuando una petición sea aceptada, ya sea de forma automática o necesitando la validación de algún administrador del equipo, así como aquellas que hayan sido canceladas por el trabajador o denegadas por el administrador, se mostrarán en el listado de la pestaña ‘Histórico’ donde se indicará el estado.

El trabajador también podrá comprobar que una petición ha sido aprobada, si al acceder a su ‘Detalle por trabajador’ puede ver pintado el fichaje que solicitó en la petición.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Solicitar una petición de fichaje de un turno predeterminado](/media/manual/solicitar-una-peticion-de-fichaje-de-un-turno-predeterminado-1f879ce9fd.webp)

![5. Peticiones de fichajes](/media/manual/5-peticiones-de-fichajes-3bcd7789fb.webp)

![Solicitar una petición de fichaje cuando ya existe el fichaje de entrada y falta la salida](/media/manual/solicitar-una-peticion-de-fichaje-cuando-ya-existe-el-fichaje-de-entra-c8de67a33f.webp)

![Solicitar una petición de fichaje de un turno predeterminado indicando la hora de inicio y fin](/media/manual/solicitar-una-peticion-de-fichaje-de-un-turno-predeterminado-indicando-42802c871b.webp)

![Solicitar una petición de fichaje cuando ya existe el fichaje de salida y falta la entrada](/media/manual/solicitar-una-peticion-de-fichaje-cuando-ya-existe-el-fichaje-de-salid-841c761ed7.webp)

![Solicitar una petición de fichaje de un turno predeterminado](/media/manual/solicitar-una-peticion-de-fichaje-de-un-turno-predeterminado-471e7ff028.webp)

![Añadir una petición de fichaje de entrada y salida](/media/manual/anadir-una-peticion-de-fichaje-de-entrada-y-salida-8fdfa67264.webp)

![Solicitar una petición de fichaje cuando ya existe el fichaje de salida y falta la entrada](/media/manual/solicitar-una-peticion-de-fichaje-cuando-ya-existe-el-fichaje-de-salid-e02cf1ab64.webp)

![Añadir una petición de fichaje de entrada y salida](/media/manual/anadir-una-peticion-de-fichaje-de-entrada-y-salida-9c33f38630.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-86e9d9d520.webp)

![Añadir una petición de fichaje de entrada y salida](/media/manual/anadir-una-peticion-de-fichaje-de-entrada-y-salida-a1c2378f6b.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-87ea38be81.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-aee5e248ee.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-7e9a7e1e91.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-9043fc4f68.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-b570824b3e.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-4a7713204c.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-f7be168093.webp)

![Fichajes realizados que se quieren modificar ¿Cómo solicitar una petición de modificación de fichajes?](/media/manual/fichajes-realizados-que-se-quieren-modificar-como-solicitar-una-petici-9ca5bb0072.webp)

![Peticiones pendientes](/media/manual/peticiones-pendientes-f70e47bc93.webp)

![Denegar una petición realizada](/media/manual/denegar-una-peticion-realizada-f68b0fad57.webp)

![Peticiones pendientes](/media/manual/peticiones-pendientes-71b97f2b71.webp)

![Histórico](/media/manual/historico-ee0fa08abb.webp)

![Denegar una petición realizada](/media/manual/denegar-una-peticion-realizada-0a94c8654c.webp)

![Histórico](/media/manual/historico-c95c699a10.webp)
