let input = require("fs").readFileSync("stdin", "utf8");
let [A,B] = input.split(" ").map(item => parseFloat(item));


let valor = 0;
switch (A) {
    case 1:
        valor = B * 4.00;
        break;
    case 2:
        valor = B * 4.50;
        break;
    case 3:
        valor = B * 5.00;
        break;
    case 4:
        valor = B * 2.00;
        break;
    case 5:
        valor = B * 1.50;
        break;
}

console.log(`Total: R$ ${valor.toFixed(2)}`);