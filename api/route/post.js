var route = require("express").Router();
var post = require('../model/postModel');
var mtoken = require('../model/tokenModel');

route.post("/post",(req,res)=>{
    var tag = req.body.tag.split(",");
    req.body['tag']=tag;
post.findOneAndUpdate(
    {name:req.body.name},
    req.body,
    {upsert: true, new: true, runValidators: true},
    function(err,doc){
        var responce ={"msg":"Post has been saved."};
        if(err) responce = {"msg":err};
        res.json(responce);
    }
);
});

route.get("/post",async (req,res)=>{
    var pdata = await post.find({},[],{sort:{name:1},skip: parseInt(req.query.start),limit:parseInt(req.query.length)});
    var fulldata = [];
    pdata.forEach((doc)=>{
        var st = doc.status==1?"Active":"Deacvive";
        var tag ='';
        if(doc.tag.length>0){
            doc.tag.forEach(t=>{
                tag += '<p class="tag">'+t+'</p> ';
            });
        }
        var d = [doc["_id"],doc.name,doc.description,doc.category,tag,st,doc.created_at,doc["_id"]];
        fulldata.push(d);
    });
    await post.count({},(err,count)=>{
    var resdata={
        "draw": req.query.draw,
        "recordsTotal": count,
        "recordsFiltered": count,
        "data":fulldata
    }
    res.json(resdata);    
});
    });


    route.get("/post/:id", async (req,res)=>{
        var mmenu = await post.findOne({_id:req.params.id});
        res.json(mmenu);
        });
    
    route.delete("/post/:id", async (req,res)=>{
        var mod = await post.findOneAndRemove({_id:req.params.id});
        res.json({status:"ok"});
    });

    route.get("/post/autocomplete/:col", async(req,res)=>{
        var p =  await post.find({},[req.params.col]);
        var resp=[];
        p.forEach(a=>{
            var cat = a[req.params.col];
            if(typeof cat === 'object')
            {
                cat.forEach(c=>{
                    if(resp.indexOf(c)== -1)
                    {
                        resp.push(c);
                    }  
                });
            }else{
            if(resp.indexOf(cat)== -1)
            {
                resp.push(cat);
            }
        }
            
        });
        res.json(resp);
    });

module.exports = route;