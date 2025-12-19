import express, { Router } from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import {Product} from './models/product.model.js'; 

const app = express();
app.use(express.json());

app.get("/", (req,res)=>    res.send("the page"));

app.listen(1000, ()=>console.log('server connected at port 1000'));
        
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongoose connected"))
.catch((error)=>console.log(error));


app.get("/products",(req,res)=>res.send("products page here"));


app.post("/api/product", async (req,res)=>{     //create
    try{
        const product =await Product.create(req.body);
        res.status(202).json(product);
        res.send('products page');
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
});

app.get("/api/products",async (req,res)=>{   //read all
    try{
        const showProduct = await Product.find({});
        res.status(202).json(showProduct);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});


// app.get("/api/products",(req,res)=>{     //read each
//     try{
//         Product.find({
//             "_id":"678d3ce8ce499891d8745293"
//         })
//         .then((each)=>res.send(each))
//         .catch((error)=>res.send(error))
//     }
//     catch(error){
//         res.status(404).json({message:error.message});
//     }
// });
            //or 
app.get("/api/products/:id",async (req,res)=>{     //read each
    try{
        const {id} =req.params; //req.params gets the id from url.
        const eachProduct= await Product.findById(id);
        res.status(202).json(eachProduct);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

app.put("/api/products/:id", async (req,res)=>{    //update
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product) return res.status(404).json({message:"Product not found"});

        const updatedProduct = await Product.findById(id);
        res.status(202).json(updatedProduct);
    }catch(error){
        res.status(404).json({message:error.message});
    }
});

app.delete("/api/products/:id",async (req,res)=>{     //delete
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) return res.status(404).json({message:"Product not found"});

        res.status(202).json({message:"Product deleted successfully"});
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
})



//using product.routes file
import {routes} from './routes/product.routes.js';
app.use("/allproducts",routes);