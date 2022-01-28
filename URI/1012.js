// let A = 0 ; //parseFloat(lines.shift()); 
// let B = 0 ; // parseFloat(lines.shift());
// let C = 0 ; // parseFloat(lines.shift());
var input = require('fs').readFileSync('/dev/stdin', 'utf8');


let PI = 3.14159;
let [A, B, C] = input.split(" ").map(item => parseFloat(item));

let areaTriangulo = (A * C) / 2.0;
let areaCirculo = PI * Math.pow(C,2);
let areaTrapezio = ((A + B) * C) / 2.0;
let areaQuadrado = Math.pow(B, 2);
let areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: "+ areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));