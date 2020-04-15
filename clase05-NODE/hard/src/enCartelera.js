const dataFunctions = require('../dataFunctions');

const moviesFile = dataFunctions.getMovies();

let contenido = 'En cartelera\n\n';
contenido += 'Total de películas: ' + moviesFile.total_movies + '\n\n';

contenido += '::: Listado de películas :::\n\n';

for(let movie of moviesFile.movies) {
   contenido += movie.title + '\n';
   contenido += movie.overview + '\n';
   contenido += '\n\n---------------------------\n\n';
}

module.exports = contenido;