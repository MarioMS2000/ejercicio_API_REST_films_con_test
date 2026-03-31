//routes/films.routes.js: define las URLs y qué controlador ejecuta cada una.
//Aquí solo conectamos cada endpoint con su controlador | endpoint → controller
/*
controller = sabe qué hacer
route = sabe cuándo hacerlo

O sea:
    URL + método HTTP → controlador correcto
Ejemplo:
    GET /api/film/Titanic → getFilmByTitle 
*/

// Importamos
const express = require('express'); // Importar express
const router = express.Router(); // crea un router solo para estas rutas, Express permite crear mini routers para organizar rutas

// Importar los controladores
/*const controller = require('../controllers/films.controller'); // Una forma de hacerlo
router.get('/film/:title', controller.getFilmByTitle);*/

//Con destructuring
const {
    getFilmByTitle,
    createFilm,
    updateFilm,
    deleteFilm,
} = require('../controllers/films.controller');


//GET http://localhost:3000/api/film/Titanic
router.get('/film/:title', getFilmByTitle);

//POST http://localhost:3000/api/film
/*{
  "Title": "Titanic",
  "Director": "James Cameron"
}*/
router.post('/film', createFilm);

//PUT http://localhost:3000/api/film
/*{
  "id": "0",
  "Title": "Titanic"
}*/
router.put('/film', updateFilm);

//DELETE http://localhost:3000/api/film
/*{
  "id": 123
}*/
router.delete('/film', deleteFilm);

// Exportar
//este archivo exporta el router
module.exports = router; // Porque luego app.js lo va a importa
// Con esto permites hacer en app.js esto -> const filmsRoutes = require('./routes/films.routes');
/*Eso conecta:
/api → router → controllers 

Usuario:

GET /api/film/Titanic

↓

app.js:

app.use('/api', filmsRoutes);

↓

routes:

router.get('/film/:title', getFilmByTitle);

↓

controller:

getFilmByTitle()

↓

utils:

fetchFilms()

↓

OMDb
*/