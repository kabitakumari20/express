var http=require("http");

http.createServer((req,res)=>{
    console.log("i am manvi")
    res.end("Hello world \n");

}).listen(8080,()=>{
    console.log("i am running on sarver port number 8080")
})


