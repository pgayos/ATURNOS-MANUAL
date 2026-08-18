---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-3-delegacion-de-administradores"
title: "Delegación de administradores"
description: "Información sobre delegación de administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Delegación de administradores"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "administradores"
    label: "Administradores"
  - id: "delegacion"
    label: "Delegacion"
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
    - "https://manual.aturnos.com/knowledgebase/1-3-delegacion-de-administradores/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-3-delegacion-de-administradores/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre delegación de administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "68dfbc85904af3eb8b068a03cfd0f827bcdbd973421110d46e63c49e3abcd200"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre delegación de administradores, con instrucciones y contexto revisables por el equipo de aTurnos.

En equipos con varias sedes o departamentos (lo que llamamos localizaciones ), es importante que cada trabajador o responsable solo pueda ver los turnos de su propio equipo. Para esto existe una opción de Privacidad, que puedes activar para que:

“Los trabajadores, validadores y planificadores solo puedan ver los turnos y compañeros de su misma localización.”

Ejemplo: Luigi es planificador en la localización Consultoría. José Miguel pertenece a IT, pero tiene un turno el 10/12/2021 en Consultoría. Gracias a esta configuración, Luigi podrá ver ese turno de José Miguel, aunque su localización principal (Localización por defecto) sea IT.

### ¿Qué pasa si un planificador se va de vacaciones?

Cuando un responsable no está disponible, puedes delegar su localización a otro administrador, para que pueda gestionar los turnos de ese equipo.

Ejemplo:

Luigi (planificador en Consultoría) se va de vacaciones. Desde Recursos Humanos, se puede delegar su localización a José Miguel (que normalmente trabaja en IT), para que él pueda ver y gestionar los turnos del equipo de Consultoría mientras Luigi está fuera.

### ¿Cómo se hace la delegación?

1. Ve a RR.HH. → Estructura → Delegación de administradores.
2. Haz clic en el botón Delegar.
3. En la ventana emergente, selecciona:

- La localización que deseas delegar (por ejemplo, Consultoría). El administrador al que quieres delegarla (por ejemplo, José Miguel).

4. Guarda los cambios.

Una vez delegado, en la página se mostrará un nuevo listado con los administradores delegados.

A partir de ese momento, José Miguel podrá ver y gestionar tanto su localización principal (IT) como la delegada (Consultoría).

Nota: Una localización se puede delegar a más de un administrador, si es necesario.

### ¿Y si el administrador original regresa?

Cuando Luigi vuelva de vacaciones, puede retomar el control, retirando la delegación. Solo tienes que:

1. Ir al listado de delegaciones.
2. Buscar la delegación de Consultoría a José Miguel.
3. Hacer clic en el botón Eliminar.
