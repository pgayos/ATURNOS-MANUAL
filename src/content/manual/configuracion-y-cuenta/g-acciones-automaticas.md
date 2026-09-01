---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-g-acciones-automaticas
title: Acciones Automáticas
description: Las acciones en aTurnos son procesos que se configuran en el sistema para que sean ejecutados de manera automática tomando en cuenta la frecuencia y parámetros requeridos.
contentType: concept
module: Configuración y cuenta
submodule: Roles y permisos
subtopic: ""
intent: Acciones Automáticas
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
  - id: acciones
    label: Acciones
  - id: automaticas
    label: Automaticas
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
    - https://manual.aturnos.com/knowledgebase/g-acciones-automaticas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/g-acciones-automaticas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre acciones Automáticas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 10
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/g-acciones-automaticas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/g-acciones-automaticas/
  contentHash: 336719f7c5ec0e4e041241595b866d1bc205354124e0a79cf4cc4f31608779ee
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Las acciones en aTurnos son procesos que se configuran en el sistema para que sean ejecutados de manera automática tomando en cuenta la frecuencia y parámetros requeridos.

## Qué debes saber
Al “Añadir” se pueden configurar las siguientes acciones:

Esta acción automática sirve para denegar cambios de turno solicitados por los usuarios que no se hayan aprobado todavía por todas las partes involucradas en el periodo de tiempo configurado. Por ejemplo, se puede configurar que al final de cada mes se borren aquellas solicitudes de cambios de turno no gestionadas para tener los cuadrantes lo más actualizados posible.

La acción de denegar peticiones no aceptadas sirve para hacer una limpieza en el periodo de tiempo deseado de las peticiones residuales que no han sido gestionadas, de forma que no se acumulen en el tiempo ralentizando el funcionamiento de la información o con información desactualizada. En este caso se engloban todas las peticiones que se pueden realizar en el sistema (de vacaciones, permisos, turnos y/o horas).

Al igual que la anterior, esta acción borrará todas las ofertas no gestionadas en el periodo de tiempo configurado. De esta forma, todas aquellas ofertas abiertas cuyo plazo ha finalizado quedarían eliminadas facilitando así la gestión a los administradores.

En aquellos casos en los que el trabajador tenga planificadas horas extra y/o complementarias en su cuadrante y posteriormente se le inserte un periodo de absentismo (por ejemplo, una baja por enfermedad), según la configuración del sistema, esas horas se pueden mantener en caso de que el alta de dicho periodo de absentismo se efectúe antes de los días donde tenga planificadas las horas.

Pero si el alta del periodo de absentismo se produce después de que transcurran los días planificados con las horas extra y/o complementarias, se puede configurar esta acción para eliminar esas horas de forma que no computen para las nóminas ya que es tiempo que no se ha trabajado y que no forma parte de las horas planificadas de convenio.

Se trata de un ajuste del módulo de control de presencia que ajustas las horas complementarias planificadas a las horas realmente trabajadas. Por ejemplo, si un trabajador tiene planificadas 6 horas complementarias en el cuadrante y llegado el día solo trabaja 5 horas, el sistema le podría hacer un ajuste de forma que se equiparan las horas planificadas a las realmente trabajadas, y así, para el pago de nómina viajarían 5 horas en lugar de 6.

Y por ejemplo, en caso contrario de que el trabajador realice 7 horas en lugar 6, el sistema no realizaría ningún ajuste, se computaría esa hora de más dentro del saldo acumulado de horas trabajadas pero no se consideraría como hora complementaria de forma automática.

La acción de cerrar el cuadrante se puede programar para ser lanzada a final de mes de forma que no se puedan realizar cambios en el cuadrante el mes anterior si esos datos ya han viajado a nómina. De esta forma, se puede asegurar que las correcciones y cambios a pasado se realicen de forma controlada y no afecten a los cálculos ya realizados.

Esta acción cierra el cuadrante completo por equipo de forma generalizada a todos los empleados.

La acción de cerrar el cuadrante a los empleados se puede programar para ser lanzada a final de mes de forma que no se puedan realizar cambios en el cuadrante el mes anterior si esos datos ya han viajado a nómina. De esta forma, se puede asegurar que las correcciones y cambios a pasado se realicen de forma controlada y no afecten a los cálculos ya realizados.

Esta acción cierra el cuadrante por empleado de forma que los trabajadores pueden tener diferentes fechas de cierre de cuadrante en el mismo equipo (esto es útil en caso de que existan muchos trabajadores con contrato temporal con diferentes fechas de finiquitos).

Esta acción valida el cuadrante de los empleados automáticamente en el plazo de tiempo indicado, de forma que si esa validación no se ha realizado de forma manual, se garantiza que la información de los trabajadores afectados también se exportaría a nómina.

Esto es especialmente útil para no validar manualmente todos los empleados, sino solo aquellos con casuísticas más complejas o con cambios a realizar manualmente y así reducir significativamente la carga de trabajo de los administradores.

Esta acción sirve para eliminar peticiones de horas extra y/o complementarias realizadas por un administrador para un trabajador si dicho trabajador no ha aceptado la petición en el periodo de tiempo definido.

Esta acción se puede programar para enviar un correo electrónico personalizado a los usuarios definidos (por roles). Por ejemplo, se puede enviar un recordatorio al final de cada mes para que los trabajadores revisen su informe de registro diario de la jornada y validar que todos los datos correctos.

Los campos a rellenar para la configuración de esta acción:

- Asunto: indica o define de qué trata la Notificación o email que se enviará.
- Texto: Informar el contenido de la notificación o recordatorio que se quiere enviar.
- Niveles de envío: selecciona él o los perfiles a los que les debe llegar la notificación (Rol: Superusuario, Administrador total, Planificador, Validador y/o Trabajador, Cliente o externo)
- Día de ejecución: se selecciona la frecuencia de la ejecución de dicha acción. Cuenta con las opciones: No programar la ejecución Todos los días: con esta opción la acción se realizará todos los días del rango de la acción indicado. Último día del mes: se realizará los 30 o 31 de cada mes, pero si necesitamos que sea así se aconseja que sea indicando la siguiente opción en 31 días para evitar problemas con aquellos meses que tienen 30 o 31. Seleccionando día en concreto: se indicará el día exacto en el que quiero que se realice la acción.
- Margen de días: programa la ejecución de la acción por si necesitas realizarla a pasado o a futuro en el rango de acción indicado. Si indicamos días en positivo es pasado y negativo es futuro. Por ejemplo, si estamos a día 18 de Abril e indicamos en margen de días: 20 días, y en rango de acción indicamos: mes completo, estaría realizando lo siguiente: en cuanto al margen de días estaríamos a 30/03 y como se indica mes completo la acción se realizará sobre el mes entero de Marzo.
- Rango de acción: se selecciona el periodo de tiempo durante el cual se ejecutará la acción, las opciones que muestra el campo son: Mes completo: realiza la ejecución sobre el mes en curso en el cual se está realizando la acción. Por ejemplo, si estamos a 18 de Abril, la ejecución se va a realizar sobre todo el mes de Abril. Día ejecución: realiza la ejecución el día que estamos lanzando la acción. Por ejemplo, si estamos a 18 de Abril, la ejecución solo se va a realizar dicho día. Rango personal: la ejecución se realizará en los días indicados. Días a pasado: si indico 1 día, si yo estoy ejecutando la acción el día 18, la acción que se este realizando se hará hasta el día 17.

Esta acción se puede configurar para aprobar las peticiones de vacaciones, permisos, turnos y/o horas realizadas por los usuarios comprobando siempre todas las restricciones. De esta forma, la carga de trabajo de los administradores se ve reducida garantizando el cumplimiento de las restricciones creadas en el equipo (de tipo legal, personal del trabajador, carga de trabajo, etc.).

Esta acción se puede configurar para aprobar las peticiones de vacaciones, permisos, turnos y/o horas realizadas por los usuarios comprobando solo las restricciones obligatorias (no las deseables). De esta forma, la carga de trabajo de los administradores se ve reducida garantizando el cumplimiento de las restricciones obligatorias creadas en el equipo (de tipo legal, personal del trabajador, carga de trabajo, etc.).

Esta acción se puede configurar para aprobar las peticiones de vacaciones, permisos, turnos y/o horas realizadas por los usuarios en un periodo de tiempo definido.

Esta acción ofrece la posibilidad de hacer una llamada a otro sistema para mandar información pasando como parámetro la fecha de inicio, la de fin y el id_Aturno. Se tiene que indicar la dirección a la que se va a hacer la llamada.

Por ejemplo: se puede configurar para que en una web externa, cuando llegue el día 10 del mes se mande un recordatorio de “Debes revisar tus fichajes del mes anterior”, se tendría que indicar la dirección de la web ‘ https://www.web.com/avisos.php ‘ y nosotros a esa web llamaríamos con la información de ‘ https://www.web.com/avisos.php?start_date=2022-11-10&end_date=2022-11-10&id_aturno=1388 ’ La otra web, al recibir esa información haría a su vez la llamada que tuviera programada.

En este ejemplo vamos a reflejar una parametrización en un cliente que nos solicitó que todos los permisos temporales del tipo Permiso Oficial se aprueban automáticamente.

Desde ADMINISTRAR → AJUSTES → ACCIONES AUTOMÁTICAS

1.- Acción: Aceptar todas las peticiones pendientes.

2.- Tipo: Permiso temporal

3.- Tipo de absentismo: PO – Permiso oficial

4.- Rol de usuario máximo: Siempre informar Superusuario.

5.- Día de ejecución: Todos los días, de forma que se aprobarán todas las peticiones pendientes de absentismos temporales atendiendo al margen de días.

6.- Margen de días: Admite positivos (días a pasado) y negativos (días a futuro). En este ejemplo, el valor 0 (cero) indica que se aprobarán todas las peticiones pendientes en el mes del día de la ejecución.

Es decir, si el día de ejecución es el 10 de mayo de 2024, aprobará todas las peticiones pendientes del mes de mayo de 2024.

Para que se aprueben las peticiones pendientes del mes de junio de 2024 que se han solicitado en el mes de mayo de 2024, hay que crear una nueva acción automática informando como margen de días el valor -30 (en negativo).

Y sucesivamente habrá que crear tantas acciones automáticas como días hacía delante se quieren aprobar.

7.- Rango de acción: Mes completo

Siguiendo con el ejemplo, en el equipo están creadas 4 acciones automáticas.

1.- Con valor cero aprobará las peticiones pendientes del mes de ejecución, si el día de ejecución es mayo de 2024 aprobará las peticiones pendientes de este mes

2.- Con valor -30 la del mes siguiente, siguiendo con el ejemplo, aprobará las peticiones pendientes de junio de 2024

3- Con valor -60, aprobará las peticiones pendientes de julio de 2024

4.- Con valor -90, las pendientes de agosto de 2024

Es decir, se aprobarían las peticiones de permisos temporales del tipo PO de los 3 meses siguientes al día de la ejecución.

Una vez creadas las acciones automáticas se pueden ejecutar para probar el comportamiento

El trabajador tiene el mes de mayo de 2024 las siguientes peticiones:

- Día 02/05/2024, una petición de un permiso temporal del tipo APA
- Día 06/05/2024, una petición de un permiso temporal del tipo PO
- Día 11/05/2024, una petición de un permiso de día del tipo PO
- Día 15/05/2024, una petición de vacaciones
- Día 21/05/2024, una petición de día libre

El trabajador de la pantalla tiene el mes de junio de 2024 las siguientes peticiones:

- Día 07/06/2024, una petición de un permiso temporal del tipo PO
- Día 12/06/2024,, una petición de día libre

El trabajador de la pantalla tiene el mes de julio de 2024 las siguientes peticiones:

- Día 06/07/2024, una petición de un permiso temporal del tipo PO
- Día 20/07/2024,, una petición de día libre

Teniendo en cuenta que la fecha de ejecución es cualquier día del mes de mayo de 2024.

Al lanzar la acción automática con margen de días igual a cero aprobará todas las peticiones de permisos temporales del tipo PO del mes de mayo y solo las de mayo.

Teniendo en cuenta que la fecha de ejecución es cualquier día del mes de mayo de 2024.

Al lanzar la acción automática con margen de días igual a menos treinta días aprobará todas las peticiones de permisos temporales del tipo PO del mes de junio y solo las de junio.

Teniendo en cuenta que la fecha de ejecución es cualquier día del mes de mayo de 2024.

Al lanzar la acción automática con margen de días igual a menos sesenta días aprobará todas las peticiones de permisos temporales del tipo PO del mes de julio y solo las de julio.

IMPORTANTE: Tal y como se ha indicado en el punto 6 el campo margen de días admite positivos (días a pasado) y días negativos (días a futuro).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-fd0f55fb01.png)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-402020a3a1.webp)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-5b8eca65c3.png)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-71be9524fb.png)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-31a2b0f6e6.png)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-4f755f5626.png)

![g. Acciones Automáticas](/media/manual/g-acciones-automaticas-c9b53ac311.png)
