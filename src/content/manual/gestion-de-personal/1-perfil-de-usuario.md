---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-perfil-de-usuario
title: Perfil de usuario
description: "Foto del trabajador: Si haces clic en el ‘ lapicero ’ podemos subir una foto."
contentType: reference
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Perfil de usuario
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
  - id: perfil
    label: Perfil
  - id: usuario
    label: Usuario
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
    - https://manual.aturnos.com/knowledgebase/1-perfil-de-usuario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-perfil-de-usuario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre perfil de usuario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-perfil-de-usuario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-perfil-de-usuario/
  contentHash: 3f22c6cdc2fc6f020bcd28f228e1365c2eb097f425643e5c84d9922cde3ec783
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre perfil de usuario, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Foto del trabajador: Si haces clic en el ‘ lapicero ’ podemos subir una foto. Si queremos eliminar la foto, únicamente hay que hacer clic en la ‘X’. El espacio de la foto será ocupado por dos iniciales del nombre del trabajador.

Mis datos: El usuario puede modificar datos personales como:

- Nombre del usuario.
- Correo electrónico: Es el correo electrónico con el que puede acceder el usuario a aTurnos y recibir las notificaciones del sistema.
- Teléfono.

Igualmente se puede descargar los datos de la cuenta o ver tu registro de acciones (accesos, marcajes, modificaciones, etc.)

Configuración del perfil del usuario: Está limitada según el rol del usuario. Para consultar los cambios que puede realizar un usuario con rol trabajador por defecto, accede a la siguiente Guía de usuario. En aTurnos disponemos de permisos para poder personalizar las necesidades de las empresas para este tipo de configuración según roles de usuario.

- Idioma (Castellano, inglés y portugués).
- Darte de baja: No está disponible en algunos trabajadores depende de la configuración del administrador de tu equipo. (No se podrá acceder, mientras no recibas un nuevo correo de activación).
- Cambiar contraseña (indicando la actual y la nueva).
- Vincular cuenta de aTurnos con Google Calendar. Más información en Vincular aTurnos con Google Calendar.
- Notificaciones, de las acciones registradas en ‘ Registro ‘,en todos los equipos con rol administrador total o superusuario con los siguientes ámbitos: Por defecto Acceso Api Apirest Atributos Cambios Especialidades Grupos de Especialidades Festivos Tipo de horas Localización Cerrar cuadrante Patrones de turnos Nóminas Posiciones Control Horario Peticiones Cuadrante Ajustes Turnos Tareas Trabajadores Absentismos Recursos Alertas en control horario Restricciones Medidas Tipos de Documentos
