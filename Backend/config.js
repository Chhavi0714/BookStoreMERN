import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables locally

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined in environment variables");
    process.exit(1);
  }

  console.log("📡 Connecting to Mongo URI:", MONGODB_URI); // Debug log

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};
