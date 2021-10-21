var express = require('express');
var app = express();
var data={"id":"kabita","age":20,"addres":"bihar"}
app.get('/things/:name/:id', function(req, res) {
   res.send(data);
});
app.listen(3000,()=>{
    console.log("i am here on server")
});
