var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); 
var url = req.url;
 if(url ==='/about'){
    res.write('about us page'); 
    res.end(); 
 }else if(url ==='/contact'){
    res.write('contact us page'); 
    res.end(); 
 }else{
    res.write('Hello World!'); 
    res.end(); 
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); 
});
