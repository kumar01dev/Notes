// npm init -y,
// npm i express ejs 
// package.json =>we use 'start':"npm nodemon app.js" so for npx nodemon <filename> => npm start in terminal.

// FOR authentication, we are using JWT/json web token (2:01:00) .

// user routes ->user.routes.js -> ,
// home routes ->index.routes.js 



const express = require("express");
const app = express();

const userRouter = require("./routes/user.routes.js");

const dotenv = require("dotenv"); 
dotenv.config();  //this dotenv method gives access to MONGO_URI variable. 
const connectToDB = require("./config/db.js");
connectToDB();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const indexRouter = require("./routes/index.routes.js")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use("/user",userRouter); 

app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log("server running on port3000");
});