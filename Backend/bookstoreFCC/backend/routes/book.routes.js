import express from 'express';
import { Book } from '../model/book.model.js';

const router = express.Router();

router.post("/create", async (req,res)=>{     //create
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishDate
        )   {
            return res.status(404).send({message:"send all required fields: title, author,publishDate"})
        }

        const newBook = {
            title: req.body.title,
            author:req.body.author,
            publishDate:req.body.publishDate
        }

        const book = await Book.create(newBook);
        return res.status(202).send(book);
    }
    catch(error){
        console.log(error.message);
        res.status(404).send({message:error.message});
    }
});

router.get("/read",async (req,res)=>{      //read all
    try{
        const books =await Book.find({})
        res.status(202).json({
            count:books.length,
            data:books
        });
    }
    catch(error){
        console.log(error);
        res.status(404).send({message:error.message});
    }
});

router.get("/read/:id", async (request, response) => { //read anyone by id
    try {
        const { id } = request.params;
  
        const book = await Book.findById(id);
  
        return response.status(200).json(book);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
  });

router.put("/update/:id",async(req,res)=>{      //update
    try{    
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishDate
        )   {
            return res.status(404).send({message:"send all required fields: title, author,publishDate"})
        }

        const {id}= req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result) {
            return res.status(400).json({message:error.message});
        }

        return res.status(202).send({message:"successful update",result});
    }
    catch(error){
        console.log(error);
        res.status(404).send({message:error.message});
    }
});

router.delete("/delete/:id",async(req,res)=>{      //delete
    try{    
        const {id}= req.params;
        const result = await Book.findByIdAndDelete(id,req.body);

        if(!result) {
            return res.status(404).json({message:error.message});
        }

        return res.status(202).send({message:"successful deleted",result});
    }
    catch(error){
        console.log(error);
        res.status(404).send({message:error.message});
    }
});

export default router;