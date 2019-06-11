var route = require("express").Router();
var modulea = require('../model/moduleModel');

route.get("/modules", async (req,res)=>{
    var modules = await modulea.find({});
    res.json(modules);
});

route.post("/modules", async (req,res)=>{
    var indata = req.body;
 modulea.findOneAndUpdate({"name":indata.name},indata,{upsert: true, new: true, runValidators: true},function(err,doc){
        
});
res.json(indata);
});

route.get("/modules/:id", async (req,res)=>{
    var mmenu = await modulea.findOne({_id:req.params.id});
    res.json(mmenu);
    });

route.delete("/modules/:id", async (req,res)=>{
    var mod = await modulea.findOneAndRemove({_id:req.params.id});
    res.json({status:"ok"});
});

module.exports = route;