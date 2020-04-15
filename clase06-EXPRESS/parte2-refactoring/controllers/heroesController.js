const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

module.exports = {

   index: (req,res) => {
      res.send(heroes);
   },
   show: (req,res) => {
      let heroe = heroes.find((heroe) => {
         return heroe.id == req.params.id;
      });
      
      if(heroe) {
         const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}`;
         res.send(contenido);
      } 
      res.send('No se encontró el héroe soliciado');
   },
   showWithBio: (req,res) => {

      let heroe = heroes.find((heroe) => {
         return heroe.id == req.params.id;
      });
   
      if(!heroe) {
         res.send('No encontramos un héroe para mostrarte su biografía');
      } else if (req.params.ok !== 'ok') {
         const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}.
         Lamento que no quieras saber más de mí.`;
         res.send(contenido);
      } else {
         const contenido = `Nombre: ${heroe.nombre} - Profesión: ${heroe.profesion}.
         Biografía: ${heroe.resenia}`;
         res.send(contenido);
      }
   }
}