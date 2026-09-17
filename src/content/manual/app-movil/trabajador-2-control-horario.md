---
schemaVersion: "1.0"
contentId: app-movil-trabajador-control-horario
title: "Control horario desde la app"
order: 1
description: "Cómo fichar, consultar tus marcajes, pedir el cierre de un fichaje olvidado y revisar incidencias de control horario desde la app."
contentType: procedure
module: App móvil
submodule: "Trabajador"
subtopic: "Control horario"
intent: "Control horario desde la app"
audience:
  - role: Trabajador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
prerequisites: []
platforms:
  - app
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/control-de-presencia/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo funciona el control horario desde la app?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/control-de-presencia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/control-de-presencia/
  contentHash: "97ed33ffc482ef3a8ddd5453a854fc619bac80e323e0a89254e56e9e829444f1"
  migratedAt: 2026-09-18
labels: []
---

## Resumen

Desde Control Horario en la app puedes fichar tu entrada y salida, consultar tus marcajes del día, solicitar el cierre de un fichaje olvidado y revisar incidencias.

## Procedimiento

### Cómo fichar

Para fichar desde la app de aTurnos (iOS y Android), accede a Control Horario > Fichar, donde podrás ver el botón correspondiente para realizar el marcaje (entrada o salida).

Para fichar la entrada de tu jornada debes hacer clic en el botón "Fichar entrada" y abajo te aparecerá la planificación que tienes para ese día. Dicho proceso se ejecutará desde el apartado de fichar, donde te saldrá el tiempo que ha trabajado en caso de haber fichado la entrada anteriormente, o directamente el botón donde hacer clic.

Dependiendo del sistema de fichaje que utiliza tu empresa (geolocalización, dispositivo registrado, IP, etc.), si no aparece la posibilidad de fichar, asegúrate de cumplir con las especificaciones técnicas según cada sistema. Los errores más comunes son:

- **No estar en la zona delimitada por el administrador**: aunque físicamente estés dentro de la "zona", en muchas ocasiones el GPS del móvil no es estático y se mueve intentando encontrar la localización correcta. Si el problema persiste, coméntalo con tu administrador.
- **No tener el GPS activo**, o que la app de aTurnos no tenga permiso de geolocalización (cuando sea un requisito para fichar en tu equipo).
- **No estar conectado a la red (WIFI)** registrada en tu equipo, por ejemplo si estás conectado con datos móviles.

### Mis fichajes

En este apartado aparece la información sobre un día determinado, comparando los marcajes realizados con la planificación. Los colores representan:

- **Periodo verde**: franja horaria planificada (turnos u horas en el cuadrante).
- **Periodo naranja**: franja horaria del tiempo presencial fichado.
- **Línea roja**: momento en que se ha insertado una entrada y aún no se ha cerrado la salida.
- **Periodo negro**: franja horaria con un absentismo.
- **Periodo marrón**: horas de más insertadas en la planificación.

También verás el estado mensual del mes en curso: horas planificadas, horas realizadas, horas complementarias, nocturnidad, absentismos y descansos. Desde aquí es posible cerrar el Timecard el último día de cada mes.

### Petición de marcajes

Si por error u olvido no se han registrado tus marcajes de entrada o salida, puedes solicitar a los administradores del equipo el cierre de esos fichajes. Haz clic en "Nueva petición de marcaje" y completa:

- **Localización**: dónde estabas al olvidar el marcaje.
- **Tipo de marcaje**: entrada, salida, descanso, etc.
- **Dirección**: entrada o salida.
- **Fecha y hora**: cuándo se te olvidó el marcaje.
- **Comentario**: opcional.

Al pulsar "Solicitar", la petición llega al administrador del equipo para su aceptación (o se aplica automáticamente si esa acción está configurada así).

### Peticiones pendientes e historial

En "Peticiones pendientes" verás las solicitudes de marcaje aún no aprobadas por el administrador. En "Historial de peticiones de marcajes" verás todas las solicitudes manuales realizadas hasta el momento.

### Incidencias

Muestra los errores al fichar (olvidos o mala planificación). Tipos de incidencia:

- Trabajadores sin fichajes con planificación.
- Trabajadores con fichajes sin planificación.
- Trabajadores con fichajes con absentismo.
- Trabajadores con fichajes con vacaciones.
- Fichajes olvidados sin cerrar.
- Fichajes coincidentes con el absentismo.

Deslizando hacia la izquierda aparece el icono de un ojo con el detalle de la incidencia y las opciones "solicitar el fichaje" y "solicitar modificación". Más abajo se muestran los tiempos: horas complementarias, nocturnidad, estado, acumulado, horas planificadas, horas trabajadas, absentismos, descanso planificado, descanso fichado y ajustes.

![Botón de fichar entrada/salida en la app](/media/manual/boton-de-fichar-entrada-salida-en-la-app.png)

![Pantalla de mis fichajes](/media/manual/pantalla-de-mis-fichajes.jpeg)

![Detalle de marcajes del día](/media/manual/detalle-de-marcajes-del-dia.jpeg)

![Petición de marcaje](/media/manual/peticion-de-marcaje.jpg)

![Detalle de una petición de marcaje](/media/manual/detalle-de-una-peticion-de-marcaje.jpg)

![Historial de peticiones de marcajes](/media/manual/historial-de-peticiones-de-marcajes.jpg)

![Incidencias de control horario](/media/manual/incidencias-de-control-horario.png)

![Detalle de una incidencia](/media/manual/detalle-de-una-incidencia.png)

![Tipos de incidencia](/media/manual/tipos-de-incidencia.png)

![Resolución de incidencias](/media/manual/resolucion-de-incidencias.png)

![Detalle de tiempos](/media/manual/detalle-de-tiempos.png)

![Resumen mensual de tiempos](/media/manual/resumen-mensual-de-tiempos.png)
