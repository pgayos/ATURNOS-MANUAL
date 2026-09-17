---
schemaVersion: "1.0"
contentId: wall-app-4-configurar-tarjeta-empleado-qr
title: "Configurar la tarjeta de empleado (QR)"
order: 4
description: "Cómo genera el administrador los códigos QR de cada trabajador para que puedan fichar escaneándolos en Wall App."
contentType: procedure
module: "Wall App"
submodule: "Manual de Wall App"
subtopic: ""
intent: "Configurar la tarjeta de empleado (QR)"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
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
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo genero el QR de fichaje de un trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  contentHash: "905bcc05cff38af9b9f150debf43f99c7e8aaff120d72d3510b979b285447d72"
  migratedAt: 2026-09-19
labels: []
---

## Resumen

El equipo debe tener habilitados los permisos de creación de QR. Cuando estén activos, aparece el menú "Tarjeta empleado (QR)" dentro de Control Horario.

## Procedimiento

1. Entra en "Acciones" y selecciona "Añadir enlace".
2. En "Añadir enlace", selecciona el trabajador para el que quieres crear el QR y guarda.
3. El sistema muestra el enlace con los QR de ese trabajador.

Existen tres tipos de QR:

- **QR del ID usuario**: codifica el ID de usuario del trabajador.
- **QR del ID Empleado**: disponible si el trabajador tiene informado un ID de empleado en su perfil.
- **QR-Token**: alternativa más segura a los dos anteriores.

El QR se puede descargar o imprimir para usarlo como identificador a la hora de fichar.

![Menú Tarjeta empleado (QR)](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr.jpeg)

![Añadir enlace para generar un QR](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-anadir-enlace.jpeg)

![Seleccionar el trabajador para el QR](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-anadir-enlace-seleccionar-trabajador.jpeg)

![Enlaces con los QR generados](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-enlaces-qr.jpeg)

![QR del ID de usuario](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-enlaces-qr-qr-id-usuario.jpeg)

![QR del ID de empleado](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-enlaces-qr-qr-id-empleado.jpeg)

![QR-Token](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-enlaces-qr-qr-token.jpeg)

![Descargar el QR generado](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-descargar-qr.jpeg)

![QR descargado, listo para imprimir](/media/manual/wall-app-wallapp-menu-tarjeta-empleado-qr-qr-descargado.jpeg)
