const fs = require('fs')

fs.unlink('iife.js',(err, data)=>{
    console.log("value chaged");
})