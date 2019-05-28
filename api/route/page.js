var route = require("express").Router();
var page = require('../model/pageModel');
var mtoken = require('../model/tokenModel');

route.post("/page",(req,res)=>{
page.findOneAndUpdate(
    {_id:req.body.id},
    req.body,
    {upsert: true, new: true, runValidators: true},
    function(err,doc){
        var responce ={"msg":"Page has been saved."};
        if(err) responce = {"msg":err};
        res.json(responce);
    }
);
});

module.exports = route;