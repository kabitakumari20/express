var express=require("express")
var app=express()

app.get('/',function(req, res){
    var data1={age:20,name:"manvi",full_name:"mahi"}
    res.send(data1);
})

app.put('/',function(req,res){
    var biodata={name:"kabita",from:"bihar",lives:"navgurukul"}
    res.send(biodata);
})

app.post('/',function(req,res){
    var aboutNav={navgurukul:"org",place:"bangalore"}
    res.send(aboutNav);
})

app.delete('/',function(req,res){
    var bio={name:"manvi",post:"churli",bo:"thakurgang",dis:"kishanganj",po:"galgaliya"}
    res.send(bio)
})
app.listen(7000,()=>{
    console.log("i am on server")
})