---
schemaVersion: "1.0"
contentId: tareas-3-cargar-demanda-desde-tareas
title: Cargar demanda desde tareas
description: Hemos visto que la demanda se puede cargar como una necesidad de turnos o una carga manual que puede llegar añadiendo los datos en el backoffice o puede llegar por la carga de un archivo o por el API.
contentType: concept
module: Tareas
submodule: Turnos y patrones
intent: Cargar demanda desde tareas
audience:
  - role: Planificador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: cargar
    label: Cargar
  - id: demanda
    label: Demanda
  - id: desde
    label: Desde
  - id: tareas
    label: Tareas
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
    - https://manual.aturnos.com/knowledgebase/2-cargar-demanda-desde-tareas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-cargar-demanda-desde-tareas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cargar demanda desde tareas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-cargar-demanda-desde-tareas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-cargar-demanda-desde-tareas/
  contentHash: 232534d4d9dde17df8eec278d165a07b7f18c78fd081e8b00cdaa6e4a71caae1
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Hemos visto que la demanda se puede cargar como una necesidad de turnos o una carga manual que puede llegar añadiendo los datos en el backoffice o puede llegar por la carga de un archivo o por el API.

Existen empresas donde la generación de demanda viene asociada a diferentes tareas que se realizan en la empresa, para ello, integrado con el módulo de tareas podemos generar demandas con las tareas que existen generadas, ya sea de tareas existentes o de tareas que se generan desde las plantillas existentes.

### Generación de demanda por tareas existentes

En este ejemplo existen una serie de tareas de consultas de quirófanos de cardiología, estas tareas que están generadas se pueden convertir en demanda desde la pantalla del listado de tareas.

Es interesante para generar las demandas con los datos en tiempo real de las tareas que están ocurriendo en la empresa y poder tener una herramienta más visual desde las tablas de cobertura. Sería más difícil ver en los listado si estamos cumpliendo con las taras y que personal tenemos por exceso o defecto de las tareas que tenemos en proceso. Desde el listado tienes la opción de crear la demanda entre las fechas seleccionadas y de las tareas que existan en la tabla.

Recuerda que puedes filtrar las tareas si quieres solo de cierta localización o especialidad.

### Generación de demanda desde plantillas de tareas

Si no es necesario crear tareas, se puede crear una demanda con las plantillas de tareas existentes. Esto se suele usar cuando se quiere hacer una planificación a futuro más que un análisis de la situación actual. Para la situación actual ya tendríamos las tareas y usaríamos la generación de demanda con las tareas existentes. Para poder crear esta demanda podemos definir los siguientes campos:

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Generación de demanda por tareas existentes](/media/manual/generacion-de-demanda-por-tareas-existentes-31e53bee51.png)

![Generación de demanda desde plantillas de tareas](/media/manual/generacion-de-demanda-desde-plantillas-de-tareas-b084832178.png)

![Generación de demanda por tareas existentes](/media/manual/generacion-de-demanda-por-tareas-existentes-4c0d2bfae3.png)
