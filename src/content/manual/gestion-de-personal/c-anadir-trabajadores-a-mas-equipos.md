---
schemaVersion: "1.0"
contentId: gestion-de-personal-c-anadir-trabajadores-a-mas-equipos
title: Añadir trabajadores a más equipos
description: Si la necesidad es añadir a un trabajador en otro equipo, el cual ya está dado de alta en un equipo, desde el maestro de empleados, el superusuario lo puede gestionar siguiendo estos pasos:.
contentType: procedure
module: Gestión de personal
submodule: Contratos
intent: Añadir trabajadores a más equipos
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
  - id: anadir
    label: Anadir
  - id: equipos
    label: Equipos
  - id: mas
    label: Mas
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/1-3-anadir-el-trabajador-a-mas-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-anadir-el-trabajador-a-mas-equipos/
ai:
  answerableQuestions:
    - ¿Cómo puedo añadir trabajadores a más equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-3-anadir-el-trabajador-a-mas-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-anadir-el-trabajador-a-mas-equipos/
  contentHash: 2019be5f107126e754ac2091e58a7aa4ecdda68b4cd4f377fdabe0aba07d254d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Si la necesidad es añadir a un trabajador en otro equipo, el cual ya está dado de alta en un equipo, desde el maestro de empleados, el superusuario lo puede gestionar siguiendo estos pasos:.

## Procedimiento
- Tiene que hacer clic en el botón “+” y completar los campos necesarios del formulario.

1. El equipo de destino: equipo donde se añade y activa al trabajador.
2. El rol de usuario que se le asigna al trabajador en el equipo de destino. Dependiendo del rol de usuario tendrá determinados permisos sobre los diferentes equipos.
3. Planificabilidad: seleccionar si es planificable, planificable oculto o no planificable. (Ver detalle de planificabilidad del trabajador)
4. La categoría del trabajador: puesto del trabajador basado a una clasificación profesional de la empresa. Véase ¿ cómo crear categorías en aTurnos?.
5. El porcentaje de jornada del trabajador, se calculará automáticamente atendiendo a las horas contrato año, ya informadas en el equipo donde irá destinado.
6. La fecha indicará el día en que el trabajador estará activo en el nuevo equipo. La fecha fin (hasta) no es necesaria informarla en el caso de que se desconozca la fecha fin de actividad del trabajador en este equipo.
7. Clonar especialidades y datos personalizados: si tiene un periodo anterior en otro equipo, clonaría los datos personales de su perfil (Id empleado, posición, etc.)., asi como datos personalizados y especialidad que tenga informada de ese equipo.
8. Guardar, haciendo clic en este botón de acción se actualizará aTurnos, en base a la información cumplimentada en los pasos anteriores.
