---
schemaVersion: "1.0"
contentId: integracion-biostar-7-monitorizar
title: Monitorizar
description: Todas las acciones que se realizan en los dispositivos o las incidencias que les afectan quedan registradas en Biostar2. Supervisa los eventos de tu sistema de Control de Presencia.
contentType: concept
module: Integración con Biostar
submodule: Manual de dispositivos Biostar
subtopic: ""
intent: Monitorizar
audience:
  - role: Administrador
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
    - ¿Qué debo saber sobre monitorizar los dispositivos Biostar?
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
order: 7
---
## Resumen

Todas las acciones que se realizan en los dispositivos, o las incidencias que les afectan, quedan registradas en Biostar2. Con los dispositivos ya en marcha y los trabajadores dados de alta con su huella o tarjeta, **Monitorizar** permite comprobar que el sistema funciona con normalidad, registrando todos los eventos de los dispositivos vinculados al administrador.

## Procedimiento

El acceso a Monitorizar está en la barra lateral izquierda. Como administrador, hay tres funciones principales dentro de esta sección:

- Registro Eventos.
- Registro Tiempo Real.
- Estado Dispositivo.

### Registro Eventos

Muestra un listado cronológico (fecha aaaa/mm/dd hh:mm:ss) de todas las acciones que suceden en los dispositivos. Incluye columnas como:

- **Puerta**: si existe control de acceso en las puertas.
- **ID Dispositivo**: identifica a cada dispositivo vinculado a los grupos de usuarios administrados.
- **Dispositivo**: modelo, número de referencia e IP a la que está conectado.
- **Grupos Usuarios**: el grupo del trabajador que ha generado el evento.
- **Usuario**: ID y nombre del trabajador.
- **Evento**: tipo de evento, tanto de trabajadores (autenticación correcta o errónea de la huella al fichar) como del propio dispositivo (Biostar conectado, red conectada, desconexión detectada).

El registro se puede filtrar por fecha (desde una franja horaria concreta hasta un periodo de más de un año), y también por:

- **Puerta**, si existen puertas de acceso.
- **ID Dispositivo** o **Dispositivo**, si se conoce el identificador o el modelo/IP.
- **Grupo Usuario**, para no tener que ver todos los grupos gestionados.
- **Evento**, para filtrar por tipo(s) de evento.

Entre los eventos más comunes están:

- Autenticación 1:N Errónea/Correcta (Huella): resultado de la lectura al marcar entrada o salida.
- Red Conectada: el dispositivo recibe red.
- Biostar Conectado / Biostar Desconectado: estado de sincronización con Biostar.
- Dispositivo Iniciado: primer arranque o reinicio tras una incidencia.
- Detectada Desconexión Dispositivo: el dispositivo se ha desconectado de la red o de la alimentación (salta una alerta).

Un filtro aplicado se puede guardar con nombre desde el botón **Guardar Filtro** (zona superior izquierda). El botón de acciones (parte superior derecha) permite además:

- Imprimir.
- Exportar CSV (para trabajar el listado en una hoja de cálculo).
- Importación de datos (en el mismo formato CSV).
- Configuración de columnas (mostrar u ocultar las que se necesiten).

### Registro Tiempo Real

Muestra minuto a minuto la secuencia de eventos de los dispositivos vinculados, con los mismos filtros por columna que el Registro de Eventos. Se diferencia en dos funciones:

- **Pausa**: detiene la aparición de nuevos eventos en pantalla.
- **Limpiar**: oculta (sin eliminar) los eventos vistos hasta ese momento.

Las columnas visibles también se pueden ajustar desde el botón de los tres puntos, en la parte superior derecha.

### Estado Dispositivo

Ofrece una vista rápida del estado de cada dispositivo vinculado a los grupos de usuario, sin tener que revisar los registros de eventos:

- **Botón selección**: al elegir un dispositivo aparece la opción **Desactivar Alarma**.
- **Nombre**: modelo, número de referencia e IP del dispositivo (se puede filtrar).
- **Estado Dispositivo**: normal (conectado) o desconectado.
- **Alarma**: las alertas se configuran en Configuración → Alertas; si hay algún problema en un dispositivo, aparece en esta columna.
- **Último evento**: el último evento registrado en cada dispositivo.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Registro Eventos](/media/manual/registro-eventos-a241b4584c.png)

![Registro Eventos](/media/manual/registro-eventos-52b7cc25dd.png)

![Registro Eventos](/media/manual/registro-eventos-32f34ce9d9.webp)

![Monitorizar](/media/manual/6-monitorizar-98d8b29f1d.webp)

![Registro Eventos](/media/manual/registro-eventos-303a252bf0.png)

![Registro Eventos](/media/manual/registro-eventos-3a477abd71.png)

![Registro Eventos](/media/manual/registro-eventos-6947fd78a3.png)

![Registro Eventos](/media/manual/registro-eventos-ce85482e3c.png)

![Registro Eventos](/media/manual/registro-eventos-dc8b7c0eb0.png)

![Monitorizar](/media/manual/6-monitorizar-3151a49bdd.webp)

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
