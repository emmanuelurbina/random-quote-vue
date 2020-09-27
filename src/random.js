/**
 * Emmanuel Lucio Urbina
 * Funciones generar cita aleatoria
 * devuelve un objeto 
 * los parametros a usar son:
 * quoteText - Cita
 * quoteAuthor - Autor de la cita
 * quoteGenre - Genero al que pertenece la cita
 */

 
async function GetQuote(){
    const result = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    const resultJson = result.json()
    return resultJson
}


export default GetQuote