const nota1 = 10;
const nota2 = 4;
let optativa = 7;

if (optativa === undefined) {
    optativa = -1;
}

function CalcularMedia(nota1, nota2, optativa){
    if (nota1 < nota2){
         nota1 = nota1 < optativa ? optativa : nota1;
    }
     else if(nota2 < nota1){
        nota2 = nota2 < optativa ? optativa : nota2;
    }

    let media = nota1 + nota2 / 2;
    return media;

}

const Aluno1 = CalcularMedia(nota1, nota2, optativa);

const Aluno2 = CalcularMedia(5,8,1);

console.log(Aluno1);
console.log(Aluno2);
