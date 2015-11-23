'use strict';


var http = require('http');
var map = require('through2-map');
var url = require('url');
var port = process.argv[2];


var server = http.createServer(function (req, res) {
   var reqInfo = url.parse(req.url,true);
    if (reqInfo.pathname === '/api/parsetime'){
      var dateTime = new Date(reqInfo.query.iso);
      var temp = dateTime.getMonth()+1;
      var retVal = {
          "hour": dateTime.getHours(),
          "minute": dateTime.getMinutes(),
          "second": dateTime.getSeconds()
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(retVal));
    }

    if (reqInfo.pathname === '/api/unixtime'){
      var dateTime = new Date(reqInfo.query.iso);
      var retVal = {
          "unixtime": dateTime.getTime()  // returns millisecs since EPOCH
        };
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(retVal));
    }

    // otherwise report error
    res.writeHead(404);
    res.end();

 });
server.listen(port);
