---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-4-medidas
title: Medidas en aTurnos
description: "Las medidas de personal de Gestión de Personal sirven para registrar en el sistema un tratamiento realizado a un empleado: una nueva contratación, un cambio de contrato, una baja, un despido."
contentType: reference
module: Gestión de personal
submodule: Contratos
intent: Medidas en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: medidas
    label: Medidas
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
    - https://manual.aturnos.com/knowledgebase/1-4-medidas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-medidas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre medidas en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-4-medidas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-medidas/
  contentHash: eb7e9c9fcb2728d7279e4f88a763ab29200c031bb9f3223789d07f43683f80c9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre medidas en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Las medidas de personal de Gestión de Personal sirven para registrar en el sistema un tratamiento realizado a un empleado: una nueva contratación, un cambio de contrato, una baja, un despido, etc. Estas medidas pueden tener un impacto en los ajustes de las horas del contrato. Por ejemplo, si es una baja el balance de horas se ajusta y se pasa como abono de nómina. Para ello tenemos diferentes opciones que afectan a las horas y vacaciones según el tipo de medida.

Además, estos tipos de medidas puedan afectar tanto en las altas como en las bajas.

Para añadir una nueva medida, se debe hacer clic en ‘Acciones’, desplegándose el botón ‘Nueva medida’.

Estas opciones para configurar las medidas son acumulables y se ejecutan en el orden definido.

- Calcular vacaciones con respecto al porcentaje de jornada: Las vacaciones por defecto se le aplica el porcentaje de jornada.
- Ajustar los excesos o defecto de las horas de contrato: Se ajusta el balance de horas a 0, ya sea incrementando o decrementando las horas que tiene que realizar por contrato.
- Ajustar los excesos o defecto de las vacaciones contrato: Se ajusta el balance de vacaciones a 0. ya sea incrementando o decrementando las vacaciones que tiene que realizar por contrato.
- Ajustar los excesos o defecto de las horas de planificadas: Se ajusta el balance de horas a 0, ya sea incrementando o decrementando las horas que tiene que planificadas.
- Ajustar los excesos o defecto de las vacaciones planificadas: Se ajusta el balance de vacaciones a 0. ya sea incrementando o decrementando las vacaciones que tiene planificadas.

Al añadir une nueva medida de las enumeradas anteriormente, debemos completar el siguiente formulario:

- Nombre: descripción de la medida.
- Tipo: si afecta a un alta o una baja de los trabajadores.
- Calcular vacaciones con respecto al porcentaje de jornada: si o no.
- Ajustar los excesos o defecto de las horas de contrato: si o no.
- Ajustar los excesos o defecto de las vacaciones: si o no.
- Contrato sin vacaciones: si o no.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.4. Medidas](/media/manual/1-4-medidas-8897555bad.png)

![1.4. Medidas](/media/manual/1-4-medidas-84cdcead6c.png)
