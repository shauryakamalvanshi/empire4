import React from "react";
import Image from "next/image";

const Ourplate = () => {
  return (
    <>
        <div className=" mt-10 m-auto bg-black text-white rounded-lg flex h-60 justify-evenly items-center w-11/12">
            <h1 className=" font-bold text-3xl">Plateforms</h1>
            <hr className="w-20 transform rotate-90"/>
            <Image src="/android.png" width={1000} height={1000} alt="" className="w-20" />
            <Image src="/apple.png" width={1000} height={1000} alt="" className="w-20"/>
        </div>
    </>
  );
};

export default Ourplate;