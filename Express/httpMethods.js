import express from "express"
const app = express()
// app.get('/students',(req,res)=>{
//     res.send("Get all students")
// })
// app.post('/students',(req,res)=>{
//     res.send("Create all students")
// })
// app.put('/students',(req,res)=>{
//     res.send("Update all students")
// })
// app.delete('/students',(req,res)=>{
//     res.send("Delete all students")
// })

// refactor
app
    .route('/students')
    .get((req,res)=>res.send("Get all students"))
    .post((req,res)=>res.send("Create all students"))
    .put((req,res)=>res.send("Update all students"))
    .delete((req,res)=>res.send("Delete all students"))
app.listen(8000,(req,res)=>{
    console.log("Server ready bro!...")
})
