var mongoose = require("../database/db");

var TockenSchema = new mongoose.Schema(
        {
            userid:{
                type:String,
                required:true
            },

            token:{
                    type:String,
                    required:true
            },
            datetime:{
                    type:Date,
                    required:true
            }
        });
        
         var Token = mongoose.model("Token",TockenSchema);
 
 module.exports = Token;
