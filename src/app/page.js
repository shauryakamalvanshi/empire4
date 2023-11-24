import Hero from '@/components/Herosection'
import Wcu from "@/components/Wcu"
import About1 from "@/components/Wcu2"
import styles from "@/styles/home.module.css"
import Card from "@/components/Homecard"
import Feature from '@/components/feature'


export default function Home() {
  return (
    <>

      <Hero></Hero>
      <div className={styles.main}>

        <About1 head="Why Choose Us" head1="Make you happy by giving services." desc="Our highly skilled engineers possess excellent technical knowledge and vast experience in utilizing the latest software standards, tools, platforms, frameworks, and technologies to deliver tailored solutions that meet your unique needs. We strive to deliver unparalleled solutions that exceed your expectations." desc2="A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business."></About1>
        <Wcu></Wcu>
        <Feature></Feature>
        <Card></Card>

      </div>

    </>
  )
}
