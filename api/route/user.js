var route = require("express").Router();
var user = require('../model/userModel');
var mtoken = require('../model/tokenModel');

var randomstring = require("randomstring");

function verifyTocken(req,res,next){
    var token = req.headers['authorization'].split(' ');
    var tname = token[0];
    var ttoken = token[1];
    var cdate = new Date();
    if(tname==="DCMS")
    {
        mtoken.findOne({token:ttoken},(err,doc)=>{
            var responce = {"msg":"Token Expire."};
            if(err && !doc) responce = {"msg":"Token not found."};
            var tdate = new Date(doc.datetime);
            if(tdate>cdate)
            {
                next();
            }else{
                res.json(responce);
            }
        });
    }else{
        res.json({"msg":"Invalid Tocken"});
    } 
  };
  

route.post("/login",(req,res)=>{
var con = {
    username:req.body.username,
    password:req.body.password
}
user.findOne(con,(err,doc)=>{
var responce = {msg:"Username password not found"};

if(!err && doc) 
{
    var ltoken = randomstring.generate(32);
    responce = {token:ltoken,"_id":doc['_id']};
    var intoken = {
        userid:doc['_id'],
        token:ltoken,
        datetime:new Date()
    }
    mtoken.findOneAndUpdate({userid:doc['_id']},intoken,{upsert: true, new: true, runValidators: true},function(err,doc){
        
    })
}
res.json(responce); 

});
});

// route.get("/login",(req,res)=>{
// user.create({
//     name:"Deepak Kumar",
//     username:"deepak",
//     email:"deepak.khatri@cyfuture.com",
//     password:"123456",
//     is_login:"0",
//     session_id:"1",
//     login_datetime:new Date(),
//     is_active:1
// }).then((err,doc)=>{
//     res.send(doc);
// });
// });

module.exports = route;