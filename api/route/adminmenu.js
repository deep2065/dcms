var route = require("express").Router();
var menu = require('../model/menuModel');
var mtoken = require('../model/tokenModel');

route.post("/menus",(req,res)=>{

    req.body.forEach(element => {
        menu.findOneAndUpdate({"url":element.url,"title":element.title},element,{upsert: true, new: true, runValidators: true},function(err,doc){
        console.log(element);
        })
    });
res.json(req.body);
});

route.get("/menus", async (req,res)=>{
var menu = await menu.find();
res.json(menu);
});

module.exports = route;