'use strict';

var url0 = process.argv[2];
var url1 = process.argv[3];
var url2 = process.argv[4];
var buffer0 = '';
var buffer1 = '';
var buffer2 = '';

function printResults (buffer, index) {
    if (index === 0)
      buffer0 = buffer;
    if (index === 1)
      buffer1 = buffer;
    if (index === 2)
      buffer2 = buffer;

    if (buffer0 && buffer1 && buffer2) {
      console.log(buffer0);
      console.log(buffer1);
      console.log(buffer2);
    };
};

var streamRecord0 = {
  buffer: "",

  callback: function (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    streamRecord0.buffer += data;
   });

  response.on("end", function (data) {
    printResults(streamRecord0.buffer,0);
   });

  response.on("error", function (data) {
     console.log("error")
   });
  }
};


var streamRecord1 = {
  buffer: "",

  callback: function (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    streamRecord1.buffer += data;
   });

  response.on("end", function (data) {
    printResults(streamRecord1.buffer,1);
   });

  response.on("error", function (data) {
     console.log("error")
   });
  }
};


var streamRecord2 = {
  buffer: "",

  callback: function (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    streamRecord2.buffer += data;
   });

  response.on("end", function (data) {
    printResults(streamRecord2.buffer,2);
   });

  response.on("error", function (data) {
     console.log("error")
   });
  }
};

var http = require('http');
http.get(url0,streamRecord0.callback);
http.get(url1,streamRecord1.callback);
http.get(url2,streamRecord2.callback);
