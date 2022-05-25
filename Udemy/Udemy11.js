

let objeto = {
    a: 'a',
    b: 'b',
}

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
    }


let resultado = removerPropriedade(objeto, "a");

console.log(resultado);

