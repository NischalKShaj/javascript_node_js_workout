// this shows the working of the path params

const express = require('express')
const app = express()

const pat = (req, res)=>{
    const id = req.params.id
    if(id === '1'){
        res.send('the id is'+id)
    } else {
        res.send('the id is ' + id)
    }
}

app.use('/id/:id',pat)

app.listen(3000,()=>{
    console.log("the server is connected to the server...");
})