import { logo, contact } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.sass'
const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Image src={logo} height={39.204} width={140} alt="logo" />
      </div>
      
      <div className={styles.headerright}>
        <p style={{ fontSize: '16px', marginRight: '16px' }}> Need help? </p>
        <Image src={contact} height={32} width={32} alt="contact" />
      </div>
    </div>
  )
}

export default header
