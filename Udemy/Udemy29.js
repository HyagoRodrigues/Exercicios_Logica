/**Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array */

function segundoMaior(array){
    let maior = 0;
    let segundoMaior = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            segundoMaior = maior;
            maior = array[i];
        }else if(array[i] > segundoMaior){
            segundoMaior = array[i];
        }
    }
    return segundoMaior;
}

console.log(segundoMaior([1,2,3,4,5,6,7,8,9,10]));