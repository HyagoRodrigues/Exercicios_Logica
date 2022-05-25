function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento] 
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento] 
}

    const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const primeiroEUltimoElemento = receberPrimeiroEUltimoElemento(elementos)
    console.log(primeiroEUltimoElemento)