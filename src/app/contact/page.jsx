import React from 'react'
import ContactForm from '@/components/Contactform'
import styles from "@/styles/contact.module.css"
import Image from 'next/image'

const page = () => {

  return (
    <div>
      <div className={styles.main}>
        <div className="map h-fit  ">
          <Image src="/Screenshot.png" width={2000} height={90} alt="map" className='rounded-lg' />
        </div>
      
        <div className={styles.low}>
          <div className="flex max-lg:flex-col ">
            <div className="ml-auto mr-auto mt-40 w-1/2 max-lg:flex max-lg:flex-col max-lg:items-center border-gray-200	">
              <h1 className='text-6xl  ml-10 mx  max-lg:text-4xl'>Get in touch</h1>


              <a className="mt-8 block  p-6 bg-white w-72 rounded-lg shadow hover:bg-gray-100 bg-white  ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-black">Address</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Your address...................</p>
              </a>

              <a className="mt-8 block  p-6 bg-white w-72  rounded-lg shadow hover:bg-gray-100 bg-white  ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-black">Phone</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">+1 3077763097</p>
              </a>


              <a  className=" mt-8 block w-72 p-6 bg-white  rounded-lg shadow hover:bg-gray-100 bg-white ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-black">Email</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">your email............................</p>
              </a>

            </div>
            <div className="for">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
