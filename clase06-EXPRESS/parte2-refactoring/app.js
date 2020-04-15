const express = require('express');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

// RUTAS GENERALES
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// RUTAS DE HÉROES
const heroesRoutes = require('./routes/heroes');
app.use('/heroes', heroesRoutes);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});