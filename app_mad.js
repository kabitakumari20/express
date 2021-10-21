var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

app.get('/user/:id', function (req, res, next) {
    res.send('USER')
    next()
})

app.listen(4000,()=>{
    console.log("i am on server")
})
  