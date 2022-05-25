/**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */

function SomaArray(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

console.log(SomaArray([15,15,15,15]));