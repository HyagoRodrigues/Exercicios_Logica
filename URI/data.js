let input = require("fs").readFileSync("stdin", "utf8");


let idade = parseInt(input);
let idadeEmDias = idade * 365
let qtdDias = idadeEmDias;

let qtdAno, qtdMes;

qtdAno = parseInt(qtdDias/365);
qtdDias = qtdDias % 365;

qtdMes = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;
let resultado = `
                 ${qtdAno} ano(s) 
                 ${qtdMes} mes(es) 
                 ${qtdDias} dia(s)`

console.log(resultado)
