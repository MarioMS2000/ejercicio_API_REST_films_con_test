//controllers/films.controller.js: contiene la lógica de cada endpoint.
/*Un controller es el que:
    recibe la request (req)
    usa utils o servicios
    devuelve la response (res)

Ejemplo mental:

Cliente → Route → Controller → Utils → API externa 
*/
// Importar
const fetchFilms = require('../utils/fetchFilms');// Para que se importe el archivo fetchFilms.js ya que lo necesitamos aquí

// GET
//http://www.omdbapi.com/?t=Titanic&apikey=e07d5e7d
//http://localhost:3000/api/film/:title
const getFilmByTitle = async (req, res) => {
    try {
        // Leer título
        const { title } = req.params; // Se pone .params porque asi accedemos a la URL [GET] http://localhost:3000/api/film/:title, lo que venga después de /film/ lo guardo como title

        // Llamar util
        const film = await fetchFilms(title);// Aquí llamamos a fetchFilms que esta en utils por eso no hace falta hacer el fetch porque ya lo hace el utils
        /*Controller:
            quiero película → fetchFilms()
        Utils:
            cómo obtener película → fetch + API 
        */

        // Responder
        return res.status(200).json(film);

    } catch (error) {
        return res.status(404).json({ message: 'La pelicula no ha sido encontrada' });
    }
}

// POST
const createFilm = (req, res) => {
    try {
        const { Title } = req.body; // 

        if (!Title) {
            return res.status(400).json({ message: 'Se requiere el título' });
        }

        return res.status(200).json({ message: `Se ha guardado ${Title}`, });

    } catch (error) {
        return res.status(500).json({ message: 'Error Server' });
    }
}

// PUT
const updateFilm = (req, res) => {
    try {

        const { id, Title } = req.body;

        if (!Title) {
            return res.status(400).json({ message: 'Se requiere el título' });
        }

        // Respuesta
        return res.status(200).json({
            id: id || "0", //si id existe → usa id, si no existe → usa "0"
            message: `Se ha actualizado ${Title}`,
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error Server' })
    }
}

// DELETE
const deleteFilm = (req, res) => {
    try {
        const { id } = req.body;

        if (id === undefined) { // Es mejor usar id === undefined porque !id podría considerar inválidos valores que sí son válidos como 0, ya que si pones !id revisa esto -> vacío, null, undefined, false
            return res.status(400).json({ message: 'El Id es requerido' });
        }

        // Respuesta
        return res.status(200).json({
            id,
            message: `Se ha borrado la película con ID: ${id}`,
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error Server' });
    }
}

// Exportamos
module.exports = {
    getFilmByTitle,
    createFilm,
    updateFilm,
    deleteFilm,
};