import React from "react";
import Phases from "@/components/Phases";
import Image from "next/image";
import PricingCard from "@/components/Pricecard";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Website Development</h1>
      </div>
      <div className="flex mt-10 max-lg:flex-col max-lg:items-center">
        <div className=" w-1/2 rounded-lg max-lg:w-11/12 ">
          <Image src="/web.png" width={1000} height={1000} alt="" className="max-lg:w-full rounded-lg h-96 w-full mt-20 ml-auto mr-auto" />
        </div>
        <div className="w-1/2 mt-4">
          <Phases
            title1="Strategy"
            title2="Design and Specification "
            title3=" production and desired result "
            title4="Testing and Maintenance "
            title5=" Registration with ISP"
            title6=" Launch/deploy "
          ></Phases>{" "}
        </div>
      </div>

      <div className="flex items-center justify-center m-10">
        <h1 className="text-6xl text-black">Our Pricing</h1>
      </div>
      <PricingCard
       plan1="Basic"
       plan2="Silver"
       plan3="Gold"
        cust1="Ideal for a small team."
        cust2="Ideal for individual developers."
        cust3="For large bussiness"
        price1="$2k – $5k"
        price2=" $5k – $10k"
        price3="$10,000+"
        bl1="Up to 10 pages"
        bl2="Basic UI/UX design"
        bl3="Email support"
        bl4="Responsive design for mobile devices"
        bl5="Basic hosting plan"
        bl6="Domain registration (1 year)"
        bl7="Quarterly updates and maintenance"
        ml1="Up to 20 pages"
        ml2="Responsive design for mobile devices"
        ml3="Advanced UI/UX design"
        ml4="Tailored CMS development"
        ml5="Premium hosting plan"
        ml6="Domain registration (2 years)"
        ml7="Dedicated account manager"
        ml8="API integrations (up to 5)"
        ml9="Advanced analytics setup"
        ml10="Infrastructure planning for scalability"
        ml11="Training sessions for client's team on website management"
        pl1="Unlimited pages"
        pl2="Responsive design for mobile devices"
        pl3="Highly advanced UI/UX design"
        pl4="Fully customized CMS development"
        pl5="Enterprise-level hosting plan"
        pl6="Premium SSL certificate"
        pl7="Domain registration (3 years)"
        pl8="Continuous advanced security monitoring"
        pl9="Custom firewall setup"
        pl10="Comprehensive analytics and reporting"
        pl11="Advanced infrastructure planning for optimal performance and growth"
      ></PricingCard>
    </>
  );
}