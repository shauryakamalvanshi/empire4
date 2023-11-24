import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Empire Tech',
  description: 'We Provide Digital services',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Link href={"https://www.skype.com/en/"} target="_blank">
      <Image 
          src={"/skype.png"}
          width={1000}
          height={90}
          alt='www'
          className="fixed bottom-10 right-14 text-blue-500 h-18 w-20 max-sm:w-11 "
          style={{ zIndex: 9999 }} 
        ></Image>
        </Link>
        <Footer></Footer>
        </body>
    </html>
  )
}
