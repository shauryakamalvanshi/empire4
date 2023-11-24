import mongoose from "mongoose";
import { NextResponse } from "next/server"
import  Jwt  from "jsonwebtoken";
// import bcyptjs from "bcryptjs";

console.log("Route page")
delete mongoose.connection.models['Users'];
const Users = mongoose.model('Users', new mongoose.Schema({
  email: String,
  password: String,
   // Add this line if message is a String
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

  

async function POST(request) {
  try {
    await connectDB();
    const reqBody = await request.json();
    const { email,password } = reqBody;
    console.log(reqBody);

    // check whether the user exists
    const user = await Users.findOne({ email });
    const user1 = await Users.findOne({ password });

    console.log("User found:", user);
    console.log(user1)
    if (!user||!user1) {
      return NextResponse.json({ error: "user does not exist" }, { status: 400 });
    }
    //create token data
    const tokenData={
      id:user._id,
      email:user.email,
    }
//create token
const token=await Jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1h"})

     const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
    });
    response.cookies.set("token",token,{httpOnly:true,})
    // console.log(response)
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

module.exports = { POST };


