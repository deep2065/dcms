var route = require("express").Router();
var roles = require('../model/roleModel');

route.get("/roles", async (req,res)=>{
    var modules = await roles.find({});
    res.json(modules);
});

route.post("/roles", async (req,res)=>{
    var indata = req.body;
    roles.findOneAndUpdate({"name":indata.name},indata,{upsert: true, new: true, runValidators: true},function(err,doc){
        
});
res.json(indata);
});

route.get("/roles/:id", async (req,res)=>{
    var mmenu = await roles.findOne({_id:req.params.id});
    res.json(mmenu);
    });

route.delete("/roles/:id", async (req,res)=>{
    var mod = await roles.findOneAndRemove({_id:req.params.id});
    res.json({status:"ok"});
});

module.exports = route;