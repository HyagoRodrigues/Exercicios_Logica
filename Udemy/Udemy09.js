function Multiplicar(num1, num2) {
    let result = 0;
    for (let i= 0; i < num2; i++)
    result += num1;
    return result;
}
 var a = Multiplicar(2, 2);
console.log(a)