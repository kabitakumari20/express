var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));
app.get('/',function(res,req){
    res.send('i am kabita in bangalore')
})

app.listen(3000,()=>{
    console.log("running this code")
});