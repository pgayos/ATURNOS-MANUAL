---
schemaVersion: "1.0"
contentId: "tareas-guia-plantilla-de-tareas-para-administradores"
title: "Plantilla de tareas para administradores"
description: "Aprende a plantilla de tareas para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Tareas"
submodule: "Gestión de tareas"
intent: "Plantilla de tareas"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2025-06-02
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/plantilla-de-tareas/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo puedo plantilla de tareas para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
---
## Resumen

Cuando se necesita crear varias tareas similares al mismo tiempo, el proceso habitual de creación individual puede resultar lento y repetitivo. Para facilitar esta tarea, el sistema ofrece la funcionalidad de plantillas de tareas, que permite agrupar y generar múltiples tareas de forma rápida y organizada.

## Contenido

Para acceder a esta opción, ve al menú Tareas → Plantillas → Añadir.

Al crear una nueva plantilla, puedes empezar desde cero asignándole un nombre y seleccionando en el campo “Crear plantilla desde” la opción “Nueva plantilla”.

También tienes la posibilidad de basarte en una plantilla ya existente. Para ello, simplemente elige el nombre de la plantilla que deseas duplicar desde el mismo campo. Esto te permite ahorrar tiempo si ya cuentas con estructuras previas que deseas reutilizar.

Una vez creada la plantilla, el siguiente paso es añadir las tareas que la compondrán. Para hacerlo, haz clic en el icono del lápiz. Al editar cada tarea, deberás completar los siguientes campos:

- Experiencia: Especifica qué tipo de experiencia requiere la tarea.
- Descripción: Indica brevemente en qué consiste la tarea.
- Hora de inicio: Define a qué hora debe comenzar la tarea.
- Hora de fin: Establece la hora en la que debe concluir la tarea.
- Flexible: Si la tarea puede realizarse sin un horario fijo, puedes marcar esta opción. En caso contrario, déjala desmarcada para que respete los horarios definidos.
- Preasignación (opcional): Puedes asignar la tarea directamente a un trabajador desde esta misma pantalla si lo deseas.

En la parte inferior, encontrarás un buscador de tareas que te ayudará a revisar y gestionar las tareas que ya forman parte de la plantilla.

Una vez que hayas completado todos los campos necesarios y añadido las tareas deseadas, no olvides hacer clic en el botón Insertar.

Las tareas que hayas añadido aparecerán listadas en la parte inferior del buscador y se bloquearán sus campos. Esto significa que no se podrán modificar directamente, a menos que vuelvas a hacer clic en el botón del lápiz para editarlas.

Esta opción sirve para agendar las tareas que se han creado en la plantilla. Al añadirlas por plantilla, el mando se ahorra la configuración de cada una de ellas, ya que puede importarlas tantas veces como quiera. Se configura de la siguiente manera:

- Plantilla: Selecciona la plantilla de la que quieres añadir las tareas.
- Fecha de inicio y fecha de fin: Indica en qué fechas debe comenzar y debe estar completada la tarea.
- Número de tareas por modelo: Indica cuántas veces quieres importar las tareas del modelo. Por ejemplo: si la plantilla tiene una tarea, indicando 2, se añadiría 2 veces esa tarea. Sin embargo, si la plantilla tiene 2 tareas, el total de tareas que se importarían sería 4, ya que importaría 2 veces cada tarea.
- Multiplicar duración de la tarea: Esta opción se utiliza para incrementar la duración de las tareas que se van a importar, no altera la fecha de inicio, únicamente modifica la duración total.
- Días de la semana: Indica cuáles son los días de la semana en los que se deberá realizar la tarea. Por ejemplo: Se puede indicar que una determinada tarea se deba realizar únicamente los lunes.
- Tipo de inicio: Este campo es un desplegable que permite seleccionar entre varias opciones: Hora de tarea. La tarea se programará exactamente con la misma hora de inicio que aparece en la plantilla. No se aplican cambios ni ajustes adicionales. Relativo absoluto. En este modo, no se respeta la hora de finalización establecida en la plantilla. Al indicar una nueva hora de inicio, la tarea comenzará exactamente a esa hora, y su duración será la misma que la configurada en la plantilla.

E je mplo: Si en la plantilla la tarea está programada de 08:00 a 14:00 (6 horas de duración), y eliges el modo “Relativo absoluto” con una hora de inicio a las 06:00, la tarea se iniciará a las 06:00 y terminará a las 12:00.

- Relativo. En este caso, la hora de inicio de la tarea se calcula sumando el tiempo configurado en la plantilla a la hora que tú indiques como referencia.

Ejemplo: Si en la plantilla la tarea comienza a las 10:00 y tú introduces como hora de inicio “02:00”, la tarea se programará para comenzar a las 12:00. Nota: La hora de finalización de la plantilla no se utiliza en este modo.

- Relativo al inicio y fin. Aquí se suman las horas que indiques tanto al inicio como al final de la tarea, tomando como base los tiempos establecidos en la plantilla.

Ejemplo: Si la plantilla indica que una tarea va de 08:00 a 13:00, y tú configuras 1 hora adicional al inicio y 1 hora al final, la tarea se ajustará para ir de 09:00 a 14:00.

- Bloqueo: Decide si bloqueas la tarea o no (para más información ver “Como crear tareas”).
- Dividir las tareas en las franjas a las que pertenezcan: Si una tarea comienza en una franja (por ejemplo, el turno de mañana) pero su duración supera ese horario, puede dividirse automáticamente para que continúe en la siguiente franja (como el turno de tarde).

Importante: Las franjas horarias deben estar previamente definidas en el sistema.
