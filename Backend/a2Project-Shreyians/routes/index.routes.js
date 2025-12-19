const express = require("express");

const router = express.Router();

router.get("/home",(req,res)=>{
    res.render('home');
})
        // 3:13:00 now we integrate firebase to store the files that we have uploaded. so signin into firebase and generater the new private key and add this file name in .gitignore

        // 3:17:24 config => firebase.config.js. here npm i firebase-admin 

module.exports= router;