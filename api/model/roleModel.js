var mongoose = require("../database/db");

var RoleSchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required:true
            },
            roles:{},
        });
        
         var Role = mongoose.model("role",RoleSchema);
 
 module.exports = Role;
