function inverso(entrada){
    if(typeof entrada === 'boolean'){
        if(entrada === true){return false;}else{return true;}
    }else if(typeof entrada === 'number'){
        if(entrada > 0){
            let resul = -Math.abs(entrada);
            return resul
        }else
        {
            let resul = Math.abs(entrada);
            return resul
        }
    }else{
        return `Valor numérico ou booleano espero, o tipo atual é ${typeof entrada}`
    }
}
const resultado = inverso(-25)
console.log(resultado)