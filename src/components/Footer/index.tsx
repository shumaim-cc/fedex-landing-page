import React from 'react'
import f1 from '/public/assets/images/f1.png'
import f2 from '/public/assets/images/f2.png'
import f3 from '/public/assets/images/f3.png'
import Image from 'next/image'
import styles from './Footer.module.sass'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerleft}>
        <div className={styles.footerimage1}>
          <Image src={f1} alt="powered by hellogov" />
        </div>
        <div className={styles.footertext}>
          <div className={styles.footertext1}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.footertext2}>
            Copyright © 2023 HelloGov AI, LLC. All Rights Reserved.
          </div>
        </div>
      </div>

      <div className={styles.footerright}>
        <div className={styles.footerimage2}>
          <Image src={f2} alt="powered by verisign" />
        </div>
        <div className={styles.footerimage3}>
          <Image src={f3} alt="trusted site" />
        </div>
      </div>
    </div>
  )
}

export default Footer
