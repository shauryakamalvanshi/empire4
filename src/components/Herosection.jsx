"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
    <div className="">
      {/* <div className="relative  pb-[110px] pt-[120px]  lg:pt-[150px] "> */}
      <div className="relative  flex justify-evenly pt-24 max-lg:flex max-lg:flex-col bg-gradient-to-t from-cyan-200 to-cyan-400 max-h-full  ">
        <div className="flex flex-col p-8 max-lg:flex max-lg:justify-center max-lg:items-center">
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl mb-10">
              <span className="pb-2 text-6xl bold leading-none font-bebas-neue max-md:text-5xl max-[466px]:text-4xl"> Turning your </span> 
                <span className="pb-2 text-4xl max-md:text-2xl">ideas into online</span>
                <span className="text-9xl max-md:text-7xl max-sm:text-5xl">realities</span>  
            </h1>
            <p className=" max-w-[480px] text-2xl text-body-color text-slate-600 font-mono text-2xl mb-10 max-sm:text-lg">
                Code,design,launch,we do it all
                </p>
                <div className="flex p-auto p-auto mt-8">
                  <Link href={"/contact"}>
        <div className="px-3 py-2 mr-5 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-lg hover:bg-pink-400 max-sm:text-sm">
          Contact_us
        </div>
        </Link>
        <div className=" px-3 py-2 mr-5 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-lg max-sm:text-sm">
          <span className="flex ">Read_more</span>
        </div>
      </div>
         
            
        </div>
        <div className="flex justify-center  ">
        <div className="p-3 relative z-10 inline-block flex justify-center  lg:pt-0 max-lg:flex max-lg:justify-center max-lg:items-center ">
                  <Image
                  width={500}
                  height={800}
                    src="/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto overflow-hidden"
                  />
            
                </div>
        </div>
    </div>
    </div> 
    </>
  );
};

export default Hero;
