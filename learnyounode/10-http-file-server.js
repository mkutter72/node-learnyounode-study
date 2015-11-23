'use strict';

var port = process.argv[2];
var fileName = process.argv[3];

var fs = require('fs');

var fileStream;
var http = require('http')
var server = http.createServer(function (req, res) {
   // request handling logic...
   var streamObj = fs.createReadStream(fileName);
   streamObj.pipe(res);

 })
server.listen(port)

