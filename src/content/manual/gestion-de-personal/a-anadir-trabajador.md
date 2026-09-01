---
schemaVersion: "1.0"
contentId: gestion-de-personal-a-anadir-trabajador
title: Añadir trabajador
description: El trabajador es el elemento principal de cualquier equipo de trabajo. El administrador del equipo puede añadir un trabajador y completar sus datos del trabajador accediendo al perfil de trabajador.
contentType: reference
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Añadir trabajador
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
  - id: anadir
    label: Anadir
  - id: trabajador
    label: Trabajador
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
    - https://manual.aturnos.com/knowledgebase/a-anadir-un-trabajador/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-anadir-un-trabajador/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre añadir trabajador?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-anadir-un-trabajador/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-anadir-un-trabajador/
  contentHash: 6f377f383157e3f17e29770dbbd160765d610d74f0855c10e6b27487d6a22f2a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El trabajador es el elemento principal de cualquier equipo de trabajo. El administrador del equipo puede añadir un trabajador y completar sus datos del trabajador accediendo al perfil de trabajador.

## Opciones y datos disponibles
Una vez se ha accedido al menú Listado dentro de Trabajadores, desde el botón ‘Acciones’ se desplegarán las distintas opciones para añadir un nuevo trabajador al equipo de trabajo.

En aTurnos existen tres formas de hacerlo:

En este caso se activan y se utilizan los datos reales del trabajador (nombre y mail) que se quiere crear. Se debe informar de la fecha de alta del contrato (fecha a partir de la cual se puede planificar al trabajador que has creado).

Si existen trabajadores sin correo electrónico o se desconoce, se puede crear un trabajador sin ese dato.

Esta opción también está disponible para crear trabajadores ficticios que no necesitan ser informados en el sistema pero van a cubrir turnos.

Por defecto, cualquier trabajador que no haya estado activado antes en aTurnos, tendrá un estado inactivo. Para acceder a aTurnos necesitará de activar su perfil, al recibir un email con un enlace de activación en su correo electrónico. Esta opción se puede hacer con los trabajadores que se informen marcando la opción “Enviar correo para invitar a los trabajadores y activar sus cuentas”.

Para registrar el trabajador “Con email y nombre” o “Sin email ni nombre” se debe pulsar sobre el botón ‘ Guardar ‘.

Facilita añadir nuevos trabajadores en el caso de que estén informados en un archivo CSV o Excel previamente creado. Se puede adjuntar el fichero (CSV o Excel) y así cargar todos los datos de los trabajadores (ver cómo importar trabajadores de forma básica ).

Una vez el trabajador ha sido añadido y no su usuario no esté activado, se debe realizar lo siguiente.

Desde el perfil de trabajador, el Administrador Total o Superusuario (Ver Roles de usuario ) puede realizar esta acción desde el botón “Enviar correo de activación”, el cual le permitirá acceder a aTurnos mediante el enlace de activación que recibirá en un email en su correo electrónico junto a la contraseña de acceso.

Los trabajadores puedes ser activados de forma masiva desde la función ‘Activar usuarios’ dentro de Administrar.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![a. Añadir trabajador](/media/manual/a-anadir-trabajador-6f42d62aa5.webp)

![a. Añadir trabajador](/media/manual/a-anadir-trabajador-06c22cb43a.webp)

![a. Añadir trabajador](/media/manual/a-anadir-trabajador-60ea3ed8ee.webp)

![a. Añadir trabajador](/media/manual/a-anadir-trabajador-ff507d7761.webp)

![a. Añadir trabajador](/media/manual/a-anadir-trabajador-259763ff66.webp)
