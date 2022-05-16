/**Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */

function mediaAritimetica(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    console.log(`Média: ${soma/vetor.length}`);
}

mediaAritimetica([8, 6,5, 10]);