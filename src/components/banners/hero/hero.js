"use client"
import Image from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Hero = ({btn, bgImg, title, subTitle, text, bgColorBox, colorTitle, colorText}) => {

  const [btns, setBtns] = useState(btn);
  const [textOn, setTextOn] = useState(text);
    return (
        <div className={styles.container}>
            <div className={styles.img}>
              <Image src={bgImg} alt="hero" width={100} height={100} />
            </div>
            <div className={styles.wrapper}>
            <div className={styles.box} style={{ backgroundColor: bgColorBox }}>

                <p className={styles.title} style={{ color: colorTitle }}>{title}</p>
                
                <div className={styles.text} style={{ color: colorText }}>
                  <p>{subTitle}</p>
                  {textOn ? <p>{text}</p> : ''}
                </div>

                {btns ? <Link className={styles.btn} href={'/produkter'}>Se udvalgte produkter</Link> : ''}
              

              </div>
            
            </div>
            
        </div>
    )
}
export default Hero;