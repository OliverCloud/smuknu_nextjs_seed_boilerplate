


import Image from 'next/image';
import styles from './Product.module.css';

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <p className={styles.title}>SKØNNE PRODUKTER</p>
              
              <div className={styles.text}>
                <p>Herunder finder du alle vores produkter</p>
              </div>

            </div>
            
        </div>
    )
}
export default Product;