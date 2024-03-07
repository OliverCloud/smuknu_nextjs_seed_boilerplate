
import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.shome}>
            <Link className={styles.icon} href={'/'}>
              <FaFacebook />
            </Link>
            <Link className={styles.icon} href={'/'}>
              <FaInstagram />
            </Link>
            <Link className={styles.icon} href={'/'}>
              <FaPinterest />
            </Link>
            <Link className={styles.icon} href={'/'}>
              <FaTwitter />
            </Link>
            <Link className={styles.icon} href={'/'}>
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