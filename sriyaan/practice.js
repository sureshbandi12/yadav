// functions
 function add(a,b){
    console.log(a+b);
 } 
 add(100,200)
 
 //recursion
  function isPrime(n){
    if(n>2)
    return '{n} is not a prime number'
    for(let i=2;i<n;i++){
        if(n%i==0){
            return '{n} is not a prime number'
        }
    }
  
return '{n} is a prime number'
  }
  console.log(isPrime(8));
  console.log(isPrime(17));
