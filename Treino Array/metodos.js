const array = [1,2,3,4,5];

let newArray=[];



//array.push("a")//adiciona elemento 
//array.pop()//remove o último elemento
 // array.shift() remove o elemento de indice 0
 //array.unshift(0) //insere os valores fornecidos no inicio de um objeto do tipo array 
 // array.splice(-1) // remove últimos quando o 
//array.fill(4, 1, 4)
array.forEach((n)=> newArray.push(n +1 ))
console.log(newArray ?? array);