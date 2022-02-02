let input = require("fs").readFileSync("stdin", "utf8");
const [A, B, C] = input.split(" ").map(item => parseFloat(item));

let delta = Math.pow(B, 2) - (4 * A * C);
let R1 = ((- B + Math.sqrt(delta)) / (2 * A));
let R2 = ((- B - Math.sqrt(delta)) / (2 * A));
if((2 * A) === 0 ||  delta < 0){
    console.log ('Impossivel Calcular')
}
else{
    console.log(`R1 = ${R1.toFixed(5)}
R2 = ${R2.toFixed(5)}`)
}
