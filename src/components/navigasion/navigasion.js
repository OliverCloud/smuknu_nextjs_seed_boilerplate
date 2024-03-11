"use client"
import Link from 'next/link';
import styles from './navigasion.module.css';
import Image from 'next/image';
/* import BarsMenu from './barsMenu/barsMenu';
import BasketMenu from './basketMenu/basketMenu'; */
import { FaBars, FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';
import { set } from 'mongoose';

const Navigasion = () => {

  const [barsMenu, setBarsMenu] = useState(false);
  const [basketMenu, setBasketMenu] = useState(false);

  const handleBarsMenu = () => {
    setBasketMenu(false);
    setBarsMenu(!barsMenu);
  }

  /* const handleBasketMenu = () => {
    setBarsMenu(false);
    setBasketMenu(!basketMenu);
  } */
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
        <Link className={styles.logo} href="/">
          <Image src="/logo/smuknu_logo.png" alt="smuknu logo" width={100} height={100} />
        </Link>
        <div className={styles.nav}> 

        
            {/* <div className={styles.basketBtn} onClick={handleBasketMenu}>
              <FaShoppingBasket />
            </div> */}
     
  
            <div className={styles.barsBtn} onClick={handleBarsMenu}>
              <FaBars />
            </div>
        

        </div>

        <div className={`${styles.barsMenu} ${ barsMenu ? styles.active : ''}`}>
          <Link href={'/'}>FORSIDEN</Link>
          <Link href={'/produkter'}>VORES PRODUKTER</Link>
          <Link href={'/sundhed'}>SPØRG OM SUNDHED</Link>
          <Link href={'/medlem'}>BLIV MEDLEM</Link>
        </div>
        {/* <div className={`${styles.basketMenu} ${ basketMenu ? styles.active : ''}`}>
          <Link href={'/'}>ho</Link>
          <Link href={'/'}>ho</Link>
        </div> */}

       </div>
    </div>
  )
}
export default Navigasion;