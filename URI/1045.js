let input = require("fs").readFileSync("stdin", "utf8");
const [A, B, C] = input.split(" ").map(item => parseFloat(item));

if(A >= (B+C) || B >= (A+C) || C >= (A+B)){
    console.log("NAO FORMA TRIANGULO")
}else if(A*A == (B*B + C*C) || B*B == (A*A + C*C) || C*C == (A*A + B*B)){
    console.log("TRIANGULO RETANGULO")
}else if(A*A > (B*B + C*C) || B*B > (A*A + C*C) || C*C > (A*A + B*B)){
    console.log("TRIANGULO OBTUSANGULO")
}else if(A*A < (B*B + C*C) || B*B < (A*A + C*C) || C*C < (A*A + B*B)){
    console.log("TRIANGULO ACUTANGULO")
}if(A === B && A === C){
    console.log("TRIANGULO EQUILATERO")
}if((A == B && A != C)  || (A == C && A != B) || (B == C && B != A)){
    console.log("TRIANGULO ISOSCELES")
}
