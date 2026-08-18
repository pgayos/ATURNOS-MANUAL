---
schemaVersion: "1.0"
contentId: planificacion-guia-crear-listado-de-absentismos-del-equipo-para-administradores
title: Crear listado de absentismos del equipo para administradores
description: Una correcta gestión de permisos y ausencias es esencial para que los equipos trabajen de forma organizada y eficiente.
contentType: procedure
module: Planificación
submodule: Permisos y absentismos
intent: Crear listado de absentismos del equipo
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
  reviewedAt: 2025-03-19
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/crear-listado-abs/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo puedo crear listado de absentismos del equipo para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/crear-listado-abs/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/crear-listado-abs/
  contentHash: 5e1ba729788edf2c3741a2c69f5eac2822c51120c2bc99e5666417078443494e
  migratedAt: 2026-08-18
order: 1
---
## Resumen

Una correcta gestión de permisos y ausencias es esencial para que los equipos trabajen de forma organizada y eficiente. Con el rol de administrador planificador, total o superusuario, puedes registrar y personalizar los tipos de absentismos que tus empleados podrán solicitar. Configurar estos tipos de absentismos asegura una gestión más clara y una integración adecuada con la nómina.

### Crea Tipos de Absentismo

Sigue estos pasos para configurar los tipos de absentismos en el sistema:

- Accede al Planificador: Dirígete a la sección Planificador → Tipos de turno. En la esquina superior derecha, haz clic en el botón de Acciones y selecciona la opción Crear absentismos.
- Completa el formulario: Nombre: Asigna un nombre descriptivo (por ejemplo, «Consulta médica») Abreviatura: Asigna una abreviatura fácil de identificar (por ejemplo, «CM»).
- Tipo: Selecciona la categoría del absentismo. Este campo es crucial porque determina cómo afecta a las horas computadas y a la nómina. Selecciona si el permiso será: Absentismo computable no productivo: Faltas justificadas, como bajas médicas o permisos personales, que afectan la productividad. Absentismo computable y Productivo: Ausencias autorizadas que benefician a la empresa, como formación o reuniones externas. Absentismo no computable: Ausencias sin autorización o motivo válido, como faltas injustificadas o retrasos reiterados. Excedencia o Suspensión: Interrupción temporal del contrato, voluntaria o impuesta, sin derecho a salario ni actividad laboral.
- Tipo de absentismo, selecciona si el permiso será: Total: Para ausencias que abarcan toda la jornada laboral. Temporal: Para ausencias que solo cubren un número específico de horas. Ambos: Permite flexibilidad para que el absentismo se solicite tanto de forma total como temporal, según las necesidades.

Ejemplo: El permiso «Consulta médica» puede configurarse como Ambas. De este modo, si el empleado necesita varias horas, puede solicitarlo como temporal; si es un permiso de jornada completa, podrá hacerlo como total.

Si deseas un absentismo más personalizado, puedes modificar la configuración Avanzada, pero es un campo totalmente opcional, en él podrás configurar campos como:

- Roles autorizados: Especifica qué roles (por ejemplo, Trabajador o validador) pueden pedir este tipo de absentismo. Comentarios obligatorios: Activa esta opción si deseas que los empleados expliquen el motivo del absentismo al solicitarlo.

- Guarda los Cambios: Una vez configurados todos los campos, haz clic en Guardar y el tipo de absentismo estará disponible para solicitarlo.

## Ejemplos de tipos de absentismos

Absentismo computable no productivo

Baja médica por enfermedad común: Un trabajador se ausenta debido a una enfermedad y presenta una baja médica oficial. Se considera absentismo computable porque afecta a la jornada laboral, pero no es productivo, ya que el empleado no está trabajando.

Absentismo computable productivo

Formación obligatoria: Un trabajador asiste a un curso de formación dentro de su horario laboral. Aunque no está realizando sus tareas habituales, la ausencia se considera productiva porque aporta valor a la empresa.

Absentismo no computable

Permiso no retribuido por asuntos personales: Un trabajador solicita un día libre para realizar trámites personales, pero este permiso no es remunerado ni computa en su jornada laboral.

Excedencia o Suspensión

Excedencia por cuidado de familiares: Un trabajador solicita una excedencia para cuidar a su padre/madre durante un período determinado. No se computa en su jornada laboral, no recibe salario y su puesto no está garantizado al regreso, dependiendo de la normativa de la empresa.
