---
schemaVersion: "1.0"
contentId: planificacion-b-operativa-diaria-del-cuadrante
title: Operativa diaria del cuadrante
description: Al entrar al cuadrante, nos encontramos con la información de la planificación en un formato de tabla.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Operativa diaria del cuadrante
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cuadrante
    label: Cuadrante
  - id: diaria
    label: Diaria
  - id: operativa
    label: Operativa
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
    - https://manual.aturnos.com/knowledgebase/b-operativa-diaria-del-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-operativa-diaria-del-cuadrante/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre operativa diaria del cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-operativa-diaria-del-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-operativa-diaria-del-cuadrante/
  contentHash: 73755a320dab184cd16a91b3ceaa3897878627d124917e7ccf0c37508ee106c5
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre operativa diaria del cuadrante, con instrucciones y contexto revisables por el equipo de aTurnos.

Al entrar al cuadrante, nos encontramos con la información de la planificación en un formato de tabla. Según la vista de cuadrante que tengamos (día, semana, …, mes) veremos más o menos detalle de la planificación. Al hacer clic en el día tendremos la opción de realizar peticiones y/o cambios de turnos, que entrarán dentro del flujo de aprobación definido.

### ¿Qué es una petición?

Son las solicitudes de modificación de la planificación, que el trabajador pide al administrador. El administrador la gestiona dentro de un flujo definido en la configuración del equipo para que sean validadas y se actualicen en el cuadrante, existen diferentes tipos de peticiones:

- Vacaciones: Solicita aquí tus vacaciones para que sean aprobadas.
- Permisos: Suelen coincidir con los permisos permitidos en los convenios colectivos, como los permisos de mudanza, de matrimonio, etc. Se solicitan para todo el día, y, por lo tanto, para el turno completo de trabajo que tenga asignado.
- Permisos temporales: Son permisos similares a los anteriores, la diferencia es que el permiso es sobre una parte del turno de trabajo, es decir, que se puede solicitar por horas. Un ejemplo de este tipo de permisos puede ser la visita médica (cuando no ocupa toda la jornada, el permiso es por unas horas).
- Turnos: Como trabajador puedes solicitar la realización de turnos, es decir, puedes solicitar al administrador trabajar un turno específico en un día determinado. Esta opción puede estar deshabilitada.
- Horas: Muestra una lista con los tipos de horas que podemos seleccionar para nuestra petición, debe indicar un inicio, un fin y un tipo de hora.
- Libres: Solicita librar días a los administradores sobre la planificación existente.

Se puede solicitar sobre el mismo cuadrante para los días que quieres realizar la petición. Tienes el detalle en el manual de peticiones y cambios.

Sobre el cuadrante, puedes validar que la petición está en proceso de aprobación con la abreviatura de la petición en color morado sobre los días solicitados. Además, tienes un listado con todas las peticiones en proceso y del histórico.

### ¿Qué es un cambio de turno?

El cambio de turno es uno de los procesos más usado por los profesionales que trabajan a turnos. El cambio de turno entre trabajadores facilita la conciliación laboral y familiar, disminuyendo el número de absentismos por la flexibilidad en la planificación de los trabajadores con sus cambios de turnos.

El cambio de turno implica el movimiento o cesión de turnos de un trabajador a otro trabajador dentro del mismo día. Esto se realiza para el mismo día, así validamos que existen las mismas coberturas que fueron planificadas. Esta acción solo es posible realizarla en un día presente o en un día futuro del cuadrante, nunca a pasado.

Los cambios de turnos, según configuración, pueden ser validados por los trabajadores implicados en el cambio y el administrador del equipo. Todos los cambios de turnos entre trabajadores quedan registradossss en un histórico de cambios, accediendo a ellos para cualquier consulta o seguimiento cuando sea requerido.

Si necesitas cambiar un turno con un compañero, se manejan varios escenarios en aTurnos, existiendo tres tipos de cambios de turnos: Intercambia r turno en el mismo día, Librar un turno planificado, o doblar turno en el mismo día.

Por lo tanto, para iniciar el cambio tienes que hacer clic en el cuadrante dentro del turno. Se desplegará un menú donde aparecerá la opción ‘ Hacer cambio’. Después deberás seleccionar el tipo de cambio, estos una vez que los solicites deberán ser aprobados por el compañero al que se lo solicitas y/o por el administrador del equipo.

- Hacer cambio → Intercambio: Selecciona el turno que quieres intercambiar haciendo clic sobre él y hacer cambio → intercambio, ahora aparecerán las opciones de intercambio que te muestra el sistema. Una vez seleccionado el intercambio, falta la aprobación del compañero y el administrador, una vez aprueben o denieguen el intercambio recibirás un aviso en aTurnos, o en tu correo o móvil (si tienes los permisos activados).
- Hacer cambio → Libre: Cambiar tu turno por un libre, en este caso puedes tener dos opciones, si el día marcado contiene dos turnos puedes elegir entre solo cambiar un turno por un libre o elegir el día libre completo, es decir, cambiar los dos turnos de ese día por un día libre completo. Para solicitar el cambio por libre tienes que seguir los siguientes pasos: Selecciona la casilla del turno que quieres cambiar. El sistema te muestra los libres disponibles de tus compañeros, selecciona el que quieras. Ahora te mostramos una ventana donde debes informar si quieres “dejar a deber” o “devolver el cambio”. Si seleccionas “Dejar a deber”. El turno quedará guardado registro → debe/haber turnos, y el compañero podrá solicitarlo cuando lo necesite. Si selecciones “Devolver el cambio”. Eliges que turno le devolverás el cambio. Ahora el administrador y tu compañero deben aprobar los cambios.
- Hacer cambio → Doblaje: Solicita un libre a un compañero que tenga un turno diferente al tuyo y así pueda doblar el turno, por ejemplo, si el trabajador que solicita tiene un turno M(mañanas) y quiere librar ese día, la opción doblaje le dará resultados en el cuadrante de turnos diferentes a M, para que sus compañeros puedan hacer su M y por ejemplo su T (tardes) que ya tenían planificado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![¿Qué es una petición?](/media/manual/que-es-una-peticion-0337c5eb96.png)
