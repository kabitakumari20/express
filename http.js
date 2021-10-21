var http=require("http");

http.createServer(function(req,res){
    console.log("manvi")
    res.end("Hello world \n");

}).listen(8080,()=>{
    console.log("dfghjk")
})


// curl http://localhost:8080 for runing on tarminal
