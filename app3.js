var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);
console.log("asdfyghukjlsdfghjk")

app.listen(3000);

