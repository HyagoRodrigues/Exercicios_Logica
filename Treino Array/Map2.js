const carrinho = [ 
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 1.45}',
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => `R$ ${parseFloat(produto.preco).toFixed(2).replace('.',',')}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);