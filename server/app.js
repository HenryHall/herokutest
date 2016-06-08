var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(process.env.PORT || 3000);

app.get('/', function (req, res){
  res.write("Hello World, its me!");
});
