/**Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function diaUtil(dia){
    switch(dia){
        case 1: return 'Domingo - Final de semana';
        case 2: return 'Segunda - Dia Útil';
        case 3: return 'Terça - Dia Útil';
        case 4: return 'Quarta - Dia Útil';
        case 5: return 'Quinta - Dia Útil';
        case 6: return 'Sexta - Dia Útil';
        case 7: return 'Sábado - Final de Semana';
        default: return 'Dia inválido';
    }
}

console.log(diaUtil(7))