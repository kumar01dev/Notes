import express from 'express';
import {Product} from '../models/product.model.js';

export const routes = express.Router();

//for all products
routes.get("/", async(req,res)=>{
    try{
        const product = await Product.find({});
        res.status(202).json(product);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

//for each product  
routes.get("/:id", async(req,res)=>{
    try{
        const {id} =req.params; //req.params gets the id from url.
        const eachProduct= await Product.findById(id);
        res.status(202).json(eachProduct);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});


//for update product
import { updateRoute } from '../controller/product.controller.js';
routes.put("/:id",updateRoute)