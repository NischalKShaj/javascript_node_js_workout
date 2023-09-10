// first program in js createserver is used to create the server in js


const http = require('http')
 
http.createServer((req, res)=>{
    res.write("Hello....")
    res.end()
}).listen(3000,()=>{
    console.log("Server is connected to the port 3000");
})