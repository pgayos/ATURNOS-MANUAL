---
schemaVersion: "1.0"
contentId: recursos-y-partes-resumen-de-los-recursos-validacion-exportacion-totales-alarmas
title: Resumen de los Recursos. Validación. Exportación. Totales. Alarmas
description: Para que los recursos informados por el trabajador (consulta en el Manual ) y/o por el administrador puedan exportarse como variable de nómina es obligatorio que el recurso esté validado.
contentType: concept
module: Recursos y partes
submodule: General
intent: Resumen de los Recursos. Validación. Exportación. Totales. Alarmas
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: alarmas
    label: Alarmas
  - id: exportacion
    label: Exportacion
  - id: recursos
    label: Recursos
  - id: resumen
    label: Resumen
  - id: totales
    label: Totales
  - id: validacion
    label: Validacion
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
    - https://manual.aturnos.com/knowledgebase/resumen/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/resumen/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre resumen de los Recursos. Validación. Exportación. Totales. Alarmas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/resumen/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/resumen/
  contentHash: af049ecea28c7c2513272cf8fe36a18a6ea3f3af62adec8a073b39b40d500550
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Para que los recursos informados por el trabajador (consulta en el Manual ) y/o por el administrador puedan exportarse como variable de nómina es obligatorio que el recurso esté validado.

## Qué debes saber
1.- Para validar un recurso (solo el administrador tiene esta función) puede:

1.1.- Marcar uno a uno los recursos que se desean validar en la columna “Validado”.

1.2.- Marcar la opción “Marcar validar todos”.

2.- Cualquiera que sea la forma de marcar el check la columna “Validado” (puntos 1.1. y 1.2 anteriores), marcar la opción “Guardar”.

3.- Una vez se marque la opción “Guardar”, se debe “Aceptar”

4.- Una vez se acepta, se visualiza en la columna “Validado por” el nombre del administrador que ha validado el recurso.

5.- Solo los recursos validados pueden exportarse como variable de nómina, por esta razón el efecto que produce es la imposibilidad de modificarlo por parte del trabajador.

Al acceder al recurso desde el cuadrante, los recursos “Dietas” y “Kilómetros a pagar” del 07/05/2024 no pueden modificarse.

6.- Para “desvalidar un recurso” se debe desmarcar el check de la columna “Validado” y marcar la opción “Guardar”. En este ejemplo, se desmarca el recurso “Kilómetros a pagar”.

7.- Se disponen de filtros específicos tanto por el nombre del recurso como el estado del recurso (sin validar, validado o exportado).

Como ya se ha indicado en varias ocasiones en este Manual, uno de los principales uso del módulo de Recursos es el abono de variables como las dietas y/o el kilometraje.

En este enlace del Manual de Nóminas se explica el proceso completo de parametrización de nómina. Los conceptos de cálculo específicos de recursos se explican en el siguiente enlace: Conceptos asociados al módulo de Recursos.

El efecto de la exportación a nómina solo si se realiza a través de ADMINISTRAR → NÓMINAS → EXPORTAR NÓMINAS (Manual Exportar Nóminas) es el marcado con el check en la columna “Exportado”.

En este ejemplo, tanto los recursos “Dietas” como “Kilómetros a pagar” validados del día 07/05/2024 tienen el check en la columna “Exportado”.

Totales

En este ejemplo se visualiza los recursos tipo numérico (Kilómetros):

En este resumen se refleja:

- Trabajador: El nombre de los trabajadores con el recurso informado con límite, en el caso de que esté superado el límite (en este caso 2000 kilómetros) se visualiza en rojo.
- Recursos: Nombre del recurso.
- Valor: Suma los valores del recurso.
- Alarma: Muestra el límite definido en la definición del recurso. Para incluir un límite a un recurso, consulta el Manual.
- Botón de Acción: Desactiva la alarma, es decir, deja de visualizarse en rojo. No desaparece la alerta, porque el valor del límite aún ha sido superado por el valor total del recurso.
