// writing components to the existing files

const fs = require('fs')

fs.appendFile("new.js",'//this is from the file append.js',(err , data)=>{
    console.log('The content is added to the file append.js');
})