const produtos =[
    {nome: 'Notebook', preco: 2499.00, fragil: true},
    {nome: 'Ipad Pro', preco: 4499.00, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo Plástico', preco: 18.99, fragil: false},
]

 let vip = produtos.filter( e => e.fragil === true).filter(e => e.preco > 2000)


console.log(vip)