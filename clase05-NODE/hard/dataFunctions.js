/**
 * En este módulo definimos la funcionalidad para leer y parsear los archivos que contienen
 * la data que necesito para desarrollar la app: movies.json, faqs.json y theaters.json
 */

// requiero el módulo fs
const fs = require('fs');

// definimos la función parseFile.
// esta función recibe el nombre de un archivo json (sin la extensión) y lo devuelve parseado
const parseFile = (file) => JSON.parse(fs.readFileSync(__dirname + '/data/' + file + '.json', 'utf-8'));

/** 
 * Defino y exporto las funciones getMovies, getTheaters y getFaqs. 
 * Cada una, cuando se ejecuta, devolverá su data correspondiente parseada.
 */

 module.exports = {
   getMovies: function() {
      return parseFile('movies');
   },
   getTheaters: function() {
      return parseFile('theaters');
   },
   getFaqs: function() {
      return parseFile('faqs');
   }
}

/**
 * Eso mismo se puede hacer de esta otra manera:
 * 
 * Defino las tres funcioens. Cada una de ellas, llama a parseFile y lee su archivo correspondiente.
 * Es decir que, cuando invoque a cada una de estas funciones en otro archivo, devolverá la data parseada.
 * 
 * const getMovies = function() {
 *    return parseFile('movies');
 * }
 * 
 * const getTheaters = function() {
 *    return parseFile('theaters');
 * }
 * 
 * const getFaqs = function() {
 *    return parseFile('faqs');
 * }
 *  
 * Al final de todo, exporto cada una de las funciones.
 * 
 * module.exports = {getMovies, getTheaters, getFaqs}; 
 * 
 */
