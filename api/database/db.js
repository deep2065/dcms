var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/dcms',{ useNewUrlParser: true });

module.exports=mongoose;
