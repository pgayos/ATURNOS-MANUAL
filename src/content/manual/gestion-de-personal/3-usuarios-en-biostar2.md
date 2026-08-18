---
schemaVersion: "1.0"
contentId: gestion-de-personal-3-usuarios-en-biostar2
title: Usuarios en Biostar2
description: Definimos como usuario en el programa de Biostar2, tanto a los trabajadores que estarán cargados dentro del software para realizar los registros de la jornada de trabajo por medio de los dis.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Usuarios en Biostar2
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: biostar2
    label: Biostar2
  - id: usuarios
    label: Usuarios
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
    - https://manual.aturnos.com/knowledgebase/3-usuarios-en-biostar2/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-usuarios-en-biostar2/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre usuarios en Biostar2?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 9
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-usuarios-en-biostar2/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-usuarios-en-biostar2/
  contentHash: 025e9c63b7ecc4d001052aadd3bbedd3f2692a68869321eee89d1943184fa228
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre usuarios en Biostar2, con instrucciones y contexto revisables por el equipo de aTurnos.

Definimos como usuario en el programa de Biostar2, tanto a los trabajadores que estarán cargados dentro del software para realizar los registros de la jornada de trabajo por medio de los dispositivos, así como a los administradores encargados de volcar la información de los trabajadores, crear los grupos en los que estén clasificados, añadir los perfiles con los permisos que cada uno pueda tener y registrar la huella o tarjeta de fichaje del trabajador.

A continuación explicamos el procedimiento para completar todos estos pasos, empezando por la generación de los perfiles y permisos de usuario de nuestros grupos de gestión, y terminando por cómo se añaden nuevos usuario, su edición y registro de huella o tarjeta.

### Nivel de perfiles y permisos de usuario

Dentro de Biostar2 pueden existir diferentes perfiles con unos permisos para realizar funciones de administración o gestión, tanto de los trabajadores, como de los dispositivos donde se fichará el registro de jornada.

Estos perfiles, son distintos niveles para asignar a cada usuario, como puede ser desde un administrador con todos los permisos, a un trabajador sin ningún permiso.

Los niveles se crean en la Configuración de Biostar2, cuyo acceso encontramos en la mitad izquierda de la parte superior de la ventana.

Para añadir un nivel de perfil de usuario, contamos con los siguiente pasos:

1- Si queremos crear un nuevo nivel, debemos acceder al menú ‘Cuentas’. Después tendremos dos opciones, añadir un nuevo nivel o editar uno que ya se hubiera creado previamente. Para añadir uno nuevo, tendremos que hacer clic sobre el botón situado en la zona superior izquierda ‘Añadir nivel’.

2- En el siguiente paso, comenzamos a editar la información en el perfil del nivel que estamos creando. Teniendo que informar de:

- Nombre: identificamos al nivel con un nombre.
- Descripción: indicando aspectos que faciliten la información de ese nivel.
- Configuración del elemento: en esta parte asignaremos al nivel a qué grupos de usuarios, dispositivos, puertas (en caso de controlarse la apertura de puertas) o accesos (de existir un control de acceso a una zona determinada) tiene permitido administrar el nivel. Estas clasificaciones, estarían creadas previamente en los menús de Usuarios, Dispositivos, Puerta o Control Acceso.

- Configuración Menú Admin: en este apartado indicaremos los permisos del nivel, es decir, a qué partes del menú puede acceder como administrador y qué acciones tiene permiso de realizar, si son de ‘Editar’ o de ‘Leer’.
- Añadir usuario: aunque cuando creemos un nuevo usuario tenemos la opción de informan en la edición, qué nivel va a tener su perfil dentro de Biostar2, desde esta función, podemos asignar automáticamente ese nivel a los usuarios seleccionados.

3- Por último, para que se quede guardado el nivel, tendremos que hacer clic en ‘Aplicar’.

### Añadir y editar usuario

Instalados los dispositivos, y siempre que los usuarios (trabajadores) estén cargados al sistema de Biostar2, pasaremos a entrar en el perfil y verificar la información general de cada usuario, para posteriormente realizar la lectura y registro de la huella dactilar.

Aunque previamente los técnico hayan realizado la carga de los trabajadores actuales de los equipos que están en aTurnos, después es posible que deban realizarse nuevas altas en Biostar2 por nuevos trabajadores de los equipos que han sido registrados dentro de aTurnos.

Para dar de alta a un nuevo usuario de Biostar2:

1- Accede al menú Usuario que aparece en la parte izquierda de Biostar2. En la esquina superior izquierda aparece el botón ‘Añadir Usuario’, haz clic en él.

2- Se abrirá un formulario donde al menos tendremos que informar de los siguientes campos, está información se puede obtener en la ficha del empleado de aTurnos. Recuerde que esta integración de empleados se puede configurar de forma automática en aTurnos para no tener que realizar esta tarea. Es decir, cuando se graba un trabajador en aTurnos se descargará automáticamente en Biostar.

1- Nombre completo del trabajador. Recomendamos en el mismo que tiene en aTurnos.

2- ID: el ID que se registre en este campo al alta del usuario, es el ID de Biostar del usuario, y éste tiene que coincidir con el ID usuario de aTurnos o con el ID de empleado registrado en el perfil del trabajador en aTurnos. Se registra el ID de empleado o el ID de usuario de aTurnos dependiendo de como se ha realizado la integración previa al alta del usuario (Programa instalado anteriormente).

3- Grupo: normalmente es el mismo nombre que el equipo de aTurnos al que pertenecen o al centro de trabajo de la empresa.

Estos son los campos obligatorios. Si el usuario también tiene acceso a Biostar deberá completar el resto de campos como el operador, mail, teléfono, etc. Para guardar el usuario, se debe hacer clic en el botón Aplicar.

1- Lo primero que tenemos que hacer es acceder al menú de Usuario. Lo tenemos en el icono del mismo nombre de la barra lateral de la izquierda, haz clic en él.

2- En este menú de Usuario, visualizaremos al total de todos los usuarios que dependen del administrador.

3- Para acceder al perfil del usuario y realizar la lectura de la huella, debe hacer doble clic sobre su nombre.

4- En el formulario del perfil de usuario, verificamos que la información es correcta y continuamos al bloque de Credenciales.

5- En Credenciales definiremos algunos aspectos para el tipo de credencial que vamos a utilizar en el Control de Presencia:

1- PIN (en el caso de haberse generado, este código de acceso es necesario para marcarlo al realizar los fichajes en los dispositivos del Control de Horario).

2- Modo Aut (está acción está normalmente desactivada, si se activa, se puede añadir otro nuevo modo de identificación automática en defecto de la marcada como principal).

3- Credenciales (desde donde podremos añadir Huella, Tarjeta o Cara, en caso de ser un dispositivo de reconocimiento facial).

4- Nivel Seguridad 1:1 (en esta barra definimos el nivel de seguridad de la credencial que añadamos con el dispositivo).

### Recogida de huellas

Si el Control de Presencia lo vamos a realizar por medio del acceso a través de la lectura de la huella dactilar, tendremos que pulsar sobre el botón de + Huella.

1. Dispositivo. Al accionar el menú desplegable, aparecerán todos los dispositivos vinculados al administrador, aquí indicaremos el dispositivo donde escanearemos la huella para su lectura y así añadirla al sistema. En nuestro caso, USB Scanner.

1. Calidad. Para evitar falsos positivos, o lecturas erróneas de la huella dactilar, podemos definir el nivel de calidad del escaneo de la huella. Recomendado no inferior a 80%.

1. Registrar Dedo. Es en este paso donde vamos a añadir la huella al sistema de Biostar2.

Primero debemos pulsar el botón +Añadir. Nos mostrará un número ordinal encima del botón, indicando que es la primera lectura.

Después tendremos que pulsar el botón Escanear, tras ello el empleado deberá situar su dedo en la zona de lectura del dispositivo. Para una correcta lectura hay que tener en cuenta las siguientes consideraciones:

1. Que el dedo no esté mojado.
2. Se coloque lo más recto posible sobre toda la superficie del lector.
3. Que imprima una presión normal, ni muy fuerte, ni muy suave. El lector detectará en un índice, el porcentaje correcto para que la huella sea válida en su escaneo. En el momento de poner el dedo, el lector se pondrá de color rojo. Se deberán de realizar dos lecturas, para que el sistema tome la que mejor defina los 20 puntos necesarios para su lectura.

Realizada la lectura, tendremos dos opciones:

1. Borrar (si queremos borrar la lectura realizada).
2. Validar (si queremos comprobar la huella que hemos tomado en la lectura).

Si hemos realizado el proceso de forma correcta, pincha en Registrar.

Por último, debemos aplicar los cambios realizados en el perfil del usuario, para ello haz clic en Aplicar.

Recuerde, si tras la lectura y recogida de la huella, no haces clic primero en Registrar y después en Aplicar, no se guardará la lectura y tendrás que comenzar el proceso.

### Registrar tarjeta

Para asignar una tarjeta a un ID de usuario, una vez estamos dentro de su perfil, tenemos que hacer clic en + Tarjeta.

Se nos abrirá el menú ‘Tarjeta Registro’, donde tendremos que indicar:

1. Tipo de tarjeta: el modelo de tarjeta que se va a utilizar para la lectura del control de presencia. En nuestro caso CSN.

1. Opción registro: aquí seleccionaremos si vamos a registrar una nueva tarjeta a un usuario, acción de ‘Registre por Lector Tarjetas’.

O si por el contrario vamos a vincular al usuario, una tarjeta que ya está recogida en nuestro dispositivo, en la acción de ‘Asignar tarjeta’. Donde seleccionaríamos el ID de la tarjeta y pinchando en ‘Registrar’, quedaría asignada al usuario que estamos editando.

1. Dispositivo: aquí seleccionamos el dispositivo en el cual vamos a realizar la lectura de la tarjeta para registrarla en el usuario.

Definido lo anterior, el siguiente paso es realizar la lectura de la tarjeta. Para ello, primero debemos hacer clic en ‘Leer tarjeta’.

En ese momento, la luz azul del dispositivo cambiará a un tono amarillo anaranjado, muestra de que podemos pasar la tarjeta por el lector.

Pasamos la tarjeta por encima y aparecerá un ID de la tarjeta.

Por último solo tendremos que hacer clic en ‘Registrar’ y posteriormente en ‘Aplicar’, de esta forma quedará toda la información vinculada al usuario.

Dentro del perfil del usuario, aparece las credenciales con las cuales los trabajadores puede autenticar su fichaje.

Si queremos que otro trabajador utilice la misma tarjeta que otro trabajador ha utilizado anteriormente, el primer paso es eliminar la credencial de la tarjeta (CSN) pulsando sobre el icono de la papelera.

El siguiente paso es aplicar los cambios en el perfil y seleccionar el usuario para “Transferir el usuario a los dispositivos”.

Hay que transferirlo con la opción “Reemplazar usuarios con información diferente” para cargarlo en los dispositivos y no reconozca como asociada la tarjeta que se ha borrado.

A continuación, hay que acceder al perfil del nuevo usuario que va a utilizar la tarjeta.

Seleccionar el modelo (CSN).

En ‘Opción Registro’ se puede haber apuntado el número de ID de la tarjeta que tenía el anterior usuario, seleccionar “Asignar tarjeta” y buscarlo en el listado.

La otra opción es seleccionar “Registre por Lector Tarjeta”, leer la tarjeta (se mostrará un aviso indicando que la tarjeta ya existe), copiar el número, cambiar a la opción “Asignar tarjeta” y buscarla el ID de tarjeta.

Encontrado el número ID de la tarjeta, habría que seleccionarlo y hacer clic en “Registrar”. De esta forma habremos registrado la tarjeta al nuevo usuario.

Habría que aplicar los cambios al nuevo usuario en su perfil y transferirlo a los dispositivos.

Siempre seleccionando la opción “Reemplazar usuarios con información diferente”.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
