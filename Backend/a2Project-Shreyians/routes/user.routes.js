const express = require("express");
const router = express.Router();

const {body,validationResult} = require("express-validator");

const userModel = require("../models/user.models.js");

const bcrypt = require("bcrypt");

const jwt = require ("jsonwebtoken");

// route:"/user/test"
router.get("/test",(req,res)=>{
    res.send("user test route");
});

// route: "/user/register"
router.get("/register",(req,res)=>{
    res.render("register")
});
// router.post('/register',(req,res)=>{
//     console.log(req.body);
//     res.send("form submitted")
// });


        //2:16:22 : To validate the req data => "npm i express-validator"
router.post("/register",
    // Validation middleware
    body('email').trim().isEmail().isLength({min:11}),
    body("username").trim().isLength({min:3}),
    body("password").trim().isLength({min:5}),
    async (req,res) =>{
        const errors = validationResult(req); // used to check if the data is ok or not.

        // console.log(errors); this is not giving the exact errors so used if-loop.
        if(!errors.isEmpty()) {
                // res.send("invalid data here")
            return res.status(400).json({
                errors:errors.array(),
                message:"Invalid Data",
            })
        };    

        // res.send(errors);  

        // 2:25:30 : now npm i mongoose,.env file created.
        // 2:27:30 : // to use 'MONGO_URI' variable from .env in the application, npm i dotenv then const dotenv = require("dotenv") dotenv.config() in app.js . This gives the application access to the variable; . files like .env,node_modules never goes to github so write them in gitignore file . Also import the db.js in app.js .

        // 2:31:00 : now make schema in "user.models.js" .
        
        const {email,username,password} = req.body;

        // 2:38:33 : password can never be in plain text format bcoz if database gets leaked all user details will be compromised so need to encrypt it to hash form using bcrypt => npm i bcrypt .
        const hashPassword = await bcrypt.hash(password,10);
        // 10 =no of rounds the password is hashed. if 100 rounds is used then it will take performance so using 10rounds.

        const newUser = await userModel.create({
            email,
            username,
            password:hashPassword,
        });

        res.json(newUser);

    });


// route: '/user/login' : 2:45:00
router.get("/login",(req,res)=>{
    res.render('login');
})
router.post("/login",
    // Validation middleware
    body('username').trim().isLength({min:3}),
    body("password").trim().isLength({min:5}),
    async (req,res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                error:errors.array(),
                message:'Invalid login data'
            })
        }

        const {username,password} = req.body;
        
        const user = await userModel.findOne({
            username:username
        })
        
        if(!user){
            return res.status(400).json({
                message:'username or password is incorrect'
            })
        }

        const isMatch = await bcrypt.compare(password,user.password); //user.password is the encrypted password.
        if(!isMatch){
            return res.status(400).json({
                message:'username or password is incorrect'
            })
        }
        //message:'username or password is incorrect' is used to for safety,security from hackers so that hacker couldnot find whether username is wrong or password is wrong.


        // 2:50:20 : JWT 
        //if password matches then we generate a web token using JWT ie "npm i jsonwebtoken" .
        //When user is logged in, the system gets to know this using tokens and allows user to go further, so for this we use jwt for that .
        const token = jwt.sign({
            userId:user._id,
            email:user.email,
            username:user.username
        },
            process.env.JWT_SECRET,
        ) //parameters of .sign => 1st object is used to pass some data, 2nd object is for secret key. This method returns a token & the token is send to frontend using res.json method but res.json is not used in production.
        // res.json({
        //     token
        // })

        // for production we use cookies to store tokens ie npm i cookie-parser, its used in app.js :  2:54:12 
        res.cookie('token',token) //cookie name, cookie value
        res.send('logged In');
        // use of cookie: when browser sends requests to server,cookie goes for authentication with the request. we can see cookie in inspect=>application=>cookie
        

        //2:58:00 home page in routes => index.routes.js ,this file has all routes related to home .
    });

module.exports = router;