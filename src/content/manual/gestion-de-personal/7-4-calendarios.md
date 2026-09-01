---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-4-calendarios
title: Calendarios
description: A través de ADMINISTRAR → CALENDARIOS → CALENDARIOS se pueden crear calendarios que se pueden asignar a los trabajadores.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Calendarios
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: calendarios
    label: Calendarios
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
    - https://manual.aturnos.com/knowledgebase/7-4-calendarios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-4-calendarios/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre calendarios?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-4-calendarios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-4-calendarios/
  contentHash: 7deb24c9c72f0d7aba84db5ec87d32b3b597eda1781218a2ac20b19931441bbc
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre calendarios, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
A través de ADMINISTRAR → CALENDARIOS → CALENDARIOS se pueden crear calendarios que se pueden asignar a los trabajadores. Caso de uso, trabajadores que comparten localización por defecto (trabajan en el mismo equipo) pero que residen en localidades distintas y a cada uno de ellos se le quiere aplicar su propio Calendario.

Para poder asociar calendarios a trabajadores se precisan tener estos permisos al menos al rol de Superusuario

Permisos

- “controller” = → “users”, “method” = → “viewSelectCalendar”

- “controller” = → “users”, “method” = → “viewSpecialDataUser”

Una vez creados los calendarios con el botón “Añadir” los calendarios, en este ejemplo el Calendario de Ciudad Real y el Calendario de Puertollano.

Se asocian los festivos a los calendarios, a través de ADMINISTRAR → CALENDARIOS → FESTIVOS.

Indicando en nombre, fecha, localización en su caso y el calendario al que se va a asociar.

A través del perfil del trabajador se informa el Calendario.

En el cuadrante, solo los trabajadores que tengan el calendario de festivos asignado aparecerán como festivo, en este ejemplo, el día 22 de agosto (creado en el paso anterior) se visualiza en rojo solo al trabajador “Calendario.1”, para el resto de trabajador el 22.

El día 15 al ser festivo nacional está marcado en festivo para todos los trabajadores.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7.4 Calendarios](/media/manual/7-4-calendarios-fac4c840bf.png)

![7.4 Calendarios](/media/manual/7-4-calendarios-8d4749a96d.png)

![7.4 Calendarios](/media/manual/7-4-calendarios-e53ca8d4eb.png)

![7.4 Calendarios](/media/manual/7-4-calendarios-edb07b6fd6.png)

![7.4 Calendarios](/media/manual/7-4-calendarios-4210876b9c.png)
