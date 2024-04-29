const express=require("express")
const app=express()
app.use(express.json());
const port=3000
app.get('/sayhello',(req,res)=>{
    res.send('never give up')
})
const products=[
    {
        id:123,
        name:"iphone"
    },
    {
        id:213,
        name:"vivo"
    },
    {
        id:345,
        name:"oppo"
    }

    
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(id,name);
    return res.send('data stored')
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
    
