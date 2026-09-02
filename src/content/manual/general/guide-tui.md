---
schemaVersion: "1.0"
contentId: general-guide-tui
title: Guide TUI
description: "In this guide, we will explain the main parts of our software: Planning, Management and Time and Attendance."
contentType: concept
module: General
submodule: General
subtopic: ""
intent: Guide TUI
audience:
  - role: Administrador
    access: applicable
entities:
  - id: guide
    label: Guide
  - id: tui
    label: Tui
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
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/change-annual-leave-to-shift/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-accept-or-refuse-requests/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-cancel-annual-leaves-accepted-before/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-check-the-balance-of-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-and-assign-2019-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-anual-leaves-applied-to-my-team/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-pending-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-create-locations/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-manage-checkins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-the-origin-of-ckeckins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-time-planned-vs-worked/
    - https://manual.aturnos.com/documentation/how-can-i-see-and-manage-my-team/
    - https://manual.aturnos.com/documentation/how-to-do-hours-settings-compensate-time/
    - https://manual.aturnos.com/documentation/how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/rotations/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-apply-a-pattern/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/location-management-reps/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/rotations/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/geolocation/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/how-to-manage-checkin-out-requests/
    - https://manual.aturnos.com/documentation/introduction-2/
    - https://manual.aturnos.com/documentation/introduction/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/change-annual-leave-to-shift/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-accept-or-refuse-requests/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-cancel-annual-leaves-accepted-before/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-check-the-balance-of-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-and-assign-2019-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-anual-leaves-applied-to-my-team/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-pending-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-create-locations/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-manage-checkins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-the-origin-of-ckeckins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-time-planned-vs-worked/
    - https://manual.aturnos.com/documentation/how-can-i-see-and-manage-my-team/
    - https://manual.aturnos.com/documentation/how-to-do-hours-settings-compensate-time/
    - https://manual.aturnos.com/documentation/how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/rotations/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-apply-a-pattern/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/location-management-reps/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/rotations/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/geolocation/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/how-to-manage-checkin-out-requests/
    - https://manual.aturnos.com/documentation/introduction-2/
    - https://manual.aturnos.com/documentation/introduction/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre guide TUI?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 35
  originUrls:
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/change-annual-leave-to-shift/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-accept-or-refuse-requests/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-cancel-annual-leaves-accepted-before/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-check-the-balance-of-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-and-assign-2019-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-anual-leaves-applied-to-my-team/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-pending-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-create-locations/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-manage-checkins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-the-origin-of-ckeckins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-time-planned-vs-worked/
    - https://manual.aturnos.com/documentation/how-can-i-see-and-manage-my-team/
    - https://manual.aturnos.com/documentation/how-to-do-hours-settings-compensate-time/
    - https://manual.aturnos.com/documentation/how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/rotations/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-apply-a-pattern/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/location-management-reps/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/rotations/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/geolocation/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/how-to-manage-checkin-out-requests/
    - https://manual.aturnos.com/documentation/introduction-2/
    - https://manual.aturnos.com/documentation/introduction/
  redirectFrom:
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/change-annual-leave-to-shift/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-accept-or-refuse-requests/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-cancel-annual-leaves-accepted-before/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-check-the-balance-of-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-and-assign-2019-annual-leaves/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-anual-leaves-applied-to-my-team/
    - https://manual.aturnos.com/documentation/2-how-to-manage-requests-annual-leaves-and-abscences/how-to-see-pending-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-create-locations/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-manage-checkins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-the-origin-of-ckeckins-outs/
    - https://manual.aturnos.com/documentation/3-time-and-attendance-settings-and-management/how-to-see-time-planned-vs-worked/
    - https://manual.aturnos.com/documentation/how-can-i-see-and-manage-my-team/
    - https://manual.aturnos.com/documentation/how-to-do-hours-settings-compensate-time/
    - https://manual.aturnos.com/documentation/how-to-manage-requests-annual-leaves-and-abscences/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/2-create-patterns/rotations/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-apply-a-pattern/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team-2/location-management-reps/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts-2/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/fixed-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/how-to-create-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/random-shifts/
    - https://manual.aturnos.com/documentation/how-to-schedule-your-team/rotations/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/geolocation/
    - https://manual.aturnos.com/documentation/how-to-set-time-and-attendance-for-your-team/how-to-manage-checkin-out-requests/
    - https://manual.aturnos.com/documentation/introduction-2/
    - https://manual.aturnos.com/documentation/introduction/
  contentHash: f516b9c895a2ada865238182d1deac79915c1f6dd4ad75636af45bcda3961f2b
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre guide TUI, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
In this guide, we will explain the main parts of our software: Planning, Management and Time and Attendance. Each one will be explained in a different segment, however, they are related, meaning that the processes and actions in one part might lead to changes in the other.

1. Planning
2. Management (requests)
3. Time and Attendance

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
