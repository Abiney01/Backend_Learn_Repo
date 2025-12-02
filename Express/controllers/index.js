import express from 'express'
import router from './students.routes.js'

// here using controllers we have separated logic for each routes which is helpful for maintaining a cleaner code for large code base in real time projects

// 1. create express app and use "app.use middleware and place the router "
// 2 . create routes for each http methods
// 3 . separate the logic in controller file

const app = express()

app.use("/students",router)
app.listen(8000,(req,res)=>{
    console.log("Server ready to serve you!...")
})