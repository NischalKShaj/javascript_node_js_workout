// reading file using fs

const fs = require('fs')

fs.readFile("first.js",'utf-8',(err, data)=>{

    console.log(data);
    
})