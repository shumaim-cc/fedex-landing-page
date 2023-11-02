'use client'

import React, { useState } from 'react'
import styles from './Button.module.sass'

const Button = () => {
  const [first, setfirst] = useState('second')
  return (
    <div className={styles.btn} onClick={() => setfirst('TEWWW')}>
      {first}
    </div>
  )
}

export default Button
