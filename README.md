# MercadoLibreApp

MercadoLibreApp es una aplicación de búsqueda de productos desarrollada con React Native y Expo para la web, utilizando Webpack para la configuración del entorno. La aplicación permite a los usuarios buscar productos en MercadoLibre e instalar la aplicación como una PWA (Progressive Web App).

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- Node.js (versión 18.19.1 recomendada)
- npm (viene con Node.js)
- Webpack

## Instalación

Sigue estos pasos para clonar y configurar el proyecto en tu máquina local:

1. Clona este repositorio:

git clone <URL_DEL_REPOSITORIO>
cd MercadoLibreApp

2. Instala las dependencias del proyecto:

npm install --legacy-peer-deps

## Configuración de Webpack

Asegúrate de que el archivo `webpack.config.js` esté configurado correctamente para manejar los archivos de React Native, incluir polyfills y definir variables globales necesarias.


## Ejecución de la Aplicación

1. Construye la aplicación:

npm run build

2. Inicia el servidor de desarrollo:

npm start

La aplicación debería estar disponible en `http://localhost:9000/`.

## Estructura del Proyecto

- `App.tsx`: Componente principal de la aplicación que maneja la lógica de búsqueda y muestra los resultados.
- `index.js`: Archivo de entrada que registra el componente principal y configura el Service Worker.
- `public/index.html`: Archivo HTML principal que contiene el contenedor de la aplicación.
- `webpack.config.js`: Configuración de Webpack para compilar y servir la aplicación.

## PWA (Progressive Web App)

La aplicación está configurada como una PWA, lo que significa que puede ser instalada tanto en dispositivos móviles como en ordenadores. Asegúrate de registrar el Service Worker para habilitar esta funcionalidad.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.