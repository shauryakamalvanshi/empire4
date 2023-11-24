import React from 'react';

const PricingCard = (params) => {
  return (
    <section aria-labelledby="pricing-one" id="pricing-one">
      <div className="relative items-center w-full px-8 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 -mx-4 gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-3 xl:gap-x-4 lg:-mx-8">
          <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-2xl text-black font-serif">{params.plan1}</h3>
            <p className="mt-2 text-sm text-gray-500">
            {params.cust1}

            </p>
            <p className="order-first text-5xl font-light tracking-tight text-black">
             {params.price1}
            </p>
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4"> 
                
                   
                 </span>
              </li>
             
              
                    <li>{params.bl1}</li>
                    <li>{params.bl2}</li>
                    <li>{params.bl3}</li>
                    <li>{params.bl4}</li>
                    <li>{params.bl5}</li>
                    <li>{params.bl6}</li>
                    <li>{params.bl7}</li>
                
            </ul>
          
          </section>

          <section className="flex flex-col order-first px-6 py-8 bg-black rounded-3xl sm:px-8 lg:order-none">
            <h3 className="mt-5 text-2xl text-white font-serif">{params.plan2}</h3>
            <p className="mt-2 text-sm text-gray-100">
            {params.cust2}
            </p>
            <p className="order-first text-5xl font-light tracking-tight text-white">
            {params.price2}
            </p>
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3 list-disc pl-5">            
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml1}
              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml2}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml3}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml4}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml5}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml6}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml7}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml8}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml9}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml10}              </li>
              <li className="flex items-center">
                {/* Additional list items */}
                {params.ml11}        
                      </li>
            </ul>
           
          </section>

          <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-2xl text-black font-serif">{params.plan3}</h3>
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
       
        </div>
      </div>
    </section>
  );
};

export default PricingCard;