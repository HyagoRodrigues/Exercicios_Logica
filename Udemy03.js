
function Salario(horas,valor){
    let total = horas * valor
    return `O seu salário é ${total} `
}

const salarioTotal = Salario(150, 40.5);

console.log(salarioTotal);