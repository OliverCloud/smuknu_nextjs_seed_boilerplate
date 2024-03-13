"use client"
import Link from 'next/link';
import styles from './navigasion.module.css';
import Image from 'next/image';
import { FaBars, FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from 'react';
import BasketMenu from './basketMenu/basketMenu';
import { useBasket } from '@/context/basket';

const Navigasion = () => {

  const [barsMenu, setBarsMenu] = useState(false);
  const [basketMenu, setBasketMenu] = useState(false);
  const [basketIcon, setBasketIcon] = useState(false);

  const { basket } = useBasket();

  useEffect(() => {
    if(basket.length > 0) {
      setBasketIcon(true);
    } else {
      setBasketIcon(false);
    }
  }, [basket]); 

  const handleBarsMenu = () => {
    setBasketMenu(false);
    setBarsMenu(!barsMenu);
  }

  const handleBasketMenu = () => {
    setBarsMenu(false);
    setBasketMenu(!basketMenu);
  }
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
        <div className={styles.header}> 
          <Link className={styles.logo} href="/">
            <Image src="/logo/smuknu_logo.png" alt="smuknu logo" width={100} height={100} />
          </Link>
          <div className={styles.nav}>
          
              <div className={`${styles.basketBtn} ${basketIcon > 0 ? styles.active : ''}`} onClick={handleBasketMenu}>
                <FaShoppingBasket />
              </div>
    
              <div className={styles.barsBtn} onClick={handleBarsMenu}>
                <FaBars />
              </div>
          </div>
        </div>

        <div className={`${styles.barsMenu} ${ barsMenu ? styles.active : ''}`}>
          <Link href={'/'}>FORSIDEN</Link>
          <Link href={'/produkter'}>VORES PRODUKTER</Link>
          <Link href={'/sundhed'}>SPØRG OM SUNDHED</Link>
          <Link href={'/medlem'}>BLIV MEDLEM</Link>
        </div>

        <div className={`${styles.basketMenu} ${ basketMenu ? styles.active : ''}`}>
          <BasketMenu />
        </div>

       </div>
    </div>
  )
}
export default Navigasion;