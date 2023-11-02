import { logo, msgicon } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.sass'
const header = () => {
  return (
    <div>
      <div className={styles.headerleft}>
        <Image src={logo} height={39.204} width={140} alt="logo" />
      </div>
      <div className={styles.headerright}>
        <p>Need help?</p>
        <Image src={msgicon} height={16} width={16} alt="msgicon" />
      </div>
    </div>
  )
}

export default header
