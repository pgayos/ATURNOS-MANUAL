---
schemaVersion: "1.0"
contentId: "control-horario-5-13-geolocalizacion"
title: "Geolocalización"
description: "Información sobre geolocalización, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Control horario"
submodule: "Fichajes"
intent: "Geolocalización"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "geolocalizacion"
    label: "Geolocalizacion"
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
    - "https://manual.aturnos.com/knowledgebase/5-13-geolocalizacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-13-geolocalizacion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre geolocalización?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "e21dbe1dbc2dbd68a86e9d364adb7524125025268473412563c6be80316fa3c6"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre geolocalización, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Para configurar el fichaje por geolocalización el proceso es simple, el Administrador define las localizaciones determinando en qué radio los trabajadores puede fichar, y si los trabajadores se encuentran dentro de la zona determinada, podrán dar inicio y fin a su jornada. Posteriormente el Administrador puede comprobar de forma exacta la localización desde la cual se han producido los fichajes.

Para ello hay que acceder a Administrar → Ajustes → Módulos y activar la siguiente función: “Requerir coordenadas de posición a los usuarios que utilicen la Web” y guardar el cambio.

En este paso hay que acceder a Administrar → Localizaciones y en Acciones se pueden crear las localizaciones necesarias, o si ya están creadas se pueden editar accediendo al modo de edición de cada localización.

Para definir la localización primero hay que introducir la dirección y posteriormente el radio de distancia. Si la dirección es exacta, por ejemplo, una oficina, el radio será más reducido a si la localización es una ciudad completa y lo que interesa es controlar los diferentes puntos desde los cuales los trabajadores tienen que fichar.

El penúltimo paso es la realización del fichaje por parte de cada empleado. Para ello, el empleado tiene que acceder a su sesión de aTurnos mediante la App o en la Web, y hacer clic en Iniciar Jornada. Para finalizar la jornada el proceso es el mismo, pero en vez de aparecer el botón de Iniciar aparecerá el de Finalizar.

El fichaje por geolocalización funciona en la web ( https://www.aturnos.com/login-ad ) con aquellos dispositivos con GPS. En el caso de no tener GPS, se recogerá la ubicación que nos dé el dispositivo con respecto a su conexión a internet. El navegador solicitará el permiso para acceder a dicha ubicación.

Desde la APP de aTurnos solamente será necesario tener acceso a la ubicación del dispositivo, la APP solicitará el permiso para acceder a dicha ubicación.

Es posible que la ubicación GPS de un móvil se quede bloqueada en unas coordenadas incorrectas o lejanas a la ubicación real. Algunas razones por las que esto puede suceder incluyen:

- Fallos en el sistema de posicionamiento del dispositivo.
- Aplicaciones en segundo plano que interfieren con la señal GPS.
- Datos de ubicación almacenados en caché que no se actualizan correctamente.

- Si el móvil usa Wi-Fi o torres de celular en lugar del GPS puro, puede mostrar una ubicación incorrecta si los datos de esas redes no están actualizados.

- Estar en un lugar con mala recepción de GPS (edificios altos, sótanos, túneles).
- Condiciones climáticas adversas que afectan la señal satelital.

- Si se ha usado una app para modificar la ubicación GPS (Fake GPS, por ejemplo) y no se ha desactivado correctamente, la ubicación podría quedar “congelada” en un punto lejano.

- Si el chip GPS del dispositivo está defectuoso, podría quedarse con la última posición registrada antes de fallar.

1. Activar y desactivar el GPS en los ajustes del móvil.
2. Reiniciar el dispositivo para restablecer la señal GPS.
3. Borrar caché y datos de ubicación en apps como Google Maps.
4. Usar otra app de GPS para verificar si el problema es del software o del hardware.
5. Desactivar cualquier app de ubicación falsa si se ha usado alguna.

Si después de todo esto el problema persiste, puede ser un fallo más profundo del sistema o hardware del dispositivo.
