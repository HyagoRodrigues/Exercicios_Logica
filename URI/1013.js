let input = require("fs").readFileSync("stdin", "utf8");

const [A, B, C] = input.split(" ").map(item => parseFloat(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;

const maior = (C + maiorAB + Math.abs(C - maiorAB)) / 2;


console.log(maior + " eh o maior")