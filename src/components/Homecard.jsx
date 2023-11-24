"use client"
import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="/image2.webp"
              CardTitle="Quality"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Quality is at the core of our values. Our team of experts takes a detail-oriented approach to every project,ensuring that each solution we deliver is robust,and tailored to your specific needs."
              Button="View Details"
            />
            <SingleCard
              image="/image1.jpeg"
              CardTitle="Reliable"
              CardDescription="At Empire technology,we understand the importance of reliability in business relationships.That's why we prioritize timely communication,transparent project ,commitment to meeting."
              Button="View Details"
            />
            <SingleCard
              image="/image3.webp"
              CardTitle="Excellence"
              CardDescription="We strive for excellence in everything we do. From the quality of our code to the user experience of our solutions, we're constantly pushing ourselves to deliver the best possible results."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <Image src={image} width={1000} height={100} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color text-black">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-black font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
