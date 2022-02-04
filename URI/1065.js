let input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n").map(item => parseFloat(item));

let output = valores.filter(valor => valor % 2 === 0);

console.log(output.length + " valores pares");
