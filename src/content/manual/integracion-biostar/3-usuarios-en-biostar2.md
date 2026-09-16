---
schemaVersion: "1.0"
contentId: integracion-biostar-3-usuarios-en-biostar2
title: Usuarios en Biostar2
description: Definimos como usuario en el programa de Biostar2, tanto a los trabajadores que estarán cargados dentro del software para realizar los registros de la jornada de trabajo por medio de los dis.
contentType: concept
module: Integración con Biostar
submodule: Manual de dispositivos Biostar
subtopic: ""
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
  contentHash: 2beec8f77e141a2866444d4af70a3c4fff2087ed8fa471693408f8570aac4af7
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 3
---
## Resumen

Definimos como usuario en el programa de Biostar2, tanto a los trabajadores que estarán cargados dentro del software para realizar los registros de la jornada de trabajo por medio de los dispositivos, así como a los administradores encargados de volcar la información de los trabajadores, crear los grupos en los que estén clasificados, añadir los perfiles con los permisos que cada uno pueda tener y registrar la huella o tarjeta de fichaje del trabajador.

A continuación explicamos el procedimiento para completar todos estos pasos, empezando por la generación de los perfiles y permisos de usuario de nuestros grupos de gestión, y terminando por cómo se añaden nuevos usuario, su edición y registro de huella o tarjeta.

### Nivel de perfiles y permisos de usuario

Dentro de Biostar2 pueden existir diferentes perfiles con unos permisos para realizar funciones de administración o gestión, tanto de los trabajadores, como de los dispositivos donde se fichará el registro de jornada.

Estos perfiles, son distintos niveles para asignar a cada usuario, como puede ser desde un administrador con todos los permisos, a un trabajador sin ningún permiso.

Los niveles se crean en la Configuración de Biostar2, cuyo acceso encontramos en la mitad izquierda de la parte superior de la ventana.

Para añadir un nivel de perfil de usuario, contamos con los siguiente pasos:

1. Si queremos crear un nuevo nivel, debemos acceder al menú ‘Cuentas’. Después tendremos dos opciones, añadir un nuevo nivel o editar uno que ya se hubiera creado previamente. Para añadir uno nuevo, tendremos que hacer clic sobre el botón situado en la zona superior izquierda ‘Añadir nivel’.

2. En el siguiente paso, comenzamos a editar la información en el perfil del nivel que estamos creando. Teniendo que informar de:
   - Nombre: identificamos al nivel con un nombre.
   - Descripción: indicando aspectos que faciliten la información de ese nivel.
   - Configuración del elemento: en esta parte asignaremos al nivel a qué grupos de usuarios, dispositivos, puertas (en caso de controlarse la apertura de puertas) o accesos (de existir un control de acceso a una zona determinada) tiene permitido administrar el nivel. Estas clasificaciones, estarían creadas previamente en los menús de Usuarios, Dispositivos, Puerta o Control Acceso.
   - Configuración Menú Admin: en este apartado indicaremos los permisos del nivel, es decir, a qué partes del menú puede acceder como administrador y qué acciones tiene permiso de realizar, si son de ‘Editar’ o de ‘Leer’.
   - Añadir usuario: aunque cuando creemos un nuevo usuario tenemos la opción de informan en la edición, qué nivel va a tener su perfil dentro de Biostar2, desde esta función, podemos asignar automáticamente ese nivel a los usuarios seleccionados.

3. Por último, para que se quede guardado el nivel, tendremos que hacer clic en ‘Aplicar’.

### Añadir y editar usuario

Instalados los dispositivos, y siempre que los usuarios (trabajadores) estén cargados al sistema de Biostar2, pasaremos a entrar en el perfil y verificar la información general de cada usuario, para posteriormente realizar la lectura y registro de la huella dactilar.

Aunque previamente los técnico hayan realizado la carga de los trabajadores actuales de los equipos que están en aTurnos, después es posible que deban realizarse nuevas altas en Biostar2 por nuevos trabajadores de los equipos que han sido registrados dentro de aTurnos.

Para dar de alta a un nuevo usuario de Biostar2:

1. Accede al menú Usuario que aparece en la parte izquierda de Biostar2. En la esquina superior izquierda aparece el botón ‘Añadir Usuario’, haz clic en él.

2. Se abrirá un formulario donde al menos tendremos que informar de los siguientes campos (esta información se puede obtener en la ficha del empleado de aTurnos; recuerda que esta integración se puede configurar de forma automática para no tener que realizar esta tarea a mano):
   - Nombre completo del trabajador. Recomendamos usar el mismo que tiene en aTurnos.
   - ID: el ID que se registre en este campo al alta del usuario es el ID de Biostar del usuario, y tiene que coincidir con el ID de usuario de aTurnos o con el ID de empleado registrado en el perfil del trabajador en aTurnos (según cómo se haya realizado la integración).
   - Grupo: normalmente es el mismo nombre que el equipo de aTurnos al que pertenecen o el centro de trabajo de la empresa.

   Estos son los campos obligatorios. Si el usuario también tiene acceso a Biostar deberá completar el resto de campos (operador, mail, teléfono, etc). Para guardar el usuario, haz clic en el botón Aplicar.

3. Accede al menú de Usuario (icono en la barra lateral izquierda) para visualizar el listado completo de usuarios que dependen del administrador.

4. Para acceder al perfil de un usuario y realizar la lectura de la huella, haz doble clic sobre su nombre.

5. En el formulario del perfil, verifica que la información es correcta y continúa al bloque de Credenciales, donde definirás algunos aspectos del tipo de credencial que se va a usar en el Control de Presencia:
   - PIN (si se ha generado, este código es necesario para marcar al fichar en los dispositivos).
   - Modo Aut (normalmente desactivado; si se activa, permite añadir otro modo de identificación automática además del marcado como principal).
   - Credenciales: desde aquí se añade Huella, Tarjeta o Cara (en dispositivos de reconocimiento facial).
   - Nivel Seguridad 1:1: define el nivel de seguridad de la credencial añadida con el dispositivo.

### Recogida de huellas

Si el Control de Presencia se va a realizar por lectura de huella dactilar, hay que pulsar sobre el botón + Huella:

1. **Dispositivo**: en el desplegable aparecen todos los dispositivos vinculados al administrador; se indica el dispositivo donde se escaneará la huella (por ejemplo, USB Scanner).
2. **Calidad**: para evitar falsos positivos o lecturas erróneas, se puede definir el nivel de calidad del escaneo (recomendado no inferior al 80%).
3. **Registrar Dedo**: aquí se añade la huella al sistema.
   - Pulsa +Añadir. Aparecerá un número ordinal sobre el botón indicando que es la primera lectura.
   - Pulsa Escanear y pide al empleado que sitúe su dedo en la zona de lectura. Para una correcta lectura:
     - Que el dedo no esté mojado.
     - Que se coloque lo más recto posible sobre toda la superficie del lector.
     - Que se aplique una presión normal (ni muy fuerte ni muy suave). El lector se pondrá en rojo al detectar el dedo; se realizan dos lecturas para que el sistema tome la que mejor defina los puntos necesarios.
   - Tras la lectura hay dos opciones: Borrar (repetir) o Validar (comprobar la huella tomada).
   - Si el proceso ha sido correcto, pulsa Registrar.
   - Por último, aplica los cambios en el perfil del usuario haciendo clic en Aplicar.

Recuerda: si tras la lectura no haces clic primero en Registrar y después en Aplicar, no se guardará la lectura y tendrás que repetir el proceso.

### Registrar tarjeta

Para asignar una tarjeta a un usuario, dentro de su perfil, haz clic en + Tarjeta. Se abrirá el menú ‘Tarjeta Registro’, donde hay que indicar:

1. **Tipo de tarjeta**: el modelo que se va a utilizar (por ejemplo, CSN).
2. **Opción registro**: si vamos a registrar una tarjeta nueva (‘Registre por Lector Tarjetas’) o a vincular una tarjeta ya recogida por el dispositivo a este usuario (‘Asignar tarjeta’, seleccionando el ID de la tarjeta y pulsando ‘Registrar’).
3. **Dispositivo**: el dispositivo con el que se va a leer la tarjeta.

Después, haz clic en ‘Leer tarjeta’: la luz del dispositivo cambiará a amarillo/anaranjado, momento en el que se puede pasar la tarjeta por el lector para obtener su ID. Por último, haz clic en ‘Registrar’ y después en ‘Aplicar’ para dejar toda la información vinculada al usuario.

Si un trabajador va a reutilizar la tarjeta de otro trabajador:

1. Elimina la credencial de la tarjeta (CSN) del perfil anterior, pulsando el icono de la papelera, y aplica los cambios.
2. Selecciona el usuario y usa “Transferir el usuario a los dispositivos”, con la opción “Reemplazar usuarios con información diferente”, para que los dispositivos no sigan reconociendo la tarjeta como asociada al usuario anterior.
3. Accede al perfil del nuevo usuario, selecciona el modelo de tarjeta (CSN) y, en ‘Opción Registro’, elige “Asignar tarjeta” buscando el ID anotado (o “Registre por Lector Tarjeta” si prefieres volver a leerla; el sistema avisará de que la tarjeta ya existe).
4. Selecciona el ID de la tarjeta y haz clic en “Registrar” para dejarla asignada al nuevo usuario, y aplica los cambios transfiriéndolo de nuevo a los dispositivos con “Reemplazar usuarios con información diferente”.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Nivel de perfiles y permisos de usuario](/media/manual/instalacion-de-dispositivo-usb-6a7420c885.webp)

![Nivel de perfiles y permisos de usuario](/media/manual/nivel-de-perfiles-y-permisos-de-usuario-f9be4d5bd7.png)

![Nivel de perfiles y permisos de usuario](/media/manual/nivel-de-perfiles-y-permisos-de-usuario-dcf4297964.png)

![Nivel de perfiles y permisos de usuario](/media/manual/nivel-de-perfiles-y-permisos-de-usuario-c2dc29b3f8.png)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-058a844a24.png)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-9fb323a907.png)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-f73b760b50.webp)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-f7cf5ac1d9.png)

![Recogida de huellas](/media/manual/recogida-de-huellas-8f7bbdd0a4.webp)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-a4889c9c17.webp)

![Recogida de huellas](/media/manual/recogida-de-huellas-58e0195279.webp)

![Añadir y editar usuario](/media/manual/anadir-y-editar-usuario-96392212c0.webp)

![Recogida de huellas](/media/manual/recogida-de-huellas-d57ca9f97e.webp)

![Recogida de huellas](/media/manual/recogida-de-huellas-25dc812051.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-ab7395b83b.png)

![Nivel de perfiles y permisos de usuario](/media/manual/nivel-de-perfiles-y-permisos-de-usuario-c3ae737cf3.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-2fa95fd160.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-3713020ca6.png)

![Recogida de huellas](/media/manual/recogida-de-huellas-b99641edaf.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-3c660217da.png)

![Recogida de huellas](/media/manual/recogida-de-huellas-eb275045ff.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-d69aa9c9f3.png)

![Registrar tarjeta](/media/manual/registrar-tarjeta-e8a27ef195.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-681d24417a.png)

![Registrar tarjeta](/media/manual/registrar-tarjeta-4574a888b2.webp)

![Recogida de huellas](/media/manual/recogida-de-huellas-7a73e319e0.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-3aff733d77.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-a0a935c02f.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-c8dba9a6d7.webp)

![Registrar tarjeta](/media/manual/registrar-tarjeta-29c6b5e1d3.png)
