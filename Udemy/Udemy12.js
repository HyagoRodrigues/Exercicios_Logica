
let array = ["Javascript", 1, "3", "Web", 20];


function retornaNumeros(array){
    let numeros = [];
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'number'){
            numeros.push(array[i]);
        }
    }
    return numeros;
}

let resultado = retornaNumeros(array);
console.log(resultado);