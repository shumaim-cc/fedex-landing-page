import React from 'react'
import { herosection, arrow } from '@/assets/images'
import Image from 'next/image'
import styles from './HeroSection.module.sass'

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
        <div className={styles.herosectionleft}>
            <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: 24 }}>Getting government docs doesn’t have to take forever</h1>
            <p style={{ fontSize: '20px', fontWeight: '400',marginBottom: 48 }}>Get any vital doc you need, checked, 
                 expedited <br /> and in your hands in as little as 1 week.</p>
                 <button className={styles.button}>
                <span className={styles.buttonText}>Start your application</span>
                <Image src={arrow} height={20} width={20} alt="arrow" />
                </button>
                <p style={{ fontSize: '14px'}}>Trusted by <span className={styles.orangeText} >100,000+
                </span> traveller’s every year.</p>
        </div> 
        <div className={styles.herosectionright}>
            <Image src={herosection} height={545} width={600} alt="herosection" />

        </div> 
    </div> 
     )
}

export default HeroSection