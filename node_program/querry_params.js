// the program to demonstrate about the querry parametr

const express = require('express')

const app = express()

const qu = function(req, res){
    const id = req.query.id;
    if(id==='20'){
        res.send('the id is' + id)
    } else if(id ==='21'){
        res.send('the id is ' + id)
    } else {
        res.send('invalid')
    }
}

app.use('/',qu)

app.listen(3000,()=>{
    console.log("the server is connected...");
})


