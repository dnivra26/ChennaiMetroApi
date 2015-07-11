var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js')


var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(config.port, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("listening on port 3000");
  }
})
