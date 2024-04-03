let username = readlinesync.question('please enter your name:');
while(!username){
    username=readlinesync.question('invalid input,please enter your valid name')
}
console.log('hi ${username},glad to have you here');
