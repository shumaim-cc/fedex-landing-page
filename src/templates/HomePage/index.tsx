import HeroSection from '@/components/HeroSection'
import ServicesCards from '@/components/ServicesCards'
import Details from '@/components/Details'
import Reviews from '@/components/Reviews'
import FAQs from '@/components/FAQs'
import { QUESTIONS, ReviewCardData } from '@/utils'
import styles from './Home.module.sass'

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ServicesCards />
      </div>
      <div>
        <Details />
      </div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heading}>
            Trusted by <span className={styles.orangeText}>100,000+</span>{' '}
            <br /> traveller’s every year
          </h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            {ReviewCardData.slice(0, 3).map((data, i) => (
              <Reviews key={i} {...data} />
            ))}
          </div>
          <div className={styles.row}>
            {ReviewCardData.slice(3, 7).map((data, i) => (
              <Reviews key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.faqcontainer}>
        <div>
          <h1 className={styles.heading}>
            Getting government documents <br /> doesn’t have to be confusing.
          </h1>
        </div>
        
        <div>
          {QUESTIONS.map((item, i) => {
            return (
              <div key={i}>
                <FAQs title={item.title} question={item.question || 'no ques' } paragraph={item.description} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage
