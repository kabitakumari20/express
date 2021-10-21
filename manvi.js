var express=require("express");
var app=express();
var path=require("path");
app.use('/',function(res,req,next){
    console.log("i am frist output")
    next();
})
app.get('/',function(res,req){
    console.log("i am secound output")
})
app.listen(3000,()=>{
    console.log("i am on server")
})