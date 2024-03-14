

import Image from 'next/image';
import styles from './basketItemCard.module.css'
import { useBasket } from '@/context/basket';

const BasketItemCard = ({product}) => {

  const { removeFromBasket, addToBasket } = useBasket();
  
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={product.image} alt={product.title} width={100} height={100} />
      </div>
      <div className={styles.text}>
        <p>{product.title}</p>

        <div className={styles.price}>
          <div className={styles.box}>
            <button className={styles.btn} onClick={() => removeFromBasket(product._id)}>-</button>
            <p>{product.amount}</p>
            <button className={styles.btn} onClick={() => addToBasket(product._id)}>+</button>
          </div>
          
          <p>{product.price * product.amount} kr.</p>
        </div>
      </div>
    </div>
  );
};
export default BasketItemCard;