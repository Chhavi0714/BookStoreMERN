import mongoose from "mongoose"
const BookSchema = mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
     author:{
      type: String,
      required: true,
    }, 
     publishYear:{
      type: Number,
      required: true,
    },
    image: {
    type: String,    
  },
  }, 
    {
      timestamps:true,
    }

  
)


export const Book = mongoose.model('cat',BookSchema)