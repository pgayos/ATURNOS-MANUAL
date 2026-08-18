---
schemaVersion: "1.0"
contentId: "control-horario-10-sobre-el-modulo-de-control-horario"
title: "Sobre el módulo de Control Horario"
description: "Información sobre sobre el módulo de Control Horario, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Control horario"
submodule: "Vacaciones y ausencias"
intent: "Sobre el módulo de Control Horario"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "control"
    label: "Control"
  - id: "horario"
    label: "Horario"
  - id: "modulo"
    label: "Modulo"
  - id: "sobre"
    label: "Sobre"
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
    - "https://manual.aturnos.com/knowledgebase/10-sobre-el-modulo-de-control-de-presencia/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-sobre-el-modulo-de-control-de-presencia/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre sobre el módulo de Control Horario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "9b9ad511b5300a8da05dbbae7a79e242341ef7a75d6b13bc3b0c4c5d8ea8e880"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre sobre el módulo de Control Horario, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Esta restricción asegura que los turnos planificados incluyan el tiempo de descanso correspondiente según lo definido en el perfil del trabajador. Si no se encuentra esta información en el perfil, se aplican los valores configurados por defecto. La restricción verifica que, para aplicar el descanso, se haya planificado un mínimo de horas trabajadas, y también contempla un descanso reducido en caso de no alcanzarse ese mínimo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene cuatro campos adicionales.

- Mínimo de horas trabajadas en turno. Define el número mínimo de horas planificadas necesarias para aplicar el descanso completo. Descanso en minutos. Especifica el tiempo de descanso que debe incluirse cuando se cumple el mínimo de horas trabajadas. Descanso en minutos si no se llega al mínimo de horas. Establece el tiempo de descanso que se aplicará incluso cuando no se alcance el mínimo de horas trabajadas. Intervalos: Habilitando esta opción, se puede configurar esta restricción de manera más avanzada, detallando en cada intervalo de tiempo trabajado, el descanso en minutos que corresponde. Es decir, se habilitan varias configuraciones de esta misma restricción, para que puedas añadir tantos valores como desees.

Esta restricción impide planificar turnos que no incluyan el tiempo de descanso mínimo establecido en el perfil del trabajador. Solo se permiten turnos cuyo descanso sea igual o superior al especificado. Si el perfil no contiene información de descanso, se utilizarán los valores configurados por defecto. Esta validación garantiza el cumplimiento de los descansos laborales previstos en relación con la duración del turno.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Mínimo de horas trabajadas en turno. Define el mínimo de horas que debe tener un turno para que se le exija el descanso completo. Descanso en minutos. Especifica el tiempo de descanso requerido cuando se cumple el mínimo de horas. Descanso en minutos si no se llega al mínimo de horas. Indica el tiempo de descanso que debe respetarse incluso cuando no se alcanza el mínimo de horas trabajadas. Intervalos: Habilitando esta opción, se puede configurar esta restricción de manera más avanzada, detallando en cada intervalo de tiempo trabajado, el descanso en minutos que corresponde. Es decir, se habilitan varias configuraciones de esta misma restricción, para que puedas añadir tantos valores como desees.

Esta restricción permite configurar los minutos de descanso que el trabajador puede disfrutar si se ha trabajado un mínimo de horas.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene algunos campos adicionales.

Pese al orden establecido en la configuración, lo primero que se ha de definir es si se van a tener intervalos o no. Estos intervalos establecen unos rangos de horas, la restricción comprobará según lo que se ha trabajado, qué intervalo se va a aplicar. Se pueden establecer un máximo de 3 intervalos.

Si NO se van a establecer INTERVALOS, la configuración es muy sencilla:

- Mínimo de horas trabajadas en turno: En este campo informa el mínimo de horas que el trabajador debe haber realizado para que tenga derecho de disfrutar un descanso.
- Descanso en minutos: Indica el descanso en minutos que le corresponde al trabajador por haber trabajado un mínimo de horas.
- Descanso en minutos si no se llega al mínimo de horas: Indica cuántos minutos de descanso puede disfrutar el trabajador pese a no haber trabajado el mínimo de horas.

Si SÍ se van a establecer INTERVALOS, la configuración es algo más avanzada:

- Mínimo de horas trabajadas en un turno: En este campo informa el mínimo de horas que el trabajador debe haber realizado para que tenga derecho de disfrutar un descanso.
- Máximo de horas trabajadas en un turno: En este campo informa el máximo de horas que el trabajador debe haber realizado para disfrutar del descanso a configurar en el siguiente punto.
- Descanso en minutos: Indica el descanso en minutos que le corresponde al trabajador por haber trabajado un mínimo de horas.
- Descanso en minutos si no se llega al mínimo de horas: Indica cuántos minutos de descanso puede disfrutar el trabajador pese a no haber trabajado el mínimo de horas.

Ejemplo de configuración:

Con esta configuración estaríamos indicando que si el trabajador ha trabajado entre 5 y 7 horas, tiene derecho de disfrutar 30 minutos de descanso, en caso de no cumplir con este mínimo de horas, únicamente podría tomarse 10 minutos de descanso.

El resto de Intervalos es la misma configuración, indicando otros dos rangos de horas trabajadas según las necesidades. Por ejemplo, podríamos indicar que entre 1 y 3 horas puede descansar 10 minutos y si no se llega al mínimo, 5.
