function repetir(item, quantidade){
    let resultado =[]
    for(let i = 0; i < quantidade; i++)
        resultado.push(item)
    return resultado
}

let result = repetir('Puta', 5);

console.log(result)