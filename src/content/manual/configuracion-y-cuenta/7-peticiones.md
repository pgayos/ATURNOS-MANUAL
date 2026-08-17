---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-7-peticiones"
title: "Peticiones"
description: "Esta restricción establece un mínimo de horas de adelanto para poder aceptar una petición de realizar un tipo de hora."
contentType: reference
module: "Configuración y cuenta"
submodule: "Roles y permisos"
intent: "Peticiones"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "peticiones"
    label: "Peticiones"
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
    - "https://manual.aturnos.com/knowledgebase/8-peticiones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/8-peticiones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre peticiones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  contentHash: "90e9683cb7092af12c79b4538641512a1172bed02bd824f5f9b8a5b2524e2530"
  migratedAt: 2026-08-17
---
## Resumen

Esta restricción establece un mínimo de horas de adelanto para poder aceptar una petición de realizar un tipo de hora.

## Contenido

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el mínimo de horas de antelación que debe de haber para aceptar un tipo de hora. Tipo de hora: Indica que tipo de hora es el que le afectará la restricción

Esta restricción establece un mínimo de horas de adelanto para poder aceptar un permiso de horas.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el mínimo de horas de antelación para aceptar un permiso de horas Tipo de absentismo: Indica que tipo de absentismo es el que le afectará la restricción.

Por ejemplo, en una petición de un absentismo temporal. Si estamos a día 15/10/2021 a las 12:00 y en el valor se indica 48 horas, no se podrían aceptar peticiones de horas extraordinarias hasta que hayan pasado las 12:00 horas del 17/10/2021.

Esta restricción limita el número de días que se pueden solicitar en la misma petición de absentismo.

⚙️Configuración: Además de la configuración básica, tiene tres campos adicionales.

- Valor de la restricción: Indica el máximo de días que se pueden solicitar en la misma petición Tipo de absentismo: Indica que tipo de absentismo es el que le afectará la restricción. Tipos de días: Indica si afecta a días naturales o días laborables.

Por ejemplo, si esta restricción afecta a un tipo de absentismo como “Examen” con un valor de 2 días, ningún trabajador podría hacer una petición cuya duración consecutiva sea de más de dos días, es decir, si pide un “Examen” el 17/10/2021 la fecha fin tiene que ser el 18/10/2021, si fuera el 19/10/2021, saltaría el aviso de que se incumple la restricción.

Esta restricción impide que los trabajadores puedan inscribirse inmediatamente a una oferta de horas de un tipo determinado, exigiendo que transcurra un mínimo de horas (o días) desde su creación. Se utiliza para regular el tiempo de reacción ante nuevas ofertas.

Por ejemplo, si una oferta del tipo “Extra” tiene configurado un mínimo de 2 días, los trabajadores solo podrán inscribirse una vez hayan pasado esos 2 días desde su publicación. Si la oferta es obligatoria, no aparecerá aún en el cuadrante ni será accesible para inscripción; si es deseable, sí será visible, pero no permitirá inscribirse hasta que se cumpla el plazo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Tipo de hora. Indica a qué tipo de hora (por ejemplo, “Extra”) se aplica la restricción. Mínimo de horas para inscripción. Define el tiempo mínimo que debe transcurrir entre la creación de la oferta y la posibilidad de que los trabajadores puedan inscribirse.

Esta restricción impide que si se tiene planificado un turno determinado no se pueda realizar ningún tipo de petición en ese día.

⚙️Configuración: Además de la configuración básica, tiene un campo adicional.

- Tipos de turno: Indica que tipo de turno es el que le afectará la restricción.

Esta restricción impide que un mismo día coexistan una petición de hora complementaria y una petición de turno. No afecta a esta restricción ningún subtipo de hora complementaria.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Comprobación día al que pertenece el evento: En esta configuración decide si el sistema debe usar el inicio o el fin del evento para comprobar si se puede aplicar la restricción o no. Comprobación día al que pertenece la hora: Configura qué momento de la hora utilizar para la comprobación de la restricción.

Esta restricción impide realizar una petición de turno si ya existe una petición de hora complementaria. En esta restricción no se incluyen los subtipos de horas complementarias.

⚙️ Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Comprobación día al que pertenece la hora: En esta configuración decide si el sistema debe usar el inicio o el fin del evento para comprobar si se puede aplicar la restricción o no. Comprobación día al que pertenece el evento: Configura qué momento de la hora utilizar para la comprobación de la restricción.

Esta restricción impide que los trabajadores realicen peticiones (por ejemplo, de absentismos o cambios adicionales) sobre días en los que exista un cambio de turno pendiente de confirmación. Aplica a intercambios, cambios libres o doblajes, y busca evitar conflictos en la planificación mientras el cambio no esté cerrado. Una vez confirmado el cambio, las peticiones sobre esos turnos ya no estarán restringidas.

⚙️Configuración: Esta restricción no requiere campos adicionales más allá de la configuración básica.

Esta restricción impide que se realicen varias peticiones de turno un mismo día. ⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que se puedan realizar peticiones de vacaciones si el día de inicio de las vacaciones no coincide con el día de inicio de la semana, es decir, el lunes.

⚙️Configuración: Esta restricción tiene una configuración básica.

Por ejemplo, si está definido que el inicio de la semana sea el lunes, no se podrá hacer una petición de periodo de vacaciones, a menos que el primer día de dicho periodo coincida en lunes.

Esta restricción impide que se puedan realizar peticiones de absentismo en días que no se tenga ningún tipo de turno u hora planificados.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción establece un mínimo de hora trabajadas para poder pedir un absentismo del tipo seleccionado.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el mínimo de horas que se deben trabajar para poder solicitar un absentismo. Tipo de absentismo: Indica el tipo de absentismo al que aplica la restricción.

Esta restricción impide que la petición de absentismo afecte al 50% de la jornada.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción establece un mínimo de días que se pueden pedir en una petición de permiso de días o periodos de absentismo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Valor de la restricción: Indica el mínimo de días que se pueden solicitar en una petición de un tipo de absentismo. Tipo de absentismo: Indica el tipo de absentismo al que aplica la restricción. Tipo de días: Indica si la restricción aplica a días naturales o laborables.

Esta restricción establece un mínimo de días de antelación para que el trabajador pueda realizar cualquier tipo de petición.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el mínimo de días de antelación que deben cumplirse para poder hacer cualquier tipo de peticiones Tipo de petición: Indica qué tipo de petición es la que aplicará la restricción. Se pueden seleccionar Tipos de turno, tipos de absentismo, vacaciones y turnos sin horas.
