let input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n").map(item => parseInt(item));

let par = valores.filter(valor => valor % 2 === 0);
let impar = valores.filter(valor => valor % 2 !== 0);
let positivo = valores.filter(valor => valor > 0);
let negativo = valores.filter(valor => valor < 0);

console.log(`${par.length} valor(es) par(es)
${impar.length} valor(es) impar(es)
${positivo.length} valor(es) positivo(s)
${negativo.length} valor(es) negativo(s)
`)