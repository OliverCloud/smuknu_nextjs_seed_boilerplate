
import Image from 'next/image';
import styles from './banner.module.css';

const Banner = (bg) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <p className={styles.title}>SKØNHED FOR ALLE</p>
              
              <div className={styles.text}>
                <p>Alt hvad du behøver...</p>
                <p>SMUK NU</p>
              </div>

              <div className={styles.btn}>Se udvalgte produkter</div>
            </div>
            
        </div>
    )
}
export default Banner;