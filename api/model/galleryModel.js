var mongoose = require("../database/db");

var GallerySchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required:true
            },
            description:{
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
            metaimages :[],
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
        
         var Gallery = mongoose.model("gallery",GallerySchema);
 
 module.exports = Gallery;
