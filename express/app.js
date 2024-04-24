
const express=require('express')
const fs =require("fs/promises")
const app = express()
const port = 8080
app.use(express.json())
 app.get('/',(req,res)=>{
     res.send('hello world!')
})

 
app.post('/home',async (req,res)=>{
    let userData = req.body;
    
    
    let file=await fs.readFile("data.json")
    file=JSON.parse(file)
    file.push(userData);
    console.log(file);
    file=JSON.stringify(file);
    console.log(file);
    await fs.writeFile('data.json',file)
    app.get('/user',async(req,res)=>{
        let file = await fs.readFile("data.json")
        file=JSON.parse(file)
        res.status(200).json(file)

    })
    
    res.send('lets get biryani tonight')
})



app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})