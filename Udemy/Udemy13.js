/**Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */


function receberSomenteOsParesDeIndicesPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 && i % 2 === 0){
            console.log(array[i]);
        }
    }
}

receberSomenteOsParesDeIndicesPares([10,70,22,43])