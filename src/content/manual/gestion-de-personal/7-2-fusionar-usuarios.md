---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-2-fusionar-usuarios
title: Fusionar usuarios
description: Como superusuario puede fusionar dos usuarios/cuentas en un solo usuario (trabajador).
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Fusionar usuarios
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fusionar
    label: Fusionar
  - id: usuarios
    label: Usuarios
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
    - https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre fusionar usuarios?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/
  contentHash: c61a84b42b61a77a9d51269aa53310903e8614fee07cceb6af6618166fa1eb0a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre fusionar usuarios, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Como superusuario puede fusionar dos usuarios/cuentas en un solo usuario (trabajador). Con esta función se pasa todos los datos del perfil y de planificación de un trabajador (usuario origen), a otro trabajador (usuario destino) en el periodo que también se seleccione. Esta función es útil, en caso de que un mismo usuario se duplique en un miso cuadrante dado de alta con dos mail diferentes.

El trabajador (usuario origen) no continuará con sus datos de perfil y planificación de turnos en su cuadrante. Para acceder debe utilizar el usuario y contraseña del trabajador de destino.

El trabajador (usuario destino) dispone de un perfil y planificación idéntica del trabajador origen, y será con sus datos de acceso (mail y contraseña) con los que el trabajador podrá acceder a aTurnos.

Estos datos se fusionan en un periodo determinado. El periodo indica el momento en el que se encuentra activo el trabajado en el equipo, donde se realiza esta gestión.
