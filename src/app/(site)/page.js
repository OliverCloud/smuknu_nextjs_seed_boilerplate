"use client"
import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import Banner from '@/components/banner/banner'
import Products from '@/components/products/products'
import Reviews from '@/components/reviews/reviews'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <main className={styles.page} >
      <Banner />
      <Products />
      <Reviews />

      <Footer />
    </main>
  )
}

