const morgan = require('morgan') // third party middleware


// router middleware
app.get('/',(req, res)=>{
    res.render('login')
})

// error handling middleware

app.use((err, req, res, next)=>{
    res.status(500).send("Error")
})

// application middleware

app.use(session({
    secret : "kerjfdjf",
    savauninitiased : true,
    resave : true
}))