/** O cardápio de uma lanchonete é o seguinte:
 * Código  Produto                                 Preço
 * 100      Cachorro Quente                      R$ 3,00
 * 200      Hambúrguer Simples                   R$ 4,00
 * 300      Cheeseburguer                       R$ 5,50
 * 400      Bauru                                R$ 7,50
 * 500      Refrigerante                        R$ 3,50
 * 600      Suco                                 R$ 2,50
 */

function Cardapio(cod, qtd){
    switch(cod){
    case 100: return "Cachorro Quente" + " R$ " + qtd * 3.00;
    case 200: return "Hambúrguer Simples" + " R$ " + qtd * 4.00;
    case 300: return "Cheeseburguer" + " R$ " + qtd * 5.50;
    case 400: return "Bauru" + " R$ " + qtd * 7.50;
    case 500: return "Refrigerante" + " R$ " + qtd * 3.50;
    case 600: return "Suco" + " R$ " + qtd * 2.50;
    default: return "Código inválido";

    }
}


console.log(Cardapio(100, 2));