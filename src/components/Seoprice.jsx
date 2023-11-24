import React from 'react'

const Seoprice = (params) => {
  return (
    <>
      <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-2xl text-black font-serif">{params.plan}</h3>
            <p className="mt-2 text-sm text-gray-500">
            {params.cust3}
            </p>
            <p className="order-first text-5xl font-light tracking-tight text-black">
            {params.price3}
            </p>
            <ul role="list" className="  flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3  ">
              <li className=" flex items-center">
                {/* Additional list items */}
                {params.pl1}
              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.pl2}              </li>
              <li className="flex items-center">
              {params.pl3}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl4}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl5}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl6}                {/* Additional list items */}
              </li> 
              <li className="flex items-center">
              {params.pl7}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl8}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl9}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl10}                {/* Additional list items */}
              </li>
              <li className="flex items-center">
              {params.pl11}
                {/* Additional list items */}
              </li>
            </ul>
          
          </section>
    </>

  )
}

export default Seoprice;