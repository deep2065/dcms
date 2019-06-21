var route = require("express").Router();
var gallery = require('../model/galleryModel');
var mtoken = require('../model/tokenModel');

route.post("/gallery",(req,res)=>{
    var tag = req.body.tag.split(",");
    req.body['tag']=tag;
gallery.findOneAndUpdate(
    {name:req.body.name},
    req.body,
    {upsert: true, new: true, runValidators: true},
    function(err,doc){
        var responce ={"msg":"Gallery has been saved."};
        if(err) responce = {"msg":err};
        res.json(responce);
    }
);
});

route.get("/gallery",async (req,res)=>{
    var pdata = await gallery.find({},[],{sort:{name:1},skip: parseInt(req.query.start),limit:parseInt(req.query.length)});
    var fulldata = [];
    pdata.forEach((doc)=>{
        if(doc.tag.length>0){
            doc.tag.forEach(t=>{
                tag += '<p class="tag">'+t+'</p> ';
            });
        }
        var d = [doc["_id"],doc.image,doc.name,doc.category,doc.description,st,doc.created_at,doc["_id"]];
        fulldata.push(d);
    });
    await gallery.count({},(err,count)=>{
    var resdata={
        "draw": req.query.draw,
        "recordsTotal": count,
        "recordsFiltered": count,
        "data":fulldata
    }
    res.json(resdata);    
});
    });


    route.get("/gallery/:id", async (req,res)=>{
        var mmenu = await gallery.findOne({_id:req.params.id});
        res.json(mmenu);
        });
    
    route.delete("/gallery/:id", async (req,res)=>{
        var mod = await gallery.findOneAndRemove({_id:req.params.id});
        res.json({status:"ok"});
    });
module.exports = route;