// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req,res) => {
	const bienvenida = "Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y	hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.";
	res.send(bienvenida);
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req,res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find((heroe) => {
		return heroe.id == req.params.id;
	});
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	if(heroe) {
		const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}`;
		res.send(contenido);
	} 
	// Si NO se encuentra se envía el mensaje de no encontrado
	res.send('No se encontró el héroe soliciado');

});

// Ruta /heroes/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:bio/:id/:ok?', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find((heroe) => {
		return heroe.id == req.params.id;
	});

	// Si NO se encuentra al héroe se envía un mensaje
	if(!heroe) {
		res.send('No encontramos un héroe para mostrarte su biografía');
	}
	// Si se encuentra al héroe: 
	// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
	else if (req.params.ok !== 'ok') {
		const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}.
		Lamento que no quieras saber más de mí.`;
		res.send(contenido);
	} else {
		// Si no vino el parámetro se envía el mensaje de error
		const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}.
		Biografía: ${heroe.resenia}`;
		res.send(contenido);
	}
});

// Ruta Créditos
app.get('/creditos', (req,res) => {
	res.send('Aguante js');
})

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});