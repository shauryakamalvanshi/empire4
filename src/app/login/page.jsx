"use client"
import { useState } from "react"
import React from 'react'
// import { useRouter } from 'next/navigation';
import axios from "axios";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from "react-hot-toast";


const page = () => {
    const router = useRouter();  
    const [user, setUser] =useState({  
        email: "",
        password:"",
      
      })
  

      const checkUser=async(e)=>{
        // e.preventDefault();
        try {
            alert("try")
            const response=await axios.post("/api/users/login",user);
            alert("try 2")
            console.log("Login successfully", response.data);
            router.push("/admin");
       
        } catch (error) {
          toast.error("User not found")
           console.log(error); 
        }

      }
  return (
    <div className='flex items-center justify-center min-h-screen from-purple-600 via-indigo-200 to-indigo-100 bg-gradient-to-br'>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div className='max-w-md mx-auto space-y-3'>
          <h3 className="text-lg font-semibold">Login</h3>
          <div>
            <label className="block py-1">Your email</label>
            <input
              type="email"
              className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              onChange={(e)=>{
                setUser({...user,email:e.target.value})

              }}
            />
            <p className="text-sm mt-2 px-2 hidden text-gray-600">Text helper</p>
          </div>
          <div>
            <label className="block py-1">Password</label>
            <input
              type="password"
              className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              onChange={(e)=>{
                setUser({...user,password:e.target.value})

              }}
            />
          </div>
          <div className="flex gap-3 pt-3 items-center">
            <button
            onClick={checkUser}
              className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300"
            >
              Login
            </button>
 
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
    
  )
}

export default page
