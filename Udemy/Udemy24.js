/**Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
 */

function inverterObjeto(objeto){
    let objetoInvertido = {};
    for(let chave in objeto){
        objetoInvertido[objeto[chave]] = chave;
    }
    return objetoInvertido;
}

console.log(inverterObjeto({ a: 1, b: 2, c: 3 }));