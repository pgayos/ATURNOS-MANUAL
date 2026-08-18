---
schemaVersion: "1.0"
contentId: integraciones-y-api-integracion-con-personio
title: Integración con Personio
description: Para ofrecer una solución completa nos hemos integrado con Personio, con esta integración podrás utilizar la planificación automática de aTurnos y llevar un mejor control horario con los fic.
contentType: concept
module: Integraciones y API
submodule: General
intent: Integración con Personio
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: integracion
    label: Integracion
  - id: personio
    label: Personio
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
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-exportacion-de-fichajes-desde-aturnos/
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-importacion-de-ausencias-desde-aturnos/
    - https://manual.aturnos.com/documentation/activar-la-integracion-de-importacion-de-trabajadores-desde-aturnos/
    - https://manual.aturnos.com/documentation/cambios-en-la-configuracion-de-exportacion-de-fichajes-de-personio/
    - https://manual.aturnos.com/documentation/como-realizar-la-exportacion-de-fichajes-desde-aturnos-a-personio/
    - https://manual.aturnos.com/documentation/como-volver-a-obtener-las-credenciales-del-api-de-personio/
    - https://manual.aturnos.com/documentation/integracion-personio-aturnos/
    - https://manual.aturnos.com/documentation/obtener-credenciales-en-personio/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-exportacion-de-fichajes-desde-aturnos/
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-importacion-de-ausencias-desde-aturnos/
    - https://manual.aturnos.com/documentation/activar-la-integracion-de-importacion-de-trabajadores-desde-aturnos/
    - https://manual.aturnos.com/documentation/cambios-en-la-configuracion-de-exportacion-de-fichajes-de-personio/
    - https://manual.aturnos.com/documentation/como-realizar-la-exportacion-de-fichajes-desde-aturnos-a-personio/
    - https://manual.aturnos.com/documentation/como-volver-a-obtener-las-credenciales-del-api-de-personio/
    - https://manual.aturnos.com/documentation/integracion-personio-aturnos/
    - https://manual.aturnos.com/documentation/obtener-credenciales-en-personio/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre integración con Personio?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 8
  originUrls:
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-exportacion-de-fichajes-desde-aturnos/
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-importacion-de-ausencias-desde-aturnos/
    - https://manual.aturnos.com/documentation/activar-la-integracion-de-importacion-de-trabajadores-desde-aturnos/
    - https://manual.aturnos.com/documentation/cambios-en-la-configuracion-de-exportacion-de-fichajes-de-personio/
    - https://manual.aturnos.com/documentation/como-realizar-la-exportacion-de-fichajes-desde-aturnos-a-personio/
    - https://manual.aturnos.com/documentation/como-volver-a-obtener-las-credenciales-del-api-de-personio/
    - https://manual.aturnos.com/documentation/integracion-personio-aturnos/
    - https://manual.aturnos.com/documentation/obtener-credenciales-en-personio/
  redirectFrom:
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-exportacion-de-fichajes-desde-aturnos/
    - https://manual.aturnos.com/documentation/2-activar-la-integracion-de-importacion-de-ausencias-desde-aturnos/
    - https://manual.aturnos.com/documentation/activar-la-integracion-de-importacion-de-trabajadores-desde-aturnos/
    - https://manual.aturnos.com/documentation/cambios-en-la-configuracion-de-exportacion-de-fichajes-de-personio/
    - https://manual.aturnos.com/documentation/como-realizar-la-exportacion-de-fichajes-desde-aturnos-a-personio/
    - https://manual.aturnos.com/documentation/como-volver-a-obtener-las-credenciales-del-api-de-personio/
    - https://manual.aturnos.com/documentation/integracion-personio-aturnos/
    - https://manual.aturnos.com/documentation/obtener-credenciales-en-personio/
  contentHash: 151f9a29f57fefc5f0bed87c56a4526e8662bec7b3a18262cb600093983e0757
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre integración con Personio, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Para ofrecer una solución completa nos hemos integrado con Personio, con esta integración podrás utilizar la planificación automática de aTurnos y llevar un mejor control horario con los fichajes de tus trabajadores a la vez que agilizas la gestión de personal con Personio.

Actualmente la transferencia de datos se produce de manera bidireccional:

- De Personio a aTurnos se pueden transferir los empleados, los absentismos y los atributos de los trabajadores (email, departamento, estado, puesto, horas semanales, fecha de contratación, fecha de finalización del contrato, entre otros muchos).
- De aTurnos a Personio se pueden exportar los registros de jornada de los trabajadores.

Además, esta integración permite desde aTurnos filtrar empleados por categoría y por datos personalizados.

Estamos en constante evolución y trabajamos continuamente para adaptarnos a las nuevas necesidades del mercado y con ello añadir nuevas funcionalidades a esta integración.
