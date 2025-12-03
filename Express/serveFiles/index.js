import express from 'express'
import path from 'path'

const app = express()
// express.static methods allow you to serve static files

app.use(express.static("./public")) //--> this is exactly where you will specify the location of the static files

app.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd(),'./public/index.html'))
})
app.listen(8000,(req,res)=>{
    console.log("Server ready to serve haha!..")
})