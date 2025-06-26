import express from "express";
import { Book } from "../models/bookModel.js";
import multer from 'multer';
import path from 'path';
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage: storage });
router.post('/',upload.single('image'), async(req, res)=>{
  try {
    if(
      !req.body.title||
      !req.body.author||
      !req.body.publishYear
    ){
      return res.status(400).send({
        message:'Send all required feilds'
      })
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    };
    const book = await Book.create(newBook);
     return res.status(201).json(book);
    
  } catch (error) {
     console.log(error.message);
     res.status(500).send({message: error.message});
  }
 })
 // route to get book
 router.get('/',async(req,res)=>{
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
  }
 })
 // route to get book id 
  router.get('/:id',async(req,res)=>{
  try {
    const {id} = req.params;
    const book = await Book.findById(id);
    return res.status(200).json({book});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
  }
 })
 // route to get and update book
  router.put('/:id',async(req,res)=>{
         try {
    if(
      !req.body.title||
      !req.body.author||
      !req.body.publishYear
    ){
      return res.status(400).send({
        message:'Send all required feilds'
      })
    }
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id,req.body);
    if(!result){
      return res.status(404).json({message:'Book Not Found'});
    }
    console.log(req.body);
    return res.status(200).json({message:'Suceesfully'});
  }
  catch (error) {
     console.log(error.message);
     res.status(500).send({message: error.message});
  }
})
// route to delete book
router.delete('/:id',async(req,res)=>{
         try {
    const {id} = req.params;
    const result = await Book.findByIdAndDelete(id,req.body);
    if(!result){
      return res.status(404).json({message:'Book Not Found'});
    }
    return res.status(200).json({message:'Suceesfully'});
  }
  catch (error) {
     console.log(error.message);
     res.status(500).send({message: error.message});
  }
})


export default router;