var mongoose = require("../database/db");

var ModuleSchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required:true
            },
            modulepermission:{},
        });
        
         var Module = mongoose.model("module",ModuleSchema);
 
 module.exports = Module;
