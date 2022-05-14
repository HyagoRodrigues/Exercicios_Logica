/**Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */


function crescimento(altura1, altura2, taxa1, taxa2){
    let ano = 0;
    while(altura1 < altura2){
        altura1 += altura1 * taxa1 / 100;
        altura2 += altura2 * taxa2 / 100;
        ano++;
    }
    console.log(`A criança 1 ultrapassará a criança 2 em ${ano} anos.`);
}

crescimento(100, 50, 5, 4);