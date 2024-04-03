const readlineSync = require('readline-sync')
let length=readlineSync.questionInt('please enter the length of an array:')
let array =[]
console.log('please enter the elemets in an array')
for(let i=0;i<length;i++){
    array[i]= readlineSync.question(`please enter the element at index ${i}:`)
}
console.log(array)