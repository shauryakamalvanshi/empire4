import React from "react";
import Phases from "@/components/Phases";
// import styles from "@/styles/web.module.css";
import PricingCard from "@/components/Pricecard";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Wordpress</h1>
      </div>
      <div className="flex mt-10 max-lg:flex-col max-lg:items-center ">
        <div className=" w-1/2 rounded-lg max-lg:w-11/12  ">
          {/* <img src="./word.png" alt="" className={styles.img} /> */}
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
        bl1="Up to 20 pages with a standard WordPress theme"
        bl2="Basic UI/UX design"
        bl3="Email support"
        bl4="Responsive design for mobile devices"
        bl5="Basic hosting plan"
        bl6="Domain registration (1 year)"
        bl7="Quarterly updates and maintenance"
        ml1="Up to 30 pages with an advanced WordPress theme"
        ml2="Responsive design for mobile devices"
        ml3="Advanced UI/UX design"
        ml4="Tailored CMS development"
        ml5="Premium hosting plan"
        ml6="Enhanced WordPress analytics with A/B testing capabilities"
        ml7="Dedicated account manager"
        ml8="API integrations (up to 5)"
        ml9="Bi-annual feature updates and industry trend reports for WordPress"
        ml10="Access to exclusive WordPress webinars and training sessions"
        ml11="WooCommerce integration for e-commerce functionalities"
        pl1="Unlimited pages and custom WordPress theme"
        pl2="Personalized UI/UX design with unlimited revisions"
        pl3="Mobile responsiveness"
        pl4="Premium support (24/7)"
        pl5="Advanced analytics integration with Google Analytics"
        pl6="Continuous security monitoring and malware removal"
        pl7="API integrations (up to 15) for seamless plugin connections"
        pl8="Dedicated account manager and strategic consultation"
        pl9="Priority access to beta WordPress features and updates"
        pl10="Monthly performance reviews and optimization suggestions"
        pl11="SEO optimization and Yoast integration"
      ></PricingCard>
    </>
  );
};

export default page;