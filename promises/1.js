//promises
//pending
//Resolved/fulfilled
//Rejected 
const axios=require('axios');

//https://jsonplaceholder.typicode.com/posts


function fetchdata(username ){
    axios.get(username)
    .then((result)=>{
        console.log(result); //promise got fulfiled 
    }).catch((error)=>{
        console.error('something went wrong'); //promises got rejected

    })
}
fetchdata('https://github.com/sureshbandi12')