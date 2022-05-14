/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoes(num1,num2){
    let soma = num1 + num2;
    let sub = num1 - num2;
    let div = num1 / num2;
    let mult = num1 + num2;
    
    console.log(`soma = ${soma}
subtração = ${sub}
divisão = ${div}
multiplicação = ${mult}
    `);
}

operacoes(2,2)