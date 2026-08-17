---
schemaVersion: "1.0"
contentId: "planificacion-a-opciones-cuadrante"
title: "Opciones cuadrante"
description: "El cuadrante cuenta con varias opciones para realizar las siguientes funciones:."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Opciones cuadrante"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cuadrante"
    label: "Cuadrante"
  - id: "opciones"
    label: "Opciones"
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
    - "https://manual.aturnos.com/knowledgebase/a-opciones-cuadrante/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/a-opciones-cuadrante/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre opciones cuadrante?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "a9ae5a2bcf89e45a6540433b6a14820f5c403d487ffbef80b0e571097c451ac1"
  migratedAt: 2026-08-17
---
## Resumen

El cuadrante cuenta con varias opciones para realizar las siguientes funciones:.

### Añadir trabajadores

Haciendo clic en ‘ Añadir’, se pueden dar de alta a nuevos trabajadores.

- C on email y nombre, en caso de saber los datos del trabajador que se va a añadir.
- Si no tienen aún email y nombre, si se desconoce la identidad del trabajador, aTurnos autogenera un nombre y correo ficticio (si no ha sido activado el perfil, con esta opción accediendo al perfil del trabajador se puede editar su nombre y correo).

Para más información sobre las altas de los trabajadores, ver Añadir trabajadores.

Para realizar diferentes acciones en el cuadrante se pueden realizar al hacer clic en el botón de la rueda de opciones.

### Extender planificación del cuadrante

Esta opción permite extender la planificación del último patrón aplicado a los trabajadores. Es importante que sea la extensión de un patrón ya aplicado, ya que los patrones insertan datos de planificación en el perfil del trabajador. Esta información también se puede conocer desde la función ‘ Info ‘ del menú operativa del tu rno.

Haciendo clic en ‘ Extender planificación’ aparecen las siguientes opciones:

- Comenzar desde el inicio del patrón: Si marcas esta opción, el patrón se aplicará desde su primer período, sin importar cómo terminó la última planificación. Úsala si quieres reiniciar el patrón desde el principio. No la marques si deseas continuar desde donde se quedó en la planificación anterior.
- Hasta final de mes: Seleccionando esta opción, el patrón se extenderá hasta el último día del mes especificado, en lugar de hasta una fecha concreta.
- Festivos y vacaciones: Si marcas “Sí” en estas opciones: El patrón también se aplicará en los días marcados con el turno ‘V’ (vacaciones). Se insertarán turnos en los días definidos como festivos.
- En días con absentismo total: Aquí puedes elegir entre dos comportamientos: Insertar el patrón normalmente, incluso si hay un absentismo total. No insertar el patrón en los días donde exista un absentismo total registrado.

Recomendación: Si necesitas que cada mes la planificación sea idéntica, respetando por ejemplo que todos los días 6, 7, 8 y 9 de todos los meses el trabajador tenga libre, debes marcar “Comenzar desde inicio de patrón”. Al marcar esta opción, la planificación de los días 1, 2 y 3 de marzo, por ejemplo, será la misma que tuvo los días 1, 2 y 3 de febrero, o los mismos días en enero. También debes indicar la opción “Hasta final de mes”.

Este proceso es posible, siempre que el patrón sea de 31 días y planifiques hasta final de mes.

### Enviar cuadrante por email a todos

Al hacer clic en esta opción, se enviará el cuadrante que se está visualizando (ver visualización del cuadrante ) a todos los trabajadores (cada trabajador que haya tenido lugar en su correo electrónico su planificación).

Para poder enviar el cuadrante, los trabajadores deben estar activos. Un trabajador está activo cuando el administrador acepta que aTurnos le envíe una solicitud por correo para activar su cuenta, así como una contraseña para tener acceso al sistema. Ver más en: Cómo activar un trabajador.

### Borrar cuadrante

Esta herramienta te da la opción de borrar el cuadrante, pero puedes seleccionar diferentes opciones para hacerlo:

- Puedes seleccionar entre las fechas que quieres borrar.
- A qué trabajadores quieres borrárselo.
- Y si quieres borrar también toda la planificación, solo las vacaciones o los turnos con 0 horas.

### Cerrar cuadrante

Desde esta opción, el Superusuario o Administrador Total (ver Roles de usuario ) puede cerrar el cuadrante para que no se pueda añadir ningún evento nuevo al cuadrante, así se evita que pueda haber problemas a la hora de exportar conceptos de nómina que se recogen dentro del cuadrante.

Para cerrar el cuadrante deberás indicar una fecha de cierre de cuadrante, lo que indicará que, desde cualquier fecha anterior, no se podrá modificar ningún evento en el cuadrante. Si hubo una fecha anterior de cierre, se indicará cuál fue y qué administrador cerró el cuadrante.

Cuando un cuadrante ha sido cerrado, los días del mes aparecerán de color grisáceo y con un icono de candado junto al número del día. Esto indica que la planificación de esos días ya está finalizada y bloqueada para evitar cambios accidentales. No se podrá realizar ningún tipo de cambio en el cuadrante mientras este esté cerrado.

Si volvemos a realizar la acción del proceso de cierre de cuadrante e indicamos una fecha anterior (a la cual el cuadrante estaba cerrado), nos volverán a aparecer los días desbloqueados para añadir de nuevo eventos en las fechas en los que antes estaba cerrado. Por ejemplo, siguiendo las imágenes, si estaba cerrado el cuadrante a fecha de 31/01/2020, si lo volviéramos a cerrar a fecha de 31/12/2019, el mes de enero de 2020, estaba nuevamente desbloqueado para añadir eventos.

Para más información sobre la función de cierre de cuadrante (ver Cerrar cuadrante en RRHH ).

Último día exportado

Desde esta opción, el Superusuario o Administrador Total (ver Roles de usuario ) puede informar/modificar el último día exportado de los trabajadores seleccionados.

La fecha de último día exportado imposibilita que los conceptos de nómina se descarguen en fecha anterior a la informada.

El dato se informa en el perfil del trabajador.
