var fs = require("fs");
// var host = "127.0.0.1";
var port = 5000;
var express = require("express");

var app = express();
app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname + "/")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("It works!!");
});

app.listen(port);