 const readlinesync=require('readline-sync');

 let number=readlinesync.questionInt('please enter the number :')
 if(number%2===0){
    console.log('number is even')

 }else{
    console.log('number is odd')
 }
