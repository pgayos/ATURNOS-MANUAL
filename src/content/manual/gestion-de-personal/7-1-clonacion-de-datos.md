---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-1-clonacion-de-datos
title: Clonación de datos
description: La acción de clonación permite añadir, modificar o clonar los datos de un equipo (equipo origen) a uno o más equipos (equipo destino).
contentType: procedure
module: Gestión de personal
submodule: Datos laborales
intent: Clonación de datos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: clonacion
    label: Clonacion
  - id: datos
    label: Datos
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
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos/
ai:
  answerableQuestions:
    - ¿Cómo puedo clonación de datos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos/
  contentHash: de9e952d89c5d31e99439d740e1bbde9cc9c66d0f381d57f5d15bd8f4493b12d
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

La acción de clonación permite añadir, modificar o clonar los datos de un equipo (equipo origen) a uno o más equipos (equipo destino).

Esta función es útil cuando la estructura organizativa de la empresa está formada por varios equipos, que comparten la misma configuración, como pueden ser datos de convenio, días festivos, tipos de absentismos, patrones, datos personalizados, categorías, localizaciones, restricciones a nivel equipo, …

Esta acción la puede realizar los administradores que tengan acceso al menú de RRHH de aTurnos, en la opción acciones: Clonar datos.

Destacan 3 tipos de clonación:

Añadir: Se añaden los datos seleccionados del equipo origen, que no existe en el equipo destino, a este último. Si el equipo destino tiene más datos, ya existentes antes de ejecutar esta opción, se mantienen, a pesar de que no los tenga el equipo origen.

Añadir y modificar: Se añaden los datos seleccionados no existentes que hay en el equipo origen al equipo destino. A los datos ya existentes en el equipo destino, se modificarán con los datos del equipo origen con carácter retroactivo. El resultado de esta opción es que el equipo destino dispone de todos los datos del equipo origen idénticos. En el caso de que el equipo destino tenga más datos antes de ejecutar esta opción, se mantendrán, a pesar de que en el equipo origen no existan.

Clonar: Se clonan los datos seleccionados del origen al destino. Añade los datos seleccionados del origen que no existen en el destino, y elimina los datos en el equipo destino que no coinciden con el origen. Los dos equipos tienen los mismos datos después de la clonación.

### ¿Cómo realizar una clonación de un equipo origen a otro/os equip0/os destino?

Los pasos para realizar la clonación son los siguientes

1. Selecciona el equipo origen, es aquel que tiene la configuración que se quiere clonar a los demás y el equipo o equipos de destino (puedes marcar “Todos”).

2. Seleccionar los datos a clonar.

3. Seleccionar el tipo de clonación.

4. Seleccionar los datos que se quieren clonar del tipo.

5. Ejecutar la acción de clonar en el botón clonar. El sistema ofrece la información en forma de “Log” listando los datos clonados en los equipos destinos

Otros tipos de clonaciones:

En clonar Festivos:

- Añadir: se inserta en el equipo destino, los festivos que existen en el equipo origen. No se modifica, ni se borra festivos en el equipo destino.
- Añadir festivos no se repiten anualmente: según la configuración del festivo al crearse (ver más), se inserta en el equipo destino, solo los festivos que no se repiten anualmente del equipo origen. No se modifica, ni se borra festivos en el equipo destino.
- Añadir los festivos que se repiten anualmente: según la configuración del festivo al crearse (ver más), se inserta en el equipo destino, solo los festivos que se repiten anualmente del equipo origen. No se modifica, ni se borra festivos en el equipo destino.
- Añadir y modificar: se inserta en el equipo destino, los festivos que existen en el equipo origen. En el caso de que coincidan se modifica los festivos del equipo destino con la configuración que tiene el equipo origen. No se borran festivos en el equipo destino.
- Clonar: se sustituye todos los festivos del equipo destino. Con esta opción se eliminarán los festivos del equipo destino y se insertan todos los festivos del equipo origen.

En clonar Absentismos:

- Añadir absentismos del origen al destino: permite clonar absentismos del equipo Origen que no existen en el equipo Destino, añadiéndolos al listado de absentismos que tenga ya informados el equipo Destino, es decir, no borra los absentismos que existan previamente en el destino. En estos casos el sistema toma en cuenta las Abreviaturas del absentismo para identificar si ya existen o no en el destino (independientemente de cómo este configurado, si es justificado o injustificado).
- Clonar los absentismos del origen al destino: copiará los absentismos del equipo origen al destino tal y como estén configurados en el Origen (si ya existía el absentismo con la misma abreviatura en el destino, lo que hará el sistema es actualizarle la información tal y como esté configurado ese absentismo en el equipo origen). No elimina o borra absentismos existentes en el equipo destino.
- Dejar solo los tipos de absentismo del origen en el de destino, y si en el de destino existen otros diferentes ponerlos en “No disponibles”: en este caso clonará exactamente todos los absentismos al equipo destino. En el caso de que el equipo destino tuviera algún absentismo informado que sea distinto a los clonados lo eliminará dejándolo informado en el listado de No disponibles” (ver mas).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
