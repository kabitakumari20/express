var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));

app.listen(()=>{
    console.log("i am on sarver")
});