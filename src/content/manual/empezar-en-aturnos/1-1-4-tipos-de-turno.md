---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-1-1-4-tipos-de-turno
title: "Tipos de turno"
description: "Cómo crear tipos de turno de forma manual o por importación masiva desde un archivo CSV."
contentType: procedure
module: "Empezar en aTurnos"
submodule: "Comienza en aTurnos"
subtopic: "Creación de un equipo"
intent: "Tipos de turno"
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
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-1-ajustes-2-2/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-1-ajustes-2-2/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre tipos de turno?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-1-ajustes-2-2/
  redirectFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-1-ajustes-2-2/
  contentHash: "bce0913551f092ec325aedc0d197a9a68fa88cd1fc4a4e9dae8f2a3eaa84f0fd"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 5
---

## Resumen

Los tipos de turno definen los diferentes horarios de trabajo, como un turno de mañana de 08:00 a 15:00. Puedes crear tantos tipos de turnos como necesite tu empresa según sus actividades.

## Crear tipos de turnos manualmente

### Cómo crear tipos de turno

- Ve a **Planificador > Tipos de turno**.
- En esa pantalla, verás los turnos existentes, así como opciones para absentismos, jornadas partidas, tipos de hora y franjas horarias.
- Para añadir un nuevo tipo de turno, haz clic en **Acciones > Crear**.

### Pasos para crear un nuevo tipo de turno

1. Accede a **Planificador > Tipos de turno > Acciones > Crear Turno**.
2. Introduce una descripción y una abreviatura única para el turno.
3. Especifica la hora de inicio y la duración total.

*Nota*: La configuración avanzada es opcional. Permite agregar detalles como la localización por defecto, si el turno corresponde a vacaciones o si se permite cambiar de turno entre empleados. Para más detalles, consulta el manual sobre configuración de tipos de turno.

## Crear tipos de turno por importación

Se pueden añadir tipos de turno de manera masiva mediante importación. Para ello es fundamental crear un documento **excel** que contenga los siguientes campos:

- Descripción
- Abreviatura
- Hora inicio
- Duración total
- Duración computada

### Proceso de importación.

1. **Rellena** el documento con esos datos
2. Es fundamental **guardarlo como Csv.**
3. **Importa** el documento desde **Administrar>Importar/Exportar> Importar**.
4. **Adjunta** el documento.
5. **Selecciona** el tipo de importación “**Crear tipos de turno**” que se encuentra en la pestaña “Planificador”.
6. **Asocia** las columnas del csv con los términos correspondientes en aTurnos.
7. Haz clic en **Importar**.

Si quieres información más detallada sobre este tipo de importación, accede a este [enlace](https://manual.aturnos.com/knowledgebase/7-crear-tipos-de-turnos/).
