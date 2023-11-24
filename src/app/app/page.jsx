import React from "react";
import Phases from "@/components/phases";
// import styles from "@/styles/web.module.css";
import PricingCard from "@/components/Pricecard";
import Ourplate from "@/components/Ourplate";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">App development</h1>
      </div>
      <div className="flex mt-10 max-lg:flex-col max-lg:items-center">
        <div className="w-1/2 rounded-lg max-lg:w-11/12 ">
          <Image src="/application.png" width={1000} height={100} alt="" className="max-lg:w-full rounded-lg h-full w-full" />
        </div>
        <div className="w-1/2 mt-4">
          <Phases
            title1="Website Audit"
            title2="Keyword Analysis"
            title3="Website Analysis"
            title4="Backlink Analysis"
            title5="Content Optimization"
            title6="Directories and Citations"
          ></Phases>
        </div>
      </div>
      <Ourplate></Ourplate>
      <div className="flex items-center justify-center m-10">
        <h1 className="text-6xl text-black">Our Pricing</h1>
      </div>
      <PricingCard
       plan1="Basic"
       plan2="Silver"
       plan3="Gold"
        cust1="Simple app development"
        cust2="Medium complexity app development"
        cust3="Complex app development "
        price1="$16k – $32k"
        price2=" $32k – $48k"
        price3="$72,000+"
        bl1="Up to 15 screens"
        bl2="Standard UI/UX design"
        bl3="Mobile responsiveness"
        bl4="Email and chat support during business hours"
        bl5="API integrations (limited)"
        bl6="Bug fixes with a 48-hour turnaround"
        bl7="Standard onboarding and training resources"
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
        pl1="Unlimited app screens"
        pl2="Custom UI/UX design with revisions"
        pl3="Mobile responsiveness"
        pl4="Premium support (24/7)"
        pl5="API integrations (up to 10)"
        pl6="Advanced analytics and reporting"
        pl7="Continuous security monitoring"
        pl8="Priority bug fixes"
        pl9="Dedicated account manager"
        pl10="Priority access to new features"
        pl11=""
      ></PricingCard>
    </>
  );
};

export default page;