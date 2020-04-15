const dataFunctions = require('../dataFunctions');

const theatersFile = dataFunctions.getTheaters();

let contenido = 'Nuestras salas\n\n';
contenido += 'Total de salas: ' + theatersFile.total_theaters + '\n\n';
contenido += '::: Listado de nuestras salas :::\n\n';

for(let theater of theatersFile.theaters) {
   contenido += theater.name + '\n';
   contenido += theater.address + '\n';
   contenido += theater.description + '\n';
   contenido += '\n\n---------------------------\n\n';
}

module.exports = contenido;