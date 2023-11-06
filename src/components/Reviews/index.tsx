import React from 'react'
import styles from './Reviews.module.sass'
import Image, { StaticImageData } from 'next/image'
import { Star } from '../Icons'

interface ReviewsProps {
  title: string
  rating: number
  text: string
  image: string | StaticImageData
}

const Reviews = ({ rating, text, title, image }: ReviewsProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
          <div className={styles.image}>
            <Image src={image} alt={title} width={48} height={48} />
          </div>
          <div className={styles.reviewbox}>
              <h2>{title}</h2>
              <div>
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} fillColor={i === 4 ? '#C4C4C4' : '#FF6200'} />
                ))}
              </div>
          </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Reviews
