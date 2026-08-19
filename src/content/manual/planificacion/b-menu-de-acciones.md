---
schemaVersion: "1.0"
contentId: planificacion-b-menu-de-acciones
title: Menú de acciones
description: En este menú de acciones, el administrador podrá realizar las siguientes gestiones para modificar o agregar algún dato de la planificación actual.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Menú de acciones
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: acciones
    label: Acciones
  - id: menu
    label: Menu
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
    - https://manual.aturnos.com/knowledgebase/a-menu-de-acciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-menu-de-acciones/
ai:
  answerableQuestions:
    - ¿Cómo puedo menú de acciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-menu-de-acciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-menu-de-acciones/
  contentHash: b3da490f5dc21ff48cb12dd67b29ed490eb7ca2d534c9dbf61a1669b85df9a54
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En este menú de acciones, el administrador podrá realizar las siguientes gestiones para modificar o agregar algún dato de la planificación actual.

## Procedimiento
- Buscar trabajador para turno: aTurnos presenta un formulario donde el administrador selecciona el tipo de turno que quiere planificar, el día donde insertará ese turno, la localización donde se insertará el mismo turno, especificar si el turno pertenece a una bolsa de trabajo o es un turno fuera de bolsa de trabajo y seleccionar el trabajador de los que aparecen y muestra aTurnos como disponible. Cuando selecciona a un trabajador con un clic sobre él, se insertará en la planificación del cuadrante de localizaciones, con los datos de planificación informado en este formulario.

En el caso de que aTurnos no muestre trabajadores disponibles, o el administrador no seleccione a ninguno de los disponibles, existe una opción dentro de este formulario denominado “Crear oferta de turno”, a partir del cual el administrador ofrece un turno, asociado a una localización y día, con la finalidad de que sean los trabajadores quien se ofrezcan a realizar el turno seleccionado. (Ver más en: Peticiones de oferta de turno ).

- Añadir horas: se insertan y planifican horas a un trabajador o varios en la celda/día de la localización que necesite. Al hacer clic en añadir horas se despliega formulario para informar los datos.

- Inicio / Fin: se informa el período de tiempo en el que se generan las horas (fecha/hora de inicio y de fecha/hora fin).
- Tipo: se elige cómo se va a identificar esa hora, es decir, si es normal (cuenta dentro de la jornada de trabajo), hora extra (no forman parte del horario efectivo, pero se asignan de forma extraordinaria), hora complementaria (cuentan como horas extraordinarias para trabajadores que realizan jornadas parciales). También tendrá la posibilidad de seleccionar algún otro tipo de hora que tenga creada en el equipo. (Ver mas en: Crear tipos de horas ).
- Localización: selecciona la localización a la que estarán relacionadas las horas que están siendo creadas. (Ver más en: Localizaciones ).
- Bolsas: en aTurnos el administrador puede crear bolsas de trabajo con listados de candidatos disponibles para realizar determinadas horas o turnos (Ver más en: Bolsas ). Partiendo de esta base, las horas se pueden asociar a horas que estén relacionadas a una Bolsa de trabajo o, por el contrario, dejarlas como horas que están “fuera de bolsa de trabajo (horas de más). Cuando se elige una bolsa de trabajo se muestra el listado de trabajadores disponibles por orden de preferencia, con información detallada del total de horas bolsas y la planificación futura a 3 días de cada trabajador. El administrador haciendo clic sobre los trabajadores que el sistema ofrece, conseguirá asignarle las horas al/los trabajadores seleccionados.
- Absentismos: desde este cuadrante por localizaciones se pueden informar las ausencias temporales (por un período de tiempo en horas) o totales (toda la jornada laboral) que tenga alguno de los trabajadores por localización. (Ver más en: Añadir absentismos ).

- Localización: es de utilidad para cambiar o mover un turno de una localización a otra, o quitarle al turno la localización, cuando esto último sucede, el sistema envía el turno de manera automática a una localización llamada “Sin Localización”, para mayor información entra aquí: Añadir localizaciones.

- Borrar: te permite borrar o eliminar un turno o cualquier otra variable (ej. vacación o absentismo), que exista en una celda/día y que no debería estar asignado a esa localización. (Ver más en: Borrar ).

Es importante resaltar que las modificaciones realizadas en la planificación de este cuadrante de localizaciones se registrarán automáticamente en el “Cuadrante” (Ver más en: Cuadrante ).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![b. Menú de acciones](/media/manual/b-menu-de-acciones-cfa7e21d05.png)

![b. Menú de acciones](/media/manual/b-menu-de-acciones-3c7ca64a03.png)

![b. Menú de acciones](/media/manual/b-menu-de-acciones-96f6ba7f5a.png)

![b. Menú de acciones](/media/manual/b-menu-de-acciones-5bfa325331.png)

![b. Menú de acciones](/media/manual/b-menu-de-acciones-18eda3112a.png)

![b. Menú de acciones](/media/manual/b-menu-de-acciones-502cf3b523.png)
