---
schemaVersion: "1.0"
contentId: control-horario-5-5-privacidad
title: Privacidad
description: En este apartado se puede limitar que los trabajadores tengan acceso a ciertas funciones de Control Horairo, así como la configuración de los niveles del rol de aTurnos que puede acceder a l.
contentType: procedure
module: Control horario
submodule: Fichajes
intent: Privacidad
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: privacidad
    label: Privacidad
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
    - https://manual.aturnos.com/knowledgebase/5-5-privacidad/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-5-privacidad/
ai:
  answerableQuestions:
    - ¿Cómo puedo privacidad?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-5-privacidad/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-5-privacidad/
  contentHash: 89b9b14a1fa49189864b927482ec4466f9e4bee0940ad76c054e26fcb34b1971
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a privacidad, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
En este apartado se puede limitar que los trabajadores tengan acceso a ciertas funciones de Control Horairo, así como la configuración de los niveles del rol de aTurnos que puede acceder a los fichajes de los trabajadores o que puede aprobar peticiones de fichajes.

Al seleccionar esta opción los trabajadores podrán tener acceso a su detalle y a su informe de fichajes (ver Detalle ).

Si se habilita, los administradores con rol Administrador Total, Administrador Planificador o Administrador Validador, podrán añadir o modificar sus propios fichajes, así como sus ‘Peticiones de fichajes’, siempre que cumpla las condiciones de ‘Rol mínimo para ajustar y editar marcajes ‘ y ‘Rol mínimo para aprobar las peticiones de fichaje ‘ (ver Detalle ).

Es decir, a partir de qué rol pueden Ajustar fichajes y Modificar fichajes (ver Roles de usuario ).

En este campo, hay 3 opciones a escoger ya que se pueden solicitar fichajes olvidados, pero también se pueden solicitar modificaciones de fichajes que ya se han realizado:

- Permitir a los trabajadores solicitar SOLO peticiones de fichajes: esta opción implica que los trabajadores podrán acceder al listado de ‘Peticiones de fichajes’ y solicitar los fichajes que les faltan, pero no podrán solicitar modificaciones de fichajes ya realizados.
- Permitir a los trabajadores solicitar tanto fichajes como modificaciones de fichajes: en este caso se permiten ambas acciones a los trabajadores, tantas peticiones de fichajes como de modificaciones de fichajes.
- No permitir ninguna de las dos opciones: en este caso los trabajadores no tendrían acceso a la pestaña de ‘P eticiones de fichajes’ y no podrían realizar ninguna de las dos acciones.

Al establecer un rol, indicamos qué tipo de administrador puede aceptar o denegar las peticiones (así como las peticiones de modificaciones de fichajes) o si por lo contrario se permite que sean aceptadas de forma automática (teniendo en cuenta que los fichajes realizados mediante peticiones se registran con la abreviatura (P) de peticiones (ver más). Se permiten las siguientes opciones:

- Las peticiones se aprobarán automáticamente (Excepto modificaciones de fichajes).
- Las peticiones se aprobarán automáticamente.
- Validador.
- Planificador.
- Total.

Esta opción restringe el tiempo sobre el cual se pueden realizar peticiones sobre fichajes no realizados en el pasado.

Es decir, si configura 1 semana, los fichajes no realizados anterior a 1 semanas, no pueden ser solicitador por petición de fichaje.

Se puede configurar la condición para el cómputo de la opción ‘Limitar peticiones de fichaje a pasado’:

- Semana por días naturales.
- Desde el comienzo de la semana (comprobando siempre desde el lunes).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.5 Privacidad](/media/manual/5-5-privacidad-e703ef80cc.webp)

![5.5 Privacidad](/media/manual/5-5-privacidad-15e2173eea.webp)
