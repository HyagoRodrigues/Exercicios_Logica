/**Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

function quantidadeDeDigitos(numeros, qtd){
    let resultado = [];
    for(num of numeros){
        const quantidadeNumeros = String(num).length;
        if(quantidadeNumeros === qtd){
            resultado.push(num);
        }
    }
    return resultado;
}

console.log(quantidadeDeDigitos([38, 2, 365, 10, 125, 11], 1));