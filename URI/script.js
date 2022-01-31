let input = require("fs").readFileSync("stdin", "utf8");


let [A, B, C] = input.split(" ").map(item => parseFloat(item));

let result = A + B + C;

console.log (result);