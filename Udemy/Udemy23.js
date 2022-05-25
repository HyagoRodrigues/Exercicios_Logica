/**Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais. */

function removerVogais(string){
    let stringSemVogais = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u"){
            stringSemVogais += string[i];
        }
    }
    return stringSemVogais;
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));