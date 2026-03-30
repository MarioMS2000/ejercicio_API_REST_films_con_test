//app.js: crea Express, configura middlewares, monta rutas y maneja errores.
const express = require('express');

require('dotenv').config();
console.log(process.env.API_KEY);

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
//app.use('/api/books',booksRoutes); // Habilitar rutas | promer parametro es un prefijo
//app.use('/api/products',productsRoutes);

//http://localhost:3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;