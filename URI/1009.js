var input = require('fs').readFileSync("stdin", "utf8");

var line = input.split("\n");

let nome = line.shift();
let salarioFixo = parseFloat(line.shift());
let totalVendas = parseFloat(line.shift());

let comissao = totalVendas * 0.15;
let salarioFinal = comissao + salarioFixo;

console.log(`Total = R$ ${salarioFinal.toFixed(2)}`)

