const dataFunctions = require('../dataFunctions');

const faqsFile = dataFunctions.getFaqs();

let contenido = 'Preguntas Frecuentes\n\n';
contenido += 'Total de preguntas: ' + faqsFile.total_faqs + '\n\n';
contenido += '::: Listado de preguntas :::\n\n';

for(let faq of faqsFile.faqs) {
   contenido += faq.faq_title + '\n';
   contenido += faq.faq_answer + '\n';
   contenido += '\n\n---------------------------\n\n';
}

module.exports = contenido;