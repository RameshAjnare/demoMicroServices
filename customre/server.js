const express = require('express')
const app = express()


app.get('/customer-details',(req,res)=>{
    res.json({
        status:"ok",
        messsage:"Customer Api run success"
    })
})

app.listen(5000,()=>{
     console.log("server run on 5000 port");
})

