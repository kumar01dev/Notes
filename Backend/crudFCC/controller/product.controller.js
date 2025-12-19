//the update controller
import {Product} from '../models/product.model.js';

export const updateRoute = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        
        if(!product) return res.status(404).json({message:"Product not found"});
        
        const updatedProduct = await Product.findById(id);
        res.status(202).json(updatedProduct);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};