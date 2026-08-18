---
schemaVersion: "1.0"
contentId: planificacion-a-barra-superior-del-cuadrante
title: Barra superior del cuadrante
description: En la parte superior del cuadrante se puede ver la leyenda de los eventos que se aplican en el cuadrante.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Barra superior del cuadrante
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: barra
    label: Barra
  - id: cuadrante
    label: Cuadrante
  - id: superior
    label: Superior
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
    - https://manual.aturnos.com/knowledgebase/a-barra-superior-del-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-barra-superior-del-cuadrante/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre barra superior del cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-barra-superior-del-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-barra-superior-del-cuadrante/
  contentHash: 48c4b39b7ef1d2c3dbc5c44f53f9e76843b99037a262aba1f30e6181577e5245
  migratedAt: 2026-08-17
labels: []
---
## Resumen

En la parte superior del cuadrante se puede ver la leyenda de los eventos que se aplican en el cuadrante.

## Qué debes saber
- Bolsas: horas pertenecientes a una bolsa de horas.
- Extra/Complementarias: Horas añadidas de tipo extraordinarias o complementarias (así como las horas personalizadas creadas por el administrador que tengan la consideración de extraordinarias o complementarias)
- Vacaciones: días de vacaciones planificados.
- Sin horas: Turnos sin horas o salientes de guardia, suelen ser de este tipo también las guardias que no son presenciales.
- Absentismo: Ausencias justificadas o sin justificar. Comprenden los permisos, los periodos de baja, las visitas médicas y cualquier motivo (absentismo) que justifique la ausencia del trabajador por el total de la jornada o por una parte de ella.
- Pendiente: cambios de turno pendientes de aprobar por compañeros o administradores.
- Confirmado: cambios confirmados por los compañeros o administradores.

Después tenemos la función de visualizar la información del cuadrante, donde tendremos la siguientes herramientas a utilizar:

- Fecha de visualización: día a partir del cual se muestra el cuadrante.
- La forma de visualizar: Horas, 1 Día, 1 Semana, 2 Semanas, 3 Semanas, 4 Semanas o un Mes.
- Los detalles que se quieren visualizar: Solo turnos.

- Con localización.

- Todos los detalles.

- Filtro: haciendo clic en el icono del filtro se puede filtrar por detalles de los trabajadores (nombre, localización, categoría, etc.) o por turnos (sin datos de planificación, con datos de planificación, tipos de turnos y tipos de horas). OJO: al utilizar el filtro, se queda grabada la selección a medida que se navega por las distintas pestañas de aTurnos.
- Exportar: Se puede exportar el cuadrante en forma de Excel, PDF A4 o A3.
