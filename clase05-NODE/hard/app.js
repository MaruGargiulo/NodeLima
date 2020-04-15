const http = require('http');

// requiero la función de ruteo. Para más info, ver el archivo router.js
const router = require('./router');

/**
 * Las líneas 9 y 20 funcionan si desde router.js exportamos un objeto literal con la propiedad routes.
 */
// const router = require('./router);

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

	/**
	 * Del objeto router, llamo a la función routes. La misma tiene definida dentro un switch.
	 * el cual se va a encargar de preguntar por la url que vino, y responderá en función de eso
	*/
	
	router(req,res);
	// router.routes(req,res);

}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));