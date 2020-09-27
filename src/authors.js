/**
 * Emmanuel Lucio Urbina
 * Funciones generar citas por autor
 * devuelve un objeto 
 * los parametros a usar son:
 * quoteText - Cita
 * quoteAuthor - Autor de la cita
 * quoteGenre - Genero al que pertenece la cita
 */

 
async function GetQuotesAuthor(author){
    const result = await fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=10`)
    const resultJson = result.json()
    return resultJson
}


export default GetQuotesAuthor