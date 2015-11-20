
var url = process.argv[2];

// url = "http://powerful-earth-3914.herokuapp.com/plonks";

function callback (response) {

  var collectString = "";

  response.setEncoding("utf8");

  response.on("data", function (data) {
    collectString += data;

   });

  response.on("end", function (data) {
      console.log(collectString.length);
      console.log(collectString);
   });

  response.on("error", function (data) {
     console.log("error")
   });

};

http = require('http');
http.get(url,callback);
