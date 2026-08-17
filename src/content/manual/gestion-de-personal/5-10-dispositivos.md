---
schemaVersion: "1.0"
contentId: "gestion-de-personal-5-10-dispositivos"
title: "Dispositivos"
description: "Información sobre dispositivos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Dispositivos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "dispositivos"
    label: "Dispositivos"
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
    - "https://manual.aturnos.com/knowledgebase/5-10-dispositivos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-10-dispositivos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre dispositivos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "cf49699879cf0f802954c7e3486b493451749938c41bc345a1e8f836c4bd202c"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre dispositivos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Este sistema de fichaje permite que cualquier dispositivo que se registre (ordenador, tablet, móvil) que el trabajador utiliza como herramienta de trabajo, pueda ser utilizado para realizar los fichajes de entrada y salida de su turno de trabajo.

Para registrar un dispositivo, el administrador tiene que acceder a aTurnos, a Configuración del Control de Presencia, en el apartado Dispositivos.

Para añadir un nuevo dispositivo, se debe pulsar sobre el botón ‘Acciones’ de la barra superior y ‘Registrar este dispositivo’.

El registro se realiza únicamente asignando una descripción a dicho dispositivo y pulsando ‘Aceptar’ para finalizar.

Cuando un dispositivo se encuentra registrado, en el listado de dispositivos además de aparecer con la descripción con la cual se registró, se muestra el mensaje “ Este dispositivo se encuentra registrado para poder realizar fichajes “.

Cualquier usuario, se administrador o trabajador podrá realizar sus fichajes de entrada y salida de su jornada, ya que aparecerá en la barra superior el botón ‘ Play ‘ para marcar la entrada y el botón ‘ Stop ‘ para marcar la salida.

Es importante indicar que el registro del dispositivo se haga desde el navegador en el cual el trabajador accede normalmente a aTurnos y que no se realice un borrado de los datos de navegación, ya que se perderá el registro del dispositivo.

Este sistema es compatible con nuestra Wall App, desde la cual si un dispositivo está añadido, los trabajadores podrán fichar tecleado su ID de usuario (que aparece en su perfil). Para más información a cerca de esta aplicación accede al siguiente enlace: ¿Cómo configurar aTurnos Wall App?

El usuario o IT puede borrar:

- caché
- cookies
- “datos del sitio”

Resultado:

JavaScript

tokens_allowed_checkin → desaparece

Mostrar más líneas

Y el sistema piensa:

“este es un equipo nuevo”

En entornos corporativos:

- Edge puede borrar datos automáticamente
- o restringir almacenamiento persistente

Esto ocurre muchísimo en:

- PCs de empresa
- equipos compartidos

Cada usuario de Windows + perfil de Edge tiene su propio storage.

Entonces:

- mismo ordenador
- pero distinto Local Storage

- Edge → Chrome → ya no tienes la key
- Nuevo perfil de Edge → storage vacío
