// console.log("hii");
//1.  to run this without browser but with nodeJs then in the terminal type "node <filename>" .

// 2.  npm init -y for default details, node init for custom details for the package.json file.

// using the catme package = npm i cat-me in terminal.
// const catMe=require('cat-me'); //the require keyword brings all the code related to catme in this folder
// console.log(catMe()); 

// the most important file is package.json as it has all dependencies name. If package-lock.json, node modules gets deleted then npm install will install them & the dependencies again. 






                // (19:40 )
// const http = require('http'); //  The require function is used to load modules, which can be either built-in Node.js modules (like http, fs, etc.), local files, or third-party packages installed via npm .

// const server=http.createServer((req,res) =>{
//     res.write("the req message");
//     console.log(req.url);  //write something after localhost:3000 then enter we will see it in the terminal, if no msg is written we see "/" in terminal.
//     res.end("hello world");
// }); 
// this will just create a server (where req= request, res = response).

// server.listen(3000); //starts the server, 3000 is the port.  After node filename in terminal, go to localhost:3000 we see hello world there. 






                // Using route (28:00)
// const http= require("http");
// const server= http.createServer((req,res)=> {
//     // if(req.url === "/") {
//         res.write('default msg');
//         res.end("the home page");
//         console.log("req.url is:",req.url);
//     // }
//     if(req.url=== "/about")   res.end('about page');
//     if(req.url === "/profile")   res.end("profile page");
// })
// server.listen(3000);
// npx nodemon filename in terminal restarts the app so that no need to close teminal and run node filename again & again. if npx nodemon filename shows error then npm install -g nodemon, the nodemon will start running. to quit nodemon "ctrl + c".
// this method is not used in production so use express js now 







                // Using express ( 33:00)
// using express to create routes and servers.
// npm i express
// const express = require("express");
// const app= express();
// app.get("/", (req,res)=>{ //get is tool of express that creates  '/' route.
//     res.send('the response'); 
// })
// app.get("/contact",(req,res)=>{
//     res.send("the contact page");
// })
// app.get("/profile",(req,res)=>{
//     res.send("the profile page");
// })
// app.get('/skills',(req,res)=>{
//     res.send("the skills page");
// })
// app.listen(3000);// npx nodemon filename
// express is made on http but it acts as a framework.
// res.send() is a more convenient method that automatically sets the HTTP status code to 200 (OK) and sends the response body. It can also automatically set the Content-Type header based on the type of data being sent.
// res.end(), on the other hand, simply ends the response process and sends the response body. It does not automatically set the HTTP status






                // Using express to render html on frontend ( 40:34)
// for this we have use a templating or view engines like Ejs/pug/handlebars/etc.
// npm i ejs in terminal (ejs = embedded js)
// const express = require ("express");
// const app = express();
// app.set("view engine",'ejs'); //now make a folder called views and a file index.ejs . This index.ejs file has index.html content.

// app.use((req,res,next) => {
//     console.log(' middleware used here'); // the middleware
//     // res.send("the response"); // we dont pass res in middleware, only pass when there is error or 
//     const a=2; // custom middleware
//     const b=3;
//     console.log(a+b);
//     return next();
// })
// app.get("/",(req,res)=>{
//     res.render("index"); //to see the ejs file
// })
// app.get("/profile",(req,res)=>{
//     res.send("profile");
// })
// app.listen(3000);
// 45:00 -  before going to the / route, the req should go through a fn ,this is called middleware. Its also used to pass string/number/data.
//  Middlewares are of 3 types:
        // a. builtin (by expressjs ) ,
        // b. custom (used above ) ,
        // c. third party - to use them, we install them from npmjs.com. We are using morgan its a logger(a 3rd party middleware).
        // const express = require("express");
        // const morgan = require ("morgan");
        // const app=express();

        // app.use(morgan("dev"));

        // app.set('view engine',"ejs");

        // app.use((req,res,next) => {
        //     console.log("this is custom middleware");
        //     console.log(5);
        //     return next();
        // });

        // app.get("/",(req,res)=>{
        //     res.render("index");
        // });
        // app.get('/profile',(req,res) => {
        //     res.send("profile");
        // });
        // app.get('/contact',(req,res) => {
        //     res.send("contact");
        // });

        // app.listen(3000);
        // morgan shows the type of req method, route, res code, time taken by the req to send res to the server. ie GET / 304 163.093 ms - -, it shows these details for all routes.

        // setting up morgan for particular route :
                // const express = require("express");
                // const app = express();
                // const morgan = require ("morgan");
                // app.use(morgan("dev"));
                 
                // app.set('view engine',"ejs");

                // app.get("/",   
                //         (req,res,next) =>{
                //                 const a = 3;
                //                 const b = 4;
                //                 console.log(a+b);
                //                 next();
                //         },
                //         (req,res)=>{
                //                 res.render("index");
                // });

                // app.get('/profile',(req,res) => res.send("profile"));
                // app.get('/contact',(req,res) => res.send("contact"));
                // app.listen(3000);







                // Built in controller & Form controler ( 57:35)
// we use form control to use the data on the server entered by the user on frontend.
        // const express = require("express");
        // const app = express();
        // const morgan = require ("morgan");
        // app.use(morgan("dev"));
                        
        // app.set('view engine',"ejs");

        // app.use(express.json());  // this is builtin middleware 
        // app.use(express.urlencoded({extended: true}));

        // app.get("/",(req,res,next) =>{
        //           console.log("using particular middleware")
        //           next();
        //         },
        //         (req,res)=>{
        //                 res.render("index");
        //         });
        // // app.get("/get-form-data",(req,res) =>{
        // app.post("/get-form-data",(req,res) =>{
        //         // console.log(req.query); //req.query is used here for learning but not used in production.
        //         console.log(req.body);
        //         res.send("data recieved");
        // });

        // app.listen(3000);
        //  To see the user details in the terminal, we need to use name attribute in form tag. 
        // The app.get gives all details in the terminal & url which may be ok but seeing password in url is not okk, so we use post method ie app.post to hide details from the url.
        // post used to send data from frontend to server. But in post, data doesnt come to req.query so have to use "req.body".
        // When a form is submitted it hits the 'get' route method by default but for using any other method (ie post method) write method="post" in the ejs file for the form tag. 
        // By using post, we see undefined in terminal bcoz expressjs cant read data from req.body so we have to use builtin middlewares ie :-
                // app.use(express.json());
                // app.use(express.urlencoded({extended: true}));







                // how to link css to frontend ( 1:10:05)
        // const express = require("express");
        // const app = express();
        // const morgan = require ("morgan");
        // app.use(morgan("dev"));
        // app.set('view engine',"ejs");

        // app.use(express.json()); 
        // app.use(express.urlencoded({extended: true}));
        // app.use(express.static('public')); // folder added here
        
        // app.get("/",   
        //         (req,res,next) =>{
        //                 console.log("using particular middleware")
        //                 next();
        //         },
        //         (req,res)=>{
        //                 res.render("index");
        //         });
        // app.post("/get-form-data",(req,res) =>{
        //         console.log(req.body);
        //         res.send("data recieved");
        // });

        // app.listen(3000);
// any file going from backend to frontend those files are called 'static files' =>
        // 1 static files : files that users can access without any authentication/restriction at frontend by requesting to the server.
        // 2 make a folder 'public', make files to has to go to the frontend .
        // 3 app.use(express.static("the folder name")) [its a builtin middleware] & then use link tag for css file,script tag for js file in index.ejs file .









              // MONGO DB (1:15:23)
// SQL is table or relational based database eg postgres,mysql 
// MongoDB is a NoSQL document based database management system.
// It has strong support for aggregation pipelines.
// It works on BSON format so its best compatibility is with node applications.
// mongoDB has collections which has lots of documents init,  eg: collection of posts/blogs/etc.

// 1. npm i mongoose.
// 2. make folder 'models',init file user.js , in user.js make 
// 3. make schema, model and import them here.
// 3. make a folder 'config',inside it a file db.js  to connect to the database.
// 4. import db.js & user.js here.

const connection = require("./config/db");
const userModel = require("./models/user");

const express = require("express");
const app = express();
const morgan = require ("morgan");
app.use(morgan("dev"));
app.set('view engine',"ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/",(req,res,next)=>{
        console.log("using particular middleware");
        next();
},(req,res)=>{
        res.render("index");
});
app.post("/get-form-data",(req,res)=>{
        console.log(req.body);
        res.send("data recieved");
});
// If mongodb is not running/started, connection in mongodb compass is not connecting then Win + R, then services.msc ,now look for MongoDB in the list of services. If it’s not running, right-click it and select Start to start mongodb
// now we seeIn "men" there will be 'users' collection,the users is empty as we didnot create any user in it. ctrl + r = refresh the mongodb compass.



                //  create user in the users collection of mongodbcompass (1:32:00) => 
                        // (a). make '/register' route with get n post and register.ejs file in views
                        // (b). in register post method, use async + take the parameters like username,pass,email then use 'userModel.create'.
                        // (c). in mongocompass, the id= unique identification string, v is for handling versioning of document.

app.get("/register",(req,res)=>{
        res.render("register");
});
app.post("/register",async (req,res)=>{
        const {username,email,password} = req.body;
                        
        const userData = await userModel.create({  //create method of crud
                username:username,
                email:email,
                password:password
        });
        console.log(req.body);
        res.send(userData);
});

app.get("/get-users",(req,res)=>{  //read method of crud
        userModel.find(
        //         {
        //         username:'ks'
        // }
)
        .then((users)=>{
                res.send(users)
                console.log(users)})
});
app.get("/update-user",async (req,res)=>{  //update method of crud
        await userModel.findOneAndUpdate({
                username:'ks'
        },
        {
                email:"ks@ks.com"
        })

        res.send("user updated");
});

app.get("/delete-user",async (req,res)=>{  //delete method of crud
        await userModel.findOneAndDelete({
                username:'ks'
        })

        res.send("user deleted");
});

app.listen(3000);



                // (CRUD opeartions - 1:44:50 )
                        // (a). create is done in "/get-users" route [Async is must here] .
                        // (b). for read'/get-users' route with userModel.find(). the find() method can have conditions eg:above one, if no condition matched it gives []. There is findOne() method too that gives 1res only (if findOne gets multiple data it gives the first data as res, if no condition matches it gives 'null').
                        // (c). for create "/update-user" route with userModel.findOneAndUpdate() it finds username & updates email [Async is must here] .
                        // (d). for delete "/delete-user" route with userModel.findOneAndDelete() , it deletes the date with username:'ks' [Async is must here] .




// 1:57:00 project Drive in a2 file //