---
schemaVersion: "1.0"
contentId: integraciones-y-api-j-modulos
title: Módulos en aTurnos
description: Principalmente, esta página muestra datos técnicos del equipo (Datos de la API), que son de utilidad para identificarlos y para los casos en los que hay integración entre aTurnos y el sistem.
contentType: concept
module: Integraciones y API
submodule: General
subtopic: ""
intent: Módulos en aTurnos
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
  - id: modulos
    label: Modulos
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
    - https://manual.aturnos.com/knowledgebase/j-modulos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/j-modulos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre módulos en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/j-modulos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/j-modulos/
  contentHash: f07bcb60efb5c3fa0fa167dcf0745abef686a3c0640a2fb5693df3ac503472ba
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre módulos en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Principalmente, esta página muestra datos técnicos del equipo (Datos de la API), que son de utilidad para identificarlos y para los casos en los que hay integración entre aTurnos y el sistema de nómina del cliente. De igual forma, cuando el equipo cuenta con módulos adicionales como el de Recursos, Tareas, etc, podrá configurar desde esta pantalla información de los mismos, tal como se muestra en este ejemplo para el módulo de Recursos que tenia asignado el equipo.

En aTurnos, además de las funcionalidades que se muestran por defecto en nuestro menú principal, también se ofrecen Módulos para poder realizar actividades o funciones adicionales. El administrador tiene la opción de solicitar a Turnos su activación en el equipo para disponer de dichos módulos. Entre estos se encuentran:

- Módulo de Control de Presencia.
- Módulo de Documentos.
- Módulo de Operaciones.
- Módulo de Tareas
- Módulo de Recursos, entre otros.

Se pueden automatizar o lanzar de forma manual las siguiente acciones integradas con un sistema externo.

Esta acción se puede programar para personalizar la integración con Personio, de esta forma, aTurnos recibiría los datos de los empleados en los plazos de tiempo configurados.

- Día de ejecución: se selecciona la frecuencia de la ejecución de dicha acción. Cuenta con las opciones: No programar la ejecución Todos los días. Con esta opción la acción se realizará todos los días del rango de la acción indicada. Último día del mes. Se realizará los 30 o 31 de cada mes, pero si necesitamos que sea así se aconseja que sea indicando 31 días en la opción del ‘Margen de días’ para evitar problemas con aquellos meses que tienen 30 o 31. Seleccionando día en concreto: se indicará el día exacto en el que quiero que se realice la acción.

- Margen de días. La programación de la acción se ejecutará desde el día actual hasta el valor indicado, según el ‘Rango de acción’ y ‘ Día de ejecución’ configurados. Por ejemplo, si estamos a día 18 de Abril y se indica un ‘Margen de días’ de 20, y en ‘Rango de acción’ se informa ‘Mes completo’, se estaría realizando lo siguiente. En cuanto al margen de días estaríamos a 30/03 y como se indica mes completo la acción se realizará sobre el mes entero de marzo.

- Rango de acción. Se selecciona el periodo de tiempo durante el cual se ejecutará la acción, las opciones son: Mes completo. Realiza la ejecución sobre el mes en curso en el cual se está realizando la acción. Por ejemplo, si estamos a 18 de abril, dependiendo del ‘Margen de días’, por defecto si está a 0, la ejecución se va a realizar sobre todo el mes de abril. Si se informan 31, lo hará sobre el mes de marzo. Día ejecución. Realiza la ejecución el día que estamos lanzando la acción. Por ejemplo, si estamos a 18 de abril, la ejecución solo se va a comprobar dicho día. Rango personalizado. La ejecución se realizará en los días indicados, dependiendo del ‘Margen de días’ configurado. Días a pasado. Si se indica 1 día, el ‘Margen de días’ debe ser igual o mayor a 0. Si se indica 0, no consultará nada.

Todos los absentismos que se informen en Personio, se trasladan como periodos de absentismo a aTurnos cada vez que se ejecuta la acción, según la configuración registrada.

Carga todos los fichajes insertados en aTurnos a Personio, según la configuración guardada en la acción.

Encontramos tres datos fundamentales de cara a la integración del equipo con otros sistemas externos a aTurnos.

- ID Usuario: número identificativo del usuario.
- aTurno ID: número identificativo del equipo.
- Token API: es una cadena de texto bien larga, encriptada con una clave.

Para más información, clic en este enlace: Webhooks.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![j. Módulos](/media/manual/j-modulos-216c7eba4a.webp)

![j. Módulos](/media/manual/j-modulos-61049e48e1.webp)

![j. Módulos](/media/manual/j-modulos-a89df842b0.webp)

![j. Módulos](/media/manual/j-modulos-725fa79fab.png)

![j. Módulos](/media/manual/j-modulos-53acf37630.webp)
