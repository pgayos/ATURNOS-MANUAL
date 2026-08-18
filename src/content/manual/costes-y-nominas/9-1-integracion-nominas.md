---
schemaVersion: "1.0"
contentId: costes-y-nominas-9-1-integracion-nominas
title: Integración nóminas
description: Desde aTurnos contamos con un API que contiene todos los servicios necesarios para poder obtener y actualizar toda la información de aTurnos según las necesidades del cliente.
contentType: concept
module: Costes y nóminas
submodule: Usuarios y perfiles
intent: Integración nóminas
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
  - id: integracion
    label: Integracion
  - id: nominas
    label: Nominas
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
    - https://manual.aturnos.com/knowledgebase/9-1-integracion-nominas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/9-1-integracion-nominas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre integración nóminas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/9-1-integracion-nominas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/9-1-integracion-nominas/
  contentHash: b585c39280694754de9c94a94ae82f021e8643dd0a4e333c371bd5859d7bf99a
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Desde aTurnos contamos con un API que contiene todos los servicios necesarios para poder obtener y actualizar toda la información de aTurnos según las necesidades del cliente.

## Qué debes saber
Esta funcionalidad solo está disponible para aquellos usuarios que tienen el perfil de Superusuario, si precisas un usuario de este tipo, contacta con soporte@aturnos.com

Aplica para los apartados 6.1. “Estadística por periodo” y 6.5 Estadística por periodo de todos los equipos” en cuanto a lo indicado a la forma de calcular los conceptos, que se realiza entre las fechas de inicio y fin.

Los datos necesarios son:

- url: https://www.aturnos.com/api/getPayroll
- id_user:XXXXXX: Siendo el id user el informado en ADMINISTRAR → AJUSTES → Pestaña módulos
- id_aturno:XXXXXX: Siendo el id aturno cualquiera en los que esté creado el usuario con el perfil de Supersusario informado en ADMINISTRAR → AJUSTES → Pestaña módulos
- token: XXXXXXXXXXXXXXXXXXXX: Siendo el token ADMINISTRAR → AJUSTES → Pestaña módulos
- ids_users:XXXXXXXXXX, el id de un empleado en concreto. en blanco todos los trabajadores
- start_date: AAAA-MM-DD. Fecha de inicio de exportación de variables al software de nómina
- end_date: AAAA-MM-DD. Fecha de fin de exportación de variables al software de nómina
- mode_download: Indica el estado en el que se debe encontrar el cuadrante y la fecha del último día exportado, las valores disponibles son: valor 0: FConsulta sin recuperación de caches, es decir, no precisa que el cuadrante esté cerrado. No tiene en cuenta las fechas de cierre ni descarga. No actualiza los datos de último día de exportación. valor 1: Consulta sin recuperación de cache. Tiene en cuentas las fechas de cierre y de descarga. No se suele utilizar valor 2: Consulta con recuperación de cache y tiene en cuenta las fechas de cierre y descarga. Actualiza la fecha del último día exportado en el perfil del trabajador. Es el que se debe utilizar en “real”. valor 4: Consulta con recuperación de cache y tiene en cuenta las fechas de cierre y descarga. No actualiza la fecha de exportación. En el caso de que antes de realizar la descarga en productivo se realicen comprobaciones en el software de nómina es el que se debe utilizar.

A través de ADMINISTRAR → AJUSTES → MODULOS, se visualizan los tres primeros campos indicados

Adjuntamos un pantalla del postman del método indicado

Aplica para los apartados 7.1. “Estadística diaria” y 6.6 “Estadística diaria de todos los equipos” en cuanto a lo indicado a la forma de calcular los conceptos, que se realiza día a día, es la recomendada.

Los datos necesarios son:

- url: https://www.aturnos.com/api/getPayrollAllDaily
- id_user:XXXXXX: Siendo el id user el informado en ADMINISTRAR → AJUSTES → Pestaña módulos
- id_aturno:XXXXXX: Siendo el id aturno cualquiera en los que esté creado el usuario con el perfil de Supersusario informado en ADMINISTRAR → AJUSTES → Pestaña módulos
- token:XXXXXXXXXXXXXXXXXXXX: Siendo el token ADMINISTRAR → AJUSTES → Pestaña módulos
- ids_users:XXXXXXXXXX, el id de un empleado en concreto. en blanco todos los trabajadores
- start_date: AAAA-MM-DD. Fecha de inicio de exportación de variables al software de nómina
- end_date: AAAA-MM-DD. Fecha de fin de exportación de variables al software de nómina
- mode_download: Indica el estado en el que se debe encontrar el cuadrante y la fecha del último día exportado, las valores disponibles son: valor 0: Consulta sin recuperación de caches, es decir, no precisa que el cuadrante esté cerrado. No tiene en cuenta las fechas de cierre ni descarga. No actualiza los datos de último día de importación. valor 1: Consulta sin recuperación de cache. Tiene en cuentas las fechas de cierre y de descarga. No se suele utilizar valor 2: Consulta con recuperación de cache y tiene en cuenta las fechas de cierre y descarga. Actualiza la fecha del último día exportado en el perfil del trabajador. valor 3: Consulta con recuperación de cache y no tiene en cuenta las fechas de cierre y descarga. No actualiza los datos de último día de importación. Los datos están disponible si el cuadrante está cerrado. valor 4: Consulta con recuperación de cache y tiene en cuenta las fechas de cierre y descarga. No actualiza la fecha de exportación. En el caso de que antes de realizar la descarga en productivo se realicen comprobaciones en el software de nómina es el que se debe utilizar.

A través de ADMINISTRAR → AJUSTES → MODULOS, se visualizan los tres primeros campos indicados

Adjuntamos un pantalla del postman del método indicado
