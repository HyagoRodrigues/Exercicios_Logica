/**Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */


function negativos(vetor){
    let negativos = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos++;
        }
    }
    console.log(`Números negativos: ${negativos}`);
}

negativos([-2,-5,-10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10])