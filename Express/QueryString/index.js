// query strings are used to pass data from client to server
import express from "express"

const app = express()

const products = [
    {
        title : "Something",
        products : "smartphones",
        stock : 1
    },
    {
        title : "Something",
        products : "smartphones",
        stock : 22
    }
]

app.get("/products",(req,res)=>{
    // res.send(req.query.category)
    const {category,id} = req.query
    res.send(`Product is ${category} and model is ${id}`)
})
app.get("/get",(req,res)=>{
    res.json(products)
})

app.listen(8000,(req,res)=>{
    console.log("Server is ready there!!")
})