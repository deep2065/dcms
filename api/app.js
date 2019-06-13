var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

var app = express();
var http = require("http").createServer(app);
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,autorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(express.static(__dirname+"/files"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

fs.readdir('./route',function(err,f){
for(k in f){
  app.use("/api",require('./route/'+f[k]));
}
});

http.listen(4201,()=>{
console.log("Api Server started.");
})