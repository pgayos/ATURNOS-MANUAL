---
schemaVersion: "1.0"
contentId: app-movil-2-configurar-dispositivo-conectado-a-la-red
title: Configurar dispositivo conectado a la red
description: En los casos donde se haya conectado un nuevo dispositivo de lectura de huella, tarjeta o reconocimiento facial, a la red, se deben de seguir los siguientes pasos:.
contentType: procedure
module: App móvil
submodule: General
intent: Configurar dispositivo conectado a la red
audience:
  - role: Administrador
    access: applicable
entities:
  - id: conectado
    label: Conectado
  - id: configurar
    label: Configurar
  - id: dispositivo
    label: Dispositivo
  - id: red
    label: Red
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
    - https://manual.aturnos.com/knowledgebase/2-configurar-dispositivo-conectado-a-la-red/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-configurar-dispositivo-conectado-a-la-red/
ai:
  answerableQuestions:
    - ¿Cómo puedo configurar dispositivo conectado a la red?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-configurar-dispositivo-conectado-a-la-red/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-configurar-dispositivo-conectado-a-la-red/
  contentHash: 8bd4e098848cf2810fdd39a48daec8e9128a43c68cc2646b88a43a9ba893526d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En los casos donde se haya conectado un nuevo dispositivo de lectura de huella, tarjeta o reconocimiento facial, a la red, se deben de seguir los siguientes pasos:.

## Procedimiento
- Acceder al software “BioStarConfig “. seleccionar la subred y buscar dispositivo.

- Una vez encontrado el dispositivo, seleccionarlo y desmarcar ‘DHCP’. De esta forma, ya se puede editar la IP que se desea asignar al dispositivo y por último, una vez indicados los datos, pinchar en el botón ‘Apply’.

- Acceder a BioStar, y en el menú de ‘ Dispositivo ’ se procede a la búsqueda del dispositivo. Para ello, se tiene que pinchar en ‘ Búsqueda avanzada ’ y se informan los datos de IP y puerto configurado en el BioStarConfig.

- Una vez encontrado, se añade el dispositivo, mostrándose en el listado junto al resto.
