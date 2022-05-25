/**Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

function contarCaracter(caracter, string){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(caracter === string[i]){
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracter("r", "A sorte favorece os audazes"));