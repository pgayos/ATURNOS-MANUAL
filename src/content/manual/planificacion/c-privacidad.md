---
schemaVersion: "1.0"
contentId: planificacion-c-privacidad
title: Privacidad
description: Los datos en la gestión de personal son muy sensibles, existen configuraciones más abiertas a mostrar datos y otras más cerradas.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Privacidad
audience:
  - role: Administrador
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
    - https://manual.aturnos.com/knowledgebase/c-privacidad/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/c-privacidad/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre privacidad?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/c-privacidad/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/c-privacidad/
  contentHash: 6a32c03617aca0707523fea5ee6d437f21ee93c54f2962c4fc19a805fa458fea
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre privacidad, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Los datos en la gestión de personal son muy sensibles, existen configuraciones más abiertas a mostrar datos y otras más cerradas. En este caso, aTurnos permite configurar un abanico de posibilidades para ser más o menos restrictivos. Existe diferentes opciones de privacidad de datos con respecto a los trabajadores y administradores.

Esta opción permite que el administrador total de un equipo no aparezca en el cuadrante. Es frecuente que los administradores totales tengan accesos a equipos donde no se planifiquen, y por ello se prefiere que no aparezca en el cuadrante. Sin embargo, puede darse el caso contrario, donde el administrador necesita una planifcación y por ello es necesario que aparezca en el cuadrante y ser planificable.

- SI, el administrador no aparecerá en el cuadrante para ser planificado.
- NO, el administrador total aparecerá en el cuadrante y podrá ser planificado.

Esta opción permite que los trabajadores puedan ver a sus compañeros de equipo en el listado de trabajadores.

- SI, podrán ver el listado de trabajadores de su equipo y datos de ellos (nombre, teléfono y email).
- NO, de esta forma no podrán ver ni el listado de trabajadores, ni los datos, ya que en ocasiones esto puede incurrir en un problema de privacidad de los datos personales.

El administrador puede limitar que los trabajadores puedan ver los turnos de trabajo de los compañeros en el cuadrante.

- SI, los trabajadores puede ver los turnos planificados de los compañeros de equipo en el cuadrante. Es necesario para que los trabajadores puedan ver toda la planificación del resto de compañeros y poder solicitar cambios (ver Hacer cambios ).
- NO, cada trabajador solo ve sus turnos.

Esta función permite limitar la visibilidad de las localizaciones a los roles de trabajador, administrador validador y administrador planificador.

- SI, estos usuarios podrán ver los turnos planificados en su cuadrante, tanto los que tienen su localización como aquellos turnos que tienen una localización distinta a la suya por defecto. También se mostrarán aquellos turnos de otros compañeros, pero que tengan su misma localización por defecto. Esta opción activa dos opciones adicionales de privacidad: “Localizaciones vistas por jerarquía” y “Ver turnos de otras localizaciones”, las describimos a continuación.
- NO, los usuarios que se encuentran en diferentes localizaciones pueden ver la planificación de todos los trabajadores del equipo.

Las localizaciones permiten definir un nivel jerárquico dentro del equipo (ver Cambiar orden ) y con esta opción puedes limitar la visibilidad según este criterio.

Al delimitar la visibilidad por localizaciones, se mostrarán dos opciones adicionales de privacidad:

‘ Localizaciones vistas por jerarquía’ donde podrás definir el número de niveles (por jerarquía) que puede llegar a ver un trabajador o administrador validador y planificador. Por ejemplo, si la jerarquía de localizaciones es Central-Zona 1- Local 3, y se ha configurado un 1 nivel de jerarquía, los usuarios que tienen por defecto la Localización Central solo podrán ver a los usuarios de la Central y de la Zona 1. Para poder ver los del Local 3, tiene que ser cambiado a 2 niveles.

Se puede desde no limitar los niveles visualizados (ve todos los niveles de la jerarquía de localizaciones), pasando porque solo pueda ver su nivel jerárquico de la localización o que se limite hasta 7 niveles de la jerarquía creados.

‘ Ver turnos de otras localizaciones’ con la opción en ‘SI’ el trabajador podrá ver los turnos que tengan sus compañeros asignados a cualquier localización, siempre que tengan informado al menos un turno con su misma localización por defecto. El trabajador podrá ver toda la planificación de turnos y horas del compañero, incluyendo las informadas en otras localizaciones distintas a la suya.

- SI, los trabajadores no tendrán información de la localización en la que se encuentran destinados sus turnos. Puede ser interesante, si no quieres que vean su asignación de localización.
- NO, los trabajadores podrán ver todas las localizaciones de los turnos.

- SI, los planificadores pueden autoplanificarse, con acciones directas desde cuadrante (insertar turnos, modificar, añadir horas, quitar absentismos, etc.)
- NO, los planificadores no podrán realizar modificaciones directas en su cuadrante (insertar turnos, modificar, añadir horas, quitar absentismos, etc.), pero sí solicitar cambios de turnos y peticiones.

Informa el rol mínimo de administradores, a partir del cual se puede insertar absentismos temporales o totales en su propia planificación.

Este permiso bloquea el acceso al equipo a determinados roles de aTurnos, tales como: trabajador, administrador validador y administrador planificador.

- SI, bloquea el acceso.
- NO, trabajadores, validadores y planificadores acceden al equipo. Dependiendo de la opción seleccionada.

Normalmente, los usuarios son activados por los administradores cuando son añadidos a un equipo, a su correo electrónico les llegará un enlace de activación y una contraseña. Una vez acceden al equipo con esa contraseña, este permiso obliga a que los trabajadores cambien esa contraseña por una propia.

- SI, requiere el cambio de contraseña a los trabajadores en su primer acceso a aTurnos.
- NO, acceden sin necesidad de requerir un cambio de contraseña. Los trabajadores, una vez han accedido a su perfil de aTurnos, pueden realizar un cambio de contraseña (ver ¿Cómo puedo cambiar mi contraseña? )

Este permiso establece si los trabajadores tienen permiso para visualizar las horas insertadas en el cuadrante. Esta configuración no afecta a las horas insertadas mediante tipo de turno. Incluye los 3 tipos de horas de aTurnos (normales, extraordinarias y complementarias)

- El trabajador no visualiza horas, el trabajador no tiene información en su cuadrante, ni de sus horas, ni la del resto de los trabajadores de su equipo.
- El trabajador visualiza solo sus horas, el trabajador tiene información en su cuadrante de todas sus horas planificadas, que no pertenecen a los tipos de turnos. No tiene información de las horas del resto de los trabajadores de su equipo.
- El trabajador visualiza todas las horas (tanto personales como de otros trabajadores), el trabajador tiene información en su cuadrante de todas sus horas planificadas y la del resto de los trabajadores de su equipo.

Este permiso establece cómo un trabajador visualiza absentismos, ya sean propios o de otros, con distintos niveles de detalle. Incluye absentismos de días y temporales

- El trabajador no visualiza ningún absentismo (ni personal, ni de otros), el trabajador no tiene información en su cuadrante ni de sus absentismos, ni la del resto de trabajadores.
- El trabajador visualiza solo sus absentismos sin especificar el tipo (no ve los de otros), el trabajador accede a la información en su cuadrante de los absentismos que tiene planificado, pero no del tipo de absentismo. No tiene acceso a la información de los absentismos que tienen planificado el resto de los trabajadores de su equipo.
- El trabajador visualiza solo sus absentismos especificando el tipo (no ve los de otros), el trabajador accede a la información en su cuadrante de los absentismos que tiene planificado, incluyendo el tipo de absentismo. No tiene acceso a la información de los absentismos que tienen planificado el resto de los trabajadores de su equipo.
- El trabajador visualiza todos los absentismos (tanto personales como de otros) sin especificar el tipo, el trabajador accede a la información en su cuadrante de los absentismos que tiene planificado él y el resto de trabajadores de su equipo, pero no del tipo de absentismo.
- El trabajador visualiza todos los absentismos (tanto personales como de otros) especificando el tipo, el trabajador accede a la información en su cuadrante de los absentismos que tiene planificado él y el resto de trabajadores de su equipo, incluyendo el tipo de absentismo.
- El trabajador visualiza sus absentismos especificando el tipo y ve los de otros sin especificar el tipo, el trabajador accede a la información en su cuadrante de los absentismos que tiene planificado, incluyendo el tipo de absentismo. Tiene acceso a la información de los absentismos que tienen planificado el resto de los trabajadores de su equipo, pero no del tipo de absentismo.

Esta función permite que cuando los trabajadores vean una acción en el ‘ Registro’ de ‘ Acciones ‘ que ellos creen que no han realizado, puedan añadir un comentario a la acción.

- SI, están habilitados para hacer comentarios.
- NO, no se les permite añadir comentarios a las acciones del registro.

- SI, el trabajador podrá ver su propio tooltip flotante (resumen de horas planificadas, vacaciones, …) en el cuadrante cuando coloca el cursor/ratón por encima de su nombre.
- NO, el trabajador podrá ver su propio tooltip flotante.

Los roles de validador y planificador solo pueden realizar peticiones a los trabajadores en aquellas localizaciones que compartan con ellos. Esto significa que, por defecto, solo podrán interactuar con trabajadores asignados a las mismas ubicaciones. En caso de que no exista una localización compartida, el validador o planificador podrá igualmente realizar peticiones si tiene permisos de gestión sobre la localización en cuestión, aunque el trabajador no la tenga asignada.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![c. Privacidad](/media/manual/c-privacidad-4458d3d1da.png)

![c. Privacidad](/media/manual/c-privacidad-7464b3c852.png)

![c. Privacidad](/media/manual/c-privacidad-422fc3fe9f.png)

![c. Privacidad](/media/manual/c-privacidad-f036f4ecce.png)

![c. Privacidad](/media/manual/c-privacidad-1018b74ed2.png)
