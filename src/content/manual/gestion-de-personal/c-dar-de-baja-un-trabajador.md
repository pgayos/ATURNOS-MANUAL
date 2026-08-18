---
schemaVersion: "1.0"
contentId: "gestion-de-personal-c-dar-de-baja-un-trabajador"
title: "Dar de baja un trabajador"
description: "Información sobre dar de baja un trabajador, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Contratos"
intent: "Dar de baja un trabajador"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "baja"
    label: "Baja"
  - id: "dar"
    label: "Dar"
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
    - "https://manual.aturnos.com/knowledgebase/c-dar-de-baja-un-trabajador/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/c-dar-de-baja-un-trabajador/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre dar de baja un trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "2436ba4685c728bd3eb0a9007f91b8d7d1e4c12200a9b3862f8fcd9e5685b0b2"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre dar de baja un trabajador, con instrucciones y contexto revisables por el equipo de aTurnos.

En aTurnos el significado de dar de baja a un trabajador no significa a la baja total y definitiva del trabajador en aTurnos, sino que pasará a formar parte del listado de “trabajadores inactivos”. Es decir, son aquellos trabajadores que han causado baja contractual con la empresa con una fecha informada de baja, pero que no se eliminan del sistema aTurnos. Los datos e información que tenía en los periodos activos se siguen conservando.

El trabajador puede reingresar de nuevo en aTurnos, tantas veces como la empresa lo requiera con nuevos periodos de contrato o actividad,

### ¿Cómo dar la baja a un trabajador?

1. Para dar la baja a un trabajador, tienes que acceder a través de Menú- → Trabajadores- → Listado.
2. Si quieres dar de baja a un trabajador de tu equipo para que no aparezca en el listado de “Trabajadores activos” (ni en el cuadrante) tienes que hacer clic en “borrar” (icono papelera) y posteriormente indicar una fecha de baja (recuerda que es a nivel contractual, no por incapacidad ni enfermedad).
3. Después aparece un formulario en el que debes de insertar el día en el que se ocasiona la baja del trabajador en cuestión. Para que no aparezca en el listado de trabajadores activos, tienes que insertar una fecha anterior al día actual (ejemplo: si hoy es día 01/04/2020, debes insertar una fecha anterior, como el 31/03/2020), de no ser así, la baja del trabajador se producirá al siguiente día.
4. Por último, tienes que hacer clic en “guardar”, situado en la esquina inferior derecha del formulario.

### ¿Qué es un trabajador inactivo?

En aTurnos se define como un trabajador inactivo a aquellos trabajadores que han sido dados de baja contractualmente, pero que, para no ser eliminados de aTurnos en referencia a futuras contrataciones (como pueden ser los trabajadores temporales), se encuentran en el listado como trabajadores inactivos. Será inactivo un trabajador una vez que se le elimina por medio de la acción “borrar” (icono papelera).

También se va a mostrar a un trabajador en el listado de inactivos cuando se le indica en su perfil una fecha de baja.
