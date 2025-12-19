import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import bookRoute from './routes/book.routes.js';

const port = process.env.PORT;
const url = process.env.URL;

const app= express();
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.status(202).send("book mern app");
});

app.use("/books",bookRoute);

mongoose.connect(url)
.then(()=>console.log("mongoose here"))
.catch((error)=>console.log(error));

app.listen(port,()=>console.log("server running"));