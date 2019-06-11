var route = require("express").Router();
var user = require('../model/userModel');
var mtoken = require('../model/tokenModel');
var roles = require("../model/roleModel");

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

route.post("/users",(req,res)=>{
    var indata = req.body;
    user.findOneAndUpdate({email:indata.email},indata,{upsert: true, new: true, runValidators: true},function(err,doc){

    });
    res.json(indata);
});

route.get("/users", async (req,res)=>{
    var indata = await user.find({});
    res.json(indata);
});

route.get("/users/:id", async (req,res)=>{
    var mmenu = await user.findOne({_id:req.params.id});
    res.json(mmenu);
    });

route.delete("/users/:id", async (req,res)=>{
    var mod = await user.findOneAndRemove({_id:req.params.id});
    res.json({status:"ok"});
});



route.get("/chkpermission/:per/:userid",async (req,res)=>{
    var userid = req.params.userid;
    var permi = req.params.per;
    var chk = 0;
    var muser = await user.findOne({"_id":userid});
    var r = await roles.findOne({"_id":muser.role});
    var per = Object.keys(r.roles);
        if(per.indexOf(permi)!== -1){
            chk=1;  
         }
    res.json({status:chk,data:per});
})

module.exports = route; 