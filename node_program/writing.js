// writing file using fs module

const fs = require('fs')

fs.writeFile('new.js','console.log("testing")',(err, data)=>{
    console.log("components written in js file..");
})