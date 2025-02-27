import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI); 
      console.log("🔥 MongoDB Connected Successfully!");
    }
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); 
  }
};

export default connectDB;
