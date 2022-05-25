/**Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos. */


let vetor = [];

for(i = -20; i < 20; i++){
    vetor.push(i);
}

let negativos = vetor.map(valor => {
    return valor < 0 ? 0 : valor;
})

console.log(negativos)
