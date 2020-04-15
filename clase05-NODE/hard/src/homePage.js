const dataFunctions = require('../dataFunctions');

const moviesFile = dataFunctions.getMovies();

let contenido = 'Bienvenidos a DH Movies\nEl mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn\n\n';
contenido += 'Total de películas en cartelera: ' + moviesFile.total_movies + '\n\n';

// mapeo el array de películas, y por cada película que recorre le pido que retorne el título
let titleMovies = moviesFile.movies.map(function(movie) {
   return movie.title;
});

// con el método sort(), ordeno el array de películas
let sortedTitles = titleMovies.sort();

contenido += '::: Listado de películas :::';

// recorro el array de títulos ordenados y por cada uno, envío ese título al navegador con res.write()
for(let title of sortedTitles) {
   contenido += title + '\n';
};

contenido += '\n\nRecordá que podés visitar las secciones: \n•En cartelera: /en-cartelera\n•Más votadas: /mas-votadas\n•Sucursales: /sucursales\n•Contacto: /contacto\n•Preguntas Frecuentes: /preguntas-frecuentes';

module.exports = contenido;
