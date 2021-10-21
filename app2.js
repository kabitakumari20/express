var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.put('/name',function(req,res){
   res.send("you called only put meathod")
})

app.delete('/name1',function(res,req){
   res.send("i am in bangalore")
})

app.listen(4000,()=>{
    console.log("hey i am manvi on sarver")
});
