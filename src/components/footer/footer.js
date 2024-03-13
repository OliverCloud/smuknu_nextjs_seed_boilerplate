
import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.shome}>
            <Link className={styles.icon} href={'https://www.facebook.com/'} target={'_blank'}>
              <FaFacebook />
            </Link>
            <Link className={styles.icon} href={'https://www.instagram.com/'} target={'_blank'}>
              <FaInstagram />
            </Link>
            <Link className={styles.icon} href={'https://www.pinterest.com/'} target={'_blank'}>
              <FaPinterest />
            </Link>
            <Link className={styles.icon} href={'https://twitter.com/'} target={'_blank'}>
              <FaTwitter />
            </Link>
            <Link className={styles.icon} href={'https://www.youtube.com/'} target={'_blank'}>
              <FaYoutube />
            </Link>
          </div>
          <div>
            <p className={styles.email}>mail@smuk.nu</p>
            <p className={styles.phone}>+45 123 345 33</p>
          </div>
        </div>
    )
}
export default Footer;