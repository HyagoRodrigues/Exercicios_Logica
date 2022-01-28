function MaiorOuIgual(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return false;
    if(num1 < num2 || num1 === num2){
        return true;
    } else{return false}
}

const resultado = MaiorOuIgual(1,5);

console.log(resultado);