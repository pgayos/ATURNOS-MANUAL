---
schemaVersion: "1.0"
contentId: integracion-biostar-4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos
title: Transferir huellas/tarjetas de trabajadores a los dispositivos
description: Tenemos nuestros dispositivos y las huellas dactilares de nuestros trabajadores, registradas cada una en su perfil de usuario.
contentType: reference
module: Integración con Biostar
submodule: Manual de dispositivos Biostar
subtopic: ""
intent: Transferir huellas/tarjetas de trabajadores a los dispositivos
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: dispositivos
    label: Dispositivos
  - id: huellas
    label: Huellas
  - id: tarjetas
    label: Tarjetas
  - id: trabajadores
    label: Trabajadores
  - id: transferir
    label: Transferir
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
    - https://manual.aturnos.com/knowledgebase/4-volcado-de-trabajadores/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-volcado-de-trabajadores/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre transferir huellas/tarjetas de trabajadores a los dispositivos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-volcado-de-trabajadores/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-volcado-de-trabajadores/
  contentHash: b59223e08745ddcf6ae16495fc4b8b5620548de87cb25c0755a7247f3227216f
  migratedAt: 2026-08-17
labels: []
order: 4
---
## Resumen

Tenemos nuestros dispositivos y las huellas dactilares de nuestros trabajadores registradas, cada una en su perfil de usuario. La última fase antes de que puedan empezar a fichar con este sistema biométrico es el volcado de los usuarios a los dispositivos.

## Procedimiento

La transferencia de las huellas a los dispositivos puede configurarse de forma automática en Configuración → Servidor, o mantenerse de forma manual con la acción **Transferir a Dispositivo**, que vincula a los usuarios con los dispositivos donde vayan a fichar (un mismo trabajador puede tener varios dispositivos asignados).

Pasos para realizar el volcado de los trabajadores a los dispositivos:

1. Selecciona el usuario que quieres transferir marcando el botón de selección de la primera columna. En la parte superior derecha aparecerá el botón **Transferir a Dispositivo**.
2. Haz clic en **Transferir a Dispositivo**.
3. Selecciona el/los dispositivos de destino. Hay varias opciones:
   - Un dispositivo en concreto, o varios dentro de un mismo grupo.
   - Todos los dispositivos de un grupo en concreto.
   - Todos los dispositivos dependientes de uno o varios grupos, que a su vez dependen de un grupo padre.

Si un usuario ya estaba transferido y quieres que fiche también en más dispositivos, repite el proceso de selección y activa la opción **“Reemplazar usuarios con información diferente”** antes de pulsar “Transferir”.

También se pueden seleccionar varios usuarios a la vez y transferirlos:
- A un dispositivo en concreto.
- A varios dispositivos en diferentes grupos (si tienen un grupo por defecto en su perfil, se añaden a los dispositivos de ese grupo).
- A todos los dispositivos de un grupo en particular, o de un grupo padre del que dependan varios grupos.

Por ejemplo: si Sonia pertenece al Grupo de Málaga y ha sido volcada al dispositivo sincronizado con ese grupo, su ID (por ejemplo, 315992) aparecerá volcado en el dispositivo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/registrar-tarjeta-a0a935c02f.webp)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/registrar-tarjeta-3aff733d77.webp)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-f80613c887.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-9d23d261d9.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-b39be9d7bb.webp)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-cd575136b8.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-986c9ecc96.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-07e96aadcc.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-df03727086.png)

![Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-22e18aa1ee.png)
