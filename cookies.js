var express=require("express")
var cookiparser=require("cookie-parser")
var app=express()
app.use(cookiparser())
app.get('/name',function(req,res){
    res.cookie("cookies1","kavita");
    res.cookie("cookies2","manvi")
    res.cookie("age",20)
    res.send("cookies has been set");
})

app.listen(3000,()=>{
    console.log("i am on server")
})