"use client"
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './navigasion.module.css';
import Image from 'next/image';
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import BasketMenu from './basketMenu/basketMenu';
import { useBasket } from '@/context/basket';

const Navigasion = () => {
  const [barsMenu, setBarsMenu] = useState(false);
  const [basketMenu, setBasketMenu] = useState(false);
  const [basketIcon, setBasketIcon] = useState(false);

  const { basket } = useBasket();
  const headerRef = useRef(null);
  const barsMenuRef = useRef(null);
  const basketMenuRef = useRef(null);

  useEffect(() => {
    if(basket.length > 0) {
      setBasketIcon(true);
    } else {
      setBasketIcon(false);
    }
  }, [basket]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !headerRef.current.contains(event.target) &&
        !barsMenuRef.current.contains(event.target) &&
        !basketMenuRef.current.contains(event.target)
      ) {
        setBarsMenu(false);
        setBasketMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div ref={headerRef} className={styles.header}>
          <Link className={styles.logo} href="/">
            <Image src="/logo/smuknu_logo.png" alt="smuknu logo" width={100} height={100} />
          </Link>
          <div className={styles.nav}>
            <div className={`${styles.basketBtn} ${basketIcon > 0 ? styles.active : ''}`} onClick={handleBasketMenu}>
              <FaShoppingBasket />
              <p>{basket.length > 99 ? '99+' : basket.length}</p>
            </div>
            <div className={styles.barsBtn} onClick={handleBarsMenu}>
              <FaBars />
            </div>
          </div>
        </div>

        <div ref={barsMenuRef} className={`${styles.barsMenu} ${barsMenu ? styles.active : ''}`}>
          <Link href={'/'}>FORSIDEN</Link>
          <Link href={'/produkter'}>VORES PRODUKTER</Link>
          <Link href={'/sundhed'}>SPØRG OM SUNDHED</Link>
          <Link href={'/medlem'}>BLIV MEDLEM</Link>
        </div>

        <div className={`${styles.basketMenu} ${basketMenu ? styles.active : ''}`}>
          <BasketMenu close={basketMenuRef} />
        </div>
      </div>
    </div>
  )
}

export default Navigasion;