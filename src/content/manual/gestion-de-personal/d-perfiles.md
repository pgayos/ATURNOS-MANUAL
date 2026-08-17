---
schemaVersion: "1.0"
contentId: "gestion-de-personal-d-perfiles"
title: "Perfiles"
description: "Información sobre perfiles, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Perfiles"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "perfiles"
    label: "Perfiles"
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
    - "https://manual.aturnos.com/knowledgebase/d-perfiles/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/d-perfiles/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre perfiles?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "b07ea264c7abb99accf25c1bbca761a45964faca6b648aaa8d86805ded795b1b"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre perfiles, con instrucciones y contexto revisables por el equipo de aTurnos.

Hablamos de perfiles como el conjunto de características comunes que pueden definir a un determinado grupo de trabajadores como una especialidad, unos ‘datos personalizados’ o un Bloque de datos personalizados. Distintos trabajadores puede tener un mismo perfil.

Se pueden crear tantos perfiles como se necesite, para ello desde el botón de la barra superior de ‘Acciones’, se puede añadir un nuevo perfil.

Creado el perfil, el siguiente paso es editar las características del perfil. En el listado, cada perfil tiene dos botones de acción, ‘Editar’ (en verde) y ‘Eliminar’ (en rojo).

Los perfiles se caracterizan por:

- General: nombre del perfil y localización.
- Especialidades: capacidad o habilidad que tiene un trabajador (ver ‘Especialidades’ ).
- Datos personalizados: información o campos de los empleados que sean de interés que no estén en los datos personales del perfil del trabajador (ver ‘Datos personalizados’ ).
- Bloques de datos personalizados: otra información del empleado agrupada en un bloque que ha sido creado en ‘Datos personalizados’.

### General

En esta característica únicamente hay que informar el nombre del perfil para identificarlo y la localización en la que se ubicaría cada trabajador que tenga el perfil.

Sería la misma localización que aparece en el perfil del trabajador.

### Especialidades

Un trabajador puede tener una serie de capacidades y habilidades que lo identifiquen para un puesto de trabajo por las tareas que tenga que realizar. Estas especialidades pueden estar agrupadas en Grupos. Cada especialidad puede tener una calificación, dando mayor o menor nivel de dominio de dicha especialidad al trabajador que tenga el perfil configurado.

### Datos personalizados

Aquellos datos personalizados creados en el equipo de trabajo para completar el perfil del trabajador pueden ser definidos en el perfil para que se informen por defecto. Por ejemplo, en el caso de que se entreguen los EPIs, saber si todos los trabajadores que tengan el perfil asignado, tiene EPIs o si tienen alguna herramienta de trabajo como un PC.

### Bloque de datos personalizados

Los datos personalizados que se hayan creado se puede agrupar en ‘Bloques de datos personalizados’ para poder hacer distinción de distintos tipos de datos de carácter personal de los trabajadores. En este caso, para el mismo perfil se puede indicar la ciudad o si tienen carnet de conducir.

Configuradas todas las características del perfil, para registrarlo, únicamente faltaría ‘Guardar’ los cambios realizados.
