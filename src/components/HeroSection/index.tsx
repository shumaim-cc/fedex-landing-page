import React from 'react'
import herosection from '/public/assets/images/herosection.png'
import arrow from '/public/assets/images/arrow.png'
import Image from 'next/image'
import styles from './HeroSection.module.sass'

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.herosectionleft}>
        <h1>
          Getting government docs doesn’t have to take forever
        </h1>
        <p className={styles.herosectionp}>
          Get any vital doc you need, checked, expedited <br /> and in your
          hands in as little as 1 week.
        </p>
        <div>
          <button className={styles.button}>
            Start your application
            <Image src={arrow} alt="arrow" />
          </button>
          <p className={styles.herosectiontext}>
            Trusted by <span className={styles.orangeText}>100,000+</span>{' '}
            traveller’s every year.
          </p>
        </div>
      </div>
      <div className={styles.herosectionright}>
        <Image src={herosection} alt="herosection" />
      </div>
    </div>
  )
}

export default HeroSection
