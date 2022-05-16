/**Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


function contem(palavra1, palavra2) {
    let contem = true;
    for (let i = 0; i < palavra1.length; i++) {
        let caracteresP1 = palavra1.charAt(i).toLowerCase();
        for (let j = 0; j < palavra2.length; j++) {
            let caracteresP2 = palavra2.charAt(j).toLowerCase();
            if (caracteresP1 == caracteresP2) {
                contem = true;
                break;
            } else {
                contem = false;
            }
        }
        if (!contem) {
            return contem;
        }
        return contem;
    }
}

console.log(contem('abc', 'ffc'))