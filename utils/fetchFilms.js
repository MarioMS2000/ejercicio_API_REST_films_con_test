//utils/fetchFilms.js: se encarga de hablar con la API externa.
/*Este archivo tiene una función reutilizable para consultar la API externa.

Objetivo:
    recibir un title por ejemplo "Titanic"
    construir la URL con apikey y t, usar tu API_KEY del .env
    hacer la petición, llamar a OMDb
    devolver los datos en JSON
    lanzar error si la película no existe o si algo falla
Haremos
    usar process.env.API_KEY
    codificar el título con encodeURIComponent
    comprobar si la respuesta de OMDb viene con Response: "False"
    devolver un error manejable para el controlador
*/
const fetch = require('node-fetch');

const fetchFilms = async (title) => {
    try {
        // Construimos la URL
        const url = `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t${encodeURIComponent(title)}`; // process.env.API_KEY sale de .env , t=${...} busca por título y encodeURIComponent(title) evita problemas con espacios o caracteres raros, ejemplo: &t=The Matrix, sería &t=The%20Matrix.
        //process.env.API_KEY -> process.env-> Es un objeto global de Node que contiene variables de entorno.

        /*  ? → empieza los parámetros
            t= → title
            apikey= → tu key 
        */

        // Hacemos la petición y la guardamos en response
        const response = await fetch(url); 
        // Convertimos la respuesta a jsone guardandola en data
        const data = await response.json(data) ;

        // Comprobamos si no existe
        if(data.Response === "False"){
            throw new Error("La pelicula no existe");
        }
        
        // Devolvemos la peli
        return data;

    } catch (error) {
        throw error;
    }
};

// Exportar
module.exports = fetchFilms; // Para poder usarla luego en el controller.