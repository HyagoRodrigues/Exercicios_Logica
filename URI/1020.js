let input = require("fs").readFileSync("stdin", "utf8");

let idade = parseInt(input);

        let anos = idade / 365;
        let meses = (idade % 365) / 30;
        let dias = (idade % 365) % 30;
        console.log(` ${anos.toFixed()} ano (s) \n ${meses.toFixed()} mês (es) \n ${dias.toFixed()} dia (s)`);



