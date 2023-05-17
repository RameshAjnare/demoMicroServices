const express = require('express')
const app = express()


app.get('/product-details',(req,res)=>{
    res.json({
        status:"ok",
        messsage:" Product Api run success"
    })
})

app.listen(6000,()=>{
     console.log("server run on 6000 port");
})

