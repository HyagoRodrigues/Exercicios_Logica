/**Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */


function entre(numero, minimo, maximo, inclusivo){
    if(inclusivo == true){
        if(numero >= minimo && numero <= maximo){
            return true;
        } else {
            return false;
        }
    } else {
        if(numero > minimo && numero < maximo){
            return true;
        } else {
            return false;
        }
    }
}

let resultado = entre(10,100,50);

console.log(resultado);