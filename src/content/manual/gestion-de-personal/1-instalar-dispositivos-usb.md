---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-instalar-dispositivos-usb
title: Instalar Dispositivos USB
description: Este es el dispositivo con el que tendrá que realizar la lectura de las huellas dactilares de los empleados que será proporcionado por aTurnos.
contentType: reference
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Instalar Dispositivos USB
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: dispositivos
    label: Dispositivos
  - id: instalar
    label: Instalar
  - id: usb
    label: Usb
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
    - https://manual.aturnos.com/knowledgebase/1-instalar-dispositivos-usb/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-instalar-dispositivos-usb/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre instalar Dispositivos USB?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-instalar-dispositivos-usb/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-instalar-dispositivos-usb/
  contentHash: eede0c23209641455b67526060d2ec97db5ffd9eaf732e2e77fc618dee67551d
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Este es el dispositivo con el que tendrá que realizar la lectura de las huellas dactilares de los empleados que será proporcionado por aTurnos.

Su conexión, instalación y uso es sencillo, en los siguientes apartados te guiaremos cómo hacerlo.

### Instalación de Dispositivo USB

Tenemos que seguir los siguientes pasos:

1. Entrar en Configuración, en la barra superior.

1. En Configuración, hacer clic en el icono que aparece en la zona inferior, llamado Agente USB.

1. En Agente USB, tendremos que descargar el software que nos permitirá instalar el Dispositivo USB en el ordenador y poderlo localizar en Biostar2. Para ello tiene que hacer clic en Descargar.

1. Descargado el software, procederemos a su instalación.

1. Accedemos a nuestro apartado de Descargas o a la carpeta Descargas de nuestro ordenador. Después accionamos el ejecutable para instalar el dispositivo, que previamente debe haberse conectado en un puerto USB del ordenador.

1. Aceptamos realizar cambios pinchando en Sí.
2. Abierto el instalador, cliqueamos en Ok para aceptar el idioma English.

1. Seleccionamos I Accept the agreement. Y hacemos clic en Next.

1. Confirmamos que está seleccionada la opción USB Device Agent y pinchamos en Next.

1. Pulsamos nuevamente Next.

1. Y finalmente pinchamos en Install.

1. Una vez instalado, nos aparecerá un icono en el menú de iconos ocultos del Área de Notificaciones de nuestra Barra de Tareas. Haciendo clic sobre el icono, aparecerá un submenú, pinchamos en Setup.

1. Se nos abrirá el estado en el que se encuentra nuestro dispositivo. Si la opción Start aparece como deshabilitada y que no se puede cliquear, es que nuestro dispositivo se encuentra correctamente instalado.

### Localización de Dispositivo USB

Volvemos a nuestra ventana de usuario de Biostar2 en el navegador y accedemos al menú de Dispositivos, pinchando en la pestaña de la barra lateral izquierda con dicho nombre.

A la derecha de esta barra, encontramos el panel de dispositivos, donde se muestran todos aquellos dispositivos que están sincronizados con los Grupos de Usuarios que gestiona el administrador. En la última raíz del árbol de dispositivos, encontramos Dispositivos USB, si no ha aparecido justo debajo el dispositivo instalado, haz clic sobre Dispositivo USB y se mostrará justo debajo con el nombre BioMini.

Ya tenemos configurado e instalado nuestro dispositivo, el siguiente paso será entrar en los usuarios creados previamente para comenzar la recogida de huellas. Sino aparece el dispositivo puede ser que el puerto del ordenador 8081 o 8082 estén cerrados por el Firewall. Puede consultar previamente a su técnico de redes.

### Actualización de Dispositivo USB

Para solucionar el problema del lector de huellas USB BioMini debemos sustituir el ejecutable de la aplicación USB Device Agent. Normalmente este archivo se encuentra en la ruta:

C:\Program Files (x86)\USB Device Agent\usb-agent

A continuación descargaremos el ejecutable actualizado de la siguiente dirección:

https://suprema5-my.sharepoint.com/:f:/g/personal/yu1yu_suprema_co_kr/

EttR3AGMCjlMnYNoFmPe7J0BLtTjYX13dddsTGGRmCZjug?e=tFKtK1

Una vez tenemos descargado y descomprimido el archivo realizamos el reemplazo en la carpeta de instalación del programa.

Cuando se ha reemplazado el archivo hay que ejecutar nuevamente el programa (preferentemente con una cuenta de administrador del equipo).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
