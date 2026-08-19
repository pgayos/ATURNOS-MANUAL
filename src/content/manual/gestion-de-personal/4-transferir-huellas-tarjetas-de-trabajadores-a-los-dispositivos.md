---
schemaVersion: "1.0"
contentId: gestion-de-personal-4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos
title: Transferir huellas/tarjetas de trabajadores a los dispositivos
description: Tenemos nuestros dispositivos y las huellas dactilares de nuestros trabajadores, registradas cada una en su perfil de usuario.
contentType: reference
module: Gestión de personal
submodule: Usuarios y perfiles
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
order: 1
---
## Resumen

Información sobre transferir huellas/tarjetas de trabajadores a los dispositivos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Tenemos nuestros dispositivos y las huellas dactilares de nuestros trabajadores, registradas cada una en su perfil de usuario. La última fase antes de que nuestros trabajadores puedan empezar a realizar fichajes por medio de este sistema biométrico es el volcado de los usuarios a los dispositivos. La transferencia de las huellas a los dispositivos puede configurarse de forma automática en configuración- → servidor pero también puede mantenerse de forma manual.

La acción que vamos a realizar es Transferir a Dispositivo. Mediante esta función, vincularemos a los diferentes usuarios a los dispositivos donde vayan a tener que fichar, teniendo la opción de que un mismo trabajador pueda realizar sus fichajes en distintos dispositivos.

Estos son los pasos para realizar el volcado de los trabajadores a los dispositivos:

1- Seleccionamos el usuario que queremos transferir a un dispositivo. Para ello en la primera columna, tenemos un botón de selección, hacemos clic para que salga el signo de verificación con fondo gris oscuro. Automáticamente en la parte superior derecha nos aparecerá Transferir a Dispositivo.

2- Hacemos clic en el botón Transferir a Dispositivo.

3- Después tenemos que seleccionar el/los dispositivos donde vamos a transferir a nuestro usuario, pinchando en los botones de selección, teniendo varias opciones:

1- Seleccionar un dispositivo en concreto o varios dentro de un mismo grupo.

2- Todos los dispositivos de un grupo en concreto.

3- Transferir al Usuario a todos los dispositivos dependientes de un grupo o varios, que a su vez dependen de un grupo padre.

En el caso de querer que los usuarios fichen sus marcajes en más dispositivos de los indicados previamente. Accediendo del mismo modo que para transferir al usuario a un dispositivo, seleccionaríamos nuevamente a todos los dispositivos donde queremos que fiche y activaríamos antes de pulsar ‘Transferir’, la opción de ‘Reemplazar usuarios con información diferente’.

4- De la misma forma anterior, nosotros podemos seleccionar varios usuarios) y transferirlos, tanto:

1- A un dispositivo en concreto.

2- Como a varios en diferentes grupos (si tienen ubicado un grupo por defecto en su perfil, serán añadidos a los dispositivos de ese grupo).

3- A todos los dispositivos de un grupo en particular.

4- Así como a un grupo padre, del que dependen todos los grupos donde se encuentran los dispositivos.

Por ejemplo, Sonia del Grupo de Málaga, ha sido volcada al dispositivo sincronizado en ese grupo, su ID 315992, aparece volcado en el dispositivo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/registrar-tarjeta-a0a935c02f.webp)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/registrar-tarjeta-3aff733d77.webp)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-f80613c887.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-9d23d261d9.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-b39be9d7bb.webp)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-cd575136b8.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-986c9ecc96.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-07e96aadcc.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-df03727086.png)

![4. Transferir huellas/tarjetas de trabajadores a los dispositivos](/media/manual/4-transferir-huellas-tarjetas-de-trabajadores-a-los-dispositivos-22e18aa1ee.png)
