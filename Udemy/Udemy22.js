/** A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
 */

function buscarPalavrasSemelhantes(palavra, array){
    let arraySemelhantes = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].indexOf(palavra) !== -1){
            arraySemelhantes.push(array[i]);
        }
    }
    return arraySemelhantes;
}

console.log(buscarPalavrasSemelhantes("pro", ["programar", "mobile", "programador"]));