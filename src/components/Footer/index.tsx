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
        <div>
          <Image src={f1} height={65} width={141} alt="powered by hellogov" />
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
        <Image src={f2} height={55} width={109} alt="powered by hellogov" />
        <Image src={f3} height={59} width={140} alt="powered by hellogov" />
      </div>
    </div>
  )
}

export default Footer
