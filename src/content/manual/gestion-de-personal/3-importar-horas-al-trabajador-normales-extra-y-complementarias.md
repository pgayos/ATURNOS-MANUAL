---
schemaVersion: "1.0"
contentId: "gestion-de-personal-3-importar-horas-al-trabajador-normales-extra-y-complementarias"
title: "Importar horas al trabajador (normales, extra y complementarias)"
description: "Información sobre importar horas al trabajador (normales, extra y complementarias), con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Altas y bajas"
intent: "Importar horas al trabajador (normales, extra y complementarias)"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "complementarias"
    label: "Complementarias"
  - id: "extra"
    label: "Extra"
  - id: "horas"
    label: "Horas"
  - id: "importar"
    label: "Importar"
  - id: "normales"
    label: "Normales"
  - id: "trabajador"
    label: "Trabajador"
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
    - "https://manual.aturnos.com/knowledgebase/3-importacion-de-horas-normales-extra-y-complementarias/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-importacion-de-horas-normales-extra-y-complementarias/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importar horas al trabajador (normales, extra y complementarias)?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "5245afc5868dc49db7454439f73b894f75cf833359dbbeb55babedc185129e4a"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre importar horas al trabajador (normales, extra y complementarias), con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

El administrador puede insertar en la planificación de los trabajadores horas adicionales en el cuadrante (normales, extras, complementarias). Este proceso se realiza a través de la importación de horas, horas que deben haber sido creadas previamente dentro de aTurnos (ver Tipos de hora ).

Puedes completar la plantilla de ejemplo, la cual tienes disponible para descargar, disponiendo de dos opciones:

- Indicando la fecha y hora de inicio en el mismo campo (Fecha) CSV Importación_horas

- Indicando el Día y la Hora de Inicio en dos campos distintos (Fecha y horas) CSV Importación_horas_2

Te contamos los pasos, si lo que necesitas es confeccionar un documento Excel, utilizando los siguientes campos:

- Email*: informar de los mails de los trabajadores.
- Fecha Hora Inicio*: indicar el día y la hora de comienzo a partir de la cual se insertarán las horas de más. Este campo no es necesario si se añaden los dos campos siguientes.
- Día*: asociar con el campo de aTurnos “Día”. Se trata de la fecha en la que se quieren insertar las horas. Este campo no es necesario si se indica el campo anterior “Fecha”.
- Hora inicio*: asociar con el campo de aTurnos “Hora Inicio”. Se trata del campo de la hora de inicio de las horas. Este campo es necesario si se indica el campo anterior “Día”.
- Horas*: indicar la duración de las horas a insertar. Formato hora: hh:mm:ss
- Descripción: informar del motivo o razón de planificar las horas (es opcional, por ejemplo: Por necesidades del servicio).
- Localización: indicar a que localización se le aplicarán las horas (es opcional).
- Nombre*: informar el nombre de la hora personalizada o predefinida creada.
- Id externo del equipo
- Id Empleado
- Localización por defecto del trabajador
- Abreviatura: en caso de que la hora personalizada tenga asociado una abreviatura.

Guardar el documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú “Importar “.

Estos serán los campos que se deben asociar.
