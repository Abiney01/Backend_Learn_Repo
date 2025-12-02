import express from "express"

// basic express server
const app = express()
app.get('/',(req,res)=>{
    res.send("App is ready!..")
})
app.listen(8000,()=>{
    console.log("Server is ready ")
})

// multi callbacks

app.get('/home',(req,res,next)=>{
    console.log("Home route is initailized")
    next()
},(req,res)=>{
    res.send("Home is hitted..")
})

// callback arrays

const cb1 = (req,res,next)=>{
    console.log("Call back 1")
    next()
}
const cb2 = (req,res,next)=>{
    console.log("Call back 2")
    next()
}
const cb3 = (req,res,next)=>{
    console.log("Call back 3")
    next()
}

app.get("/cb-arrays",[cb1,cb2,cb3],(req,res)=>{
    res.send("Call back arrays hitted")
})