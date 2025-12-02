// for serving static files all your html and css content must be inside your public folder to work 

import http from "http"
import fs from "fs"
const server = http.createServer((req,res)=>{
    if (req.url ==="/"){
        res.writeHead(200,"ok",{"Content-Type":"text/html"})
        fs.readFile("./public/index.html",(error,data)=>{
            if(error){
                throw error
            }
            res.end(data)
        })
    }
    else if (req.url ==="/about"){
        res.writeHead("200","ok",{"Content-Type":"text/html"})
        fs.readFile("./public/about.html",(error,data)=>{
            if (error) throw error
            res.end(data)
        })
    }
})
server.listen(8000,(req,res)=>{
    console.log("Server Ready!..")
})