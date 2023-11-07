import logo from '/public/assets/images/logo.png'
import contact from '/public/assets/images/contact.png'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.sass'
const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Image src={logo} alt="logo" />
      </div>
      
      <div className={styles.headerright}>
        <p style={{ marginRight: '16px' }}> Need help? </p>
        <Image src={contact} alt="contact" />
      </div>
    </div>
  )
}

export default header
