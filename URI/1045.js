let input = require("fs").readFileSync("stdin", "utf8");
const [A, B, C] = input.split(" ").map(item => parseFloat(item));

let naoFormaTriangulo = A > (B + C) ? true : false;
let TrianguloRetangulo = Math.pow(A,2) === (Math.pow(B,2) + Math.pow(C,2)) ? true : false;
let TrianguloObt = Math.pow(A,2) > (Math.pow(B,2) + Math.pow(C,2)) ? true : false;
let TrianguloAcu = Math.pow(A,2) < (Math.pow(B,2) + Math.pow(C,2)) ? true : false;
let TrianguloEquilatero = A === B && A === C ? true : false;
let TrianguloIso = A === B || A === C || B === C ? true : false;
if(naoFormaTriangulo){console.log("NAO FORMA TRIANGULO")}
if(TrianguloRetangulo){console.log("TRIANGULO RETANGULO")}
if(TrianguloObt){console.log("TRIANGULO OBTUSANGULO")}
if(TrianguloAcu){console.log("TRIANGULO ACUTANGULO")}
if(TrianguloEquilatero){console.log("TRIANGULO EQUILATERO")}
if(TrianguloIso){console.log("TRIANGULO ISOSCELES")}
