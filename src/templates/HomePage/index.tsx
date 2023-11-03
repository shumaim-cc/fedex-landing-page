import React from 'react'
import HeroSection from '@/components/HeroSection'
import ServicesCards from '@/components/ServicesCards'
import Details from '@/components/Details'
//import styles from './Home.module.sass'

const HomePage = () => {
  return (
    <div>
      <div ><HeroSection /></div>
      <div ><ServicesCards /></div>
      <div ><Details/></div>
    </div>
  )
}

export default HomePage
