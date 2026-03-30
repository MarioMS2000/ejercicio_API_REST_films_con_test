## EJERCICIO API REST FILMS

### Descripción

Proyecto para poner en práctica tus habilidades en Node.js, trabajando con datos de películas y aprendiendo sobre cómo estructurar una aplicación. Tu misión es completar varios archivos JavaScript siguiendo las instrucciones y pasar todas las pruebas unitarias.

Para ello usa la API de pelis que te proporcionamos

https://www.omdbapi.com/

### Estructura del Proyecto

Para mantener todo organizado, vamos a utilizar una estructura de carpetas específica:

-   `app.js` -> crea Express, configura middlewares, monta rutas y maneja errores.
-   `utils/`
    -   `fetchFilms.js` -> utils/fetchFilms.js: se encarga de hablar con la API externa.
-   `routes/`
    -   `films.routes.js` -> routes/films.routes.js: define las URLs y qué controlador ejecuta cada una.
-   `controllers/`
    -   `films.controller.js` -> controllers/films.controller.js: contiene la lógica de cada endpoint.
-   `.env`: Este archivo, en la raíz del proyecto, te permitirá manejar variables de entorno.
            Y guarda la API_KEY para no hardcodearla.
-   `.env.example`: Este archivo representa el ejemplo para rellenar el fichero .env.
-   `package.json`: Aquí se encuentran las dependencias y scripts de tu proyecto.
-   `*.test.js`: Archivos de prueba. Te ayudarán a verificar que tu código hace lo que debe.

### Primeros Pasos

1.  **Clona el repositorio** en tu entorno de desarrollo local.
2.  Ejecuta `npm install` para instalar todas las dependencias necesarias para el proyecto.
3.  Crea y configura tu archivo `.env` en la carpeta raíz con las variables necesarias para que la aplicación funcione correctamente.
(API_KEY=tuapikey)
4.  Crea un archivo .gitignore en la carpeta raíz para ignorar los ficheros .env y node_modules al subir a GitHub.

### Tu Tarea

Vas a escribir código en `app.js`, `utils/fetchFilms.js`, y `routes/films.routes.js`. Recuerda:

-   En `app.js`, configura y arranca tu servidor web y establece las rutas necesarias, no te olvides de exportar el módulo para que funcionen los tests al final del achivo (module.exports = <nombre de la variable donde tengas express()>)
-   En `utils/fetchFilms.js`, trabaja en la función para obtener datos de películas desde una API externa.
-   En `routes/films.routes.js`, gestiona las rutas para el manejo de películas.
-   En `controllers/films.controller.js`, crea el controlador con los métodos adecuados para manejar las películas.

Rutas a desarrollar:

Ten en cuenta que la API no tiene endpoints específicos para los métodos POST/PUT/DELETE, sólo tendrás que desarrollar las rutas para que devuelvan los mensajes correspondientes. 
#### IMPORTANTE, LA ESTRUCTURA DEL MENSAJE QUE RETORNE EL ENDPOINT DEBE SER IGUAL AL DE LOS EJEMPLOS PARA QUE PASEN LOS TEST

-   [GET] http://localhost:3000/api/film/:title Retorna un JSON con los detalles de la peli en concreto buscada. Payload {title:"Titanic", author:"James Cameron", description:"xxx", src:"titanic.png",etc...}

-   [POST] http://localhost:3000/api/film/ Se envía por POST los datos de la película a crear y retorna un status 200. Payload {message: "Se ha guardado Titanic"}

    #### Ten en cuenta que el objeto de film debe tener una estructura igual que la estructura que se recibe de la API 
    {Title: Matrix, Author: "Wachowski Brothers", etc...}


-   [PUT] http://localhost:3000/api/film/ Actualiza los datos de una película y retorna un status 200. Payload {id:"0", message: "Se ha actualizado Titanic"}

-   [DELETE] http://localhost:3000/api/film/ Borra una película y retorna un status 200.
Deberás pasar por el body el id de la película que quieras borrar.
Payload {id: 123, message: "Se ha borrado la película con ID: 123"}

#### En caso de ruta no encontrada o error, devolver un mensaje de error. Especificar en el status si ha sido un 404, 500, etc... ({ message: 'Film not found' })

### Ejecutando las Pruebas

Para comprobar tu progreso, utiliza el comando `npm test`. Es importante que todas las pruebas se pasen con éxito. Si alguna prueba falla, revisa tu código y corrige lo necesario. Las pruebas cubrirán:

-   La configuración del entorno. (.env)
-   La correcta obtención y manejo de los datos de películas.
-   El funcionamiento de las rutas y las respuestas del servidor.

El comando te generará una carpeta "results" con un index.html que puedes lanzar con live server y visionar mejor los tests.

### Entrega

Una vez que hayas terminado y todas tus pruebas pasen con éxito, sube tus cambios al repositorio y comparte el link en el entregable de Classroom. ¡A por ello!

