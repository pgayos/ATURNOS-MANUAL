---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-d-cambios
title: Cambios en aTurnos
description: En aTurnos, los trabajadores pueden hacer cambios de turno si en “Ajustes” se tiene habilitada la opción y si el tipo de turno está configurado como “Seleccionable para cambio entre compañer.
contentType: procedure
module: Configuración y cuenta
submodule: Roles y permisos
subtopic: ""
intent: Cambios en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cambios
    label: Cambios
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
    - https://manual.aturnos.com/knowledgebase/d-cambios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/d-cambios/
ai:
  answerableQuestions:
    - ¿Cómo puedo cambios en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 10
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/d-cambios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/d-cambios/
  contentHash: 2040ee1921dc26c523e22d4424a443a6dbaf1adeec89ab095b961bab51d4b788
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Aprende a cambios en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

En aTurnos, los trabajadores pueden hacer cambios de turno si en “Ajustes” se tiene habilitada la opción y si el tipo de turno está configurado como “Seleccionable para cambio entre compañeros”. Una vez se han configurado ambas opciones para permitir el cambio de turnos, se puede personalizar a través de una configuración más avanzada desde Ajustes → Cambios.

### Se permiten cambios de turnos entre los trabajadores

Marcando ‘ SI’ el administrador da permiso a los trabajadores del equipo a realizar cambios de turnos. Marcando ‘ NO’, no se permite hacer cambios entre los trabajadores del equipo.

### Flujo de aprobación de cambios de turnos

Los cambios pueden estar en dos estados: Confirmados o Pendientes. Estos estados se diferencian en el cuadrante en color Azul para los cambios “pendientes” y en Verde cuando se encuentran “confirmados” (ver leyenda del cuadrante )

El flujo de aprobación permite establecer un orden en la comunicación y aprobación del cambio de turno. En los cambios podemos identificar tres roles que participan en el proceso: Un trabajador que realiza el cambio (Administrador), el trabajador que es el origen del cambio (Usuario Origen) y el trabajador que recibe ese cambio (Usuario Destino).

Caso 1: Un administrador de tipo Total, Planificador o Superusuario hace la petición de intercambio de Turno entre un trabajador A (usuario origen) y un trabajador B (Usuario destino).

Caso 2: Un Trabajador A (Usuario Origen) que solicita directamente un cambio de turno a un Trabajador B (Usuario Destino).

En este flujo de se pueden seleccionar las siguientes opciones:

- Los cambios de turnos no tienen que ser confirmados, se revisan en el log. Los trabajadores pueden hacer los cambios de turnos y que se confirmen automáticamente (en color verde en el cuadrante), sin que exista ningún proceso para aprobarlos o denegarlos.
- Los cambios de turnos tienen que ser confirmados por el administrador. El administrador es el único que interviene en el proceso de aprobar o denegar los cambios de turno que solicitan los trabajadores. En el registro de acciones se podrá revisar la información (ver log para revisar los cambios).
- Los cambios tienen que ser confirmados por el administrador y por el compañero. Primero tiene que aceptar el trabajador o compañero a quien se le solicita el cambio y una vez que este lo confirma, finalizará el proceso con la confirmación o anulación por parte del Administrador. La notificación de cambio pendiente no le aparece al administrador hasta que no lo aprueba el trabajador (al que se le solicita el cambio), más información en Peticiones y cambios. En el caso de que administrador sea el usuario que realiza el cambio, necesitará de la aprobación de ambos trabajadores destino del cambio para que pueda ser validado por el administrador.
- Personalizar: se abrirá un formulario donde se informa por medio de un abanico de roles el proceso de validación que desea en el equipo, definiendo el rol mínimo y máximo del trabajador (ver roles de aTurnos ) que debe aceptar o rechazar los cambios de turno en cada uno de los pasos hasta conseguir la aprobación definitiva del cambio. Se puede configurar hasta 5 pasos en el flujo de aprobación. Por ejemplo, un flujo puede ser: Ejemplo de flujos 1: nivel mínimo= usuario destino. De esta forma el primero que deberá aprobar el cambio es el trabajador con el que se quiere cambiar el turno. Para los casos en los que el administrador sea el autor del cambio, si el primer nivel es el trabajador destino, ambos trabajadores serán usuario destino del cambio y para poder ser validado por el administrador, necesitará la aprobación de los dos trabajadores implicados. Ejemplo de flujos 2: nivel mínimo= administrador validador y nivel máximo= administrador total. En este caso, para que el cambio sea aprobado se necesita que alguno de los administradores (bien sea un administrador validador, un planificador o un total, es decir, solo uno de ellos) apruebe el cambio.

### Permite cambios de libre al mismo empleado

Marcando ‘ SI ‘ los trabajadores pueden cambiarse a sí mismos un turno planificado de un día a otro día que tiene libre. Este cambio se puede realizar con el tipo de cambio “Libre”. Con esta configuración el sistema ofrece todos los días en los que libra para hacerse a si mísmo el cambio. De esta manera el turno se inserta en el libre y el día que tenía planificado con ese turno se queda libre.

Cuando se opta por esta opción, se activa una nueva opción donde es necesario seleccionar el flujo de aprobación para este proceso. Las opciones pueden ser, usar el flujo de aprobación de cambios o el flujo de aprobación de peticiones.

### Indica los días de antelación con los que puedes realizar un cambio

El trabajador puede solicitar cambios de turno en un periodo de tiempo anterior a la fecha en la que tiene que trabajar ese turno, las opciones son: En el mismo día, 1, 2 ó 3 días de antelación o con una 1 semana de antelación. Es decir, si está configurado con al menos 3 días de antelación, no se puede solicitar el cambio de turno un día antes de la fecha en la que está planificado. Los cambios nunca se pueden realizar en el pasado, son procesos que solicitan los trabajadores a futuro.

### Al hacer un cambio, requerir que los trabajadores tengan la misma experiencia y especialidad

Marcando ‘ SI’ solo los trabajadores que tengan el mismo nivel de experiencia y especialidad, pueden hacer cambios entre ellos. Si dos trabajadores tienen la misma especialidad, pero la experiencia en las especialidades es diferente, no podrán hacer un cambio entre ellos. Tampoco puede hacer cambios entre ellos, en el caso de que la experiencia de las especialidades de los trabajadores sean iguales, pero la experiencia del trabajador sea diferente.

Para ver información sobre que es la “Especialidad” y como se configura puedes revisar este siguiente enlace: Especialidades del trabajador

### Al hacer un cambio, requerir que los tipos de turnos tengan la misma duración computada

Marcando ‘ SI’ los trabajadores solo pueden cambiar turnos que tengan la misma duración computada. El sistema controla que al realizar un intercambio de turnos, éstos tienen que tener la misma duración computada. Solo salen lo turnos con la misma duración computada en el momento de seleccionarlos para realizar el cambio.

### Al hacer un cambio, requerir que los tipos de turnos tengan la misma localización

Marcando ‘ SI’ los trabajadores solo pueden cambiar turnos que tengan la misma localización planificada en el cuadrante. El sistema controla que al realizar un intercambio de turnos, éstos tienen que tener la misma localización. Solo salen los turnos con la misma localización en el momento de seleccionarlos para realizar el cambio.

### Al hacer un cambio, requerir que los trabajadores de turnos tengan la misma categoría

Marcando ‘ SI’ los trabajadores solo pueden cambiar turnos si pertenecen a la misma categoria, que tienen informada en su perfil del trabajador. El sistema controla que al realizar un cambio de turno, los trabajadores tienen la misma categoria. Solo salen como disponibles, los trabajadores que comparten categoría.

### Permitir que un trabajador pueda realizar un cambio con un trabajador ficticio

El sistema controla que un trabajador pueda o no realizar cambios de turnos con un trabajador ficticio.

### Nivel a partir del cual “NO” se pueden realizar intercambios de turnos con otros compañeros

Se indica el rol máximo para realizar cambios de turno con otros compañeros. Entre las opciones disponibles:

- Todos (trabajadores y administradores) pueden realizar intercambios con otros compañeros
- Administrador Validador
- Administrador Planificador
- Administrador Total

Ejemplo: seleccionando el nivel Administrador Planificador solo podrán realizar intercambios de turnos con otros compañeros los Trabajadores y los Administradores Validadores.

### Enviar correos a los implicados en un cambio de turno

Marcando ‘SI’ el trabajador que solicita el cambio y al trabajador a quien se le pide el cambio de turno recibirán mails informativos sobre el cambio de turno solicitado. Marcando ‘NO’ no se genera ni envía mails a ninguno de los implicados. Se recomienda la opción “NO”, ya que esta información puedes encontrarla dentro del sistema (ver Histórico ), además en algunos casos, cuando se marca la opción “SI” la bandeja del administrador se puede ver saturada en equipos con muchos cambios.

### Indica los días que pueden pasar para devolver un cambio

Al hacer un cambio de turno el trabajador origen podrá dejar a deber el cambio que le solicita al trabajador o usuario destino, en estos casos el administrador tiene la opción de definir un máximo de días en los que el trabajador origen debe devolver el cambio a su compañero (usuario destino) o simplemente dejarlo sin ninguna restricción. Dispone en esta casilla de varias opciones para establecer la devolución, con un tope de hasta 30 días.

### Fecha a partir de la cual se limita el máximo de cambios a deber

Este configurable se utiliza para establecer una fecha límite para devolver los cambios.

### Máximo de cambios a deber

El administrador del equipo puede establecer un máximo de cambios que un trabajador pueda tener pendientes por devolver a uno o varios de sus compañeros. El administrador puede seleccionar la opción “sin límite” o seleccionar desde 0 (cero), 1, 2, 3… hasta un máximo de 20 cambios pendientes. Ejemplo: si se establecen un máximo de 3 cambios pendientes a devolver y un trabajador ya los tiene pendientes e intenta dejar a deber un 4to cambio el sistema no se lo va a permitir.

### Fecha a partir de la cual se limita el máximo de cambios a deber

Informa fecha a partir de la cual se tienen en cuenta el máximo de cambios a deber por los trabajadores. Ejemplo, si el máximo de cambios a deber tiene como valor 2 y la fecha que se indica es el 15 de marzo de 2024, los trabajadores pueden deber más de 2 cambios antes de esta fecha, sin embargo el sistema no permitirá más

### Permitir cambios en distintos años fiscales

Marcando “SI” los trabajadores pueden realizar cambios de turnos en distintos años fiscales. Se recomienda marcar en SI (Ver mas acerca de Inicio año fiscal)

### Aplicar restricciones en los cambios de turno

El sistema permitirá hacer cambios de turnos, teniendo en cuenta las restricciones informadas en el equipo y/o trabajador implicado en el cambio de turno. Contando con las siguientes opciones de configuración en el desplegable:

- No comprobar ninguna restricción al intentar realizar un cambio
- Comprobar todas las restricciones al intentar realizar un cambio
- Comprobar las restricciones obligatorias al intentar realizar un cambio
- Comprobar las restricciones deseables al intentar realizar un cambio

Puedes tener más información sobre las restricciones en el siguiente enlace: Restricciones.

### Mostrar avisos al comprobar restricciones deseables cuando se realiza un cambio

Indica si se muestran los avisos cuando solo se comprueben las restricciones deseables.

### Notificaciones

Es importante señalar que cuando el trabajador hace una solicitud de cambios (peticiones o cambios de turno) le llega una notificación a los implicados según el flujo definido en el equipo, es decir, si en el flujo de Cambios de turno el 1er paso es la aprobación del Usuario destino (compañero) y el 2º paso es la aprobación de un Administrador Planificador, le llegará primero la notificación al compañero (usuario destino) y una vez él apruebe le llegará notificación al Administrador Planificador.

Dentro de aTurnos las notificaciones llegan a los usuarios a través de un indicador en rojo con un número que le alerta sobre la cantidad de solicitudes que tiene pendientes por aprobar, si hace clic sobre él lo redireccionará al menú de “Peticiones y cambios” de manera que el usuario complete el paso de aprobar o denegar la solicitud (ver Peticiones y cambios )

De igual forma, llegarán notificaciones al correo electrónico de los implicados con el aviso de la solicitud que tiene pendiente. En el caso de los cambios de turno se puede configurar el sistema para NO enviar dichas notificaciones a los correos de los implicados, tal como se explica anteriormente en “Enviar correos a los implicados en un cambio de turno”.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Permite cambios de libre al mismo empleado](/media/manual/permite-cambios-de-libre-al-mismo-empleado-e104ea7ff6.png)

![Permite cambios de libre al mismo empleado](/media/manual/permite-cambios-de-libre-al-mismo-empleado-16582b9a19.png)

![Flujo de aprobación de cambios de turnos](/media/manual/flujo-de-aprobacion-de-cambios-de-turnos-880297c528.png)

![Al hacer un cambio, requerir que los trabajadores tengan la misma experiencia y especialidad](/media/manual/al-hacer-un-cambio-requerir-que-los-trabajadores-tengan-la-misma-exper-2e337bde9d.png)

![d. Cambios](/media/manual/d-cambios-f2e9bd44af.png)

![Notificaciones](/media/manual/notificaciones-570451769c.png)
