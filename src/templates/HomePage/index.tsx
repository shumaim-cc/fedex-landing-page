'use client'
import React, { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import ServicesCards from '@/components/ServicesCards'
import Details from '@/components/Details'
import Reviews from '@/components/Reviews'
import { ReviewCardData } from '@/utils'
import styles from './Home.module.sass'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ServicesCards />
      </div>
      <div>
        <Details />
      </div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heading}>
            Trusted by <span className={styles.orangeText}>100,000+</span>{' '}
            <br /> traveller’s every year
          </h1>
        </div>
        <div className={styles.wrapper}>
          {ReviewCardData.map((data, i) => (
            <Reviews key={i} {...data} />
          ))}
        </div>
        <div style={{ background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <p>title</p>
            <button onClick={() => setIsOpen(!isOpen)}>Open Box</button>
          </div>
          {isOpen && <p>description</p>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
