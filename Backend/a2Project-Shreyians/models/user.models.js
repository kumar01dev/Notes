        // 2:31:00 

const mongoose = require("mongoose");

// this is production syntax.
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength: [3,"username must have atleast 3 characters"] //the string appears as msg if minLength is not there. 
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength: [11,"username must have atleast 11 characters"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength: [5,"username must have atleast 5 characters"]
    }
});

const user = mongoose.model('user',userSchema);

module.exports = user;