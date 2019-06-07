var mongoose = require("../database/db");

var MenuSchema = new mongoose.Schema(
        {
            url:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            icon :{
                type:String
            },
            hassubmenu :{
                type:Boolean,
                required:true
            },
            permission :{
                type:String,
                required:true
            },
            id:{
                type:String
            },

            submenus :[]
        });
        
         var Menu = mongoose.model("Menu",MenuSchema);
 
 module.exports = Menu;
