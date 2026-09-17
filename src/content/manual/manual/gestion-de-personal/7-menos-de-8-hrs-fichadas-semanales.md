---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-menos-de-8-hrs-fichadas-semanales
title: Menos de 8 Hrs fichadas semanales
description: Si un trabajador ha fichado en una semana menos de 8 horas, se mostrará en el informe.
contentType: concept
module: Gestión de personal
submodule: Altas y bajas
subtopic: ""
intent: Menos de 8 Hrs fichadas semanales
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fichadas
    label: Fichadas
  - id: hrs
    label: Hrs
  - id: menos
    label: Menos
  - id: semanales
    label: Semanales
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
    - https://manual.aturnos.com/knowledgebase/7-menos-de-8-hrs-fichadas-semanales/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-menos-de-8-hrs-fichadas-semanales/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre menos de 8 Hrs fichadas semanales?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-menos-de-8-hrs-fichadas-semanales/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-menos-de-8-hrs-fichadas-semanales/
  contentHash: 6a484c68ead6333e431f8f297e01be75b2741dddc95a00678c606e037d0b278d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Si un trabajador ha fichado en una semana menos de 8 horas, se mostrará en el informe.

## Qué debes saber
Por ejemplo, Luís tiene 5 turnos planificados entre el 09/01/2023 y el 15/01/2023. En cada día planificado fichó 1 hora y 30 minutos, lo que hace un total de 7 horas y 30 minutos, menos de 8 horas trabajadas.

El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Semana del año en la que se produce el caso.
- Horas trabajadas.
- Absentismo, informando “Si” o “No”, dependiendo de si existe un absentismo planificado en esa semana.
- Vacaciones, informando “Si” o “No”, dependiendo de si existe un día de vacaciones planificado en esa semana.

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7. Menos de 8 Hrs fichadas semanales](/media/manual/7-menos-de-8-hrs-fichadas-semanales-37339d017a.webp)

![7. Menos de 8 Hrs fichadas semanales](/media/manual/7-menos-de-8-hrs-fichadas-semanales-790805e9b6.webp)

![7. Menos de 8 Hrs fichadas semanales](/media/manual/7-menos-de-8-hrs-fichadas-semanales-a26b96efd6.webp)
