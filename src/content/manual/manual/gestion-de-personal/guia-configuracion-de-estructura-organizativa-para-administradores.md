---
schemaVersion: "1.0"
contentId: gestion-de-personal-guia-configuracion-de-estructura-organizativa-para-administradores
title: Configuración de estructura organizativa para administradores
description: Las localizaciones en aTurnos son áreas o departamentos donde se organizan trabajadores y turnos, ayudando a estructurar la gestión según la ubicación laboral.
contentType: reference
module: Gestión de personal
submodule: Estructura organizativa
subtopic: ""
intent: Configuración de estructura organizativa
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: 2025-05-22
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/configuracion-inicial-del-equipo/configuracion-de-estructura-organizativa/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre configuración de estructura organizativa para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/configuracion-inicial-del-equipo/configuracion-de-estructura-organizativa/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/configuracion-inicial-del-equipo/configuracion-de-estructura-organizativa/
  contentHash: 6d5bc38f73ef223fbcd47eff611c66139512c4eb0b1cf58b52d1dca1a6da4503
  migratedAt: 2026-08-18
order: 1
---
## Resumen

Las localizaciones en aTurnos son áreas o departamentos donde se organizan trabajadores y turnos, ayudando a estructurar la gestión según la ubicación laboral. Las localizaciones se añaden en Administrar → Localizaciones.

## Configuración de localizaciones

Las localizaciones pueden ser únicas, o formar parte de un grupo; a estos grupos los dividimos en localizaciones padres/hijas, respectivamente.

Una localización padre en aTurnos es una localización principal o superior que agrupa y organiza varias localizaciones relacionadas o subordinadas (hijas). Gracias a las localizaciones padre podemos estructurar jerárquicamente las áreas de trabajo para facilitar la planificación y gestión.

## Añadir localizaciones

Se pueden añadir las localizaciones de varias maneras: manualmente o por importación. Si se tiene un número elevado de trabajadores, el método más rápido es a través de la importación, ya que se asigna directamente al trabajador con su localización.

Desde Administrar → Localizaciones → Añadir → Nueva localización. Deberás completar los siguientes campos:

- Descripción. Dale un nombre único a la localización
- Localización padre. Indica si es una localización subordinada de otra o no. Tanto si es la primera localización que se añade, como si se quiere hacer que sea una localización única, se debe indicar en este campo «Sin localización».
- Orden. Indica el orden en el que quieres que aparezcan en la lista.
- Operativa. Indica que rol la puede editar.

Algunos ejemplos de localizaciones según el tipo de sector son:

- Enfermería: Una localización puede ser «Planta de Pediatría» dentro del hospital, con «Urgencias» como localización padre.
- Retail: En una tienda, las localizaciones pueden ser «Caja», «Almacén» y «Atención al Cliente», con «Tienda Principal» como localización padre.
- Sector público/oficina: En un ayuntamiento, las localizaciones pueden ser «Atención Ciudadana» y «Departamento de Finanzas», con «Sede Central» como localización padre.

Las adiciones por importación se encuentran detalladas en la guía correspondiente a las importaciones.
