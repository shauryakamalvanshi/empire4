"use client"
import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown"
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white 0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <div className="flex items-center">
              <div className="h-8 mr-3 text-black text-xl font-bold " alt="Flowbite Logo">
              The Empire Technologies
                {/* <Image
                src={"/icon.png"}
                height={200}
                width={1000}
                alt="ico"
                className="h-25 w-60 mb-100"
                
                ></Image> */}
               
              </div>
            </div>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:text-gray-500"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
           
              <Link href="/">
                <div className="block py-2 pl-3 pr-4 rounded bg-white hover:bg-slate-200 text-[#3e8da8] text-lg" aria-current="page">Home</div>
              </Link>
              <Link href="/about">
                <div className="block py-2 pl-3 pr-4 text-[#3e8da8] rounded bg-white hover:bg-slate-200 text-lg" aria-current="page">About</div>
              </Link>
              <Dropdown/>
              <Link href="/contact">
                <div className="block py-2 pl-3 pr-4 text-[#3e8da8] rounded bg-white hover:bg-slate-200 text-lg">Contact</div>
              </Link>
                 {/* <div className="block py-2 pl-3 pr-4 text-gray-300 rounded bg-white hover:text-white">{}</div> */}
                
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;