import express from 'express'
const app = express()
app.get("/products/:id",(req,res)=>{
    res.send(req.params.id)
})
app.get("/iphone/:model",(req,res)=>{
    // let model = req.params.model
    res.send(`This is iPhone ${req.params.model}`)
})
app.listen(8000,(req,res)=>{
    console.log("Server ok!")
})