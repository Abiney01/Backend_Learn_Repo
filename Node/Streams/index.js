import { createReadStream } from "fs";
const data = createReadStream("data.txt","utf-8")
data.on('data',(data)=>{
    console.log(data)
})