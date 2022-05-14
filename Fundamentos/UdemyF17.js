function tabelaAumento (planoSalario, salarioAtual){
    switch(planoSalario){
        case 'A': return salarioAtual * 1.1;
        case 'B': return salarioAtual * 1.15;
        case 'C': return salarioAtual * 1.2;        
        default: return 'Plano inválido';
    }
}

console.log(tabelaAumento('A', 1000));