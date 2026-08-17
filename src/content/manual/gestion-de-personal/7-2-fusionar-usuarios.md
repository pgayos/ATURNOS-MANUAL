---
schemaVersion: "1.0"
contentId: "gestion-de-personal-7-2-fusionar-usuarios"
title: "Fusionar usuarios"
description: "Información sobre fusionar usuarios, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Fusionar usuarios"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "fusionar"
    label: "Fusionar"
  - id: "usuarios"
    label: "Usuarios"
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
    - "https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/11-2-fusionar-usuarios/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre fusionar usuarios?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "c58047014a24c6e117106eb1ecf97bd7aa6ce218e39631f4900f55bad7fee98c"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre fusionar usuarios, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Como superusuario puede fusionar dos usuarios/cuentas en un solo usuario (trabajador). Con esta función se pasa todos los datos del perfil y de planificación de un trabajador (usuario origen), a otro trabajador (usuario destino) en el periodo que también se seleccione. Esta función es útil, en caso de que un mismo usuario se duplique en un miso cuadrante dado de alta con dos mail diferentes.

El trabajador (usuario origen) no continuará con sus datos de perfil y planificación de turnos en su cuadrante. Para acceder debe utilizar el usuario y contraseña del trabajador de destino.

El trabajador (usuario destino) dispone de un perfil y planificación idéntica del trabajador origen, y será con sus datos de acceso (mail y contraseña) con los que el trabajador podrá acceder a aTurnos.

Estos datos se fusionan en un periodo determinado. El periodo indica el momento en el que se encuentra activo el trabajado en el equipo, donde se realiza esta gestión.
