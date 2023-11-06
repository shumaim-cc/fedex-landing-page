import React from 'react'
import styles from './Details.module.sass'
import { s1, s2, s3 } from '@/assets/images'
import Image from 'next/image'
const Details = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        It’s <span className={styles.orangeText}>never been easier</span> to get{' '}
        <br /> government documents in a hurry
      </h1>
      <section className={styles.section}>
        
          <Image className={styles.sectionleft} src={s1} height={350} width={362} alt="passport application" />
        
        <div className={styles.sectionright}>
          <span>1</span>
          <h2 className={styles.sectionheading}>
            Choose which <br /> documents you need
          </h2>
          <p className={styles.sectiontext}>
            Whether you need a passport, new titles for your car or a <br />{' '}
            travel visa, you can get them all quickly through our <br />{' '}
            partnership with HelloGov.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section2left}>
          <span>2</span>
          <h2 className={styles.sectionheading}>
            Complete your <br /> application (it’s easy!)
          </h2>
          <p className={styles.sectiontext}>
            Thanks to smart AI and super-simple applications, it’s never <br />{' '}
            been easier to complete government forms and get them <br />{' '}
            approved first time. <br /> <br /> Got any questions? Just ask your
            personal application <br /> assistant!{' '}
          </p>
        </div>

          <Image className={styles.sectionleft} src={s2} alt="info" />
      
      </section>
      <section className={styles.section}>
        
          <Image className={styles.sectionleft} src={s3} height={304} width={410} alt="driver license" />
        
        <div className={styles.sectionright}>
          <span>3</span>
          <h2 className={styles.sectionheading}>
          Use our customer portal to <br/> keep track of everything.
          </h2>
          <p className={styles.sectiontext}>
            Whether you need a passport, new titles for your car or a <br />{' '}
            travel visa, you can get them all quickly through our <br />{' '}
            partnership with HelloGov.
          </p>
        </div>
        </section>
    </div>
  )
}

export default Details
