function triangulos(ladoA,ladoB,ladoC){
    if(ladoA === ladoB && ladoB === ladoC){
        console.log("TRIANGULO EQUILATERO")
    }else if((ladoA == ladoB && ladoA != ladoC)  || (ladoA == ladoC && ladoA != ladoB) || (ladoB == ladoC && ladoB != ladoA)){
        console.log("TRIANGULO ISÓCELES")
    }else{
        console.log("TRIANGULO ESCALENO")
    }
}

triangulos(21,2,26)