Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i , this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}


const produtos =[
    {nome: 'Notebook', preco: 2499.00, fragil: true},
    {nome: 'Ipad Pro', preco: 4499.00, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo Plástico', preco: 18.99, fragil: false},
]

 let vip = produtos.filter2( e => e.fragil === true).filter2(e => e.preco > 2000)


console.log(vip)