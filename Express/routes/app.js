import express from 'express'
import students from './student.js'

const app = express()

app.use("/student",students)
app.listen(8000,(req,res)=>{
    console.log("Hey buddy server up there!..")
})