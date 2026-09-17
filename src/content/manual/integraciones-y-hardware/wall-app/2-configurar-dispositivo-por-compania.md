---
schemaVersion: "1.0"
contentId: wall-app-2-configurar-dispositivo-por-compania
title: "Configurar un dispositivo por compañía"
order: 2
description: "Cómo registrar un dispositivo de Wall App a nivel de compañía, para que lo compartan trabajadores de varios equipos."
contentType: procedure
module: "Wall App"
submodule: "Manual de Wall App"
subtopic: ""
intent: "Configurar un dispositivo por compañía"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
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
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo configuro un dispositivo por compañía en Wall App?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  contentHash: "36ebd83335d55730f252d745fb8b6b31347e558cabd645c35e99bd09bef12de6"
  migratedAt: 2026-09-19
labels: []
---

## Resumen

Registrar el dispositivo a nivel de "Compañía" da más flexibilidad: todos los trabajadores de los equipos que pertenecen a esa compañía pueden fichar en el mismo dispositivo.

## Procedimiento

Al acceder a Wall App con su usuario y contraseña, el administrador puede elegir el registro del dispositivo por compañía en lugar de por equipo.

Cualquier dispositivo registrado se puede consultar desde RRHH → Control Horario → Dispositivos. Desde ese menú se puede:

- Cambiar la compañía del dispositivo.
- Añadir el dispositivo a un equipo (eligiendo equipo, localización y tipo de fichaje) sin necesidad de entrar a Wall App.
- Eliminar el dispositivo de la compañía.

También existe la posibilidad de obtener el token del dispositivo, para integrarlo con otros sistemas.

![Registrar dispositivo por compañía](/media/manual/wall-app-wallapp-acceso-administrador-compania.jpeg)

![Cambiar la compañía del dispositivo desde RRHH](/media/manual/wall-app-wallapp-acceso-administrador-compania-rrhh-cambiar-compania.jpeg)

![Añadir el dispositivo a un equipo desde RRHH](/media/manual/wall-app-wallapp-acceso-administrador-compania-rrhh-anadir-a-equipo.jpeg)
