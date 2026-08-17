---
schemaVersion: "1.0"
contentId: "gestion-de-personal-27-importar-peticiones"
title: "Importar peticiones"
description: "Información sobre importar peticiones, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Importar peticiones"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "importar"
    label: "Importar"
  - id: "peticiones"
    label: "Peticiones"
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
    - "https://manual.aturnos.com/knowledgebase/27-importar-peticiones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/27-importar-peticiones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importar peticiones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "ec0e3743c8dbb9f3b08bdd9f316cf2987672759ed221fc200751a00b2afa73d0"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre importar peticiones, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Aquí te mostramos un Excel ejemplo

Entre los distintos tipos de importaciones disponibles en aTurnos, se encuentra la opción de importar peticiones. Esta funcionalidad permite añadir de forma masiva múltiples peticiones al cuadrante del trabajador o de los trabajadores indicados. Es importante tener en cuenta que, por defecto, las peticiones se importan en estado “Pendiente”, por lo que deberán ser aprobadas o denegadas manualmente para confirmar el evento solicitado.

Sin embargo, si se activa la opción de “Auto confirmación (explicada más adelante), este paso puede automatizarse, permitiendo que las peticiones queden confirmadas directamente tras la importación.

Este tipo de importación resulta especialmente útil en situaciones como: • Recuperación de peticiones eliminadas por error humano. • Recuperación de peticiones a su estado “Pendiente” tras una configuración incorrecta de las acciones automáticas.

Al igual que en el resto de las importaciones, existen unos campos obligatorios y unos campos opcionales. Los campos obligatorios son: Fecha de Inicio, Fecha de Fin, ID Empleado (Req).

• Fecha de Inicio: Fecha de inicio de la petición siguiendo el formato de configuración de las importaciones (Administrar → Importar/Exportar → Configuración). • Fecha de Fin: Fecha de fin de la petición con fecha según el formato de configuración de importaciones. (Administrar → Importar/Exportar → Configuración). • ID Empleado (Req): Identificador externo del empleado. Este se informa de manera manual en el perfil del trabajador.

• Tipo de evento:

0 →Vacaciones

1 →Absentismo total

2 →Absentismo temporal

3 →Turno

4 →Horas

5 →Libre

6 →Periodo de absentismo

- Abreviatura: Abreviatura del tipo de turno o absentismo.

Los campos opcionales son:

- Hora fin: Hora de fin de la petición con formato HH:mm:ss
- Tipo de horas:

0 →Hora Extra

1 → Hora Complementaria

2 → Hora Normal

Para añadir cualquier tipo de hora personalizada, debes usar el número de identificación de la hora que aparece en: Planificador → Tipos de turno → Tipos de hora.

- Auto confirmación:

1 → Autoaprueba la petición (no envía notificación por correo).

0 → Comportamiento normal (se envía mail y queda en flujo de aprobación).

Para una configuración más avanzada:

- LOCK: 1 → Bloquea la petición para que no pueda aceptarse ni denegarse manualmente. 0 → Petición “desbloqueada”.
- Comentario: Agrega comentario para la petición
- ID Usuario: Identificador interno del usuario sobre el que recae la petición (opcional para no-administradores; para administradoress, permite dirigir la petición a otro usuario).
- Id localización: Identificador de la localización. Este dato se obtiene desde Administrar → Localizaciones.
- Oferta: Indica si es una petición de oferta de turno.

0 → El usuario solicita turno. 1 → El usuario ofrece turno a otros.

- CHECKEXISTS: Indica si quieres que haga una comprobación antes de insertar la petición o no. 1 → Antes de insertar, comprueba si ya existe una petición idéntica. 0 → Inserta sin mirar duplicados.
- Sobreescribir 1 → Sustituye cualquier turno/evento existente en el rango. 0 → Añade nuevos eventos sin borrar los previos.
- Tipo día: Indica a qué días aplica la petición 0 → Todos los días según la visualización del cuadrante (por día, 1 semana, mes…). 1 → Solo laborables (por defecto).
- Misma localización: 1 → Mantiene la misma localización que tenían originalmente los eventos a sobrescribir. 0 → Usa la localización indicada en la petición para todos los días
