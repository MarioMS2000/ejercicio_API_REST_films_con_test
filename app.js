//app.js: crea Express, configura middlewares, monta rutas y maneja errores.
const express = require('express');

require('dotenv').config();
console.log(process.env.API_KEY);

// Traemos el router que exportaste de routes del fichero films.routes.js
const filmsRoutes = require('./routes/films.routes');

const app = express();
const port = process.env.PORT || 3000;

// Para poder hacer el POST necesito esto:
app.use(express.json());// Habilitar recepción de JSON por mi backend , parsear el "body" entrante a JSON

// ruta/endpoint de prueba
/*app.get('/', (req, res) => {
    res.send('Hello World!');
});*/

// Rutas
//API
app.use('/api', filmsRoutes); // Habilitar rutas: significa, /api → usar filmsRoutes

//http://localhost:3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;