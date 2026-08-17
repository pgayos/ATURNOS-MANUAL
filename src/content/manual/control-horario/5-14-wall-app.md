---
schemaVersion: "1.0"
contentId: "control-horario-5-14-wall-app"
title: "Wall App"
description: "Información sobre wall App, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Control horario"
submodule: "Fichajes"
intent: "Wall App"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "app"
    label: "App"
  - id: "wall"
    label: "Wall"
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
    - "https://manual.aturnos.com/knowledgebase/5-14-wall-app/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-14-wall-app/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre wall App?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  contentHash: "e1fd823e4225f961c099488027ec07e6833f58409af005b7da413fbd1c91bdf4"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre wall App, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Este sistema permite realizar el fichaje desde una APP que se puede abrir en una tablet. Para poder acceder a este sistema de registro de la jornada, es necesario tener contratado el módulo de Control Horario (ver Tarifas ).

Los trabajadores tienen que marcar su ID de usuario (o dato identificativo) para poder fichar sus entradas y salidas.

Se trata de un sistema sencillo y de reducido coste, alternativa a los sistemas biométricos.

El acceso al Wall APP puede ser web, desde la dirección https://wall.aturnos.com/ o descargando la APP nativa ( disponible solo en Android )

A continuación explicamos la configuración y uso.

El sistema puede ser configurado a nivel de ‘Equipo’ o a nivel de ‘ Compañía ‘. Más información sobre la organización de grandes empresas.

En cualquier caso, esta acción solo la puede realizar un administrador total o superusuario.

1. El administrador del equipo, debe entrar por medio del enlace https://wall.aturnos.com/ y hacer clic en “ Acceso administrador “.

1. Acceder con su usuario y contraseña en dos pasos. Después “ Iniciar sesión ” en Wall App de aTurnos.

1. Una vez se ha iniciado sesión, el administrador debe elegir el equipo en el cual quiere registrar un dispositivo para su uso para el Control de Presencia por el Wall App.

1. Elegido el equipo, se mostrará el menú de “ Registrar dispositivo “. Para ello se necesitan dos datos:

- Nombre del dispositivo, identifica distintos dispositivos en el mismo equipo. Localización, en el caso de que cada dispositivo sea para fichar en cada una de las diferentes localizaciones creadas. Tipo de fichaje, permite seleccionar un tipo de fichaje creado.

1. Por último, hacer clic en “ Registrar “.

Se mostrará un mensaje certificando que el dispositivo sea ha registrado correctamente.

Pulsando sobre el botón de volver, tendremos la opción de elegir otro equipo donde registrar el mismo dispositivo.

En el listado nos aparecerán los equipos donde el dispositivo esté registrado.

Una vez el administrador ha registrado el dispositivo, debe salir de su sesión para empezar a utilizar el dispositivo registrado para el fichaje por los trabajadores.

El último paso es establecer en el Wall App el teclado donde los trabajadores indicarán su código de usuario para fichar. El administrador debe pulsar la opción “ Fichaje de trabajador “.

Hecho esto, el dispositivo estará listo para usarse por los trabajadores para fichar su jornada de trabajo.

El sistema permite una mayor flexibilidad y personalización cuando el registro se hace a través de una “ Compañía “, ya que todos los trabajadores de los Equipos que estén dentro de esta Compañía, podrán fichar en ese dispositivo.

El administrador cuando accede al WallApp con su usuario y contraseña, puede seleccionar el registro del dispositivo por Compañía.

Cualquier ‘ Dispositivo ‘ registrado se muestra en RRHH → Control Horario → Dispositivos.

En este menú se podrá configurar:

- Cambiar la Compañía.

- Añadir el dispositivo a un equipo. Esto permite una mayor flexibilidad para configurar los dispositivos sin acceder al WallApp, seleccionando: Equipo. Localización. Tipo de fichaje.

- Eliminar dispositivo de Compañía.

También existe la posibilidad de sacar el Token del dispositivo para integrarlo con otros sistemas.

Una vez el dispositivo está configurado, tendremos en la pantalla un teclado, los trabajadores tendrá que realizar el siguiente proceso:

1. Cada trabajador tiene en aTurnos un número ID de usuario, puede ver este número identificativo en su perfil de aTurnos (ver Acceso a Mi perfil ).

1. El trabajador debe introducir su número ID de usuario como código de acceso para realizar su fichaje y pulsar en el botón de confirmación.

1. Para realizar el fichaje, el trabajador de seleccionar uno de los tipos de fichaje del equipo y pulsar OK.

Existe la posibilidad de que el número no tenga porque ser el ID de usuario sino, cualquier ‘Dato personalizado’ configurado en el Control Horario.

El equipo de trabajo debe tener habilitados los permisos para creación de los QR (links y linksContent).

Cuando los tenga, aparecerá este menú llamado “Tarjeta empleado (QR)” dentro de “Control Horario”.

Dentro de este menú tendremos esta pantalla donde se podrán crear los QR de fichaje de los trabajadores.

Para crear el QR, se tiene que ir a ‘ Acciones ” y seleccionar ‘Añadir enlace’.

En ‘Añadir enlace’ se tiene que seleccionar el trabajador al cual se quiere crear el QR y guardar.

Se mostrará el enlace con los QR del trabajador seleccionado.

Tendremos tres QR distintos para usar para el fichaje:

- QR del ID usuario. Tiene codificado el ID del usuario del trabajador.

- QR del ID Empleado. Aquellos trabajadores que en su perfil tengan informado un ID Empleado, también tendrán un QR de fichaje.

- QR-Token. Alternativa más segura al fichaje por el QR Id Usuario o el QR Id Empleado.

El QR se puede descargar o imprimir para el uso como identificador del usuario a la hora de fichar.

El administrador total o superusuario del equipo, debe acceder con su usuario y contraseña desde el WallApp.

Una vez dentro, acceder desde el icono de ‘Configuración’.

Comprobar que está habilitado el fichaje mediante QR.

Al volver al menú ‘Fichaje trabajador’ se debe mostrar la opción de código QR, para que la cámara de la tablet o móvil lea el QR.

Pueden producirse dos problemas:

Si al intentar introducir el código de identificación o escanear el QR en la pantalla de https://wall.aturnos.com/checkin no obtiene respuesta o es redirigido al inicio de sesión del administrador, esto se debe a que el navegador ha perdido la información necesaria para asociar el dispositivo como autorizado para fichar.

Esto sucede porque los datos almacenados en el navegador pueden eliminarse por diversas razones. Por este motivo, no recomendamos instalar ni utilizar la WallApp en smartphones, tablets u ordenadores que se compartan para otros usos diferentes a la aplicación o entre varios usuarios con cuentas distintas.

Algunos ejemplos de situaciones que pueden provocar este borrado incluyen:

- Uso de navegadores en modo incógnito o privado.
- Aplicación de políticas corporativas de seguridad que reinician el estado del dispositivo.
- Se ha eliminado el dispositivo registrado. Ya sea desde el WallApp o desde ‘ Dispositivos ‘.

- Limpieza manual o automática de datos de navegación (cookies, caché, etc.). Aunque también puede deberse a la configuración del navegador o sistema operativo que elimine datos al cerrar la sesión o apagar el dispositivo.

- Se ha cambiado de cuenta de perfil de usuario en el navegador.

En el proceso de registro descrito anteriormente, el navegador guarda información esencial en su almacenamiento local ( Local Storage ). Desde un punto de vista técnico, se almacena un token que permite identificar el dispositivo desde el cual se realizan los fichajes y vincularlo con el equipo de trabajo configurado en aTurnos.

Para comprobar si el dispositivo está correctamente registrado, puede utilizar el Inspector del navegador. Si encuentra la clave tokens_allowed_checkin en el Local Storage, significa que el registro del dispositivo es correcto.

Reiteramos que no recomendamos utilizar WallAPP en dispositivos de uso compartido o en aquellos donde las políticas de borrado de datos de navegación no están bajo control. Estas prácticas pueden provocar la eliminación del token almacenado, lo que interrumpiría el funcionamiento de la aplicación.

En ocasiones ya ser por caída de la red de conexión wifi de la tablet o porque el propio dispositivo entre en modo de ahorro de energía, cortando la conexión a la red, en las tablet al fichar un trabajador se encuentre con este mensaje “Conexión perdida. Revise su conexión a la red”.

El WallApp, comprobará la conexión de forma constante hasta que se recupere la red y estabilizar el sistema para poder fichar.

Aunque el sistema no obtenga conexión, los fichajes realizados se guardarán en una caché. Cuando la tablet vuelta a tener conexión, estos fichajes se cargarán en orden de llegada.
