---
schemaVersion: "1.0"
contentId: planificacion-a-nueva-peticion
title: Nueva petición
description: Como administrador podrás realizar peticiones de vacaciones, permisos de días… así como cambios de turno, doblajes….
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Nueva petición
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: nueva
    label: Nueva
  - id: peticion
    label: Peticion
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
    - https://manual.aturnos.com/knowledgebase/2-5-1-nueva-peticion-y-filtro/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-1-nueva-peticion-y-filtro/
ai:
  answerableQuestions:
    - ¿Cómo puedo nueva petición?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-5-1-nueva-peticion-y-filtro/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-1-nueva-peticion-y-filtro/
  contentHash: dbcdd45a6e1392e24713c9290fb524264e164c0b5a807d093929d5c8628fa2b2
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Como administrador podrás realizar peticiones de vacaciones, permisos de días… así como cambios de turno, doblajes….

## ¿Cómo realizar una petición desde aTurnos?

Para crear una petición se puede hacer desde tres lugares diferentes:

desde el cuadrante,

desde el widget de peticiones

desde la opción del menú “Peticiones y Cambios”, haciendo clic en el botón de “Acciones” del que se desplegará “Nueva petición”.

En cualquiera de los lugares que se elija se deben informar los siguientes campos:

## Tipo de peticiones

Existen 8 tipos: vacaciones, vacaciones por horas, permisos de días, permisos de horas, periodos de absentismos, libres, turnos y horas.

### Vacaciones

En esta petición se solicitan días de vacaciones. La cantidad y si aplican a días naturales o laborables, dependerá de la configuración del equipo y del perfil del trabajador (ver más).

### Vacaciones por horas

Se generan peticiones de horas de vacaciones en un día determinado. Estas horas se incluyen en el balance de vacaciones. La proporción de las horas de vacaciones que se incluye en el balance de vacaciones dependerá de las “horas contrato al día”, informadas en el perfil del trabajador. El tipo de vacaciones por horas se crea creando un absentismo tipo “vacaciones” y “temporal”.

### Periodo de absentismos

Si se solicita y se acepta una petición de un periodo de absentismo, se muestra en el cuadrante con un sombreado en azul los días del periodo solicitado y en aquellos días que exista planificación, también se insertará el tipo de absentismo en el turno planificado. En los días que no se tiene planificación, no se registra el tipo de absentismo en el cuadrante porque no está asociado a ningún turno u hora, pero sí se muestra el periodo de absentismo con el sombreado azul en las celdas de cuadrante.

En el caso, de planificar en el cuadrante con turnos/horas a posteriori en los días del periodo de absentismo, si aparecerá el tipo de absentismo de la petición junto con el turno que se ha planificado en el cuadrante.

### Permisos de días

Se trata de una petición que informa sobre la ausencia de un trabajador al turno que tenga planificado. Si no se tiene ningún turno planificado, este permiso no se registra en el cuadrante ni en ningún listado de absentismos porque no está asociado a ningún turno u hora. Solo se inserta el absentismo si existe planificación.

Se diferencian de los “periodos de absentismo” porque si posterior a la petición del permiso de días, se insertan turnos, estos no se ven afectados por la primera petición, por lo que para pedir ese turno libre se debe realizar otra petición. Las celdas del cuadrante de los días de permisos aceptados no se sombrean en azul en el cuadrante. No aparece en el listado de periodos de absentismo del perfil del trabajador.

Los absentismos que pueden solicitar los trabajadores los puedes crear en Planificador → Tipos de turno (ver más).

### Permisos de horas

Son permisos temporales con una hora de inicio y fin que limita el absentismo, no son considerados como periodos de absentismos. El trabajador solicitará dicha opción, si necesita ir a una consulta médica y se ausenta de su puesto de trabajo durante algunas horas. Las celdas del cuadrante de los permisos temporales aceptados no se sombrean en azul en el cuadrante. No aparece en el listado de periodos de absentismo del perfil del trabajador. Se pueden añadir en días planificados o días sin planificar.

Igual que en el caso anterior, puedes crear un listado de absentismos que pueden solicitar los trabajadores (ver más).

### Turno

Un administrador puede solicitar a un trabajador trabajar un turno en un determinado día. Los turnos que pueden solicitar los trabajadores son aquellos que al crearlos (o en su configuración) se indica que se pueden solicitar (ver más).

### Horas

Los trabajadores pueden solicitar realizar horas que computen como horas normales, extra o complementarias. Puedes crear un listado de tipos de horas que pueden solicitar los trabajadores (ver más). Por ejemplo, en ocasiones los trabajadores pueden solicitar realizar horas de más en concepto de “compensación” por un día que hayan faltado a su puesto.

### Libre

Los administradores pueden solicitar un día libre en un día con un turno planificado en el cuadrante a sus empleados. Para hacer esta petición deben rellenar varios campos:

- Trabajador: Se selecciona al trabajador al que se le asociará la petición.
- Fecha: Se selecciona la fecha en la que se quiere realizar la petición.
- Turnos: Este campo se autocompleta si únicamente se tiene planificado un turno en el día de la petición. Si se tienen varios, se puede elegir la cantidad de turnos a librar.
- Comentarios: De manera opcional se puede añadir un comentario a la petición.

Una vez enviada la petición, se hace clic en el botón “guardar” para que la petición se quede registrada en peticiones pendientes. En el cuadrante se puede visualizar de color morado la propuesta de la petición y al administrador le llegará un aviso de petición pendiente, notificación o email (depende de configuración), avisando de que se han registrado nuevas peticiones y están pendiente de ser gestionadas.

El administrador para gestionar las peticiones pendientes puede hacerlo desde el propio cuadrante (propuesta morada que destaca en la planificación del cuadrante), desde el widget de peticiones y desde las peticiones y cambios del menú.

### ¿Cómo puedo filtrar las peticiones?

En la barra situada en parte superior derecha, tendremos la opción de filtrar por un período de tiempo en concreto, las peticiones o cambios según la fecha establecida. Además, se puede filtrar por trabajador haciendo clic en el símbolo del embudo.

## Más detalles sobre peticiones en aTurnos:

¿Cómo realizar una petición de vacaciones y cómo gestionar la petición de vacaciones?

¿Cómo se planifican en el cuadrante las Vacaciones naturales & Vacaciones laborables?

¿Qué ocurre si se aceptan peticiones de vacaciones tipo laboral y no existe planificación en el cuadrante?

¿Cómo deshacer una petición ya aprobada?

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![¿Cómo realizar una petición desde aTurnos?](/media/manual/como-realizar-una-peticion-desde-aturnos-9c966e2381.png)

![Más detalles sobre peticiones en aTurnos:](/media/manual/mas-detalles-sobre-peticiones-en-aturnos-9de923a2f8.png)

![¿Cómo puedo filtrar las peticiones?](/media/manual/como-puedo-filtrar-las-peticiones-5c128a7157.png)
