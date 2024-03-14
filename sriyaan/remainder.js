function findRemainder(dividend,divisor){
    while(dividend>=divisor){
        dividend -= divisor;
   
    }
    return dividend;
}
console.log(findRemainder(17,5));
