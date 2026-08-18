---
schemaVersion: "1.0"
contentId: "gestion-de-personal-guia-configuracion-de-perfiles-roles-y-creacion-de-usuarios-para-administradores"
title: "Configuración de perfiles, roles y creación de usuarios para administradores"
description: "Información sobre configuración de perfiles, roles y creación de usuarios para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y roles"
intent: "Configuración de perfiles, roles y creación de usuarios"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2026-01-14
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/guias-administrador/configuracion-inicial-del-equipo/configuracion-de-perfiles-roles-y-creacion-de-usuarios/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre configuración de perfiles, roles y creación de usuarios para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
---
## Resumen

Añadir usuarios a tu equipo en aTurnos desde Trabajadores → Listado es el primer paso para aprovechar todas las funcionalidades del software. Esta herramienta facilita la planificación de horarios, la gestión de personal y la asignación de tareas, adaptándose a tus necesidades específicas. Puedes añadir trabajadores reales con sus datos auténticos o crear usuarios ficticios para planificar provisionalmente.

## Añadir usuarios al equipo

Con aTurnos, no importa si estás configurando un equipo pequeño o gestionando una plantilla numerosa, el proceso es simple y efectivo

Tipos de usuarios

Antes de empezar, es importante entender la diferencia entre los dos tipos de usuarios que puedes añadir:

- Usuarios ficticios: Perfectos cuando no tienes toda la información del trabajador. El sistema generará datos ficticios y puedes modificarlos más tarde. Importante: Solo los emails con dominio «@aturnos» pueden ser editados posteriormente.
- Usuarios reales: Incluyen datos reales como nombre y email. Una vez creados, sus datos no pueden ser editados por el administrador.

## Opciones para añadir trabajadores

aTurnos ofrece dos formas para añadir usuarios al sistema:

- Accede al menú Trabajadores → Listado. Decide si deseas añadir usuarios reales o ficticios. Selecciona el número de trabajadores que deseas añadir. Si eliges trabajadores reales, introduce sus datos (nombre, email) uno por uno. Haz clic en Guardar y listo. Los usuarios estarán disponibles en tu equipo.

- Prepara un archivo en formato CSV que incluya al menos: nombre del trabajador, email y fecha de alta.
- Ve al menú de importación en la plataforma.
- Sube el archivo y revisa los datos antes de confirmar.

Una vez completado, todos los usuarios estarán añadidos masivamente al sistema.

- Empresa en crecimiento: Una empresa que está contratando personal y necesita planificar horarios, incluso antes de tener toda la información de contacto de los nuevos empleados. Los usuarios ficticios permiten crear una planificación provisional que se ajusta fácilmente más tarde.
- Agencias de empleo temporal: Las agencias pueden crear usuarios ficticios para asignar turnos a trabajadores eventuales y reemplazarlos con datos reales una vez completada la contratación

## Activación y baja de usuarios en aTurnos

La funcionalidad de activación y baja de usuarios en aTurnos te permite gestionar de forma sencilla el acceso de los trabajadores a la plataforma. Activar a los empleados garantiza que puedan usar las herramientas del sistema, mientras que dar de baja a aquellos que ya no forman parte del equipo asegura un entorno actualizado y organizado.

### Activar usuarios

Una vez que has añadido los trabajadores a tu equipo en el sistema, puedes habilitarlos para que accedan a sus perfiles y funcionalidades. Sigue estos pasos:

1. Dirígete a Administrar → Activar usuarios.
2. Selecciona los usuarios a activar, verás una lista de trabajadores que aún no están activados.
3. Marca la casilla junto al nombre de cada trabajador que deseas activar. Si deseas activarlos a todos, selecciona la casilla general.
4. Haz clic en Acciones → Activar usuarios.
5. Para confirmar la acción, introduce tu contraseña cuando se te solicite. Se generará un documento con las contraseñas de los trabajadores activados.

Importante: No cierres la página hasta que el archivo se haya descargado.

### Dar de baja usuarios

Cuando un trabajador finaliza su relación laboral y/o no se indicó una fecha de baja durante su registro, puedes desactivarlo manualmente en aTurnos. Sigue estos pasos:

- Accede al perfil del trabajador. Ve al perfil del empleado desde el cuadrante, haciendo clic sobre el nombre del trabajador.
- Localiza el botón «Dar de baja». Se encuentra en la parte superior del perfil.
- Define la fecha de baja. Introduce la fecha en la que deseas que la baja entre en vigor.
- Guarda los cambios. Haz clic en Guardar para completar el proceso.

Nota: Una vez dado de baja, el trabajador no podrá acceder al sistema ni a los datos asociados a su cuenta.

## Creación y acceso de usuarios externos en aTurnos

El usuario externo en aTurnos, tiene acceso limitado a funciones específicas como planificación, control de presencia y datos de contacto de trabajadores, sin capacidad de realizar modificaciones. Este rol es útil para representantes de comités, expertos externos o supervisores de áreas específicas.

### Crea un usuario externo

Haz clic en Administrar → Externos y haz clic en ‘ Nuevo Externo ’.

- Rellena los datos. Nombre: Identificación del usuario. Email: Correo para el acceso. Localización: Área de acceso (puede ser global o específica). Si se desea que acceda a una localización especifica, se debe insertar en este campo, si se le permite el acceso a todas, insertar «Sin localización por defecto».
- Guardar y gestionar.

Haciendo clic en guardar, el usuario aparecerá en el listado con sus datos. Puedes eliminarlo cuando lo necesites mediante el icono de papelera.

### Acceso del usuario externo

Los externos generan su contraseña desde la opción “No me acuerdo de mi contraseña” en la página de inicio.

Alternativamente, el equipo de soporte de aTurnos puede crear la contraseña manualmente.

El usuario externo tiene acceso a las siguientes opciones del menú de aTurnos.

1. Cuadrante: Visualizar la planificación del equipo.
2. Cuadrante anual: Visualizar la planificación anual por trabajador.
3. Trabajadores: Visualizar el listado y datos de contacto (según permisos).
4. Control de presencia: Visualizar el registro de entradas y salidas, con detalles como localización y tipo de fichaje.

## Roles de usuario de aTurnos

Asignar roles a tus trabajadores en un sistema como aTurnos no solo organiza las operaciones de tu empresa, sino que también genera múltiples beneficios tanto para tu equipo como para la eficiencia general de tu organización.

### Funcionalidades por Rol

- Inicio: Accede a tu panel personalizado con widgets configurados por tu administrador.
- Perfil: Consulta información sobre tu contrato, restricciones y estadísticas del año fiscal en curso.
- Mis Datos: Edita tu nombre de usuario, correo electrónico o teléfono y sube tu avatar.
- Configuración: Ajusta tus preferencias, como el idioma o las notificaciones.
- Cuadrante: Visualiza tus turnos, solicita vacaciones, registra ausencias o añade comentarios.
- Registro: Revisa tus cambios pendientes o comentarios en formato de lista.
- Estadísticas: Descarga informes de tus turnos, festivos, nocturnidad y mucho más.

Además de las funciones del trabajador, este rol permite:

- Aprobar solicitudes y cambios de turno.
- Crear, editar y eliminar turnos y horas.
- Realizar ofertas de turnos o solicitudes a otros trabajadores.
- Acceder al listado completo de empleados.

Con todas las funcionalidades del Administrador Validador, este rol añade:

- Tipos de Turno y Patrones: Diseña tipos de turnos y patrones personalizados.
- Calculadora de Demandas: Ajusta las necesidades de personal y genera cuadrantes automáticos.
- Restricciones y Configuración: Implementa restricciones y personaliza ajustes visuales.
- Nóminas: Consulta estadísticas avanzadas de nóminas.

Este rol combina las capacidades de los roles anteriores y permite:

- Crear y gestionar equipos completos.
- Configurar ajustes avanzados del equipo.
- Dar de alta o baja a empleados.

Como el rol más avanzado, el superusuario puede acceder a todas las funciones de aTurnos, incluyendo:

- Gestión de recursos humanos: Generar reportes, configurar conceptos de nóminas, consultar restricciones y más.
- Exportar estadísticas completas por trabajador, equipo o localización.
- Configurar y fusionar usuarios, migrar saldos de horas y recuperar planificaciones.

Algunos ejemplos de Uso

- Laura, empleada en una tienda minorista.

Laura quiere pedir días libres para un evento familiar. Con el rol de Trabajador desde el botón Cuadrante, revisa sus turnos y hace una solicitud de vacaciones. Su administrador validador la aprueba rápidamente al verificar que no hay conflictos.

- Juan, administrador de una clínica:

Juan necesita reorganizar los turnos del equipo de enfermería tras un cambio en la disponibilidad de personal. Con el rol de Administrador Planificador, desde la sección de Tipos de Turno, crea un patrón actualizado y lo aplica al equipo en cuestión.

- Sofía, directora de recursos humanos:

Sofía tiene el rol de Superusuario y utiliza las herramientas de RR. HH. de aTurnos para generar un reporte de absentismos en todos los equipos de la empresa. En un par de clics, obtiene un informe detallado que presenta en la junta mensual.

Aquí puedes ver una tabla resumen con las acciones que puede realizar cada rol:

- Acción | Trabajador | Admin. Validador | Admin. Planificador | Admin. Total | Superusuario
- Consultar su propia planificación | ✔️ | ✔️ | ✔️ | ✔️ | ✔️
- Realizar cambios de turnos | ✔️ | ✔️ | ✔️ | ✔️ | ✔️
- Solicitar permisos y vacaciones | ✔️ | ✔️ | ✔️ | ✔️ | ✔️
- Acceder a estadísticas personales | ✔️ | ✔️ | ✔️ | ✔️ | ✔️
- Validar peticiones de trabajadores | ❌ | ✔️ | ✔️ | ✔️ | ✔️
- Planificar turnos para el equipo | ❌ | ❌ | ✔️ | ✔️ | ✔️
- Gestionar ajustes y restricciones | ❌ | ❌ | ✔️ | ✔️ | ✔️
- Administrar datos de trabajadores | ❌ | ❌ | ❌ | ✔️ | ✔️
- Configurar parámetros del equipo | ❌ | ❌ | ❌ | ✔️ | ✔️
- Acceso global a todos los equipos | ❌ | ❌ | ❌ | ❌ | ✔️
- Realizar operaciones globales | ❌ | ❌ | ❌ | ❌ | ✔️
- Analizar datos a nivel corporativo | ❌ | ❌ | ❌ | ❌ | ✔️
