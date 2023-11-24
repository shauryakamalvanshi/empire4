"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {

  const [captchaDone, setCaptchaDone] = useState(false);
  const [user, setUser] =useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  })
  const re="6LesuhcpAAAAAPGmyPmrkjKLdJmVEPQMGuWqU62c";

  function onChange(){
    // console.log('changes');
    setCaptchaDone(true)
  }
  const isSubmitDisabled =!captchaDone;

  const submit= async(e)=>{
    e.preventDefault();
   try {
   
    if (user.fname.length>0&&user.lname.length>0&&user.email.length>0&&user.phone.length>0&&user.message.length>0&&isSubmitDisabled==false) {
      const response=await axios.post("/api/users/contact",user);
      // console.log("Message send succesfully");
      toast.success('Message sent succesfully')
      setCaptchaDone(false);
      
      setUser({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    }else if (isSubmitDisabled==false) {
      toast.error("plase fill the captcah")
    }
    else{
      toast.error("Please fill the required fild")
    }
   
    
   } catch (error) {
    // console.log("contact form error");
    console.log(error.message);
   }

  }

  return (
    
    
    <div className="isolate bg-red px-6 py-24 sm:py-32 lg:px-8 ">

      <div
        className="absolute inset-x-0 top-[-10rem] "
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10  bg-red-800"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
      </div>
      <form  className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                value={user.fname}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setUser({...user,fname:e.target.value});
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={user.lname}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setUser({...user,lname:e.target.value});
                }}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setUser({...user,email:e.target.value});
                }}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                {/* <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select> */}
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                value={user.phone}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setUser({...user,phone:e.target.value});
                }}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={user.message}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
                onChange={(e) => {
                  setUser({...user,message:e.target.value});
                }}
              />
            </div>
          </div>
          <div className="mr-autoo ">

          <ReCAPTCHA sitekey={re}  onChange={onChange} className=" w-5"  />
      </div>
        </div>
        <div className="mt-5">
          <button
          onClick={submit}
         
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
          <Toaster></Toaster>
 
        </div>
      </form>
    </div>
  );
}
