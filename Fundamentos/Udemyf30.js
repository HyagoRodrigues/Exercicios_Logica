/**) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor(vetor){
    let maior = vetor[0];
    let menor = vetor[0];
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i];
        }
        if(vetor[i] < menor){
            menor = vetor[i];
        }
    }
    console.log(`Maior: ${maior}`);
    console.log(`Menor: ${menor}`);
}

maiorMenor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);