//middlewares are function which is used as an intermediate before triggering any function or task

import express from 'express'
import userCredentials from './logs.js'

const app = express()

// app.get("/user-info",userCredentials,(req,res)=>{
//     res.send("<h1>User info is logged!!</h1>")
// }) --> this is valid but if we want to check for each routes then the below one is efficient

app.use(userCredentials) // --> recommended approach 

app.get("/user-info",(req,res)=>{
    res.send("<h1>User info is logged!!</h1>")
})
app.get("/home-page",(req,res)=>{
    res.send("Welcome to home page")
})

app.listen(8000,(req,res)=>{
    console.log("Server up there!..")
})