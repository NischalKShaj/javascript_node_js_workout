// this is used to delete a file note that there was a file named new.js

const fs = require('fs')

fs.unlink('new.js',(err, data)=>{
    console.log('File is successfully deleted...');
})