var route = require("express").Router();
var menu = require('../model/menuModel');
var mtoken = require('../model/tokenModel');

route.post("/menus",(req,res)=>{

    req.body.forEach(async element => {
        var indata = element;
        if(element.menutype=="1")
        {
            var mmenu = await menu.findOne({_id:element.menuid});
            mmenu.hassubmenu=true;
            mmenu.url="#";
            mmenu.submenus.length=0;
            req.body.forEach(async element2 => {
                delete element2.menuid;
                delete element2.menutype;
                delete element2.submenus;
                mmenu.submenus.push(element2);
            });
            indata = mmenu;
             menu.findOneAndUpdate({"id":indata.id},indata,{upsert: true, new: true, runValidators: true},function(err,doc){
        return;
         })
        }else{
         menu.findOneAndUpdate({"id":indata.id},indata,{upsert: true, new: true, runValidators: true},function(err,doc){
        
         })
        }
    });
res.json(req.body);
});

route.get("/menus", async (req,res)=>{
var mmenu = await menu.find({});
res.json(mmenu);
});

route.get("/menus/:id", async (req,res)=>{
var mmenu = await menu.findOne({_id:req.params.id});
res.json(mmenu);
});

route.delete("/menus/:id", async (req,res)=>{
    var mmenu = await menu.findOneAndRemove({_id:req.params.id});
    res.json({status:"ok"});
    });

module.exports = route;