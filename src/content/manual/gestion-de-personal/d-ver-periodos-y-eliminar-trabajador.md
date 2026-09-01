---
schemaVersion: "1.0"
contentId: gestion-de-personal-d-ver-periodos-y-eliminar-trabajador
title: Ver periodos y eliminar trabajador
description: En esta función tendremos la opción de visualizar todos los periodos de contratación de un trabajador en un mismo equipo o en diferentes equipos.
contentType: concept
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Ver periodos y eliminar trabajador
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
  - id: eliminar
    label: Eliminar
  - id: periodos
    label: Periodos
  - id: trabajador
    label: Trabajador
  - id: ver
    label: Ver
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
    - https://manual.aturnos.com/knowledgebase/1-4-ver-periodos-y-eliminar-trabajador/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-ver-periodos-y-eliminar-trabajador/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre ver periodos y eliminar trabajador?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-4-ver-periodos-y-eliminar-trabajador/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-4-ver-periodos-y-eliminar-trabajador/
  contentHash: 0535139e581568e891d828bcdfa463b130dde8b6918834bd7eb14a4c5349fdd1
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre ver periodos y eliminar trabajador, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En esta función tendremos la opción de visualizar todos los periodos de contratación de un trabajador en un mismo equipo o en diferentes equipos. Se muestran tanto los periodos pasados, como el actual y en caso de estar informados, los futuros.

Llamamos periodos a cada intervalo de tiempo que tenga una fecha de alta, la cual puede tener una fecha de baja (contrato temporal con fecha fin de contrato) o no tener una fecha fin (contrato indefinido).

La tabla de los periodos informa de los siguientes campos de interés:

- Equipo: nombre del equipo en el cual se encuentra o encontraba el trabajador.
- Id del equipo: Código numérico que genera aTurnos para identificar el equipo.
- Id externo: Código que informa la empresa a los equipos que gestiona, es opcional.
- Rol: informa el rol que tiene el usuario en el periodo contratado.
- Horas contrato/año: indica el número de horas asociada al trabajador en el periodo anual. En el caso de que el periodo de usuario es menor a un año indicará las horas de contrato que corresponde a dicho periodo.
- Vacaciones/año: indica el número de vacaciones que le corresponde al trabajador en el contrato (este dato se indica en el perfil del trabajador ).
- Vacaciones / periodo: indica el número de vacaciones que le corresponde al trabajador en el periodo desde su fecha de inicio a fecha fin de cada contrato.
- Porcentaje de jornada: indica el porcentaje de jornada que tiene el trabajador en en el periodo contratado.
- Planificable: indica si se encuentra visible en el cuadrante para el resto de trabajadores. Si es planificable se encuentra incluido en los procesos de planificación, procesos del control horario, reportes, … (dependiendo de la configuración de privacidad del equipo). El administrador puede visualizarlo en el cuadrante, cuadrante anual, estadísticas y detalles del control horario.
- Fecha de inicio: fecha en la que se comienza el periodo del usuario en el equipo.
- Fecha de Fin: fecha en la que termina el periodo. Este campo puede no estar informado para trabajadores que se encuentran activos, sin fecha fin de contrato, como puede ser un trabajador indefinido.
- ¿Ésta activo el periodo el dd/mm/aaaa? En aTurnos se puede consultar los periodos del trabajador en cualquier día. Para ello se utiliza el calendario, escogiendo la fecha a consultar. Una vez selecciona la fecha, la tabla donde se refleja todos los periodos se actualiza, mostrando todos lo periodos del trabajador y estado de ellos a día del día seleccionado.
- Fecha cierre del cuadrante: indica la fecha en la que está cerrado el cuadrante en cada periodo.
- Dos botones de acciones: icono “ojo” que accederá a la hoja del perfil del trabajador, y un icono “papelera”, esta acción es considerada muy delicada, pues si se ejecuta, borrará el periodo seleccionado del trabajador y es importante saber que no se podrá recuperar los datos del periodo del trabajador en el sistema aTurnos posteriormente.

¿Cómo puedo eliminar un trabajador en un equipo de aTurnos?

Un usuario con rol superusuario en aTurnos, puede eliminar un trabajador de un equipo de forma definitiva. El motivo puede ser por diferentes causas, por error al darlo de alta en un equipo, duplicidad de periodos de contratos, duplicidad de trabajadores en distintos equipos en el mismo periodo de contrato, etc.

A continuación te explicamos cómo hacerlo:

1. Accede desde el menú de aTurnos a RRHH → Maestro de empleado.
2. Accede a los periodos del trabajador.
3. Eliminar el periodo desde la acción borrar. Antes de ser borrado el periodo de contrato del trabajador en el equipo seleccionado, el sistema avisa de que se borrará la planificación del trabajador y no se podrá recuperar posteriormente.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![d. Ver periodos y eliminar trabajador](/media/manual/d-ver-periodos-y-eliminar-trabajador-f24de64f78.png)

![d. Ver periodos y eliminar trabajador](/media/manual/d-ver-periodos-y-eliminar-trabajador-de8de834b2.png)

![d. Ver periodos y eliminar trabajador](/media/manual/d-ver-periodos-y-eliminar-trabajador-d50e018d05.png)
