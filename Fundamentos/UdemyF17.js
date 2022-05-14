/**Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
PLANO A: Salário (aumento) de 20%
PLANO B: Salário (aumento) de 15%
PLANO C: Salário (aumento) de 10%
*/

function tabelaAumento (planoSalario, salarioAtual){
    switch(planoSalario){
        case 'A': return salarioAtual * 1.1;
        case 'B': return salarioAtual * 1.15;
        case 'C': return salarioAtual * 1.2;        
        default: return 'Plano inválido';
    }
}

console.log(tabelaAumento('A', 1000));