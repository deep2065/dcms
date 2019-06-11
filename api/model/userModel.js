var mongoose = require("../database/db");

var UserSchema = new mongoose.Schema(
        {
            name:{
                type:String,
                required:true
            },

            username:{
                    type:String,
                    required:true
            },
            email:{
                    type:String,
                    required:true
            },
            password:{
                    type:String,
                    required:true
            },
            role:{
                    type:String,
                    required:true
            },
            is_login:{
                    type:String,
                    required:true
            },
            session_id:{
                    type:String,
                    required:true
            },
            login_datetime:{
                    type:Date,
                    required:true
            },
            is_active:{
                    type:Boolean,
                    required:true
            }
        });
        
         var User = mongoose.model("User",UserSchema);
 
 module.exports = User;
