const readlinesync=require('readline-sync');
let number=readlinesync.questionInt('please enter the number:');
function isPrime(num){
    if(num<=1) return false;
    if(num===2) return true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i ===0) return false;
    }
 return true;
}
if(isPrime(number)){
    console.log(`${number} is prime number.`);
}else{
    console.log(`${number} is not a prime number.`);
}


    
