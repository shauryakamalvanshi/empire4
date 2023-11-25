import mongoose from "mongoose";
import { NextResponse } from "next/server";

console.log("Route page")
delete mongoose.connection.models['Contact'];
const Contact = mongoose.model('Contact', new mongoose.Schema({
  // updated schema fields
  fname: String,
  lname:String,
  phone:String,
  email: String,
  message: String,
}));

// Function to connect to MongoDB (make sure you have the correct MongoDB URI)
async function connectDB() {
  try {
    console.log("try")
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
// ***************get request******
export async function GET(){
    try {
      await mongoose.connect(process.env.MONGO_URI);
      const topics=await Contact.find();
      return NextResponse.json({topics});
    } catch (error) {
      console.log(error);
    } 
  
  }