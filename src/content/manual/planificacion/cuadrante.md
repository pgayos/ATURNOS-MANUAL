---
schemaVersion: "1.0"
contentId: planificacion-cuadrante
title: Cuadrante
description: El Cuadrante es la herramienta principal de un trabajador dentro de aTurnos.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Cuadrante
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
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
    - https://manual.aturnos.com/knowledgebase/cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/cuadrante/
ai:
  answerableQuestions:
    - ¿Cómo puedo cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/cuadrante/
  contentHash: ad744a384fb8995a8097ce86f3f292cc95427c83b54dd8079945be7c4b05e781
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Aprende a cuadrante, con instrucciones y contexto revisables por el equipo de aTurnos.

El Cuadrante es la herramienta principal de un trabajador dentro de aTurnos. Si tu supervisor o administrador ya ha planificado tu horario, aquí se mostrarán los turnos, las horas, los absentismos y las vacaciones que hayan sido aplicadas al cuadrante.

### 3.1 Vista del cuadrante

Para empezar, podrás ver tu cuadrante y tus turnos planificados, así como las vacaciones (amarillo), cambios de turno (gris) o permisos (negro) de 2 maneras distintas:

- Cuadrícula

- Listado

Además podrás seleccionar el mes que quieras visualizar e ir deslizando para ver el día en concreto que desees.

Podrás seleccionar también cómo observar el turno: el turno solo, el turno con el horario o el turno con localización y todos los detalles.

### 3.2 Realizar petición

Si quieres realizar cualquier tipo de petición, ya sean vacaciones, permisos, turnos, horas o día libre, podrás realizarla también directamente desde el Cuadrante pulsando en el día en que desees. Además tendrás que completar los siguientes campos y hacer clic en “Solicitar”:

- Tipo: en aTurnos podrá realizar hasta 6 tipos diferentes de solicitudes como vacaciones, permisos, permisos temporales, horas, turnos y jornadas libres.
- Localización: en el caso de querer elegir una localización determinada.
- Fecha de inicio y fin: fecha inicio de la petición y fecha fin de la petición.
- Comentarios: las peticiones pueden llevar adjunto un comentario.
- Adjuntar archivo: en el caso de que se requiera o necesite adjuntar un documento al realizar la petición.

### 3.3 Añadir comentario

Como opción nueva hemos agregado la de añadir comentarios en el día seleccionado, la cual podrá realizarse teniendo un turno planificado o bien sin tenerlo previamente.

A la hora de añadir un comentario hay dos opciones:

- Que sea visible para mi únicamente (el trabajador que lo escribe)
- Que sea visible para el trabajador y los administradores del equipo.

En los días que haya insertado un comentario de cualquier tipo, quedaría visible de la siguiente manera:

### 3.4 Realizar cambio de turno

Además de las dos actividades anteriores, en el caso de que en el día que hagamos clic ya tengamos un turno planificado, se podrá realizar un cambio de turno con otro compañero. En este caso, se abrirá la siguiente pantalla:

De esta manera se podrán realizar cambios de 5 maneras diferentes:

- Libre: En este tipo de cambio el trabajador selecciona un turno que tiene planificado con el fin de que ese turno lo realice otro trabajador. El trabajador puede librar ese día (en el caso que solo tenga 1 turno planificado en ese día). En este caso, el turno que seleccione el trabajador será el turno que se libera de hacer y se planificará en el día libre del trabajador que ha aceptado el cambio.
- Libre (día completo): En este caso, el trabajador puede liberarse de todos los turnos planificados que tenga el mismo día y quedar libre de planificación en esta segunda opción, porque los turnos de ese día se insertarán en el trabajador que haya aceptado previamente este tipo de cambios de libres.
- Intercambio: Cuando un trabajador necesita cambiar un turno en el mismo día, el ejemplo habitual es un trabajador con turno M (de mañana) quiere cambiar el turno por otro trabajador que lo tiene por la tarde (T), de manera que al realizar el intercambio, se modifica la planificación. Al seleccionar la opción “Intercambio“, la aplicación muestra a todos los trabajadores con turno (distinto) del que tiene el trabajador solicitante. El sistema permite un cambio de turno en el mismo día entre tipos de turnos diferentes con el fin de garantizar que la cobertura sea la misma antes del proceso del cambio.
- Intercambio (día completo): Esta opción es igual que la anterior, pero en el caso de que el trabajador tenga planificados dos turnos diferentes ese mismo día (Mañana y Tarde), se realizará el intercambio con ambos turnos.
- Doblaje: En este tipo de cambio el trabajador selecciona un turno que tiene planificado con el fin de que ese turno lo realice otro trabajador (con planificación previa). El trabajador puede librar ese día (en el caso que solo tenga 1 turno planificado en ese día) haciendo doblar al compañero que acepta el turno.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3.2 Realizar petición](/media/manual/3-2-realizar-peticion-981f490812.png)

![3.3 Añadir comentario](/media/manual/3-3-anadir-comentario-fdb33b907e.png)

![3.3 Añadir comentario](/media/manual/3-3-anadir-comentario-19982926f7.png)

![3.4 Realizar cambio de turno](/media/manual/3-4-realizar-cambio-de-turno-b58e859009.png)

![3.1 Vista del cuadrante](/media/manual/3-1-vista-del-cuadrante-9c5f4a1ea0.png)

![3.1 Vista del cuadrante](/media/manual/3-1-vista-del-cuadrante-60082f947f.png)
