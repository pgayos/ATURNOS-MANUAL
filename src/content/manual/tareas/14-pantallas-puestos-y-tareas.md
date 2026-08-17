---
schemaVersion: "1.0"
contentId: "tareas-14-pantallas-puestos-y-tareas"
title: "Pantallas, puestos y tareas"
description: "A cada una de las pantallas se le informa una url conectada a su vez con el puesto que llama a los clientes."
contentType: procedure
module: "Tareas"
submodule: "General"
intent: "Pantallas, puestos y tareas"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "pantallas"
    label: "Pantallas"
  - id: "puestos"
    label: "Puestos"
  - id: "tareas"
    label: "Tareas"
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
    - "https://manual.aturnos.com/knowledgebase/14-pantallas-puestos-y-tareas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/14-pantallas-puestos-y-tareas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo pantallas, puestos y tareas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "bfc02a3461a46d6262ab359916c7f0604f87f9191674d05bdc70cca7bf30e0a3"
  migratedAt: 2026-08-17
---
## Resumen

A cada una de las pantallas se le informa una url conectada a su vez con el puesto que llama a los clientes.

## Contenido

Existen dos formas de configurar los puestos/pantallas, en la explicada a continuación, en la pantalla se visualizan las colas que pueden ser llamadas

Acceda a TIMELINE → CONFIG.FILTROS.

1. Cree la short url marcando cada uno de los puestos asociados a las pantallas.
2. Guarda la short url creada.
3. Puesto de atención al cliente.
4. Filtro de servicio, por defecto “La indicada en la URL”.
5. Filtro de monitor. En cada uno de los puestos, seleccionar el mismo puesto, en las pantallas centrales donde se recogen todos las citas, dejad la opción “El indicado por URL”
6. Solo visual: NO.
7. Idioma.
8. Link o url: Colas.

Las pantallas deben de estar conectadas a internet, verifíquelo, tal y como se describe a continuación.

1. Seleccionar con el mando a distancia(SOURCE) el modo HDMI.
2. Botón MENU del mando a distancia y comprobar la RED. Si esta seleccionado el cable y tiene salida a internet.
3. Servicios, en arrancar por indicar INICIO URL
4. HOME del mando a distancia y CAMBIAR URL informar la url tal y como se ha indicado, validar e INICIAR EN URL, si la conexión es correcta aparecerá la pantalla de llamada.
5. A las pantallas centrales hay que incluir a continuación del id_aturno=5598, &tipo=6, por ejemplo del “id_aturno=5598&tipo=6”
