// db.js
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/booksstore"; // for local MongoDB
// Or use your MongoDB Atlas URI instead

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop server if DB fails to connect
  }
};
