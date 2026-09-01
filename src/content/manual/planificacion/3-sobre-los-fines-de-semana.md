---
schemaVersion: "1.0"
contentId: planificacion-3-sobre-los-fines-de-semana
title: Sobre los fines de semana
description: Esta restricción establece un número mínimo de fines de semana libre al mes.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Sobre los fines de semana
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fines
    label: Fines
  - id: semana
    label: Semana
  - id: sobre
    label: Sobre
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
    - https://manual.aturnos.com/knowledgebase/3-sobre-los-fines-de-semana/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-sobre-los-fines-de-semana/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre sobre los fines de semana?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-sobre-los-fines-de-semana/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-sobre-los-fines-de-semana/
  contentHash: 355f5ee62092dc24f987a079f613c60a5650ccc32429b80370b1c9a95499355a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Esta restricción establece un número mínimo de fines de semana libre al mes.

## Opciones y datos disponibles
⚙️Configuración: Esta restricción, además de la configuración básica, tiene cinco campos adicionales.

- Considera descanso, vacaciones y turnos sin horas: Si se indica SI, se consideran como libres las vacaciones, si se indica NO, el trabajador que tenga vacaciones, deberá tener el valor de la restricción libre al mes. Valor de la restricción: Indica el número mínimo de fines de semana libres al mes. Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Considerar complementarias y extras: Indica si una planificación en fines de semana de complementarias o extras aplican o no en la restricción. El fin de semana es: Define que días son los que se consideran fin de semana en tu empresa.

Esta restricción establece un mínimo de fines de semana libres al año.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene cinco campos adicionales.

- Valor de la restricción: Indica el número mínimo de fines de semana libres al año. Considerar complementarias y extras: Indica si una planificación en fines de semana de complementarias o extras aplican o no en la restricción. Comprobación si turno es en fin de semana: Configura qué momento del día utilizar para la comprobación de la restricción. Total de días iniciales: Días ya planificados en el año que se deben descontar en lo que queda de año. Este campo se rellena si hay algunos días que no se han informado anteriormente, pero se deben descontar Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato. El fin de semana es: Define que días son los que se consideran fin de semana en tu empresa.

Por ejemplo, se puede indicar que deben descansar 30 fines de semana al año, pero un trabajador que tiene contrato durante todo el año, se aplicarán basándose en los 30, pero otro trabajador que tiene contrato desde el 1 de julio, tendrá que librar como mínimo 15 fines de semana al año para que no salte la restricción.

Esta restricción establece un mínimo de fines de semana completamente libres (ambos días) por cuatrimestre.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Valor de restricción: Inserta el número mínimo de fines de semana largos de descanso por cuatrimestre Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción.

Por ejemplo, si el valor marcado en esta restricción es 3 fines de semana largo por cuatrimestre, en el caso de que solo tenga 1 ó 2 fines de semana largos libres planificados, la restricción al comprobarse nos informaría de que se está incumpliendo.

Esta restricción establece un número de días de fin de semana libre por cada número de semanas indicado.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Considerar descanso, vacaciones y turnos sin horas:Si se habilita este campo, los turnos sin horas, vacaciones y los días libres cuentan como “fin de semana libre”. Si esta opción está en no, los turnos con cero horas no cuentan como días libres. Valor de restricción: Inserta el número de días de fin de semana libres. Comprobación si turno es en fin de semana: Decide si elegir el inicio o el fin del turno para ver si afecta al fin de semana.

Por ejemplo, si el valor que se indica es tres, cada tres fines de semana, deben librar en fin de semana los trabajadores.

Esta restricción define el número de días de fin de semana libres cada X número de semanas total.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Total de días: Número de días que tiene que comprobar la restricción para que pueda solicitar un fin de semana libre. Fines de semana: Número de fines de semana Total de días iniciales: Días ya planificados en el año que se deben descontar en lo que queda de año. Este campo se rellena si hay algunos días que no se han informado anteriormente, pero se deben descontar

Por ejemplo, si se configura lo siguiente: Total de días: 30, Fines de semana libres: 2, Total de días iniciales: 0, la restricción verificará que en cada mes haya al menos 2 fines de semana libres.

Esta restricción establece un número máximo de fines de semana planificados al año.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional:

- Valor de la restricción: Establece un máximo de fines de semana planificados al año que se pueden incluir en el cuadrante.

Por ejemplo, si indicamos 10, quiere decir que como máximo se pueden trabajar 10 fines de semana al año.

Esta restricción limita el número de fines de semana planificado de manera consecutiva.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Valor de restricción: Indica el número máximo de fines de semana consecutivos planificados.

Por ejemplo, si en el valor se establece “2”, implica que como máximo se pueden trabajar 2 fines de semana consecutivos, el tercer fin de semana se debería librar.

Esta restricción limita temporalmente la planificación semanal, haciendo obligatorio el planificar el fin de semana para poder planificar el resto de la semana.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Descartar festivos: Si se marca SI, no se tienen en cuenta los festivos de fines de semana, y se podrá planificar el resto de la semana, obviando la restricción. Si se marca no, no se podrá planificar la semana, aunque haya festivo hasta que el fin de semana no tenga planificación.

Por ejemplo, hasta que un trabajador no esté planificado un sábado y domingo, no puede planificarse un martes.
