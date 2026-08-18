---
schemaVersion: "1.0"
contentId: planificacion-2-diario
title: Diario en aTurnos
description: El trabajador puede tener acceso rápido a sus fichaje día a día, para revisar si los fichaje se han realizado correctamente y validar si el estado de ese día está correcto.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Diario en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: diario
    label: Diario
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
    - https://manual.aturnos.com/knowledgebase/2-diario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-diario/
ai:
  answerableQuestions:
    - ¿Cómo puedo diario en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-diario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-diario/
  contentHash: e18228a5c2e1821f0cb6a5a0af0d9644e0d17868d0cedb2ebe5d07232033b8f9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El trabajador puede tener acceso rápido a sus fichaje día a día, para revisar si los fichaje se han realizado correctamente y validar si el estado de ese día está correcto.

## Procedimiento
Por medio de esta herramienta, el trabajador puede seleccionar el detalle del día que elija en el selector del calendario que se despliega.

De la misma forma puede filtrar por:

- Todos los fichajes: aparecen todos los trabajadores, con planificación o sin planificación de horas, asó como los que hayan realizado fichaje o no, propio del control de presencia.
- Solo sin ajustar: aparecen los trabajadores que aún no han sido sometido a un ajuste del fichaje por parte del administrador.
- Solo ajustados: aparecen los trabajadores que han sido sometido a un ajuste del fichaje por parte del administrador.
- Trabajadores trabajando y sin turno: aparecen los trabajadores que han realizado acción de fichajes (en el detalle si presenta una línea roja de inicio de fichaje, o un periodo presencial naranja), pero no tiene planificación en el cuadrante (no disponen de periodo verde planificado).
- Trabajadores con turno y sin fichaje: aparecen los trabajadores que no han realizado acción de fichajes (en el detalle no presenta línea roja de inicio de fichaje, ni periodo presencial naranja), pero si tiene planificación en el cuadrante (disponen de periodo verde planificado).
- Puntualidad: aparecen los trabajadores que se encuentra en rango de puntualidad, según configuración del módulo de presencia.
- Fichajes automáticos: aparecen los trabajadores en los que sus fichajes han sido registrado sin ninguna acción de terceros (administradores)
- Fichajes manuales: aparecen los trabajadores en los que sus fichajes han sido registrados o editados en algún momento por una acción de terceros (administradores).
- Estado negativo: aparecen los trabajadores en la que las horas planificadas son mayores que las horas presenciales. Interpretado como saldo o estado negativo.
- Estado positivo: aparecen los trabajadores en la que las horas planificadas son menores que las horas presenciales. Interpretado como saldo o estado negativo
- Usuarios dentro (fecha actual)
- Usuarios fuera.

También se puede filtrar para ver los fichajes entre dos determinadas horas del día.

Los gráficos de colores representan los siguientes conceptos:

- Periodo verde: representara la franja horaria en la se encuentra planificado, bien con turnos u horas en el cuadrante del equipo.
- Periodo naranja: representa las franjas horarias del tiempo presencial.
- Línea roja: representa el momento en el que se ha insertado una acción de fichaje de entrada.
- Periodo negro: representa la franja horaria en la que se ha insertado un absentismo.
- Periodo marrón: representa la franja horaria en la que se han insertado horas de más en la planificación.

En este apartado se indica el tiempo de más o de menos respecto al fichaje, hasta que este sea ajustado por el administrador del equipo.

Siempre que no esté a cero, el fichaje se encuentra sin ajustar.

- Día con turno sin fichajes.
- Día con turno, con exceso de tiempo fichado.
- Día con turno, con defecto de tiempo fichado.

En ocasiones puede haber errores en el registro de los fichajes del control de presencia, al hacer clic sobre este botón ‘Solicitar modificación’, se puede hacer una petición para modificar los fichajes de ese día.

Se desplegará un modal con los fichajes de ese día, haciendo clic sobre el día, se puede modificar tanto la fecha, como la hora.

Para realizar la petición, una vez modificada la hora del fichaje, se debe hacer clic en ‘Guardar’. Al igual que con las peticiones de fichajes, éstas pueden necesitar la validación del administrador del equipo para su modificación definitiva.
