var mongoose = require("../database/db");

var PostSchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            },
            category :{
                type:String,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            tag :[],
            status:{
                type:String,
                required:true
            },
            updated_by :{
                type:String
            },
            created_at :{
                type:Date,
                required:true
            },
            updated_at :{
                type:Date,
                required:true
            }
        });
        
         var Post = mongoose.model("post",PostSchema);
 
 module.exports = Post;
