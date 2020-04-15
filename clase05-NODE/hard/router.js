/**
 * El arhivo index.js exporta TODOS los archivos de la carpeta src,
 * donde está toda la data que el sitio va a querer devolverle al usuario, según la ruta a la que ingrese.
 * 
 * Cuando estamos requiriendo un arhchivo con nombre index, no hace falta aclarar el nombre.
 */

const contenido = require('./src');

const router = function(req,res) {

   switch(req.url) {
      
      // si entra a al ruta raíz...
      case '/':
         // envía como respuesta al navegador la data que expone el archivo homePage.js
         res.end(contenido.homePage);
         break;

      // si entra a /en-cartelera...
      case '/en-cartelera':
         // envía como respuesta al navegador la data que expone el archivo enCartelera.js
         res.end(contenido.enCartelera);
         break;
      
      // si entra a /mas-votadas...
      case '/mas-votadas':
         // envía como respuesta al navegador la data que expone el archivo masVotadas.js
         res.end(contenido.masVotadas);
         break;

      // si entra a /sucursales...
      case '/sucursales':
         // envía como respuesta al navegador la data que expone el archivo sucursales.js
         res.end(contenido.sucursales);
         break;

      // si entra a /contacto...
      case '/contacto':
         // envía como respuesta al navegador la data que expone el archivo contacto.js
         res.end(contenido.contacto);
         break;

      // si entra a /preguntas-frecuentes...
      case '/preguntas-frecuentes':
         // envía como respuesta al navegador la data que expone el archivo preguntas-frecuentes.js
         res.end(contenido.preguntasFrecuentes);
         break;

      default:
         res.end('No se encontró la página solicitada');
         break;
   }

}

/**
 * Si lo exporto así, exporto directamente la función. Es decir que, cuando requiera este módulo en otro archivo
 * voy a tener la función tal cual la definí, y sólo voy a tener que ejecutar lo que me devuelva el require.
 */
module.exports = router;


/**
 * Si lo que quiero es tener un objeto con esta funcionalidad, lo que tengo que exportar es el objeto
 * con la propiedad que yo quiera. En este caso, como estoy manejando rutas, lo puedo nombrar routes: 
 */

// module.exports = {
//    routes: function(req,res) {
//       switch(req.url) {
      
//          // si entra a al ruta raíz...
//          case '/':
//             // envía como respuesta al navegador la data que expone el archivo homePage
//             res.end(index.homePage);
//             break;
   
//          // si entra a /en-cartelera...
//          case '/en-cartelera':
//             // envía como respuesta al navegador la data que expone el archivo enCartelera
//             res.end(index.enCartelera);
//             break;
         
//          // si entra a /mas-votadas...
//          case '/mas-votadas':
//             // envía como respuesta al navegador la data que expone el archivo
//             res.end(index.masVotadas);
//             break;
   
//          // si entra a /sucursales...
//          case '/sucuralse':
//             // envía como respuesta al navegador la data que expone el archivo
//             res.end(index.sucursales);
//             break;
   
//          // si entra a /contacto...
//          case '/contacto':
//             // envía como respuesta al navegador la data que expone el archivo
//             res.end(index.contacto);
//             break;
   
//          // si entra a /preguntas-frecuentes...
//          case '/preguntas-frecuentes':
//             // envía como respuesta al navegador la data que expone el archivo
//             res.end(index.preguntasFrecuentes);
//             break;
   
//          default:
//             res.end('No se encontró la página solicitada');
//             break;
//       }
//    }
// }