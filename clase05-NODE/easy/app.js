const http = require('http');
const fs = require('fs');

// importo los datos 
const movies = require('./data/movies');
const faqs = require('./data/faqs');
const theaters = require('./data/theaters');

// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		
		// Home
		case '/':
			
			// en la variable contenidoHome almaceno el texto de bienvenida. Con \n genero un salto de línea
			let contenidoHome = 'Bienvenido a DH-MOVIES. El mejor sitio de películas. Incluso mejor que Netflix.\nSe tenía que decir y se dijo.\n\n'

			// a la variable le agrego la cantidad de películas con .length
			contenidoHome += 'Cantidad de películas: ' + movies.length + '\n\n';

			// con map recorro el array de películas, y a cada una le pido el título
			let moviesTitle = movies.map(function(movie) {
				return movie.title;
			})
			// al array de títulos lo ordeno con el método sort()
			moviesTitle.sort();

			contenidoHome += '::: Listado de películas:::: \n\n';

			// hasta el momento sólo tengo los datos almacenados en un array. Recorro ese array de títulos y por cada vuelta le agrego ese título a contenidoHome
			for(let title of moviesTitle) {
				contenidoHome += title + '\n';
			}

			contenidoHome += '​\n\n\nRecordá que podés visitar las secciones: \n\nEn Cartelera\nMás Votadas\nSucursales\nContacto\nPreguntas Frecuentes';

			// en contenidoHome tengo un string gigante con toda la data. Devuelvo ese string como respuesta y el cliente verá todos esos datos en el navegador cuando ingrese, en este caso, a localhost:3030
			res.end(contenidoHome)
			break;


		// En cartelera
		case '/en-cartelera':

			let contenidoCartelera = 'En cartelera \n\n';
			contenidoCartelera += 'Cantidad de películas: ' + movies.length + '\n\n\n';

			contenidoCartelera += '::: Listado de películas ::: \n\n';

			for(let movie of movies) {
				contenidoCartelera += 'Título: ' + movie.title + '\n';
				contenidoCartelera += 'Reseña: ' + movie.overview + '\n\n\n----------------\n\n';
			}

			res.end(contenidoCartelera);
			break;

		// Más Votadas
		case '/mas-votadas':

			let contenidoMasVotadas = 'Más votadas\n';

			let masVotadas = movies.filter(function(movie) {
				return movie.vote_average > 7;
			})

			contenidoMasVotadas += 'Total de películas: ' + masVotadas.length + '\n\n';

			let promedioRating = masVotadas.reduce(function(acum, movie) {
				return acum + movie.vote_average;
			}, 0) / masVotadas.length;

			contenidoMasVotadas += 'Promedio de rating: ' + promedioRating.toFixed(2) + '\n\n';

			contenidoMasVotadas += '::: Listado de películas ::: \n\n';

			for(let movie of masVotadas) {
				contenidoMasVotadas += 'Título: ' + movie.title + '\n';
				contenidoMasVotadas += 'Rating ' + movie.vote_average + '\n';
				contenidoMasVotadas += 'Reseña: ' + movie.overview + '\n\n\n----------------\n\n';
			}

			res.end(contenidoMasVotadas);
			break;

		// Sucursales
		case '/sucursales':

			let contenidoSucursales = 'Nuestras salas:\n\n';

			for(let theatre of theaters) {
				contenidoSucursales += 'Teatro: ' + theatre.name + '\n';
				contenidoSucursales += 'Dirección: ' + theatre.address + '\n';
				contenidoSucursales += 'Descripción: ' + theatre.description + '\n\n\n';
			}

			res.end(contenidoSucursales);
			break;

		// Contacto
		case '/contacto':

			let contenidoContacto = '---- Contactános ---- \n\n';
			contenidoContacto += '¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.'
			
			res.end(contenidoContacto);
			break;

		// Preguntas Frecuentes
		case '/preguntas-frecuentes':

			let contenidoPreguntasFrecuentes = 'Preguntas frecuentes \n\n';

			contenidoPreguntasFrecuentes += 'Cantidad de preguntas: ' + faqs.length + '\n\n';

			for(let faq of faqs) {
				contenidoPreguntasFrecuentes += 'PREGUNTA: ' + faq.faq_title + '\n';
				contenidoPreguntasFrecuentes += 'RESPUESTA: ' + faq.faq_answer + '\n\n---------------\n\n';
			}

			res.end(contenidoPreguntasFrecuentes);
			break;

		// si el usuario no entra a ninguna url de las anteriores, enviamos este texto por defecto
		default:
			res.end('404 not found')
	}
}).listen(3050, 'localhost', () => console.log('Server running in 3050 port'));

