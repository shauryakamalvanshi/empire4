import React from 'react'
import styles from "@/styles/about.module.css"
import About1 from '@/components/Wcu2'
import TeamSection from '@/components/Team'
import Aboutimg from '@/components/Aboutimg'

const page = () => {
  return (
    <div className={styles.main}>
    <div className={styles.main2}>
     <About1 head="About us" head1="WHO WE ARE" desc="Empire technology Web Services is a company committed to providing world services that accelerate the growth and success of their clients. Here at Empires tech we are committed to providing effective solutions with our diverse range of services including Software Development, Payment Gateway Solutions, Web Design And Development, Digital Marketing, Search Engine Optimization, and Android Apps." desc2="The company creates an environment for its employees, a team of experts across various fields who utilize their expertise and vast domain knowledge to accelerate the growth and success of their clients, and who have enough space to work independently."></About1>
     <Aboutimg></Aboutimg>
     <TeamSection></TeamSection>
     </div>

    </div>
  )
}

export default page
