/** Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */


function intervalo(numeros){
    let dentro = 0;
    let fora = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10 && numeros[i] <= 20){
            dentro++;
        }else{
            fora++;
        }
    }
    console.log(`Números dentro do intervalo: ${dentro}`);
    console.log(`Números fora do intervalo: ${fora}`);
}

intervalo([1,2,25,10,5,18])