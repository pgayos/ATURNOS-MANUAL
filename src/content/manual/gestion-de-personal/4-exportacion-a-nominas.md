---
schemaVersion: "1.0"
contentId: "gestion-de-personal-4-exportacion-a-nominas"
title: "Exportación a nóminas"
description: "Con respecto a la nómina, dentro de la configuración del equipo en aTurnos se define."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Exportación a nóminas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "exportacion"
    label: "Exportacion"
  - id: "nominas"
    label: "Nominas"
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
    - "https://manual.aturnos.com/knowledgebase/4-exportacion-a-nominas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-exportacion-a-nominas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre exportación a nóminas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "1cb0bd29f2ebe791547c6f329ce20f1a5f8e3e556a346fd71a2fe6991b24b21b"
  migratedAt: 2026-08-17
---
## Resumen

Con respecto a la nómina, dentro de la configuración del equipo en aTurnos se define.

## Contenido

- Modo de validación para la exportación, hace referencia al estado del cuadrante. Las opciones permitidas elegir son: No se necesita validación: La exportación de nóminas se puede realizar siempre, no está sujeto a ningún control. El cuadrante debe estar cerrado: El cuadrante debe estar cerrado de forma que no se pueda modificar, añadir o borrar turnos y horas a la fecha de cierre de cuadrante. Si el cuadrante no está cerrado, no se exportaran los datos. Implica la acción de “cerrar el cuadrante” para todos los trabajadores a la vez (ver Cerrar cuadrante ) o se puede editar en el perfil para algún trabajador (ver Perfil del trabajador/Nóminas ). Cerrar el cuadrante a un trabajador es un proceso normal cuando se realizan finiquitos, es decir, para descargar solo los datos de este empleado. El resto de trabajadores tendrían un cierre de cuadrante en conjunto dentro de un proceso normal para sus nóminas del mes. El cuadrante debe estar cerrado y validado. El cuadrante tiene que estar primero cerrado y después validado, sino no se podrían exportar los conceptos de nómina. Es un proceso de doble validación, la validación la tiene que realizar un rol Superusuario dentro de las estadísticas de nóminas totalizadas (ver Totalizada por equipos ).

- Descarga de nómina: Permitir volver a descargar los conceptos anteriormente descargados: esta opción da la posibilidad de que los conceptos de nómina se vuelvan a descargar nuevamente, a pesar de haber sido descargados con anterioridad. No permitir descargar los conceptos anteriormente descargados: impide que se vuelvan a exportar los conceptos que ya han sido descargados. Dentro de la ficha de los empleados existe una fecha de exportación (ver Perfil del trabajador/Nóminas ), cualquier concepto de nómina anterior a esa fecha no será exportado.

- Comportamiento de aviso de cuadrante cerrado por nómina. Las opciones disponible son: deseable y obligatoria
- Nivel que puede cambiar la fecha de cierre del cuadrante: Las opciones disponible son: administrador validador, planificado, total, superusurio:
- Nivel que puede cambiar la fecha de cierre de un empleado: Las opciones disponible son: administrador validador, planificado, total, superusurio:
- Nivel mínimo que puede cambiar la fecha de cierre a pasado, es decir una vez cerrado a una fecha poder cerrarlo a una fecha anterior para su modificación.
