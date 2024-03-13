
import Image from 'next/image';
import styles from './productCard.module.css';
import { useBasket } from '@/context/basket';

const ProductCard = ({ product }) => {

  const discount = product.discountInPercent > 0 ? styles.active : '';
  const {basket, addToBasket} = useBasket();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Image src={product.image} alt={product.title} width={100} height={100} />
          <div className={`${styles.discount} ${discount}`}>
            <p>Spar</p>
            <p>{product.discountInPercent}%</p>
          </div>
        </div>
      
        <div className={styles.text}>
          <p className={styles.title}>{product.title}</p>
          <div className={styles.box}>
              <p className={styles.price}>{product.price} kr.</p>
              <button className={styles.btn} onClick={() => addToBasket(product._id)}>Læg i kurv</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;