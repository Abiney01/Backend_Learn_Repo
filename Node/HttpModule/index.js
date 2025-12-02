import http from "http"

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html")
    res.write("<h1>Hello from NodeJs</h1>")
})
server.listen(8000,()=>{
    console.log("Server Ready!...")
})