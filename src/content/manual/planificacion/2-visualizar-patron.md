---
schemaVersion: "1.0"
contentId: planificacion-2-visualizar-patron
title: Visualizar patrón
description: Una de las acciones que puedes realizar desde el listado de patrones de turnos es visualizarlo. Con esta opción, se puede visualizar la secuencia de tipos de turnos que componen los diferentes periodos del patrón.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Visualizar patrón
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: patron
    label: Patron
  - id: visualizar
    label: Visualizar
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
    - https://manual.aturnos.com/knowledgebase/2-visualizar-patron/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-visualizar-patron/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre visualizar patrón?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-visualizar-patron/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-visualizar-patron/
  contentHash: 2bda800b3793e3edc4c65e71229d2f025fa6e601918624dbbc484c4a48f01df6
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Una de las acciones que puedes realizar desde el listado de patrones de turnos es visualizarlo. Con esta opción, se puede visualizar la secuencia de tipos de turnos que componen los diferentes periodos del patrón.

## Qué debes saber
1. Visualización de datos básicos del patrón: visualizarás los datos esenciales que componen el patrón, que son los siguientes:

- Número de días: totalidad de número de días que componen el patrón de turnos, desde que empieza en el periodo 1 hasta que finaliza en el último periodo (en nuestro ejemplo: 8 periodos de 7 días cada uno, por lo tanto 56 días). En el tour de los 10 pasos para aplicar el patrón, en el paso 8 “periodo inicial”, cuando el escalonado es cero, se le hace referencia a la numeración de los días/celdas como el nombre de índice (pasos de aplicar un patrón). Escalonado: número de días que constituye el ciclo del patrón. Es decir, duración en días de los periodos del patrón, cada cuánto tiempo van a rotar los periodos. El escalonado a 7 días es el más común, ya que cuadran los fines de semana cuando rotan los periodos. En nuestro ejemplo: 7 días. Número de periodos requeridos: número de períodos totales que tiene el patrón (en nuestro ejemplo: 8 periodos). Horas anuales: las horas planificadas a un trabajador, si se le aplica este patrón en un año completo, sin descontar las horas de las vacaciones.

1. Secuencia que compone el patrón de turnos: en nuestro ejemplo, el patrón de turnos está compuesto de 8 periodos de patrón. Esto quiere decir, por ejemplo, que el trabajador “A” empieza el primer periodo (L/L/M5H/M/T1/T1/T1) y cuando termina este periodo comienza con el segundo periodo (M/M5H/T1/L/M/M/M y así hasta el periodo 8 del patrón ejemplo. Cuando finalice el último periodo 8, el “trabajador A” comenzará de nuevo el ciclo desde el periodo 1.
2. Tabla de cobertura de turnos: se visualiza según el tipo de turno, cuántos tipos de turno tiene cada día teniendo en cuenta todos los periodos del patrón. El total de turnos es la suma de cada tipo de turno, teniendo en cuenta todos los días de todos los periodos del patrón.
3. Leyenda: resumen del significado de cada tipo de turno. Incluye la abreviatura, la descripción y el intervalo horario del turno.
