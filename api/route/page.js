var route = require("express").Router();
var page = require('../model/pageModel');
var mtoken = require('../model/tokenModel');

route.post("/page",(req,res)=>{
page.findOneAndUpdate(
    {name:req.body.name},
    req.body,
    {upsert: true, new: true, runValidators: true},
    function(err,doc){
        var responce ={"msg":"Page has been saved."};
        if(err) responce = {"msg":err};
        res.json(responce);
    }
);
});

route.get("/page",async (req,res)=>{
    var pdata = await page.find({},[],{sort:{name:1},skip: parseInt(req.query.start),limit:parseInt(req.query.length)});
    var fulldata = [];
    pdata.forEach((doc)=>{
        var st = doc.status==1?"Active":"Deacvive";
        var d = [doc["_id"],doc.name,doc.description,st,doc.created_at,doc["_id"]];
        fulldata.push(d);
    });
    var resdata={
        "draw": req.query.draw,
        "recordsTotal": fulldata.length,
        "recordsFiltered": fulldata.length,
        "data":fulldata
    }
    res.json(resdata);    
    });


    route.get("/page/:id", async (req,res)=>{
        var mmenu = await page.findOne({_id:req.params.id});
        res.json(mmenu);
        });
    
    route.delete("/page/:id", async (req,res)=>{
        var mod = await page.findOneAndRemove({_id:req.params.id});
        res.json({status:"ok"});
    });

module.exports = route;