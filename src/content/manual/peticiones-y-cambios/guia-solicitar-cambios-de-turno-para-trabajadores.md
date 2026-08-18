---
schemaVersion: "1.0"
contentId: "peticiones-y-cambios-guia-solicitar-cambios-de-turno-para-trabajadores"
title: "Solicitar cambios de turno para trabajadores"
description: "Información sobre solicitar cambios de turno para trabajadores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Peticiones y cambios"
submodule: "Autogestión del trabajador"
intent: "Solicitar cambios de turno"
audience:
  - role: "Trabajador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2025-01-29
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/guias-trabajador/empoderamiento-del-empleado/solicitar-cambios-de-turno/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre solicitar cambios de turno para trabajadores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
---
## Resumen

El sistema de planificación de turnos de aTurnos permite realizar cambios de turno de manera ágil y eficiente, siempre que la configuración del equipo lo permita. Esta funcionalidad facilita la gestión de la cobertura de turnos, garantizando la continuidad operativa.

A continuación, se detallan los tipos de cambios de turno disponibles, el procedimiento para solicitarlos y su visualización en el cuadrante.

### Tipos de cambios de turno

Permite a un trabajador solicitar no trabajar un turno o un día determinado, cediéndolo a otro compañero.

Condición: El trabajador que recibe el turno no debe tener planificación en ese día.

Ejemplo: Si el trabajador A tiene asignado un turno M (08:00-15:00) el 12 de enero, podrá solicitar un cambio libre únicamente si el trabajador B no tiene turno programado ese día.

Permite a dos trabajadores intercambiar sus turnos de manera mutua.

Ejemplo: Si el trabajador A tiene un turno M (08:00-15:00) y el trabajador B tiene un turno T (15:00-22:00), pueden intercambiarlos de modo que el trabajador A pase a realizar el turno T y el trabajador B el turno M.

Permite que un trabajador ceda su turno a otro compañero, quien deberá asumir ambos turnos en el mismo día.

Ejemplo: Si el trabajador A tiene un turno M (08:00-15:00) y el trabajador B tiene un turno T (15:00-22:00), el trabajador A puede ceder su turno al trabajador B, haciendo que este último realice ambos turnos en la misma jornada.

### Procedimiento para solicitar un cambio de turno

Para solicitar un cambio de turno en aTurnos, siga los siguientes pasos:

1. Selecciona una fecha futura.

Importante: No es posible realizar cambios de turno en el mismo día o en días anteriores.

Haz clic sobre el día del turno que desea modificar y seleccione la opción «Hacer cambio» en el menú desplegable.

2. Especifica el tipo de cambio de turno que desea solicitar (Libre, Intercambio o Doblaje).

Indica si el cambio afecta al día completo o solo a un turno específico.

Selecciona al compañero con quien desea realizar el cambio de turno.

Si el cambio es de tipo Libre o Doblaje, determina si deseas devolver el turno en otro momento o dejarlo a deber.

3. Confirma la solicitud haciendo clic en «Guardar».

Nota: Una vez enviada la solicitud, esta deberá ser aprobada por el compañero implicado y/o por el administrador del equipo para que el cambio se aplique en el cuadrante.

### Visualización de los cambios en el cuadrante

Dependiendo del estado de la solicitud, el cambio de turno se visualizará de la siguiente manera en el cuadrante:

- Cambio Libre: El turno aparece con un marco azul en el cuadrante del compañero al que se le solicita el turno.
- Intercambio: El turno solicitado se muestra borroso, mientras que el turno intercambiado aparece con un marco azul.
- Doblaje: El turno aparece con un marco azul en el cuadrante del compañero que asumiría el turno adicional.

- Cambio Libre: El turno desaparece del cuadrante del trabajador que lo solicitó y aparece con marco verde en el cuadrante del compañero que lo aceptó. Además, se inserta un comentario en el cuadrante informando al administrador sobre la modificación realizada.
- Intercambio: El turno borroso desaparece y el nuevo turno intercambiado se muestra con marco verde.
- Doblaje: El turno desaparece del cuadrante del trabajador que lo cedió y se muestra con marco verde en el cuadrante del compañero que aceptó asumirlo.

Importante: La visualización de los cambios puede variar según la configuración de privacidad establecida por la empresa.
