let input = require("fs").readFileSync("stdin", "utf8");

const [A, B] = input.split(" ").map(item => parseFloat(item));

if(A %B === 0 || B % A === 0){
    console.log ('Sao Multiplos')
}else{console.log ('Nao sao Multiplos')}