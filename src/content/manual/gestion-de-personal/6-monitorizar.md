---
schemaVersion: "1.0"
contentId: gestion-de-personal-6-monitorizar
title: Monitorizar
description: Todas las acciones que se realizan en los dispositivos o aquellas incidencias que les afectan, quedan registradas en Biostar2. Supervisa los eventos que suceden en tu sistema de Control de Presencia.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Monitorizar
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: monitorizar
    label: Monitorizar
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
    - https://manual.aturnos.com/knowledgebase/6-monitorizar/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-monitorizar/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre monitorizar?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-monitorizar/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-monitorizar/
  contentHash: b1cb0dab805fe09c6c8e12afa52d321eef5883ccd08b3905dc33cf6bea9cbca7
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Todas las acciones que se realizan en los dispositivos o aquellas incidencias que les afectan, quedan registradas en Biostar2. Supervisa los eventos que suceden en tu sistema de Control de Presencia.

Los dispositivos ya están listos para su uso, así como los usuarios (trabajadores) registrados en aTurnos también están cargados en Biostar2 con la lectura de las huellas dactilares registradas en cada uno de los perfiles.

Gracias a Monitorizar, sabremos si el sistema funciona con normalidad y no presenta ningún tipo de incidencia, ya que realiza un Registro de Eventos sobre todo lo que sucede en los dispositivos pertenecientes a nuestro perfil de administrador.

El acceso a Monitorizar se encuentra en la barra lateral izquierda, haciendo clic en el icono con el mismo nombre, entrarás en el menú del Registro Eventos.

Como administrador tienes que prestar atención a tres funciones importantes dentro de Monitorizar:

- Registro Eventos.
- Registro Tiempo Real.
- Estado Dispositivo.

### Registro Eventos

Se nos mostrará una lista donde se registran todas las acciones que suceden en nuestros dispositivos ordenadas de forma cronológica (fecha – aaaa/mm/dd hh:mm:ss -).

En este registro además podrás visualizar:

- Puerta: en el caso de que exista control de acceso en las puertas.
- ID Dispositivo: es el número que identifica a cada dispositivo vinculado a los grupos de usuarios que administramos.
- Dispositivo: en esta columna se nos muestra la descripción del modelo de cada uno de los dispositivos con un número de referencia y entre paréntesis la IP a la que están conectados.
- Grupos Usuarios: nos indica dentro de qué grupo de usuarios está el trabajador que ha realizado el evento.
- Usuario: muestra el número ID del trabajador, así como su nombre entre paréntesis.
- Evento: se identifica el tipo de evento sucedido en la acción tanto de los trabajadores en el dispositivo (autenticación correcta o errónea de la huella cuando el dispositivo la lee para un marcaje de entrada o salida), como del propio dispositivo (Biostar conectado, Red conectada, Detectada Desconexión Dispositivo).

Este registro también lo podemos filtrar para personalizarlo según nuestras necesidades. Puedes hacerlo con la fecha marcando un periodo temporal, que puede abarcar desde una franja horaria concreta, hasta un periodo entre dos fechas que pueden ser superior a un año.

Si queremos movernos en las diferentes páginas que registran los eventos del intervalo que hemos acotado, en la parte superior derecha tenemos dos funciones: una para pasar a la siguiente página o volver a la anterior y otra que nos permite mostrar más o menos filas de registros por página.

También podemos filtrar por:

- Puerta: en el caso de que existieran puertas de acceso, podríamos filtrar para ver aquellas que deseáramos.

- ID Dispositivo: cada dispositivo tiene un número de identificación, si sabemos cuál es cada uno, tendremos la opción de elegir aquel o aquellos que necesitemos.

- Dispositivo: si por el contrario lo que conocemos es el modelo del dispositivo y a que red IP está conectado, conseguiríamos visualizar uno o varios, según precisemos.

- Grupo Usuario: aplicando este filtro se podrán mostrar aquellos Grupos Usuarios que seleccionemos, sin necesidad de ver todos los que están bajo nuestra gestión como administrador.

- Evento: entre todos los tipos de eventos que se pueden registrar en la lista de Monitorizar, se pueden seleccionar aquellos que precisemos.

Entre los tipos de eventos más comunes podemos señalar

- Autenticación 1:N Errónea (Huella) - → En caso de no realizar correctamente la lectura de huella al marcar una entrada o salida en el dispositivo de Control de Presencia.
- Autenticación 1:N correcta (Huella) - → Se ha realizado correctamente el marcaje en el lector.

- Red Conectada: el dispositivo recibe red.
- Biostar Conectado: Biostar está sincronizado con el dispositivo.
- Dispositivo Iniciado: el dispositivo ha sido iniciado por primera vez tras localizarse en el sistema Biostar2 o se ha reiniciado por alguna incidencia.
- Detectada Desconexión Dispositivo: el dispositivo ha sido desconectado de la red de datos o no recibe alimentación eléctrica. En cuyo caso saltaría una alerta como esta.

- Biostar Desconectado: el dispositivo ha dejado de comunicarse con Biostar.

Una vez hemos filtrado los datos de la lista, si queremos guardarlo, tenemos la opción en la zona superior izquierda de nuestro menú Monitorizar, pulsado en el botón Guardar Filtro, al cual podemos añadir un nombre.

Por último, apuntar las funciones disponibles en el botón de acción de la parte superior derecha. Haciendo clic en este botón, se desplegará un menú con las siguientes opciones:

- Imprimir
- Exportar CSV: obtenemos un documento de Excel delimitado por comas para poder trabajar mejor en él, en caso de necesidad de editarlo para la creación de informes.
- Importación Datos: igual que podemos exportar, también podemos importar datos en un documento Excel en formato CSV.
- Configuración Columnas: si queremos ocultar alguna columna o mostrar alguna que en nuestro registro no se muestre por defecto, podremos personalizar las columnas que muestran la lista de eventos.

### Registro Tiempo Real

Podemos seguir minuto a minuto la secuencia de todos los eventos que se registran en los dispositivos vinculados a nuestros grupos de Usuarios.

Esta lista también puede ser filtrada por cada columna como en el Registro Eventos.

Como diferencia resaltar dos nuevas funciones en este modo de Monitorizar:

- Pausa: se detiene la aparición de los eventos que se están registrando.
- Limpiar: quitamos (que no eliminarlos) todos los eventos que estamos viendo hasta ese momento.

Para mejor comprensión de la información mostrada, también podremos mostrar u ocultar columnas, según necesitemos. Tendrás que hacer clic en el botón de los tres puntos de la parte superior derecha.

### Estado Dispositivo

Aunque en los modos Registro Eventos y Registro Tiempo Real, podemos averiguar cuál es el estado de nuestro dispositivo, tenemos una forma menos laboriosa para verlo. Es en la pestaña del panel izquierdo de nuestro menú Monitorizar, Estado Dispositivo.

En esta lista encontraremos todos aquellos dispositivos que están vinculados a nuestros Grupos Usuario. Ahora explicamos las distintas partes de este apartado:

- Botón selección: al seleccionar un dispositivo, nos aparece un botón en la parte superior derecha, Desactivar Alarma.

- Nombre: nos describe el dispositivo con su modelo, número de referencia y la dirección IP de la red a la que está conectado. Podemos filtrar para que solo aparezcan los dispositivos que seleccionemos.

- Estado Dispositivo: señala el estado del dispositivo, si es normal es que está conectado, en caso de no estarlo aparecerá desconectado.

- Alarma: en Configuración - → Alertas, se pueden configurar todas aquellas alertas que quieres que aparezcan por si existe algún problema en el dispositivo.

En caso de existir cualquier tipo de alerta e algún dispositivo, se nos mostrará en la columna Alarma.

- Último evento: en esta columna nos aparecerá el último evento que se ha registrado en cada dispositivo.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Registro Eventos](/media/manual/registro-eventos-a241b4584c.png)

![Registro Eventos](/media/manual/registro-eventos-52b7cc25dd.png)

![Registro Eventos](/media/manual/registro-eventos-32f34ce9d9.webp)

![6. Monitorizar](/media/manual/6-monitorizar-98d8b29f1d.webp)

![Registro Eventos](/media/manual/registro-eventos-303a252bf0.png)

![Registro Eventos](/media/manual/registro-eventos-3a477abd71.png)

![Registro Eventos](/media/manual/registro-eventos-6947fd78a3.png)

![Registro Eventos](/media/manual/registro-eventos-ce85482e3c.png)

![Registro Eventos](/media/manual/registro-eventos-dc8b7c0eb0.png)

![6. Monitorizar](/media/manual/6-monitorizar-3151a49bdd.webp)

![Registro Eventos](/media/manual/registro-eventos-044cbbfc80.png)

![Registro Eventos](/media/manual/registro-eventos-1f746eb2b4.png)

![Registro Eventos](/media/manual/registro-eventos-eba5d049fa.png)

![Registro Eventos](/media/manual/registro-eventos-82abbb113f.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-0750f7a6ac.png)

![Registro Tiempo Real](/media/manual/registro-tiempo-real-255f5590ca.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-5020cabddc.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-b16e8cca12.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-40ac7443ce.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-60473af666.png)

![Estado Dispositivo](/media/manual/estado-dispositivo-5ff116e0f6.png)
