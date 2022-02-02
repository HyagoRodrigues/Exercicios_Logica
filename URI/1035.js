let input = require("fs").readFileSync("stdin", "utf8");

let [A, B, C, D] = input.split(" ").map(item => parseFloat(item));

let somaAB = A + B;
let somaCD = C + D;
let result = B > C && D > A && somaCD > somaAB ? true : false;
let positivo = C && D > 0 ? true : false;
let par = A % 2 === 0 ? true : false;

result && positivo && par ? console.log('Valores aceitos') : console.log('Valores nao aceitos');
