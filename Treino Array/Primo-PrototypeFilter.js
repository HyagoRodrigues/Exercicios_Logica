
Array.prototype.filtro = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i , this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const primo = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

const numeros = [2, 3, 5, 7, 11, 13, 17,15, 28, 45, 66, 91]

const primos = numeros.filtro(numero => primo(numero));


console.log(primos)


