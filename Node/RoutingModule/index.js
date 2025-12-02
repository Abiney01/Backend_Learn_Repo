import http from "http"

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html")
    if (req.url ==="/"){
        res.end("<h1>Hello from Home</h1>")
    }
    else if (req.url === "/about"){
        res.end("<h2>Hello from about</h2>")
    }
})

server.listen(8000,()=>{
    console.log("Server Ready!...")
})