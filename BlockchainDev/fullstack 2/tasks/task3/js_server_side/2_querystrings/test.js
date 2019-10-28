var http = require('http');
const hostname = 'localhost';
const port = 3000;
var express = require('express');
var app = express();
var url = require('url');
var dt = require('./myfirstmodule');

//only runs on port 80 with sudo node test.js command, use ports above 1024 if you dont have persmission 
//create a server object:
const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(req.url, true);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;


    res.write("The date and time are currently: " + dt.myDateTime());

    var returnValue = "ok"
    res.end(txt);
}).listen(port);