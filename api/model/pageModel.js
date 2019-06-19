var mongoose = require("../database/db");

var PageSchema = new mongoose.Schema(
        {
            name :{
                type:String,
                required:true
            },
            content :{
                type:String,
                required:true
            },
            status :{
                type:String,
                required:true
            },
            user_id :{
                type:String,
                required:true
            },
            image :{
                type:String
            },
            template :{
                type:String,
                required:true
            },
            description :{
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
        
         var Page = mongoose.model("Page",PageSchema);
 
 module.exports = Page;
