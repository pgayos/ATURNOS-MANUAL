---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-e-peticiones
title: Peticiones
description: En ajustes, existe una configuración avanzada dedicada a las peticiones del equipo.
contentType: reference
module: Peticiones y cambios
submodule: Usuarios y perfiles
subtopic: ""
intent: Peticiones
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
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
    - https://manual.aturnos.com/knowledgebase/e-peticiones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/e-peticiones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre peticiones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/e-peticiones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/e-peticiones/
  contentHash: a6bfc5267331ef7a727652e16ab68aca3638a5167e2bfe3abea8a54cf705546b
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

En ajustes, existe una configuración avanzada dedicada a las peticiones del equipo.

### Flujo de peticiones

Para las peticiones se puede personalizar el flujo de aprobación. Igual que ocurre con los cambios de turno, se pueden definir una serie de pasos (4) para aprobar o cancelar la petición hasta conseguir la aceptación definitiva de la misma, para ello se deben indicar los roles o perfiles de usuarios que aprobarán en cada paso (ver roles de aTurnos ).

Aqui te mostramos algunos ejemplos de como configurar este flujo.

- Ejemplo de flujo 1: nivel mínimo = Administrador Validador, nivel máximo = Administrador Planificador, cualquiera de estos dos roles de administrador puede aprobar la petición.

- Ejemplo de flujo 2: nivel mínimo=Administrador Total, nivel máximo= Administrador Total, solo este rol puede dar la aprobación definitiva de la petición.

### Autovalidación de peticiones

Con esta opción, los administradores validadores y planificadores del equipo podrán validarse sus propias peticiones si están dentro del flujo de aprobación de peticiones.

### Solo puede aprobar una petición un administrador de nivel superior

En este caso, solo se podrán validar las peticiones por administradores de nivel superior al que realiza la petición.

### Solo puede aprobar una petición un administrador de una localización padre

### Denegar peticiones que son iguales en otros equipos

Si se deniega una petición y existe una igual en otros equipos que puede ver el administrador que la deniega, se denegará también.

### Permitir a los administradores aceptar ofertas a trabajadores que no pertenezcan su misma localización

### Permitir hacer ofertas de horas y turnos a pasado

Esta opción, tal como su nombre indica, permite al administrador ofertar turnos en días pasados. Esta opción puede ser útil cuando se ha trabajado un turno u hora extra no planificada por alguna decisión de última hora o imprevisto.

### Enviar notificaciones a trabajadores y administradores planificables ocultos y no planificables

Esta opción envía notificaciones a los trabajadores y administradores marcados como “No planificables” o como “Planificable oculto” sobre las peticiones que realice el administrador sobre su cuadrante.

### Permitir cancelar peticiones a los administradores totales

Con esta opción en SI, las peticiones de los administradores totales pueden ser aceptadas por otros administradores.

### Permitir ver las peticiones de otros compañeros desde el cuadrante:

Con esta opción en SI los trabajadores podrán ver las peticiones de sus compañeros, cuando aún no han sido aprobadas, es decir, han sido solicitadas por el compañero, pero está en proceso de aprobación. Habilitarlo puede ser útil cuando se necesita controlar un tipo de petición por día, de esta manera el trabajador estará informado de si hay más compañeros que ya hayan hecho esa solicitud.

También cuando un trabajador va a solicitar un cambio con un compañero, podrá ver si el compañero está en proceso de petición ese día de vacaciones o algún permiso.

### Horas normales: Rol mínimo para aceptar peticiones

Se selecciona el rol de usuario que permite aceptar las peticiones de horas normales (Ver mas sobre Tipos de horas ). No podrán ser aceptadas las peticiones de horas normales, por usuarios con rol inferior al indicado.

### Horas Extra: Rol mínimo para aceptar peticiones

Se selecciona el rol de usuario que permite aceptar las peticiones de horas extra (Ver mas sobre Tipos de horas ). No podrán ser aceptadas las peticiones de horas extra por usuarios con rol inferior al indicado.

### Horas Complementarias: Rol mínimo para aceptar peticiones

Se selecciona el rol de usuario que permite aceptar las peticiones de horas complementarias (Ver mas sobre Tipos de horas ). No podrán ser aceptadas las peticiones de horas complementarias por usuarios con rol inferior al indicado.

### Restricciones a comprobar al hacer una nueva petición

Permite configurar el sistema para que cuando el trabajador realice una petición se compruebe si cumple con las restricciones obligatorias y/o deseables. Existe 2 opciones:

Obligatorias y deseables, cuando se realiza una petición, se comprueba si las restricciones “obligatorias y deseables”, que tiene asignada el trabajador implicado en la petición, son incumplidas si fuese aceptada la petición. En el caso de que se incumpliera alguna de las restricciones, aparece un aviso de que se está incumpliendo la restricción antes de realizar la petición.

Obligatorias, cuando se realiza una petición, se comprueba solo restricciones “obligatorias”, que tiene asignada el trabajador implicado en la petición, son incumplidas si fuese aceptada la petición, en el caso de que se incumpliera alguna de las restricciones, aparece un aviso de que se está incumpliendo la restricción antes de realizar la petición. En el caso de que incumpliese una restricción “deseable” dejaría hacer la petición, sin previo aviso.

En el proceso de aprobación la petición si aparecerá el aviso de que alguna restricción se esté incumpliendo, si fuese el caso.

Cuando el trabajador realice una petición y esté incumpliendo una restricción, le mostrará el alerta según se configure este punto. (Ver más acerca de Crear o Añadir Restricciones )

### Rol mínimo para solicitar peticiones de absentismos a otros trabajadores

Se configura el nivel mínimo de Rol que debe tener un responsable de equipo para aprobar peticiones relacionadas a absentismos (Permiso del día completo o permiso de horas en su jornada laboral del día).

### Insertar un tipo de turno en los primeros días sin planificar cuando se aprueben peticiones de vacaciones en días naturales

Si se aceptan las vacaciones, a los primeros días post-vacaciones se le añaden turnos automáticamente, aunque antes de las vacaciones ese día estuviese Libre.

### Eliminar absentismos temporales y horas al aceptar peticiones con la opción sustituir

Si se configura esta opción en SI, cuando se realiza una sustitución en la que el trabajador sustituto tiene planificado un absentismo temporal u horas (normales, complementarias o extras), se le eliminará el absentismo temporal u horas que coincidan con el turno tras la sustitución.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Flujo de peticiones](/media/manual/flujo-de-peticiones-3fac237132.png)

![Flujo de peticiones](/media/manual/flujo-de-peticiones-4f1916745d.png)

![e. Peticiones](/media/manual/e-peticiones-61b43033e5.png)
