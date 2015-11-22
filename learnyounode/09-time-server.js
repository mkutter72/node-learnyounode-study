'use strict';

var port = process.argv[2];


var net = require('net')
var server = net.createServer(function (socket) {
    // socket handling logic
    var dateTime = new Date();
    var returnStr = dateTime.getFullYear();
    returnStr += '-' + (dateTime.getMonth()+1);
    returnStr += '-' + dateTime.getDate();
    returnStr += ' ' + dateTime.getHours();
    returnStr += ':' + dateTime.getMinutes();
    socket.end(returnStr);
  });


  server.listen(port);
