import express from "express";
import dotenv from "dotenv";

import mongoose from "mongoose";
import { connectDB } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./Routes/booksRoute.js";
import cors from 'cors';
dotenv.config();
const app = express();
app.use (express.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use(cors({
  origin: [process.env.CLIENT_ORIGIN, 'https://bookstoremern-2.onrender.com'],
  credentials: true
}));

app.get('/',(req, res)=>{
  console.log(req)
  return res.status(234).send('Welcome to MERN Stacck');
})
app.use('/books',booksRoute);
 
    app.listen(3000,()=>{
       console.log("App is listening to port");
    })



 