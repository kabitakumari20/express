var express=require("express")
var cookiparser=require("cookie-parser")
var app=express()
app.use(cookiparser())
app.get('/name',function(req,res){
    res.cookie("name","kavita");
    res.cookie("nikname","manvi")
    res.cookie("age",20)
    res.cookie("dis","kishanganj")
    res.cookie("block","thakurganj")
    res.cookie("state","bihar")
    res.send("cookies has been set");
})

app.listen(3000,()=>{
    console.log("Running cookies")
})