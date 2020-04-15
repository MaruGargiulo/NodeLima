const dataFunctions = require('../dataFunctions');

const moviesFile = dataFunctions.getMovies();

let contenido = 'Más votadas\n\n';

// filtro el array de películas, y por cada una pregunto si su raiting es mayor a 7. Si es así, que la retorne
let mostVoted = moviesFile.movies.filter(function(movie) {
   return movie.vote_average > 7;
});

let average = mostVoted.reduce(function(acumulador, movie) {
   return acumulador + movie.vote_average;
}, 0) / mostVoted.length;

/** Lo mismo se puede hacer con la sintaxis de arrow function: 
let average = mostVoted.reduce( (acumulador, movie) => acumulador + movie.vote_average, 0) / mostVoted.length;
   */

contenido += 'Total de películas: ' + mostVoted.length + '\n\n';
// el método toFixed() muestra, del número original, la cantidad de decimales que le indique por parámetro, en ese caso va a mostrar 2
contenido += 'Rating promedio: ' + average.toFixed(2) + '\n\n';
contenido += '::: Listado de películas ::: \n\n';

for(let movie of mostVoted) {
   contenido += movie.title + '\n';
   contenido += movie.vote_average + '\n';
   contenido += movie.overview + '\n';
   contenido += '\n\n---------------------------\n\n';
}

module.exports = contenido;