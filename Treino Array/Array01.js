const aprovados = ['Maria', 'Jose', 'João']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})


// exibindo sem parametro
aprovados.forEach( nome => console.log(nome))



// passando para uma variável
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)