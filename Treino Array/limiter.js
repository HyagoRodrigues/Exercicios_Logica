function limiter (n){
    if(n == 6){
    return 3}else{
        return 3 * limiter(n + 1)
    }
}
a=  limiter(6)
console.log(a)