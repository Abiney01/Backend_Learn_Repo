const all = (req,res)=>{
    res.send("All students")
}
const create = (req,res)=>{
    res.send("Create Student")
}
const update = (req,res)=>{
    res.send("Update Student")
}
const remove = (req,res)=>{
    res.send("Delete Students")
}

export {all,create,update,remove}