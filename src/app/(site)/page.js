"use client"
import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import Products from '@/components/products/products'
import Reviews from '@/components/reviews/reviews'
import Footer from '@/components/footer/footer'
import Members from '@/components/members/members'
import Hero from '@/components/banners/hero/hero'

export default function Home() {
  return (
    <main className={styles.page} >
      <Hero 
        btn={true} 
        bgImg={'/headers/front.jpg'}
        title={'SKØNHED FOR ALLE'}
        subTitle={'Alt hvad du behøver...'}
        text={false}
        bgColorBox={'#f7f0f2'}
        colorTitle={'#000'}
        colorText={'#000'}

      />
      <Products dispalyLengh={'3'}/>
      <Reviews />
      <Members />
      <Footer />
    </main>
  )
}

