---
schemaVersion: "1.0"
contentId: control-horario-5-9-fichaje-por-ip
title: Fichaje por IP
description: Este sistema de fichaje permite que los trabajadores realicen sus fichajes de entrada y salida desde el terminal con el que se conectan a internet (ordenador o dispositivo móvil conectado a.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Fichaje por IP
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fichaje
    label: Fichaje
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
    - https://manual.aturnos.com/knowledgebase/5-9-fichaje-por-ip/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-9-fichaje-por-ip/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre fichaje por IP?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-9-fichaje-por-ip/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-9-fichaje-por-ip/
  contentHash: e23cf0838292c6590f5a89b92a13fd7ac585a2e302db28a17c7b782f72a3d2ff
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre fichaje por IP, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Este sistema de fichaje permite que los trabajadores realicen sus fichajes de entrada y salida desde el terminal con el que se conectan a internet (ordenador o dispositivo móvil conectado a la red) desde su centro de trabajo mediante el filtrado de la IP.

Antes de configurar, se tiene que entender que cuando se habla de IP de una Red, genéricamente todos los routers se conectan bajo la misma IP Privada 192.168.1.1. El sistema de filtrado por IP, comprueba siempre los tres primeros números de la IP, en este caso, 192.168.1. Cualquier IP de un dispositivo conectado a esta Red, tendrá una IP Privada con un cuarto número.

Aunque al registrar la IP en el sistema, aparezcan cuatro números, siempre se miran los tres primeros, y por tanto cualquier móvil, tablet u ordenador conectado a esa Red, el filtrado IP permitirá su fichaje.

Lo recomendable es configurar los routers con una IP Privada distinta a la común y con un número distinto en sus tres primeras cifras (en caso de no tener conocimientos, esto lo debe realizar un técnico) para que no sea factible poder fichar conectado a una Red con IP Privada donde coincidan los tres primeros números.

Otra opción, es añadir la IP Pública, pero esto es recomendable cuando se haya contratado mediante el proveedor de Internet, de un IP Pública fija.

En el submenú de Control horario, Configuración, se puede acceder a la pestaña IPS, desde aquí se añadirán las IPs que se van a ser filtradas para permitir el fichaje.

El filtrado se puede realizar mediante la IP privada (es la que utiliza cada ordenador dentro de su red local, permitiendo identificar a los distintos dispositivos conectados a la misma) o a través de la IP pública (es la que se te asigna por tu proveedor de servicios de internet para identificarte cuando te conectas).

En los casos de que la empresa disponga de una red con un servidor propio, ambas opciones son aptas. Pero si no existe esta red local, aTurnos recomienda añadir la IP privada ya que la pública cambia con frecuencia, lo que puede obligar a añadirla nuevamente para el funcionamiento del sistema.

Haciendo clic sobre el botón ‘+’, se podrá definir la IP que se muestra.

Cada IP definida (se pueden añadir varias IPs), puede estar asociada al fichaje en una localización concreta. Una misma IP puede estar asociada a varias localizaciones. Como también cada IP, puede tener una localización distinta, de esta forma podemos filtrar los fichajes por su localización.

Esto ofrece la posibilidad al trabajador de indicar la localización en el momento que realiza el marcaje.

Una vez el administrador ha registrado la IP, todos aquellos ordenadores que se conecten al equipo de trabajo con esa IP añadida, tendrán la opción de fichar. Podrán realizar fichajes tanto un administrador total, planificador o validador, así como el rol de trabajador (ver Roles de usuario en aTurnos ).

El usuario podrá fichar cuando vea en la parte superior de la pantalla que aparece un botón con el icono de ‘ Play ‘ (ver Barra superior de la pantalla ).

Al pulsar sobre ese botón, se abrirá el modal para registrar el fichaje, donde se podrá indicar la localización del fichaje (siempre que la misma IP en la que se está conectado esté asociada a una localización o varias). La otra variable que se puede indicar es el tipo de marcaje. Para terminar de realizar el marcaje de entrada, únicamente se debe pulsar sobre el botón ‘Guardar’.

Una vez se ha guardado el marcaje, el botón que aparecerá en la parte superior de la pantalla será el de un icono ‘Stop’.

El procedimiento es el mismo que para fichar la entrada, lo único que cambia es el botón que se necesita pulsar. Para fichar la salida, el usuario debe pulsar sobre el botón ‘ Stop ‘.

De desplegará el modal para registrar el marcaje de salida, en el que también se podrá indicar la localización y el tipo de marcaje.

El fichaje por IP debe realizarse principalmente por Google Chrome. Si no es posible porque no aparece el botón de ‘ Play’ o ‘Stop’ puede deberse a que la IP Privada o Pública no está añadida en el equipo de trabajo o bien porque la configuración del navegador está impidiendo el filtrado por IP.

Para ello se deben seguir los siguientes pasos en Google Chrome para que permita fichar desde aTurnos.

Instala la extensión WebRTC Control.

- Haz clic con el botón izquierdo sobre el botón de extensiones y fija la extensión instalada del WebRTC Control.

- Haz clic derecho en la extensión y entra en ‘ Opciones ‘.

- Haz clic en Test WebRTC Leak y vuelve a acceder al equipo de aTurnos.

Esta extensión es posible descargarla en otros navegadores para que el funcionamiento del fichaje por filtrado de IP también sea posible:

- Microsoft Edge.
- Mozilla Firefox.
- Opera.

¡¡¡¡¡IMPORTANTE!!!!

Si existen varios perfiles de usuario registrados en el navegador, la extensión se debe instalar en cada perfil.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-8d34818cd7.png)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-b52512413e.png)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-735b65d888.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-8535e03074.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-bcc4946fac.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-333d8595f6.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-c905e2f560.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-aa6afe3c50.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-b411271571.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-c1df58ac11.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-3be16ccf36.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-6e35d1dbf5.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-6a81ec0ad5.webp)

![5.9 Fichaje por IP](/media/manual/5-9-fichaje-por-ip-3769f0904a.webp)
