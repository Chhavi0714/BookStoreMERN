import express from "express";

import mongoose from "mongoose";
import { connectDB } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./Routes/booksRoute.js";
import cors from 'cors';
const app = express();
app.use (express.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/',(req, res)=>{
  console.log(req)
  return res.status(234).send('Welcome to MERN Stacck');
})
app.use('/books',booksRoute);
 
    app.listen(3000,()=>{
       console.log("App is listening to port");
    })


 