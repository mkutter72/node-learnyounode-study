'use strict';

var url0 = process.argv[2];
var url1 = process.argv[3];
var url2 = process.argv[4];
var buffer0 = '';
var buffer1 = '';
var buffer2 = '';

var results = ["","",""];

var http = require('http');

var count = 0;

function printResults () {
  ++count;
  if (count === 3) {
      console.log(results[0]);
      console.log(results[1]);
      console.log(results[2]);
    };
};

function streamRecord(url,index) {
  var myIndex = index;

  http.get(url, function (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
      results[myIndex] += data.toString();
     });

    response.on("end", function (data) {
      printResults();
     });

    response.on("error", function (data) {
       console.log("error")
     });
  });
};


streamRecord(url0,0);
streamRecord(url1,1);
streamRecord(url2,2);


