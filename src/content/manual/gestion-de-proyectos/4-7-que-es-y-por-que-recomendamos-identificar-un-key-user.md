---
schemaVersion: "1.0"
contentId: gestion-de-proyectos-4-7-que-es-y-por-que-recomendamos-identificar-un-key-user
title: "¿Qué es y por qué recomendamos identificar un Key User?"
description: "Qué es un Key User, por qué aTurnos recomienda identificar uno en cada implantación y qué papel cumple."
contentType: faq
module: "Gestión de proyectos"
submodule: "Plan de Formación para la Implantación"
intent: "¿Qué es y por qué recomendamos identificar un Key User?"
audience:
  - role: Administrador
    access: applicable
entities: []
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
    - https://manual.aturnos.com/documentation/4-plan-de-formacion-para-la-implantacion/7-que-es-y-por-que-recomendamos-identificar-un-key-user/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/4-plan-de-formacion-para-la-implantacion/7-que-es-y-por-que-recomendamos-identificar-un-key-user/
ai:
  answerableQuestions:
    - "¿Qué es y por qué recomendamos identificar un Key User?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/4-plan-de-formacion-para-la-implantacion/7-que-es-y-por-que-recomendamos-identificar-un-key-user/
  redirectFrom:
    - https://manual.aturnos.com/documentation/4-plan-de-formacion-para-la-implantacion/7-que-es-y-por-que-recomendamos-identificar-un-key-user/
  contentHash: "b5bdc00a825aeaea8f0b2fa5e192aec2331c0e35530c40b2e524c04fd4a024a6"
  migratedAt: 2026-09-17
labels:
  - PENDIENTE
order: 8
---

## Resumen

Cada vez que implantamos en un cliente intentamos darle a entender la importancia de un usuario clave en el cliente para hacer una implantación rápida y un seguimiento constante. Normalmente lo hacemos con ejemplos de incidencias. Estos dos ejemplos de incidencias después del Go-live pueden ayudar a contextualizar posibles situaciones

### Ejemplo 1

Tiene que descargar una cantidad de horas de nocturnidad en la nómina de un trabajador pero no ha llegado al software de nóminas y no se ha producido el pago.

1. User: Comprueba que un concepto de nómina de nocturnidad no se ha pagado a un trabajador de forma correcta.
2. Customer Key User: Mirar si está correctamente configurado y lo recupera desde el backoffice. Sino esta bien configurado lo actualiza e informa al usuario de como se realiza correctamente.
3. Customer Key User: Si está configurado actualiza al usuario con la configuración correcta pero sigue sin descargar, mirar en el log del API de integración si ha sido correctamente descargado ese concepto por la nómina. Puede ser que cuando hizo la descarga no estaba registrado.
4. Customer Key User: Si el log del API parece correcto y no ha dado algún problema, pero siguen sin descargarse las horas con nocturnas. Se crea un ticket para aTurnos.
5. aTurnos: Para revisar la configuración del conceptos de nómina y los logs, así como validar el comportamiento del cálculo del sistema y en caso de existir una anomalía en el funcionamiento se crea la incidencia.
6. aTurnos: Se notifica la incidencia al equipo IT de aTurnos y se resuelve, subiendo a producción la modificación correspondiente al entorno del cliente. aTurnos realiza el cierre de la incidencia y se explica al Key User, que entenderá mejor el contexto de la solución y podrá adaptarla a las necesidades del cliente.

### Ejemplo 2

El algoritmo de planificación saca una planificación que no satisface las necesidad que tiene el cliente identificadas: No planifica de forma satisfactoria ciertos días dentro de una planificación anual.

1. User: Realiza una planificación anual pero no satisface las necesidades según su visión de como debería planificar.
2. Customer Key User: Revisa la configuración de la parametrización de planificación, revisa los datos de restricciones de empleados y realiza varias propuestas de planificación. Si está mal configurado avisa al usuario de que modificaciones tiene que realizar.
3. Customer Key User: Si aun así revisando la parametrización, la planificación no se realiza de forma correcta puede realizar modificaciones de forma manual o ver si no es posible con las opciones actuales. Si aun así entiende que se tiene que generar según los criterios del cliente genera un ticket en aTurnos.
4. aTurnos: Revisa la parametrización y genera la planificación. Detecta la desviación si existiera sobre la planificación y mueve el ticket al equipo de IT.
5. aTurnos: El equipo de IT debuga el algoritmo de planificación y provoca una salida esperada para realizar modificaciones en el algoritmo o genera un nuevo elemento de configuración en el algoritmo de planificación que se sube al entorno de producción. aTurnos realiza el cierre de la incidencia y se explica al Key User, que entenderá mejor el contexto de la solución y podrá adaptarla a las necesidades del cliente.

### Conclusión

Después de ver estos dos ejemplos podemos ver como la existencia de un Key user y un buen Key user mejorar la experiencia con el uso de aTurnos.

1. Si la duda o incidencia es gestionada a nivel interno los tiempos de respuesta y de operativa normal se reducen drásticamente, en los ejemplo se cerraría en los pasos 2 o 3, donde no tendríamos que llegar a los puntos 4 o 5 donde estaría aTurnos. Nuestro soporte puede ayudar pero la falta de contexto o de política interna en la gestión de personal aumenta los tiempos de respuesta.
2. El nivel de complicación de aTurnos cuando se quieren ajustar planificaciones o realizar volcado a nómina complejos, la necesidad ayuda puede ser constante o al menos, al inicio necesaria para muchos perfiles.
3. El nivel de rotación de managers es elevado, tenemos empresas donde existe una gran rotación y la formación tiene que ser constante, siempre es más fácil dar una formación contextualizada.
4. La configuración de aTurnos es consistente porque es mantenida por una persona, no tienen que existir configuraciones diferentes por diferentes usuarios.
