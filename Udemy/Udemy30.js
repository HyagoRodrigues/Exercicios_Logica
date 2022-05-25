/**Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 */

function calcularMedia(estudantes){
    let resultado = {};
    let melhorAluno = {};
    for(let estudante in estudantes){
        let media = 0;
        for(let nota of estudantes[estudante]){
            media += nota;
        }
        media = media / estudantes[estudante].length;
        resultado[estudante] = media;
    }
    melhorAluno = Object.keys(resultado).reduce((a, b) => resultado[a] > resultado[b] ? a : b);
    return {nome: melhorAluno, media: resultado[melhorAluno]};
}

console.log(calcularMedia({
    João: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));