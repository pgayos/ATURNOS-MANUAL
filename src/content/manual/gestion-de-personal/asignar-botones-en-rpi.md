---
schemaVersion: "1.0"
contentId: gestion-de-personal-asignar-botones-en-rpi
title: Asignar botones en RPI
description: Una vez configurada la RPI, y asignada a un equipo, la introducimos en anydesck para poder tener acceso remoto una vez que este en cliente.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Asignar botones en RPI
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asignar
    label: Asignar
  - id: botones
    label: Botones
  - id: rpi
    label: Rpi
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
    - https://manual.aturnos.com/knowledgebase/asignar-botones-en-rpi/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/asignar-botones-en-rpi/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre asignar botones en RPI?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/asignar-botones-en-rpi/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/asignar-botones-en-rpi/
  contentHash: 07b8324e67868c7ae2f0fa96d3e7eaf004803c8b2c5613e2c033d0483f1837ac
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Una vez configurada la RPI, y asignada a un equipo, la introducimos en anydesck para poder tener acceso remoto una vez que este en cliente.

## Qué debes saber
El siguiente paso es asignar los botones Bluetooth, cada botón estará asignado a una acción, cada vez que se presiona el botón realizara una llamada, por ejemplo “acuda a caja 1” que mostrará en pantalla.

Conectamos por anydesk a la RPIde fila única y abrimos una consola:

A continuación tecleamos “sudo pm2 logs” o pm2 logs (en el caso que sean las RPI nuevas):

En la web de aTurnos nos vamos a “Timeline” y abrimos en otra pestaña “Timeline - → Raspberry”. En “Raspberry” pulsamos en el botón + de la columna “BUTTONS” de la RPI:

En la consola de la RPI se puede ver entonces “Welcome to flic buttons wizard. Pulse button”. Al pulsar el botón aparece “Button found” con una mac (si es un FLIC v2 hay que mantenerlo pulsado unos segundos). Hay que copiar la mac (80:e4:XX:XX:XX:XX):

En Buttons le damos a añadir arriba a la derecha y nos pregunta la mac que hemos apuntado antes, el usuario al que irá asignado, este usuario lo hemos creado previamente en el listado de trabajadores, y el tipo, que seleccionamos FLIC:

Una vez asignados todos reiniciamos desde la rpi la aplicación, saliendo de “sudo pm2 logs” pulsando CTRL+C y escribiendo con “sudo pm2 restart all” o pm2 restart all en el caso de las nuevas RPI.

Para realizar las pruebas de los botones una vez configurados, además de reiniciar la RPI, también deberíamos reiniciar la pantalla donde se muestran los avisos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Asignar botones en RPI](/media/manual/asignar-botones-en-rpi-d53c7dd398.png)

![Asignar botones en RPI](/media/manual/asignar-botones-en-rpi-c8b65cc197.png)

![Asignar botones en RPI](/media/manual/asignar-botones-en-rpi-619405fa57.png)

![Asignar botones en RPI](/media/manual/asignar-botones-en-rpi-d320aef73b.png)

![Asignar botones en RPI](/media/manual/asignar-botones-en-rpi-18a5421b74.png)
