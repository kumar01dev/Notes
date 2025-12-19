// using mongoose :
    // 1.make schema (schema is the object that has basic properties of a collection. It defines the structure of the data that will be stored in the collection.)
    // 2.make model(it should have the model name & schema name) and then export it.



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // age:Number,
    // gender:{
    //     type: String,
    //     enum: ["male","female"] //enum (enumeration") is a way to define a set of predefined values that a field in a MongoDB document can take. I
    // }
})

const userModel = mongoose.model("user",userSchema); //user is model name, userModel is variable that holds the mongoose model .
module.exports = userModel; // or module.exports.user= userModel .
// with the model of the user, we can perform CRUD operations .