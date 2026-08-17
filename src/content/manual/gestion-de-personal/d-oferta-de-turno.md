---
schemaVersion: "1.0"
contentId: "gestion-de-personal-d-oferta-de-turno"
title: "Oferta de turno"
description: "Aprende a oferta de turno, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Oferta de turno"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "oferta"
    label: "Oferta"
  - id: "turno"
    label: "Turno"
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
    - "https://manual.aturnos.com/knowledgebase/2-5-6-oferta-de-turno/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-5-6-oferta-de-turno/"
ai:
  answerableQuestions:
    - "¿Cómo puedo oferta de turno?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "43ac4de62c32a21c3d8611a82e098dda6f85521c9fc0aee93eca2743f29a79fd"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a oferta de turno, con instrucciones y contexto revisables por el equipo de aTurnos.

## Gestionar Ofertas de Turnos y Horas

El sistema permite a los administradores ofrecer turnos de trabajo u horas específicas a los empleados, quienes pueden inscribirse si están interesados. El administrador seleccionará al trabajador más adecuado para el turno, y este será planificado en el cuadrante. A continuación, te explicamos cómo gestionar este proceso paso a paso.

### Cómo Ofertar un Turno

- Ve al menú de Peticiones y Cambios y selecciona la opción nueva petición.
- Completa el formulario de oferta. Tipo de turno: Define el tipo de turno que deseas ofertar (por ejemplo, mañana, tarde, noche). Trabajador:Selecciona al trabajador específico o, si deseas que la oferta esté disponible para todo el equipo, elige Ofertar Turno. Localización: Indica la localización del turno que se oferta. Visible solo para la localización: (Opcional) Asocia una ubicación al turno para que solo sea visible a empleados con esa localización. Días del turno: Especifica las fechas para la oferta del turno (inicio y fin).

- Finaliza la oferta: Guarda y publica la oferta para que los trabajadores interesados puedan verla y apuntarse.

### Cómo Inscribirse en una Oferta de Turno (Trabajador)

1. Recibe la notificación. El trabajador verá una alerta en su foto de perfil y recibirá un correo electrónico informándole de la nueva oferta. 2. Accede a la oferta: – Desde la alerta en su perfil. – O desde el menú Cuadrante → Peticiones y cambios → Oferta de Turno. 3. Inscribirse:En la lista de ofertas, el trabajador podrá apuntarse haciendo clic en la acción “ Apuntarse a la oferta ” (ícono de mano cerrada).

Nota: Apuntarse no garantiza la asignación; es el administrador quien selecciona al trabajador definitivo.

### Cómo confirmar el Trabajador para el Turno (Administrador)

1. En Peticiones y Cambios → Oferta de Turno, revisa la lista de trabajadores que se han inscrito. 2. Usa la acción Aceptar para asignar el turno al trabajador elegido. 3. La oferta pasa a Peticiones Pendientes, donde se confirma que el trabajador acepta el turno. Una vez aceptado, el turno aparece planificado en el cuadrante del trabajador.

### Cómo Ofertar Horas

1. Entra en el menú de Peticiones y cambios. 2. Selecciona el tipo de petición Horas. 3. En el campo del trabajador, selecciona la opción Ofertar Hora.

1. Ve cuadrante 2. Elige la opción Buscar Trabajador para Turno y luego Seleccionar Trabajador para Horas. 3. En el campo del trabajador, selecciona la opción Crear Oferta de Hora.
