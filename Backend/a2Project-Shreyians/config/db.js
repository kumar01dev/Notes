const mongoose = require ('mongoose') //(commonJS module system)
// import mongoose from "mongoose"  (ES module system)

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() =>console.log("Connected to DB"))
    .catch(()=>console.log("error in db.js file"))
};

module.exports = connectToDB;