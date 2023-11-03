import React from 'react'
import styles from './ServiciesCards.module.sass'
import Image from 'next/image'
const ServicesCards = () => {
    const cards = [
                 { icon: '/assets/images/card1.png', heading: 'All passport types', 
                 text: 'Lorem ipsum dolor sit amet consectetur. Molestie cursus vehicula' },
                 { icon: '/assets/images/card2.png', heading: 'DMV documents', 
                 text: 'Lorem ipsum dolor sit amet consectetur. Molestie cursus vehicula' },
                 { icon: '/assets/images/card3.png', heading: 'Travel Visas', 
                 text: 'Lorem ipsum dolor sit amet consectetur. Molestie cursus vehicula' },
                 { icon: '/assets/images/card4.png', heading: 'Immigration applications', 
                 text: 'Lorem ipsum dolor sit amet consectetur. Molestie cursus vehicula' },
                ];

                return (
                             <div className={styles.container}>
                                 {cards.map((card, index) => (
                                     <div key={index} className={styles.card}>
                                         <Image src={card.icon} alt={`icon_${index + 1}`} width={56} height={56}/>
                                         <h2 className={styles.cardHeading}>{card.heading}</h2>
                                         <p className={styles.cardText}>{card.text}</p>
                                     </div>
                                 ))}
                             </div>
                );
}

export default ServicesCards




